import type { Metadata } from 'next'
import IndestructibleSocialsSection from '@/components/IndestructibleSocialsSection'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem rechtstreeks contact op met de VAIIYA studio of volg ons op onze officiële kanalen — X, YouTube, TikTok en GitHub.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-card-border text-xs font-bold uppercase tracking-widest mb-6">
            🛡️ OFFICIËLE KANALEN &bull; 100% GEVERIFIEERD
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Laten We <span className="italic text-[#E25A3C]">Praten</span>
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            Of je nu een website, app of game in gedachten hebt — of gewoon onze AI-agent en mobiele ontwikkelupdates wilt volgen — hier vind je ons.
          </p>
        </div>
      </section>

      <IndestructibleSocialsSection />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-3">
              Stuur Ons Een Bericht
            </h2>
            <p className="text-white/60 text-sm">
              Vul het formulier in en we reageren zo snel mogelijk per e-mail.
            </p>
          </div>
          <ContactForm locale="nl" />
        </div>
      </section>
    </main>
  )
}
