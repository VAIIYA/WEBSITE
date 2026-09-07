#!/usr/bin/env node
/**
 * Fixed-logic news digest: fetches Google News topic feeds (AI, Robotics, Gaming),
 * dedupes against existing content/news/*.md, and asks the Gemini API to rewrite
 * each new article in Dutch. No shell/agent access — this script can only do what
 * is coded below: fetch -> dedupe -> rewrite via API -> write a markdown file.
 */
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

/**
 * Gemini's markdown fence occasionally survives with every line indented
 * (e.g. wrapped as a nested list item in its response) — the fence-strip
 * regex below only strips the ```markdown wrapper itself, not per-line
 * indentation, so a file can still look plausible (starts with "---")
 * while its YAML frontmatter is actually unparsable. That exact failure
 * mode broke the entire production build for six days once (one bad
 * frontmatter block fails `next build` at prerender time, which fails
 * *every* deployment behind it, not just that one page) — so every write
 * below is validated with the same YAML parser the site uses
 * (gray-matter) before it's allowed to land in the repo.
 */
function isValidPost(markdown) {
  try {
    const { data } = matter(markdown)
    return typeof data.title === 'string' && data.title.length > 0
  } catch {
    return false
  }
}

const NEWS_DIR = path.join(process.cwd(), 'content', 'news')
const NEWS_EN_DIR = path.join(process.cwd(), 'content', 'news-en')
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

// Google periodically deprecates/renames models (this has already broken
// this script once before — see git history). Try each in order and stick
// with whichever first responds successfully, instead of hardcoding one
// name and going dark for a full day the next time Google changes it.
const GEMINI_MODEL_CANDIDATES = ['gemini-3.6-flash', 'gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash']
let workingModel = null

if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is not set — aborting.')
  process.exit(1)
}

const TOPICS = [
  { name: 'AI', url: 'https://news.google.com/rss/topics/CAAqIAgKIhpDQkFTRFFvSEwyMHZNRzFyZWhJQ1pXNG9BQVAB?hl=en-US&gl=US&ceid=US:en' },
  { name: 'Robotics', url: 'https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvS0wyMHZNREp3TUhRMVpoSUNaVzRvQUFQAQ?hl=en-US&gl=US&ceid=US:en' },
  { name: 'Gaming', url: 'https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0ZHpFU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US:en' },
]

const MAX_ARTICLES_PER_RUN = 5 // hard safety cap across all topics combined

function parseRssItems(xml) {
  const items = []
  const itemBlocks = xml.split('<item>').slice(1)
  for (const block of itemBlocks) {
    const title = (block.match(/<title>([\s\S]*?)<\/title>/) || [])[1]
    const link = (block.match(/<link>([\s\S]*?)<\/link>/) || [])[1]
    const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1]
    const source = (block.match(/<source[^>]*>([\s\S]*?)<\/source>/) || [])[1]
    if (title && link) {
      items.push({
        title: decodeEntities(title.replace('<![CDATA[', '').replace(']]>', '')),
        link: link.trim(),
        pubDate: pubDate ? pubDate.trim() : '',
        source: source ? decodeEntities(source.replace('<![CDATA[', '').replace(']]>', '')) : '',
      })
    }
  }
  return items
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim()
}

function getExistingSourceUrlsAndTitles() {
  const urls = new Set()
  const titles = new Set()
  if (!fs.existsSync(NEWS_DIR)) return { urls, titles }
  for (const file of fs.readdirSync(NEWS_DIR)) {
    if (!file.endsWith('.md') || file === 'README.md') continue
    const content = fs.readFileSync(path.join(NEWS_DIR, file), 'utf8')
    const urlMatch = content.match(/^sourceUrl:\s*"([^"]+)"/m)
    const titleMatch = content.match(/^title:\s*"([^"]+)"/m)
    if (urlMatch) urls.add(urlMatch[1])
    if (titleMatch) titles.add(titleMatch[1].toLowerCase())
  }
  return { urls, titles }
}

const BROWSER_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

/**
 * Google News RSS links are opaque redirect pages, not real HTTP redirects.
 * The actual publisher URL has to be resolved via Google's internal
 * batchexecute endpoint, using a signature/timestamp embedded in the
 * interstitial page's markup. See: https://news.google.com/rss/articles/<id>
 */
