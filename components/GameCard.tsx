import Link from 'next/link'
import type { PortfolioApp } from '@/lib/portfolio'

export default function GameCard({ game }: { game: PortfolioApp }) {
  const hasStoreLink = Boolean(game.playStoreUrl || game.appStoreUrl)

  return (
    <div className="bg-white border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col sm:col-span-2 sm:max-w-md sm:mx-auto">
      {/* Feature banner */}
      <div className="relative aspect-[2/1] overflow-hidden">
        {game.featureImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={game.featureImage} alt={game.name} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`} />
        )}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
          {game.platforms.map((p) => p.toUpperCase()).join(' · ')} GAME
        </span>
        {game.comingSoon && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-ink">
            Coming soon
          </span>
        )}
      </div>

      <div className="p-7 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold font-serif">{game.name}</h3>
          <p className="text-ink/70 text-base leading-relaxed">{game.description}</p>
        </div>

        <div className="space-y-2 pt-4 border-t border-card-border">
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
          {game.externalUrl && (
            <a
              href={game.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-metamask btn-outline-dark text-xs font-bold"
            >
              Play the web demo
            </a>
          )}
          {!hasStoreLink && (
            <p className="text-xs text-ink/50 font-medium text-center pt-1">
              Coming soon to the Google Play Store and Apple App Store
            </p>
          )}
          {game.projectUrl && (
            <Link
              href={game.projectUrl}
              className="block text-center text-xs font-bold text-violet-700 hover:text-violet-900 pt-2"
            >
              More about {game.name} &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
