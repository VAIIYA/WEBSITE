import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllProducts } from '@/lib/shop'
import { SHOP_CATEGORIES } from '@/lib/shop-categories'
import ShopGrid from '@/components/ShopGrid'
import { SITE_URL as siteUrl } from '@/lib/site'

// New/edited products from /admin should show up without a full rebuild.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Een handgekozen affiliatecatalogus van VAIIYA — muziek en boeken, rechtstreeks doorgelinkt naar de bron.',
  alternates: {
    canonical: `${siteUrl}/shop`,
  },
}

export default async function ShopPage() {
  // Turso may be unreachable at build time (e.g. building locally without
  // the TURSO_* env vars) — degrade to an empty grid rather than failing
  // the whole build. On Vercel (with real credentials) this always
  // resolves normally.
  const products = await getAllProducts().catch(() => [])

  return (
    <main className="min-h-screen bg-cream text-ink">
      <ShopGrid products={products} categories={[...SHOP_CATEGORIES]} />

      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center border-t border-card-border">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Vragen over een bestelling?</h2>
        <Link href="/contact" className="btn-metamask btn-orange text-base">
          Neem Contact Op &rarr;
        </Link>
      </section>
    </main>
  )
}
