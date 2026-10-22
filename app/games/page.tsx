import type { Metadata } from 'next'
import { portfolioApps } from '@/lib/portfolio'
import PageHero from '@/components/PageHero'
import PlayButton from '@/components/PlayButton'
import TitleCard from '@/components/TitleCard'
import { PLAY_PROFILE_URL } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Android Games on Google Play',
  description: 'Fast, playful Android games — Hexmoji, Flapmoji, Emoji Blocks and Matchmoji, all on Google Play.',
}

export default function GamesPage() {
  const games = portfolioApps.filter((app) => app.category === 'game')

  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Games"
        title="Android games, built to last."
        description="Arcade and puzzle games tuned for touch. Open a game to read more, or go straight to Google Play."
      >
        <PlayButton href={PLAY_PROFILE_URL} size="lg" label="All games on" />
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <TitleCard key={game.id} app={game} />
          ))}
        </div>
      </section>
    </main>
  )
}
