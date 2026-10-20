import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'
import GameCard from '@/components/GameCard'
import PageHero from '@/components/PageHero'
import FeatureList from '@/components/FeatureList'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Unity & Mobile Games — Android & iOS',
  description: 'Fast, playful mobile games powered by Unity and native performance — live on Google Play, with iOS builds in active development.',
}

const stack = [
  { label: 'Unity & Custom Loops', detail: 'Cross-platform physics & 60fps+ frame rates' },
  { label: 'Android-First Launch', detail: 'Tuned for touch responsiveness & Google Play' },
  { label: 'iOS Roadmap', detail: 'SwiftUI & GameKit App Store releases underway' },
  { label: 'Closed Beta Community', detail: 'Google Group early testing & balance feedback' },
]

export default function GamesPage() {
  const games = portfolioApps.filter((app) => app.category === 'game')
  const liveGames = games.filter((g) => g.status === 'live' && !g.comingSoon)
  const betaGames = games.filter((g) => g.status !== 'live')

  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Games"
        title="Unity and mobile games, built to last."
        description="Arcade and puzzle titles made with Unity and native game architectures — live on Google Play, with iOS ports in production."
      >
        <Link href="/early-access" className="btn btn-dark">Join early access</Link>
        <a
          href="https://play.google.com/store/apps/dev?id=7804895561285369781"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          Google Play &rarr;
        </a>
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <FeatureList items={stack} />
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Community beta</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Early access &amp; closed beta</h2>
            </div>
            <div className="space-y-5 lg:col-span-5">
              <p className="text-lg leading-relaxed text-[#3D3D3A]">
                Test our newest builds on your Android device before public release.
              </p>
              <Link href="/early-access" className="link-arrow">Early access guide &rarr;</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {betaGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Public catalog</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Live on Google Play</h2>
          </div>
          <div className="space-y-5 lg:col-span-5">
            <p className="text-lg leading-relaxed text-[#3D3D3A]">Available to download now on Android devices worldwide.</p>
            <a
              href="https://play.google.com/store/apps/dev?id=7804895561285369781"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              View on Google Play &rarr;
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {liveGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <CtaBand
        title="Want to help shape our next game?"
        text="Testers in our Google Group talk directly with the team and shape game balance, unlock rates and controls."
      >
        <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          Join the tester group
        </a>
        <Link href="/contact" className="btn btn-light">Pitch a game idea</Link>
      </CtaBand>
    </main>
  )
}