async function resolveRedirect(googleNewsUrl) {
  try {
    const pageRes = await fetch(googleNewsUrl, { headers: { 'User-Agent': BROWSER_UA } })
    const html = await pageRes.text()

    const idMatch = html.match(/data-n-a-id="([^"]+)"/)
    const tsMatch = html.match(/data-n-a-ts="([^"]+)"/)
    const sgMatch = html.match(/data-n-a-sg="([^"]+)"/)
    if (!idMatch || !tsMatch || !sgMatch) return googleNewsUrl

    const innerReq = JSON.stringify([
      'garturlreq',
      [['X', 'X', ['X', 'X'], null, null, 1, 1, 'US:en', null, 1, null, null, null, null, null, 0, 1], 'X', 'X', 1, [1, 1, 1], 1, 1, null, 0, 0, null, 0],
      idMatch[1], tsMatch[1], sgMatch[1],
    ])
    const fReq = JSON.stringify([[['Fbv4je', innerReq, null, 'generic']]])

    const res = await fetch('https://news.google.com/_/DotsSplashUi/data/batchexecute?rpcids=Fbv4je', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'User-Agent': BROWSER_UA,
      },
      body: 'f.req=' + encodeURIComponent(fReq),
    })
    const text = await res.text()
    const urlMatch = text.match(/garturlres\\",\\"(https?:\/\/[^\\]+)\\"/)
    if (urlMatch) return urlMatch[1].replace(/\\u0026/g, '&').replace(/\\\//g, '/')
    return googleNewsUrl
  } catch {
    return googleNewsUrl
  }
}

async function fetchArticleText(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': BROWSER_UA },
      redirect: 'follow',
    })
    if (!res.ok) return null
    const html = await res.text()
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    if (text.length < 400) return null // likely a paywall/consent wall, not real content
    return text.slice(0, 15000)
  } catch {
    return null
  }
}

async function callGeminiWithModel(model, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.4, maxOutputTokens: 4096 },
    }),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Gemini API error ${res.status} (model ${model}): ${errText.slice(0, 500)}`)
  }
  const data = await res.json()
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) throw new Error(`Gemini API returned no text (model ${model})`)
  return text
}

async function callGemini(prompt) {
  // Already found a working model this run — just use it.
  if (workingModel) return callGeminiWithModel(workingModel, prompt)

  let lastErr
  for (const model of GEMINI_MODEL_CANDIDATES) {
    try {
      const text = await callGeminiWithModel(model, prompt)
      workingModel = model
      return text
    } catch (err) {
      lastErr = err
      console.error(`  Model ${model} failed, trying next candidate:`, err.message)
    }
  }
  throw lastErr
}

function slugify(title) {
  return title
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

async function rewriteArticleInDutch({ title, sourceName, sourceUrl, articleText }) {
  const prompt = `Je bent een Nederlandse tech-journalist voor VAIIYA, een digitale studio. Herschrijf onderstaand Engelstalig artikel volledig in het Nederlands — geen vertaling, een eigen, transformatieve herschrijving in je eigen woorden, neutrale journalistieke toon, correcte feiten, korte alinea's. Behoud bedrijfs-/product-/persoonsnamen in hun originele vorm.

Geef ALLEEN geldige YAML frontmatter gevolgd door de markdown body, in exact dit formaat, niets ervoor of erna:

---
title: "Nederlandse titel, pakkend en feitelijk"
date: "${new Date().toISOString().slice(0, 10)}"
excerpt: "Eén tot twee zinnen samenvatting in het Nederlands"
tags: ["Tag1", "Tag2", "Tag3"]
sourceName: "${sourceName}"
sourceUrl: "${sourceUrl}"
---

