import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'

const game = portfolioApps.find((a) => a.id === 'flapmoji')!

const SHOTS = [
  { src: '/games/flapmoji/menu.png', alt: 'Main menu' },
  { src: '/games/flapmoji/arcade.png', alt: 'Arcade mode with coins' },
  { src: '/games/flapmoji/shop.png', alt: 'Trail shop' },
  { src: '/games/flapmoji/gameover.png', alt: 'Game over & XP' },
]

const POWERUPS = [
  { icon: '🛡️', name: 'Shield', body: 'Soaks one hit.' },
  { icon: '🚀', name: 'Rocket', body: 'Blast straight through the pipes.' },
  { icon: '⏳', name: 'Slow-mo', body: 'Bend time for a few seconds.' },
  { icon: '🧲', name: 'Magnet', body: 'Pull every coin on screen towards you.' },
  { icon: '🍄', name: 'Mushroom', body: "That one's a trap. You'll get big. Good luck." },
]

const CHASE = [
  '8 hand-tuned worlds that cross-fade as your score climbs — sunny meadows, golden dusk, neon night, cotton-candy skies, deep space and more',
  '100+ unlockable emoji characters',
  'Spend your Arcade coins in the shop on bird-trail cosmetics',
  'Daily streak bonus',
  'Reduce-motion mode, mutable music and SFX, haptics toggle',
]

export const flapmojiMetadata = {
  title: 'FLAPMOJI',
  description:
    'FLAPMOJI — one-tap flappy arcade game with Classic and Arcade modes, 100+ emoji skins, 8 worlds and power-ups. Native for Android and iOS.',
}

export default function FlapmojiPage() {
  const hasStoreLink = Boolean(game.playStoreUrl || game.appStoreUrl)

  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative pt-16 pb-12 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/games" className="text-xs font-bold text-violet-700 hover:text-violet-900">
            ← Back to games
          </Link>

          <div className="mt-6 rounded-3xl overflow-hidden border border-card-border shadow-sm">
            <div className="relative aspect-[2/1]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/games/flapmoji/feature.png"
                alt="FLAPMOJI"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white border border-violet-200 text-violet-800 text-[10px] font-bold uppercase tracking-widest">
              Android &middot; iOS
            </span>
            {game.comingSoon && (
              <span className="px-3 py-1 rounded-full bg-white border border-card-border text-ink text-[10px] font-bold uppercase tracking-widest">
                Coming soon
              </span>
            )}
          </div>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold font-serif leading-tight">FLAPMOJI</h1>
          <p className="mt-3 text-xl text-violet-700 font-serif">One tap. One emoji. Endless pipes.</p>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed max-w-2xl">
            Tap to flap a grumpy little emoji through an endless gauntlet of glossy pipes. Play it pure on reflexes in
            Classic, or dive into the Arcade chaos with power-ups, coins and a mushroom that is absolutely a trap.
          </p>

          <div className="mt-8 space-y-2 max-w-sm">
            {game.playStoreUrl && (
              <a
                href={game.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-metamask bg-violet-600 text-white hover:bg-violet-700 text-xs font-bold"
              >
                Get it on Google Play &rarr;
              </a>
            )}
            {game.appStoreUrl && (
              <a
                href={game.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-metamask bg-slate-900 text-white hover:bg-black text-xs font-bold"
              >
                Download on the App Store &rarr;
              </a>
            )}
            {!hasStoreLink && (
              <p className="text-sm text-ink/60 font-medium">
                Coming soon to the Google Play Store and the Apple App Store.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Two modes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-10">Two ways to play</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 bg-card rounded-3xl border border-card-border">
              <h3 className="text-2xl font-bold font-serif text-violet-700">Classic</h3>
              <p className="mt-2 text-ink/70 leading-relaxed">
                Pure one-tap flappy. Just you, the pipes and your best score. No distractions.
              </p>
            </div>
            <div className="p-7 bg-card rounded-3xl border border-card-border">
              <h3 className="text-2xl font-bold font-serif text-violet-700">Arcade</h3>
              <p className="mt-2 text-ink/70 leading-relaxed">
                Faster, tighter, wilder. Grab power-ups, hoover up coins and try not to eat a mushroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Power-ups */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-10">Arcade power-ups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {POWERUPS.map((p) => (
              <div key={p.name} className="p-5 bg-white rounded-2xl border border-card-border flex gap-4 items-start">
                <span className="text-2xl leading-none" aria-hidden>
                  {p.icon}
                </span>
                <div>
                  <div className="font-bold font-serif text-violet-700">{p.name}</div>
                  <div className="text-sm text-ink/60 mt-0.5">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More to chase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-8">More to chase</h2>
          <ul className="space-y-3">
            {CHASE.map((item) => (
              <li key={item} className="flex gap-3 text-ink/70 leading-relaxed">
                <span className="text-violet-600 font-bold" aria-hidden>
                  &bull;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-10">Screenshots</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SHOTS.map((shot) => (
              <div key={shot.src} className="rounded-2xl overflow-hidden border border-card-border bg-white">
                <div className="relative aspect-[9/16]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free to play */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">Free to play</h2>
          <p className="text-ink/70 leading-relaxed">
            No account. No sign-up. Your progress stays on your device. Free to play, supported by occasional full-screen
            ads between runs.
          </p>
          <Link
            href="/privacy-policy"
            className="inline-block text-xs font-bold text-violet-700 hover:text-violet-900"
          >
            Privacy policy &rarr;
          </Link>
        </div>
      </section>
    </main>
  )
}
