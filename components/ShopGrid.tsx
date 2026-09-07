'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { ShopProduct } from '@/lib/shop'
import type { ProductCategory } from '@/lib/shop-categories'

type Filter = 'Alles' | ProductCategory

export default function ShopGrid({
  products,
  categories,
}: {
  products: ShopProduct[]
  categories: ProductCategory[]
}) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('Alles')

  const filters: Filter[] = ['Alles', ...categories]

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesFilter = filter === 'Alles' || p.category === filter
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase())
      return matchesFilter && matchesQuery
    })
  }, [products, query, filter])

  return (
    <>
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E25A3C] mb-4">
            Uitgelichte Producten
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">SHOP</h1>
          <p className="text-ink/70 text-base leading-relaxed mb-10">
            Een handgekozen catalogus, rechtstreeks doorgelinkt naar de bron.
          </p>

          <div className="relative max-w-xl mx-auto mb-8">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek producten..."
              className="w-full pl-12 pr-5 py-4 rounded-full bg-white border border-card-border shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#E25A3C]/30"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === f
                    ? 'bg-[#E25A3C] text-white shadow-sm'
                    : 'bg-white border border-card-border text-ink/70 hover:text-ink hover:border-ink/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-ink/50 py-16">Geen producten gevonden.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <Link
                  key={p.id}
                  href={`/shop/${p.slug}`}
                  className="group bg-white border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`aspect-square bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-5xl font-bold text-white/90 font-serif drop-shadow-md">
                        {p.name.charAt(0)}
                      </span>
                    )}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-1">
                    <h3 className="font-bold text-ink group-hover:text-[#E25A3C] transition-colors leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-sm text-ink/60 line-clamp-2">{p.summary}</p>
                    {p.price && (
                      <p className="text-sm font-bold text-[#E25A3C] pt-1">{p.price}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
