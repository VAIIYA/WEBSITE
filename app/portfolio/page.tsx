import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Portfolio from '@/components/Portfolio'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse featured titles and games designed, built, and shipped by VAIIYA.',
}

export default function PortfolioPage() {
  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Portfolio"
        title="Titles and builds we’ve shipped."
        description="Games and native builds — designed, engineered and released by VAIIYA."
      />
      <Portfolio />
    </main>
  )
}
