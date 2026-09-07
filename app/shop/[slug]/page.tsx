import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllProductSlugs, getProductBySlug } from '@/lib/shop'
import AffiliateLink from '@/components/AffiliateLink'
import { SITE_URL as siteUrl } from '@/lib/site'

// New products added via /admin should show up without a full rebuild.
export const revalidate = 60

export async function generateStaticParams() {
  try {
    const slugs = await getAllProductSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch (err) {
    // Turso unreachable at build time (e.g. building locally without the
    // TURSO_* env vars). Returning [] just means no product pages get
    // prerendered at build — they still render fine on-demand at request
    // time since dynamicParams defaults to true, and revalidate keeps
    // them fresh after that.
    console.warn('[shop] generateStaticParams: could not reach Turso, skipping prerender:', err)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)
  if (!product) return {}

  return {
    title: product.name,
    description: product.summary,
    alternates: {
      canonical: `${siteUrl}/shop/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.summary,
      type: 'website',
      url: `${siteUrl}/shop/${product.slug}`,
      images: product.image ? [product.image] : undefined,
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)
  if (!product) notFound()

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || product.summary,
    image: product.image ? [product.image] : undefined,
    category: product.category,
    ...(product.price
      ? {
          offers: {
            '@type': 'Offer',
            price: product.price.replace(/[^\d,.]/g, '').replace(',', '.'),
            priceCurrency: 'EUR',
            url: product.affiliateUrl,
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: product.sourceName },
          },
        }
      : {}),
  }

  return (
    <main className="min-h-screen bg-cream text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <section className="pt-10 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs font-semibold text-ink/50 mb-8">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>&gt;</span>
            <Link href="/shop" className="hover:text-ink">Shop</Link>
            <span>&gt;</span>
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className={`aspect-square rounded-3xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-sm overflow-hidden`}
            >
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-7xl font-bold text-white/90 font-serif drop-shadow-md">
                  {product.name.charAt(0)}
                </span>
              )}
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-3">{product.name}</h1>
              {product.price && (
                <p className="text-xl font-bold text-[#E25A3C] mb-4">{product.price}</p>
              )}
              <p className="text-ink/70 leading-relaxed mb-6">{product.summary}</p>

              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-card border border-card-border text-xs font-semibold text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <AffiliateLink
                href={product.affiliateUrl}
                slug={product.slug}
                className="btn-metamask btn-orange text-base inline-flex"
              >
                Bekijk originele aanbieding &rarr;
              </AffiliateLink>

              <div className="mt-8 pt-6 border-t border-card-border space-y-1.5 text-sm text-ink/60">
                <p>
                  Categorie:{' '}
                  <Link href="/shop" className="text-[#E25A3C] hover:underline">
                    Shop
                  </Link>
                  {' > '}
                  {product.category}
                </p>
                <p>
                  Dit is een affiliatelink — VAIIYA kan een commissie ontvangen als je via deze link koopt bij{' '}
                  <span className="font-semibold">{product.sourceName}</span>.
                </p>
              </div>
            </div>
          </div>

          {product.description && (
            <div className="mt-16 max-w-2xl">
              <h2 className="text-xl font-bold font-serif mb-4">Over dit product</h2>
              <p className="text-ink/70 leading-relaxed whitespace-pre-line">{product.description}</p>
            </div>
          )}

          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="mt-16 max-w-2xl">
              <h2 className="text-xl font-bold font-serif mb-4">Productspecificaties</h2>
              <dl>
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between gap-4 py-2.5 text-sm border-b border-card-border last:border-b-0"
                  >
                    <dt className="text-ink/50 font-medium">{key}</dt>
                    <dd className="text-ink font-semibold text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {product.tracklist && product.tracklist.length > 0 && (
            <div className="mt-16 max-w-2xl">
              <h2 className="text-xl font-bold font-serif mb-4">Tracklist</h2>
              <ol className="space-y-2">
                {product.tracklist.map((track, i) => (
                  <li key={track} className="flex gap-3 text-sm text-ink/80 py-2 border-b border-card-border last:border-b-0">
                    <span className="text-ink/40 font-semibold w-5 shrink-0">{i + 1}.</span>
                    <span>{track}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
