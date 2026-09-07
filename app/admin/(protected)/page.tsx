import Link from 'next/link'
import { getCounts } from '@/lib/turso'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const counts = await getCounts()

  const tiles = [
    { label: 'Producten', value: counts.products, href: '/admin/products', icon: '🛍️' },
    { label: 'Contactberichten', value: counts.contacts, href: '/admin/contacts', icon: '✉️' },
    { label: 'Nieuwsbrief-abonnees', value: counts.subscribers, href: '/admin/newsletter', icon: '📰' },
    { label: 'Affiliate-kliks', value: counts.clicks, href: '/admin/clicks', icon: '🔗' },
  ]

  return (
    <div className="p-6 sm:p-10 max-w-5xl">
      <h1 className="text-2xl font-bold font-serif text-slate-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiles.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <span className="text-2xl">{t.icon}</span>
            <p className="text-3xl font-bold text-slate-900 mt-3">{t.value}</p>
            <p className="text-sm text-slate-500 font-medium mt-1">{t.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Snelle acties</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/products/new" className="btn-metamask btn-orange text-sm">
            + Nieuw product
          </Link>
          <Link href="/shop" target="_blank" className="btn-metamask btn-outline-dark text-sm">
            Bekijk shop &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
