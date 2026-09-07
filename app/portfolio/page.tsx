import type { Metadata } from 'next';
import Portfolio from '@/components/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Bekijk alles wat VAIIYA heeft ontworpen, gebouwd en opgeleverd — websites, native Android & iOS apps en mobiele games.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-card-border text-xs font-bold uppercase tracking-widest mb-6">
            🗂️ VOLLEDIG PORTFOLIO
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Alles Wat We Hebben <span className="italic text-[#E25A3C]">Gebouwd &amp; Opgeleverd</span>
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            Bekijk ons volledige werk op het gebied van websites, native Android &amp; iOS apps en mobiele games — elk project ontworpen, ontwikkeld en uitgebracht door VAIIYA.
          </p>
        </div>
      </section>

      <Portfolio />
    </main>
  )
}
