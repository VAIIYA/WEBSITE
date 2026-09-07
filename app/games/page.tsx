import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'
import GameCard from '@/components/GameCard'

export const metadata: Metadata = {
  title: 'Games',
  description: 'Native mobile games for Android and iOS, engineered for smooth 60fps+ gameplay from core loop to store launch.',
}

const stack = [
  { label: 'Native Android & iOS', detail: 'No cross-platform compromises' },
  { label: 'Smooth 60fps+ Gameplay', detail: 'Tuned for feel, not just benchmarks' },
  { label: 'Google Play Store', detail: 'Published & maintained' },
  { label: 'App Store Connect', detail: 'Published & maintained' },
]

const games = portfolioApps.filter((app) => app.category === 'game')

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-widest mb-6">
            🎮 CORE PILLAR &bull; MOBILE GAMES
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Native <span className="italic text-violet-600">Mobile</span> Games
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            Fast, fun, and built to last — mobile games engineered natively for Android and iOS, from core gameplay loop to store launch.
          </p>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((s) => (
            <div key={s.label} className="p-5 bg-card rounded-2xl border border-card-border">
              <div className="font-bold text-violet-600 font-serif text-sm">{s.label}</div>
              <div className="text-xs text-ink/60 font-medium mt-1">{s.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif">What Goes Into a VAIIYA Game</h2>
          <p className="text-ink/70 leading-relaxed">
            We start with the core loop — the ten seconds of gameplay that has to feel good before anything else matters.
            From there we build out native rendering, level and progression design, and store-ready QA passes so launch day has no surprises.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">Our Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Have a game idea?</h2>
        <Link href="/contact" className="btn-metamask btn-orange text-base">
          Start a Build &rarr;
        </Link>
      </section>
    </main>
  )
}
