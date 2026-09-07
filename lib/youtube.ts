export interface LatestVideo {
  id: string
  title: string
  description: string
  url: string
  thumbnail: string
  publishedAt: string
}

const CHANNEL_HANDLE = 'V4IIYA'
const FALLBACK_PLAYLIST_ID = 'PLfyh-i5mDff8-xjhihGcmoWhaKgaNAZt6'

const REVALIDATE_SECONDS = 3600 // an hour — this is a "latest upload" teaser, not live data

/**
 * YouTube's public per-channel/per-playlist Atom feeds
 * (youtube.com/feeds/videos.xml) need no API key, but a *channel* feed
 * needs the numeric channel ID (UCxxxx), not the @handle we actually
 * have. Resolve that once by scraping the channel page's canonical link.
 */
async function resolveChannelId(handle: string): Promise<string | null> {
  try {
    const res = await fetch(`https://www.youtube.com/@${handle}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; VAIIYA-Site/1.0)' },
      next: { revalidate: REVALIDATE_SECONDS },
    })
    if (!res.ok) return null
    const html = await res.text()
    const match =
      html.match(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[\w-]{22})"/) ||
      html.match(/"channelId":"(UC[\w-]{22})"/)
    return match ? match[1] : null
  } catch {
    return null
  }
}

function parseFirstAtomEntry(xml: string): LatestVideo | null {
  const entryMatch = xml.match(/<entry>([\s\S]*?)<\/entry>/)
  if (!entryMatch) return null
  const entry = entryMatch[1]

  const videoId = (entry.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/) || [])[1]
  const title = (entry.match(/<title>([\s\S]*?)<\/title>/) || [])[1]
  const published = (entry.match(/<published>([\s\S]*?)<\/published>/) || [])[1]
  const thumbnail = (entry.match(/<media:thumbnail url="([\s\S]*?)"/) || [])[1]
  const description = (entry.match(/<media:description>([\s\S]*?)<\/media:description>/) || [])[1]

  if (!videoId || !title) return null

  return {
    id: videoId,
    title: decodeXmlEntities(title),
    description: description ? decodeXmlEntities(description).slice(0, 240) : '',
    url: `https://www.youtube.com/watch?v=${videoId}`,
    thumbnail: thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    publishedAt: published || '',
  }
}

async function fetchFeed(url: string): Promise<LatestVideo | null> {
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
    if (!res.ok) return null
    const xml = await res.text()
    return parseFirstAtomEntry(xml)
  } catch {
    return null
  }
}

function decodeXmlEntities(str: string): string {
  return str
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
}

/**
 * Latest upload from the channel; falls back to the most recent video in
 * a curated playlist if the channel feed can't be resolved or is empty
 * (e.g. the channel has no public uploads yet).
 */
export async function getLatestYoutubeVideo(): Promise<LatestVideo | null> {
  const channelId = await resolveChannelId(CHANNEL_HANDLE)
  if (channelId) {
    const fromChannel = await fetchFeed(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`)
    if (fromChannel) return fromChannel
  }

  return fetchFeed(`https://www.youtube.com/feeds/videos.xml?playlist_id=${FALLBACK_PLAYLIST_ID}`)
}
