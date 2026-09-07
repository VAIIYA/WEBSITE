import { getSiteConfig } from '@/lib/turso'
import { TIKTOK_LATEST_URL_KEY } from '@/lib/tiktok'
import { X_LATEST_URL_KEY } from '@/lib/x'
import SocialUrlsForm from '@/components/admin/SocialUrlsForm'

export const dynamic = 'force-dynamic'

export default async function AdminSocialPage() {
  const [tiktokUrl, xUrl] = await Promise.all([
    getSiteConfig(TIKTOK_LATEST_URL_KEY),
    getSiteConfig(X_LATEST_URL_KEY),
  ])

  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-2xl font-bold font-serif text-slate-900 mb-2">Social</h1>
      <p className="text-sm text-slate-500 mb-8">
        De nieuwste YouTube-video wordt automatisch opgehaald. X en TikTok bieden geen betrouwbare openbare feed,
        dus die stel je hier handmatig in.
      </p>

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <SocialUrlsForm initialTiktokUrl={tiktokUrl || ''} initialXUrl={xUrl || ''} />
      </div>
    </div>
  )
}
