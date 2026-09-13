import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'
import GameCard from '@/components/GameCard'

export const metadata: Metadata = {
  title: 'Android Mobile Games',
  description: 'Native Android mobile games engineered for smooth 60fps+ gameplay from core loop to Google Play Store launch.',
}

const stack = [
  { label: 'Android-First Gaming', detail: 'Tuned for touch & hardware performance' },
  { label: 'Smooth 60fps+ Gameplay', detail: 'Fluid physics loops and responsive inputs' },
  { label: 'Google Play Store', detail: 'Verified developer & published titles' },
  { label: 'Closed Beta Program', detail: 'Google Group early testing community' },
]

export default function GamesPage() {
  const games = portfolioApps.filter((app) => app.category === 'game')
  const liveGames = games.filter((g) => g.status === 'live' || Boolean(g.playStoreUrl))
  const betaGames = games.filter((g) => g.status === 'closed-beta' || g.status === 'in-development' || g.comingSoon)

  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-violet-600 selection:text-white">
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-widest mb-6">
            🎮 ANDROID-FIRST MOBILE GAMES
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Native <span className="italic text-violet-600">Mobile</span> Games
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Fast, fun, and built to last — mobile games engineered natively with an Android-first approach, from core gameplay loop to Google Play launch.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/early-access"
              className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-base font-bold shadow-lg"
            >
              🚀 Join Early Access Beta
            </Link>
            <a
              href="https://play.google.com/store/apps/dev?id=7804895561285369781"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask btn-outline-dark text-base"
            >
              Google Play Developer Page &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((s) => (
            <div key={s.label} className="p-5 bg-card rounded-2xl border border-card-border">
              <div className="font-bold text-violet-600 font-serif text-sm">{s.label}</div>
              <div className="text-xs text-ink/60 font-medium mt-1">{s.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: Early Access & Closed Beta */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Community Beta
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
                Early Access &amp; Closed Beta
              </h2>
              <p className="text-ink/70 text-base mt-2 max-w-xl">
                Test our newest builds on your Android device before public release. Join our Google Group to unlock instant access.
              </p>
            </div>
            <Link
              href="/early-access"
              className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold"
            >
              Early Access Guide &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {betaGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Live on Google Play */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-widest mb-2">
                🏪 Public Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
                Live on Google Play Store
              </h2>
              <p className="text-ink/70 text-base mt-2 max-w-xl">
                Available to download immediately on Android devices worldwide.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/dev?id=7804895561285369781"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-violet-700 hover:text-violet-900"
            >
              View on Google Play &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {liveGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Callout CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-card border-t border-card-border">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">Want to help shape our next game?</h2>
          <p className="text-ink/70 text-base leading-relaxed">
            Our Google Group testers get direct communication with the development team and shape game balance, unlock rates, and controls.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <a
              href="https://groups.google.com/g/vaiiya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-base font-bold"
            >
              Join Google Group Testers
            </a>
            <Link href="/contact" className="btn-metamask btn-outline-dark text-base">
              Pitch a Game Idea
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
