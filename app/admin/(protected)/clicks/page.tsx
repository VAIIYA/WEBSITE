import Link from 'next/link'
import { getAffiliateClickStats } from '@/lib/turso'
import { getAllProducts } from '@/lib/shop'

export const dynamic = 'force-dynamic'

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('nl-NL', { dateStyle: 'medium', timeStyle: 'short' })
}

export default async function AdminClicksPage() {
  const [stats, products] = await Promise.all([getAffiliateClickStats(), getAllProducts()])
  const nameBySlug = new Map(products.map((p) => [p.slug, p.name]))
  const maxClicks = Math.max(1, ...stats.map((s) => s.clicks))

  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-2xl font-bold font-serif text-slate-900 mb-8">Affiliate-kliks</h1>

      {stats.length === 0 ? (
        <p className="text-slate-400">Nog geen kliks geregistreerd.</p>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-3xl space-y-4">
          {stats.map((s) => (
            <div key={s.product_slug}>
              <div className="flex items-baseline justify-between gap-4 mb-1.5">
                <Link href={`/shop/${s.product_slug}`} target="_blank" className="font-medium text-slate-900 hover:text-[#E25A3C] truncate">
                  {nameBySlug.get(s.product_slug) || s.product_slug}
                </Link>
                <span className="text-xs text-slate-400 shrink-0">
                  {s.clicks} {s.clicks === 1 ? 'klik' : 'kliks'} &bull; laatst {formatDate(s.last_clicked)}
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-[#E25A3C] rounded-full"
                  style={{ width: `${(s.clicks / maxClicks) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
