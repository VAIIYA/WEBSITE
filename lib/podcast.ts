export interface PodcastEpisode {
  id: string
  title: string
  description: string
  link: string
  audioUrl: string
  audioLength?: string
  durationFormatted: string
  durationSeconds: number
  pubDate: string
  pubDateFormatted: string
  image: string
}

export interface PodcastChannel {
  title: string
  description: string
  link: string
  feedUrl: string
  image: string
  episodes: PodcastEpisode[]
}

const PODCAST_FEED_URL = 'https://media.rss.com/vaiiya/feed.xml'

const FALLBACK_CHANNEL: PodcastChannel = {
  title: 'VAIIYA Podcast',
  description:
    'VAIIYA explores the future of AI and robotics—from groundbreaking technologies and intelligent machines to the people and ideas shaping tomorrow.',
  link: 'https://rss.com/podcasts/vaiiya',
  feedUrl: PODCAST_FEED_URL,
  image: 'https://media.rss.com/vaiiya/podcast_cover_20260826_202755_d75539571ef52f597940a8c70d7dfa21.png',
  episodes: [
    {
      id: '8346b8fb-d383-4034-9c4b-03a5dc4780cd',
      title: 'Mastering the Claude Gauntlet Loop for AI Success',
      description:
        'Ontdek de gauntlet loop prompttechniek waarmee AI via iteratieve zelfcorrectie en real-world benchmarks professionele resultaten bereikt — van complete videogames tot marketing.',
      link: 'https://rss.com/podcasts/vaiiya/3098856',
      audioUrl:
        'https://content.rss.com/episodes/399871/3098856/vaiiya/2026_08_26_20_29_58_0139c88c-c61e-46c9-b423-62b939357698.mp3',
      durationFormatted: '26:14',
      durationSeconds: 1574,
      pubDate: 'Wed, 26 Aug 2026 20:30:16 GMT',
      pubDateFormatted: '26 augustus 2026',
      image:
        'https://media.rss.com/vaiiya/podcast_cover_20260826_202755_d75539571ef52f597940a8c70d7dfa21.png',
    },
  ],
}

function formatDuration(seconds: number): string {
  if (!seconds || isNaN(seconds)) return '25:00'
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export async function getPodcastData(): Promise<PodcastChannel> {
  try {
    const res = await fetch(PODCAST_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; VAIIYAPodcast/1.0)',
      },
    })

    if (!res.ok) {
      console.warn(`[PODCAST] Failed to fetch feed, status ${res.status}. Using fallback.`)
      return FALLBACK_CHANNEL
    }

    const xml = await res.text()

    // Channel metadata
    const channelTitle =
      xml.match(/<channel[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>/i)?.[1]?.trim() ||
      FALLBACK_CHANNEL.title

    const channelDesc =
      xml
        .match(/<channel[\s\S]*?<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/i)?.[1]
        ?.replace(/<[^>]+>/g, ' ')
        ?.replace(/\s+/g, ' ')
        ?.trim() || FALLBACK_CHANNEL.description

    const channelLink =
      xml.match(/<channel[\s\S]*?<link>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/link>/i)?.[1]?.trim() ||
      FALLBACK_CHANNEL.link

    const channelImage =
      xml.match(/<itunes:image\s+href=["']([^"']+)["']/i)?.[1] ||
      xml.match(/<image>[\s\S]*?<url>([^<]+)<\/url>/i)?.[1]?.trim() ||
      FALLBACK_CHANNEL.image

    // Parse Episodes
    const items = xml.match(/<item[\s\S]*?<\/item>/gi) || []
    const episodes: PodcastEpisode[] = []

    for (const itemXml of items) {
      const title =
        itemXml.match(/<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>/i)?.[1]?.trim() ||
        'Aflevering'

      const rawDesc =
        itemXml.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/i)?.[1] || ''

      const cleanDesc = rawDesc
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

      const link =
        itemXml.match(/<link>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/link>/i)?.[1]?.trim() || ''

      const enclosureMatch = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*\/>/i)
      const audioUrl = enclosureMatch ? enclosureMatch[1] : ''
      const audioLength = itemXml.match(/length=["']([^"']+)["']/i)?.[1]

      const guid =
        itemXml.match(/<guid[^>]*>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/guid>/i)?.[1]?.trim() ||
        String(Date.now())

      const durationStr = itemXml.match(/<itunes:duration>(\d+)<\/itunes:duration>/i)?.[1]
      const durationSeconds = durationStr ? parseInt(durationStr, 10) : 0

      const pubDate =
        itemXml.match(/<pubDate>(.*?)<\/pubDate>/i)?.[1]?.trim() || new Date().toUTCString()

      const epImage =
        itemXml.match(/<itunes:image\s+href=["']([^"']+)["']/i)?.[1] || channelImage

      if (audioUrl) {
        episodes.push({
          id: guid,
          title,
          description: cleanDesc,
          link,
          audioUrl,
          audioLength,
          durationFormatted: formatDuration(durationSeconds),
          durationSeconds,
          pubDate,
          pubDateFormatted: formatDate(pubDate),
          image: epImage,
        })
      }
    }

    if (episodes.length === 0) {
      return FALLBACK_CHANNEL
    }

    return {
      title: channelTitle,
      description: channelDesc,
      link: channelLink,
      feedUrl: PODCAST_FEED_URL,
      image: channelImage,
      episodes,
    }
  } catch (err) {
    console.error('[PODCAST] Error fetching feed:', err)
    return FALLBACK_CHANNEL
  }
}
