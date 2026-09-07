import { getSiteConfig } from '@/lib/turso'

export const X_LATEST_URL_KEY = 'x_latest_post_url'

export interface XEmbed {
  url: string
  authorName: string
  html: string
}

/**
 * Same situation as TikTok (see lib/tiktok.ts): X killed their public RSS
 * feeds years ago, and the v2 API's user-timeline endpoint needs a paid
 * developer tier — there's no free, key-less way to discover "the latest
 * post" for an account. Their oEmbed endpoint (publish.twitter.com) is
 * still free and official, but only resolves a post URL you already have.
 * So: an admin pastes the latest post's URL into /admin/social, and we
 * resolve *that* — no scraping.
 */
export async function getLatestXEmbed(): Promise<XEmbed | null> {
  const url = await getSiteConfig(X_LATEST_URL_KEY).catch(() => null)
  if (!url) return null

  try {
    const res = await fetch(`https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&dnt=true`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = await res.json()
    if (!data.html) return null

    return {
      url,
      authorName: data.author_name || 'VAIIYA',
      html: data.html,
    }
  } catch {
    return null
  }
}
