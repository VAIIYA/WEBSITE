import Link from 'next/link'
import PageHero from '@/components/PageHero'
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
  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Android native · iOS planned"
        title="Flapmoji. One tap, one emoji, endless pipes."
        description="Flap a grumpy little emoji through an endless gauntlet of glossy pipes. Pure reflexes in Classic, or Arcade chaos with power-ups, coins and a mushroom that is absolutely a trap."
        media={
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-[#F0EEE6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/games/flapmoji/feature.png" alt="FLAPMOJI" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        }
      >
        {game.playStoreUrl && (
          <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            Get it on Google Play &rarr;
          </a>
        )}
        <a href="https://groups.google.com/g/vaiiya/c/2zJvHbgUggc" target="_blank" rel="noopener noreferrer" className="btn btn-light">
          Beta thread
        </a>
        <Link href="/games" className="btn btn-light">&larr; All games</Link>
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <h2 className="mb-10 font-serif text-4xl leading-tight sm:text-5xl">Two ways to play</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { name: 'Classic', text: 'Pure one-tap flappy. Just you, the pipes and your best score. No distractions.' },
            { name: 'Arcade', text: 'Faster, tighter, wilder. Grab power-ups, hoover up coins and try not to eat a mushroom.' },
          ].map((m) => (
            <div key={m.name} className="rounded-2xl bg-[#F0EEE6] p-8">
              <h3 className="mb-3 font-serif text-3xl">{m.name}</h3>
              <p className="text-[17px] leading-relaxed text-[#3D3D3A]">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <h2 className="mb-10 font-serif text-4xl leading-tight sm:text-5xl">Arcade power-ups</h2>
          <ul className="grid grid-cols-1 border-t border-[#D1CFC5] sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {POWERUPS.map((p) => (
              <li key={p.name} className="flex items-start gap-4 border-b border-[#D1CFC5] py-6">
                <span className="text-2xl leading-none" aria-hidden>{p.icon}</span>
                <div>
                  <h3 className="font-serif text-xl">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5E5D59]">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-site grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-5">More to chase</h2>
        <ul className="border-t border-[#D1CFC5] lg:col-span-7">
          {CHASE.map((item) => (
            <li key={item} className="border-b border-[#D1CFC5] py-4 text-[17px] leading-relaxed text-[#3D3D3A]">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <h2 className="mb-10 font-serif text-4xl leading-tight sm:text-5xl">Screenshots</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SHOTS.map((shot) => (
            <div key={shot.src} className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#F0EEE6]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={shot.src} alt={shot.alt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-serif text-4xl">Free to play</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3D3D3A]">
            No account. No sign-up. Your progress stays on your device. Free to play, supported by occasional
            full-screen ads between runs.
          </p>
          <Link href="/privacy-policy" className="link-arrow mt-6">Privacy policy &rarr;</Link>
        </div>
      </section>
    </main>
  )
}
