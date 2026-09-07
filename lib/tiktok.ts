import { getSiteConfig } from '@/lib/turso'

export const TIKTOK_LATEST_URL_KEY = 'tiktok_latest_video_url'

export interface TiktokEmbed {
  url: string
  authorName: string
  html: string
  thumbnailUrl?: string
  title?: string
}

/**
 * There is no reliable, key-free way to fetch "the latest TikTok video"
 * automatically: the profile page no longer embeds the video list in its
 * HTML (it's loaded client-side from a signed internal API that changes
 * often), and TikTok's official Content Posting/Display API requires an
 * approved developer app. So instead: an admin pastes the latest video's
 * URL into /admin, and we resolve *that* via TikTok's official, stable
 * oEmbed endpoint — no scraping involved.
 */
export async function getLatestTiktokEmbed(): Promise<TiktokEmbed | null> {
  const url = await getSiteConfig(TIKTOK_LATEST_URL_KEY).catch(() => null)
  if (!url) return null

  try {
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = await res.json()
    if (!data.html) return null

    return {
      url,
      authorName: data.author_name || 'VAIIYA',
      html: data.html,
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
    }
  } catch {
    return null
  }
}
