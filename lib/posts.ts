import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/news')
const postsDirectoryEn = path.join(process.cwd(), 'content/news-en')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage?: string
  youtubeId?: string
  tags?: string[]
  sourceName?: string
  sourceUrl?: string
}

export interface Post extends PostMeta {
  contentHtml: string
}

function getMarkdownFilenames(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md') && file !== 'README.md')
}

export function getAllPosts(): PostMeta[] {
  const filenames = getMarkdownFilenames()

  const posts = filenames.flatMap((filename): PostMeta[] => {
    const slug = filename.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // A single post with unparsable frontmatter (e.g. a malformed bot
    // write) must never take down the whole news list — or worse, the
    // entire production build, which is what happened once when this
    // wasn't guarded: `next build` prerenders every post, so one bad file
    // failed every page behind it. Skip it and keep going.
    let data: Record<string, unknown>
    try {
      data = matter(fileContents).data
    } catch (err) {
      console.error(`[posts] skipping ${filename} — invalid frontmatter:`, (err as Error).message)
      return []
    }

    return [
      {
        slug,
        title: (data.title as string) || slug,
        date: (data.date as string) || '',
        excerpt: (data.excerpt as string) || '',
        coverImage: data.coverImage as string | undefined,
        youtubeId: data.youtubeId as string | undefined,
        tags: (data.tags as string[]) || [],
        sourceName: data.sourceName as string | undefined,
        sourceUrl: data.sourceUrl as string | undefined,
      },
    ]
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllSlugs(): string[] {
  return getMarkdownFilenames().map((filename) => filename.replace(/\.md$/, ''))
}

/**
 * English translations live in a parallel content/news-en/<slug>.md file
 * with the same slug — written automatically by the news-digest workflow
 * for new articles. Most of the historical Dutch archive has no English
 * sibling yet, so every caller needs to handle a miss gracefully.
 */
function getEnMarkdownFilenames(): string[] {
  if (!fs.existsSync(postsDirectoryEn)) return []
  return fs.readdirSync(postsDirectoryEn).filter((file) => file.endsWith('.md') && file !== 'README.md')
}

export function getAllSlugsEn(): string[] {
  return getEnMarkdownFilenames().map((filename) => filename.replace(/\.md$/, ''))
}

export function hasEnglishTranslation(slug: string): boolean {
  return fs.existsSync(path.join(postsDirectoryEn, `${slug}.md`))
}

function getEnPostMeta(slug: string): PostMeta | null {
  const fullPath = path.join(postsDirectoryEn, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  let data: Record<string, unknown>
  try {
    data = matter(fileContents).data
  } catch (err) {
    console.error(`[posts] news-en/${slug}.md has invalid frontmatter:`, (err as Error).message)
    return null
  }

  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || '',
    excerpt: (data.excerpt as string) || '',
    coverImage: data.coverImage as string | undefined,
    youtubeId: data.youtubeId as string | undefined,
    tags: (data.tags as string[]) || [],
    sourceName: data.sourceName as string | undefined,
    sourceUrl: data.sourceUrl as string | undefined,
  }
}

export interface PostMetaEn extends PostMeta {
  /** False when this falls back to the untranslated Dutch original because
   *  no content/news-en/<slug>.md exists yet — callers should link to the
   *  Dutch article in that case, not /en/news/<slug>. */
  translated: boolean
}

/**
 * Same list/order/dates as getAllPosts(), but with English title/excerpt/
 * tags substituted in wherever a translation exists. Falls back to the
 * Dutch metadata (translated: false) for the (shrinking) set of older
 * articles that predate the English pipeline.
 */
export function getAllPostsEn(): PostMetaEn[] {
  return getAllPosts().map((post) => {
    const en = getEnPostMeta(post.slug)
    return en ? { ...en, translated: true } : { ...post, translated: false }
  })
}

export function getPostBySlugEn(slug: string): Post | null {
  const fullPath = path.join(postsDirectoryEn, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  let data: Record<string, unknown>, content: string
  try {
    ;({ data, content } = matter(fileContents))
  } catch (err) {
    console.error(`[posts] news-en/${slug}.md has invalid frontmatter:`, (err as Error).message)
    return null
  }
  const contentHtml = marked.parse(content, { async: false }) as string

  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || '',
    excerpt: (data.excerpt as string) || '',
    coverImage: data.coverImage as string | undefined,
    youtubeId: data.youtubeId as string | undefined,
    tags: (data.tags as string[]) || [],
    sourceName: data.sourceName as string | undefined,
    sourceUrl: data.sourceUrl as string | undefined,
    contentHtml,
  }
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  let data: Record<string, unknown>, content: string
  try {
    ;({ data, content } = matter(fileContents))
  } catch (err) {
    console.error(`[posts] ${slug}.md has invalid frontmatter:`, (err as Error).message)
    return null
  }
  const contentHtml = marked.parse(content, { async: false }) as string

  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || '',
    excerpt: (data.excerpt as string) || '',
    coverImage: data.coverImage as string | undefined,
    youtubeId: data.youtubeId as string | undefined,
    tags: (data.tags as string[]) || [],
    sourceName: data.sourceName as string | undefined,
    sourceUrl: data.sourceUrl as string | undefined,
    contentHtml,
  }
}

const COVER_PALETTE = [
  { bg: '#E25A3C', fg: '#FFF7ED' }, // orange
  { bg: '#2563EB', fg: '#EFF6FF' }, // blue
  { bg: '#7C3AED', fg: '#F5F3FF' }, // violet
  { bg: '#059669', fg: '#ECFDF5' }, // emerald
]

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function escapeXml(str: string): string {
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case "'": return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}

/**
 * Branded gradient placeholder for posts without a coverImage (most of the
 * automated imports don't have one). Deterministic per slug so the same
 * post always gets the same color, and label falls back through the post's
 * first tag to the site name.
 */
function buildPlaceholderCover(post: PostMeta): string {
  const palette = COVER_PALETTE[hashString(post.slug) % COVER_PALETTE.length]
  const label = escapeXml((post.tags?.[0] || 'VAIIYA').toUpperCase())

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <rect width="800" height="450" fill="${palette.bg}"/>
    <circle cx="700" cy="70" r="150" fill="${palette.fg}" opacity="0.08"/>
    <circle cx="60" cy="410" r="190" fill="${palette.fg}" opacity="0.06"/>
    <text x="64" y="235" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="700" fill="${palette.fg}">VAIIYA</text>
    <text x="64" y="278" font-family="'Courier New', monospace" font-size="20" letter-spacing="2" fill="${palette.fg}" opacity="0.85">${label}</text>
  </svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

/** The post's own coverImage, or a deterministic branded placeholder if it has none. */
export function getCoverImage(post: PostMeta): string {
  return post.coverImage || buildPlaceholderCover(post)
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export interface TagSummary {
  tag: string
  slug: string
  count: number
}

/** All distinct tags across posts, with their display name (first-seen casing) and post count. */
export function getAllTags(): TagSummary[] {
  const posts = getAllPosts()
  const bySlug = new Map<string, TagSummary>()

  for (const post of posts) {
    for (const tag of post.tags || []) {
      const slug = slugifyTag(tag)
      if (!slug) continue
      const existing = bySlug.get(slug)
      if (existing) {
        existing.count += 1
      } else {
        bySlug.set(slug, { tag, slug, count: 1 })
      }
    }
  }

  return Array.from(bySlug.values()).sort((a, b) => b.count - a.count)
}

/** Posts tagged with the given tag slug (case/accent-insensitive match). */
export function getPostsByTagSlug(tagSlug: string): PostMeta[] {
  return getAllPosts().filter((post) => (post.tags || []).some((tag) => slugifyTag(tag) === tagSlug))
}

/** URLs already covered by an existing post, for de-duping automated imports (e.g. the Reuters daily job). */
export function getAllSourceUrls(): Set<string> {
  const filenames = getMarkdownFilenames()
  const urls = new Set<string>()

  for (const filename of filenames) {
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    try {
      const { data } = matter(fileContents)
      if (data.sourceUrl) urls.add(data.sourceUrl)
    } catch {
      // Skip — same malformed-frontmatter guard as elsewhere in this file.
    }
  }

  return urls
}
