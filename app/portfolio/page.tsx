import type { Metadata } from 'next';
import Portfolio from '@/components/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse featured titles and games designed, built, and shipped by VAIIYA.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-card-border text-xs font-bold uppercase tracking-widest mb-6">
            🗂️ PORTFOLIO
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Featured <span className="italic text-[#E25A3C]">Titles &amp; Builds</span>
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            Browse our featured games and native builds — designed, engineered, and released by VAIIYA.
          </p>
        </div>
      </section>

      <Portfolio />
    </main>
  )
}
