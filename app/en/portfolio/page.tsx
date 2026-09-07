import type { Metadata } from 'next';
import Portfolio from '@/components/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Everything VAIIYA has designed, built and shipped — websites, native Android & iOS apps and mobile games.',
};

export default function PortfolioPageEn() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-card-border text-xs font-bold uppercase tracking-widest mb-6">
            🗂️ FULL PORTFOLIO
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Everything We&apos;ve <span className="italic text-[#E25A3C]">Built &amp; Shipped</span>
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            Browse our full body of work across websites, native Android &amp; iOS apps and mobile games — every project designed, developed and released by VAIIYA.
          </p>
        </div>
      </section>

      <Portfolio />
    </main>
  )
}
