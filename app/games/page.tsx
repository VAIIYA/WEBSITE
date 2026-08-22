import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'

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
          <h2 className="text-3xl font-bold font-serif text-center mb-12">Games We&apos;ve Shipped</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-white border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between sm:col-span-2 sm:max-w-md sm:mx-auto"
              >
                <div className={`h-52 bg-gradient-to-br ${game.gradient} p-7 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {game.platforms.map((p) => p.toUpperCase()).join(' · ')} GAME
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white font-bold text-xl">
                      {game.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white font-serif drop-shadow-md">{game.name}</h3>
                </div>
                <div className="p-7 flex flex-col flex-grow justify-between space-y-6">
                  <p className="text-ink/70 text-base leading-relaxed">{game.description}</p>
                  <div className="space-y-2 pt-4 border-t border-card-border">
                    {game.playStoreUrl && (
                      <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full btn-metamask bg-violet-600 text-white hover:bg-violet-700 text-xs font-bold">
                        Get on Google Play Store &rarr;
                      </a>
                    )}
                    {game.appStoreUrl && (
                      <a href={game.appStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full btn-metamask bg-slate-900 text-white hover:bg-black text-xs font-bold">
                        Download on Apple App Store &rarr;
                      </a>
                    )}
                    {game.externalUrl && (
                      <a href={game.externalUrl} target="_blank" rel="noopener noreferrer" className="w-full btn-metamask btn-outline-dark text-xs font-bold">
                        Play the Web Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
