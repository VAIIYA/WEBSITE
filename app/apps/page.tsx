import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'
import PageHero from '@/components/PageHero'
import FeatureList from '@/components/FeatureList'
import GameCard from '@/components/GameCard'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Android Apps & Games on Google Play',
  description: 'Every VAIIYA title live on the Google Play Store — FLAPMOJI, TAPEDECK, EMOJI BLOCKS, MATCHMOJI and HEXMOJI. Native Android apps & games from our verified developer profile.',
}

const stack = [
  { label: 'Kotlin / Jetpack Compose', detail: 'Modern native Android UI & Material 3' },
  { label: 'Coroutines & Flow', detail: 'Resilient, battery-efficient async pipelines' },
  { label: 'Google Play Store', detail: 'Verified developer & production releases' },
  { label: 'Closed Beta Community', detail: 'Google Group early tester feedback loops' },
]

const PLAY_PROFILE = 'https://play.google.com/store/apps/dev?id=7804895561285369781'

export default function AppsPage() {
  // Every VAIIYA title with a Google Play listing — utility apps and games alike.
  const liveApps = portfolioApps.filter((app) => Boolean(app.playStoreUrl))

  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Apps"
        title="Native Android apps, shipped to Google Play."
        description="Engineered with Kotlin and Jetpack Compose for real-world reliability, fluid gestures and clean Material 3 styling."
      >
        <a href={PLAY_PROFILE} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          Our Play Store profile &rarr;
        </a>
        <Link href="/android" className="btn btn-light">Android stack</Link>
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <FeatureList items={stack} />
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Production releases</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Live on Google Play</h2>
            </div>
            <div className="space-y-5 lg:col-span-5">
              <p className="text-lg leading-relaxed text-[#3D3D3A]">
                {liveApps.length} titles in one verified developer profile — follow us for new releases.
              </p>
              <a href={PLAY_PROFILE} target="_blank" rel="noopener noreferrer" className="link-arrow">
                Open Google Play profile &rarr;
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {liveApps.map((app) => (
              <GameCard key={app.id} game={app} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <p className="eyebrow">Tester community</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Apps in development &amp; closed beta</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#3D3D3A]">
              Before our Android apps reach the public Play Store, they pass through closed beta cohorts in our Google
              Group. Testers help us validate Compose UI smoothness, background battery efficiency and device
              compatibility across Android 8 through 15.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Join the tester group &rarr;
            </a>
            <Link href="/early-access" className="btn btn-light">Early access hub &amp; FAQ</Link>
          </div>
        </div>
      </section>

      <CtaBand title="Looking for something else?" text="Dig into our platforms or see the rest of the work.">
        <Link href="/android" className="btn btn-dark">Android architecture</Link>
        <Link href="/ios" className="btn btn-light">iOS roadmap</Link>
        <Link href="/games" className="btn btn-light">All games</Link>
      </CtaBand>
    </main>
  )
}
