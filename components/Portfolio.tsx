import { portfolioApps } from '@/lib/portfolio'
import TitleCard from '@/components/TitleCard'

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-site px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolioApps.map((app) => (
          <TitleCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  )
}
