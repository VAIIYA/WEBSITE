const FEED_URL = 'https://media.rss.com/vaiiya/feed.xml'

/** YouTube "podcast" playlist — used for the video player on the homepage and /podcast. */
export const YOUTUBE_PLAYLIST_ID = 'PLTw6lIvMKLpQ'
export const YOUTUBE_PLAYLIST_URL = `https://www.youtube.com/playlist?list=${YOUTUBE_PLAYLIST_ID}`
export const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_PLAYLIST_ID}`

export interface PodcastShow {
  title: string
  description: string
  image: string
  link: string
}

export interface PodcastEpisode {
  guid: string
  title: string
  /** Plain-text summary, HTML stripped. */
  description: string
  link: string
  audioUrl: string
  durationSeconds: number
  pubDate: string
}

export interface PodcastData {
  show: PodcastShow
  episodes: PodcastEpisode[]
}

/** Every place the show is published, for the "listen anywhere" grid. */
export const PODCAST_LINKS: { name: string; url: string; icon: string }[] = [
  { name: 'YouTube', url: YOUTUBE_PLAYLIST_URL, icon: '▶️' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/4ktYxE8kvOeFwTEnbEaHtB', icon: '🟢' },
  { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/vaiiya/id6805651651', icon: '' },
  { name: 'Amazon Music', url: 'https://music.amazon.com/podcasts/329448a7-5c90-4352-adbc-d41ced63dba8/vaiiya', icon: '🅰️' },
  { name: 'RSS.com', url: 'https://rss.com/podcasts/vaiiya/', icon: '📡' },
  { name: 'Pocket Casts', url: 'https://pocketcasts.com/podcast/vaiiya/fd48c510-8907-013f-17c3-0affc24a29f5', icon: '🔴' },
  { name: 'Overcast / Castro', url: 'https://castro.fm/itunes/6805651651', icon: '🎧' },
  { name: 'Castbox', url: 'https://castbox.fm/channel/id7391279?country=us', icon: '📦' },
  { name: 'Podcast Addict', url: 'https://podcastaddict.com/podcast/vaiiya/7240042', icon: '➕' },
  { name: 'Podverse', url: 'https://podverse.fm/podcast/BlJFx5nFYs', icon: '🟣' },
  { name: 'Podcast Index', url: 'https://podcastindex.org/podcast/8007044', icon: '🗂️' },
  { name: 'CurioCaster', url: 'https://curiocaster.com/podcast/pi8007044', icon: '🐘' },
  { name: 'Castamatic', url: 'https://castamatic.com/itunes/6805651651', icon: '⚙️' },
  { name: 'RSS feed', url: FEED_URL, icon: '📰' },
]

function firstMatch(xml: string, re: RegExp): string {
  const m = xml.match(re)
  return m ? (m[1] ?? '').trim() : ''
}

function stripCdata(s: string): string {
  return s.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim()
}

function stripHtml(s: string): string {
  return stripCdata(s)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8216;|&lsquo;/g, '‘')
    .replace(/&#8220;|&ldquo;/g, '“')
    .replace(/&#8221;|&rdquo;/g, '”')
    .replace(/&mdash;/g, '—')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

let cache: { at: number; data: PodcastData | null } | null = null

/**
 * Fetch + parse the RSS.com feed. Returns null (rather than throwing) if the
 * feed is unreachable so a build / render never fails because RSS.com is down.
 * Result is memoised for an hour within a running process.
 */
export async function getPodcast(): Promise<PodcastData | null> {
  if (cache && Date.now() - cache.at < 60 * 60 * 1000) return cache.data

  let xml: string
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error(`feed responded ${res.status}`)
    xml = await res.text()
  } catch (err) {
    console.error('[podcast] could not load feed:', (err as Error).message)
    cache = { at: Date.now(), data: null }
    return null
  }

  const channel = xml.slice(0, xml.indexOf('<item>') === -1 ? undefined : xml.indexOf('<item>'))

  const show: PodcastShow = {
    title: stripCdata(firstMatch(channel, /<title>([\s\S]*?)<\/title>/)) || 'VAIIYA',
    description: stripHtml(firstMatch(channel, /<description>([\s\S]*?)<\/description>/)),
    image:
      firstMatch(channel, /<itunes:image[^>]*href="([^"]+)"/) ||
      firstMatch(channel, /<image>[\s\S]*?<url>([\s\S]*?)<\/url>/),
    link: firstMatch(channel, /<link>([\s\S]*?)<\/link>/) || 'https://rss.com/podcasts/vaiiya/',
  }

  const episodes: PodcastEpisode[] = []
  const itemRe = /<item>([\s\S]*?)<\/item>/g
  let m: RegExpExecArray | null
  while ((m = itemRe.exec(xml)) !== null) {
    const item = m[1]
    const audioUrl = firstMatch(item, /<enclosure[^>]*url="([^"]+)"/)
    if (!audioUrl) continue
    episodes.push({
      guid: firstMatch(item, /<guid[^>]*>([\s\S]*?)<\/guid>/) || audioUrl,
      title: stripCdata(firstMatch(item, /<title>([\s\S]*?)<\/title>/)),
      description: stripHtml(firstMatch(item, /<description>([\s\S]*?)<\/description>/)),
      link: firstMatch(item, /<link>([\s\S]*?)<\/link>/),
      audioUrl,
      durationSeconds: Number(firstMatch(item, /<itunes:duration>([\s\S]*?)<\/itunes:duration>/)) || 0,
      pubDate: firstMatch(item, /<pubDate>([\s\S]*?)<\/pubDate>/),
    })
  }

  const data: PodcastData = { show, episodes }
  cache = { at: Date.now(), data }
  return data
}

export function formatDuration(seconds: number): string {
  if (!seconds) return ''
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return h > 0 ? `${h} hr ${m} min` : `${m} min`
}

export function formatEpisodeDate(pubDate: string): string {
  if (!pubDate) return ''
  const d = new Date(pubDate)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
