import type { Metadata } from 'next'
import IndestructibleSocialsSection from '@/components/IndestructibleSocialsSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach the VAIIYA studio directly or follow along on our official channels — X, YouTube, TikTok and GitHub.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-card-border text-xs font-bold uppercase tracking-widest mb-6">
            🛡️ OFFICIAL CHANNELS &bull; 100% VERIFIED
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Let&apos;s <span className="italic text-[#E25A3C]">Talk</span>
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            Whether you have a website, app, or game in mind — or just want to follow our AI agent and mobile development updates — here&apos;s where to find us.
          </p>
        </div>
      </section>

      <IndestructibleSocialsSection />
    </main>
  )
}
