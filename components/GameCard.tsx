import Link from 'next/link'
import type { PortfolioApp } from '@/lib/portfolio'

export default function GameCard({ game }: { game: PortfolioApp }) {
  const isClosedBeta = game.status === 'closed-beta'
  const isLive = game.status === 'live' || Boolean(game.playStoreUrl)

  return (
    <div className="bg-white border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col sm:col-span-2 sm:max-w-md sm:mx-auto w-full">
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

        {isClosedBeta ? (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Closed Beta Live
          </span>
        ) : isLive ? (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-ink">
            Live on Store
          </span>
        ) : game.comingSoon || game.status === 'in-development' ? (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-ink">
            In Development
          </span>
        ) : null}
      </div>

      <div className="p-7 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold font-serif">{game.name}</h3>
          <p className="text-ink/70 text-base leading-relaxed">{game.description}</p>
        </div>

        <div className="space-y-2.5 pt-4 border-t border-card-border">
          {isClosedBeta ? (
            <div className="space-y-2">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-[11px] text-emerald-800 font-medium leading-tight">
                <strong>Closed Beta:</strong> Join our Google Group first, then opt-in on Google Play to play.
              </div>
              {game.betaGroupUrl && (
                <a
                  href={game.betaGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold text-center block"
                >
                  1. Join Tester Google Group &rarr;
                </a>
              )}
              {game.playTestingUrl && (
                <a
                  href={game.playTestingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-metamask bg-violet-600 text-white hover:bg-violet-700 text-xs font-bold text-center block"
                >
                  2. Opt-in on Google Play &rarr;
                </a>
              )}
            </div>
          ) : (
            <>
              {game.playStoreUrl && (
                <a
                  href={game.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold text-center block"
                >
                  Get it on Google Play &rarr;
                </a>
              )}
              {game.appStoreUrl && (
                <a
                  href={game.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-metamask bg-slate-900 text-white hover:bg-black text-xs font-bold text-center block"
                >
                  Download on the App Store &rarr;
                </a>
              )}
              {game.externalUrl && (
                <a
                  href={game.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-metamask btn-outline-dark text-xs font-bold text-center block"
                >
                  Play the web demo
                </a>
              )}
              {!game.playStoreUrl && !game.appStoreUrl && !game.externalUrl && (
                <div className="text-center py-2 space-y-1.5">
                  <p className="text-xs text-ink/50 font-medium">
                    Upcoming release &bull; Heading to Google Play
                  </p>
                  {game.betaGroupUrl && (
                    <a
                      href={game.betaGroupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-bold text-emerald-700 hover:text-emerald-900"
                    >
                      Join Google Group for beta alerts &rarr;
                    </a>
                  )}
                </div>
              )}
            </>
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
