import { getLatestYoutubeVideo } from '@/lib/youtube'
import { getLatestXEmbed } from '@/lib/x'
import { getLatestTiktokEmbed } from '@/lib/tiktok'
import YoutubeLatestCard from './YoutubeLatestCard'
import XLatestCard from './XLatestCard'
import TiktokLatestCard from './TiktokLatestCard'

/**
 * Supplements the podcast player with the latest YouTube upload (fetched
 * automatically), and — when an admin has set one, see /admin/social —
 * the latest X post and TikTok video. Renders nothing at all if none are
 * available, and each card is independently optional so one failing
 * never hides the others.
 */
export default async function LatestSocialVideos({ locale = 'nl' }: { locale?: 'nl' | 'en' }) {
  const [video, xPost, tiktok] = await Promise.all([
    getLatestYoutubeVideo().catch(() => null),
    getLatestXEmbed().catch(() => null),
    getLatestTiktokEmbed().catch(() => null),
  ])

  if (!video && !xPost && !tiktok) return null

  return (
    <div className="mt-6 space-y-6">
      {video && <YoutubeLatestCard video={video} locale={locale} />}
      {xPost && <XLatestCard embed={xPost} locale={locale} />}
      {tiktok && <TiktokLatestCard embed={tiktok} locale={locale} />}
    </div>
  )
}
