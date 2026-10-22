import type { Metadata } from 'next'
import { portfolioApps, PLAY_PROFILE_URL } from '@/lib/portfolio'
import PageHero from '@/components/PageHero'
import PlayButton from '@/components/PlayButton'
import TitleCard from '@/components/TitleCard'

export const metadata: Metadata = {
  title: 'Android Apps on Google Play',
  description: 'Focused Android apps from VAIIYA — TAPEDECK today, FeedMe on the way.',
}

export default function AppsPage() {
  const apps = portfolioApps.filter((app) => app.category === 'app')

  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Apps"
        title="Focused apps with nothing you don’t need."
        description="Clear design, fast and simple. Open an app to read more, or go straight to Google Play."
      >
        <PlayButton href={PLAY_PROFILE_URL} size="lg" label="All apps on" />
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <TitleCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </main>
  )
}