(Nederlandse markdown body hier, 300-600 woorden, met af en toe ## subkopjes bij langere stukken)

Origineel artikel (titel: "${title}"):
${articleText}`

  return callGemini(prompt)
}

async function rewriteArticleInEnglish({ title, sourceName, sourceUrl, articleText }) {
  const prompt = `You are an English tech journalist for VAIIYA, a digital studio. Rewrite the article below entirely in English — not a literal translation, your own transformative rewrite in your own words, neutral journalistic tone, accurate facts, short paragraphs. Keep company/product/person names in their original form.

Output ONLY valid YAML frontmatter followed by the markdown body, in exactly this format, nothing before or after:

---
title: "English title, punchy and factual"
date: "${new Date().toISOString().slice(0, 10)}"
excerpt: "One to two sentence summary in English"
tags: ["Tag1", "Tag2", "Tag3"]
sourceName: "${sourceName}"
sourceUrl: "${sourceUrl}"
---

(English markdown body here, 300-600 words, with occasional ## subheadings for longer pieces)

Original article (title: "${title}"):
${articleText}`

  return callGemini(prompt)
}

async function main() {
  const { urls: existingUrls, titles: existingTitles } = getExistingSourceUrlsAndTitles()
  const written = []
  let geminiFailures = 0

  for (const topic of TOPICS) {
    if (written.length >= MAX_ARTICLES_PER_RUN) break
    console.log(`Fetching topic: ${topic.name}`)
    let items = []
    try {
      const res = await fetch(topic.url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
      const xml = await res.text()
      items = parseRssItems(xml)
    } catch (err) {
      console.error(`Failed to fetch ${topic.name} feed:`, err.message)
      continue
    }
    console.log(`  ${items.length} items in feed`)

    for (const item of items) {
      if (written.length >= MAX_ARTICLES_PER_RUN) break
      if (existingTitles.has(item.title.toLowerCase())) continue

      const resolvedUrl = await resolveRedirect(item.link)
      if (existingUrls.has(resolvedUrl)) continue

      const articleText = await fetchArticleText(resolvedUrl)
      if (!articleText) {
        console.log(`  Skipping (no fetchable content): ${item.title}`)
        continue
      }

      let rewritten
      try {
        rewritten = await rewriteArticleInDutch({
          title: item.title,
          sourceName: item.source || new URL(resolvedUrl).hostname.replace('www.', ''),
          sourceUrl: resolvedUrl,
          articleText,
        })
      } catch (err) {
        console.error(`  Gemini rewrite failed for "${item.title}":`, err.message)
        geminiFailures++
        continue
      }

      const cleaned = rewritten.trim().replace(/^```(?:markdown|yaml)?\n?/, '').replace(/```$/, '').trim()
      if (!isValidPost(cleaned)) {
        console.error(`  Skipping "${item.title}" — Gemini output isn't valid frontmatter+markdown.`)
        continue
      }

      const slug = slugify(item.title)
      const filePath = path.join(NEWS_DIR, `${slug}.md`)
      if (fs.existsSync(filePath)) continue

      fs.writeFileSync(filePath, cleaned + '\n', 'utf8')
      console.log(`  Wrote: ${slug}.md`)
      written.push(slug)
      existingUrls.add(resolvedUrl)

      // Best-effort English sibling article — never blocks the Dutch
      // article from being written if this fails.
      try {
        const rewrittenEn = await rewriteArticleInEnglish({
          title: item.title,
          sourceName: item.source || new URL(resolvedUrl).hostname.replace('www.', ''),
          sourceUrl: resolvedUrl,
          articleText,
        })
        const cleanedEn = rewrittenEn.trim().replace(/^```(?:markdown|yaml)?\n?/, '').replace(/```$/, '').trim()
        if (isValidPost(cleanedEn)) {
          if (!fs.existsSync(NEWS_EN_DIR)) fs.mkdirSync(NEWS_EN_DIR, { recursive: true })
          fs.writeFileSync(path.join(NEWS_EN_DIR, `${slug}.md`), cleanedEn + '\n', 'utf8')
          console.log(`  Wrote: news-en/${slug}.md`)
        } else {
          console.error(`  Skipping EN version of "${item.title}" — Gemini output isn't valid frontmatter+markdown.`)
        }
      } catch (err) {
        console.error(`  Gemini EN rewrite failed for "${item.title}":`, err.message)
      }
      existingTitles.add(item.title.toLowerCase())
    }
  }

  console.log(`\nDone. ${written.length} new article(s) written.`)
  // Emit for the workflow to pick up via GITHUB_OUTPUT
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `count=${written.length}\n`)
  }

  // Wrote nothing AND every candidate article errored out on Gemini
  // (as opposed to legitimately finding no new items this run) — fail
  // the workflow loudly instead of quietly succeeding with 0 articles,
  // so a future model deprecation shows up as a red run in Actions
  // instead of silently going dark for a day+ like this one did.
  if (written.length === 0 && geminiFailures > 0) {
    console.error(`\nAll ${geminiFailures} attempted rewrite(s) failed — treating this run as a failure.`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
