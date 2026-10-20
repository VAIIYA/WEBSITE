import Link from 'next/link'
import type { PortfolioApp } from '@/lib/portfolio'

const platformLabels: Record<string, string> = { android: 'Android', ios: 'iOS', web: 'Web' }

export default function GameCard({ game }: { game: PortfolioApp }) {
  const isClosedBeta = game.status === 'closed-beta'
  const rollingOut = Boolean(game.comingSoon) && Boolean(game.playStoreUrl)
  const isLive = (game.status === 'live' || Boolean(game.playStoreUrl)) && !rollingOut

  const badge = isClosedBeta
    ? 'Closed beta'
    : rollingOut
      ? 'Rolling out'
      : isLive
        ? 'Live'
        : game.comingSoon || game.status === 'in-development'
          ? 'In development'
          : null

  return (
    <article className="flex w-full flex-col rounded-2xl bg-[#F0EEE6] p-3">
      <div className="relative aspect-[2/1] overflow-hidden rounded-xl">
        {game.featureImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={game.featureImage} alt={game.name} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`} />
        )}
        {badge && (
          <span className="absolute right-3 top-3 rounded-md bg-ivory px-2 py-1 text-xs font-medium text-ink">{badge}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 pt-5">
        <div className="mb-3 flex flex-wrap gap-2 text-xs text-[#5E5D59]">
          {game.platforms.map((p) => (
            <span key={p} className="rounded border border-[#D1CFC5] px-1.5 py-0.5">{platformLabels[p] ?? p}</span>
          ))}
          {game.engine === 'unity' && <span className="rounded border border-[#D1CFC5] px-1.5 py-0.5">Unity</span>}
        </div>
        <h3 className="mb-2 font-serif text-2xl leading-tight">{game.name}</h3>
        <p className="mb-6 flex-1 text-[15px] leading-relaxed text-[#3D3D3A]">{game.description}</p>

        <div className="flex flex-col gap-2">
          {isClosedBeta ? (
            <>
              <p className="rounded-lg bg-ivory p-3 text-[13px] leading-snug text-[#3D3D3A]">
                <strong className="font-medium text-ink">Closed beta:</strong> join our Google Group first, then opt in on
                Google Play.
              </p>
              {game.betaGroupUrl && (
                <a href={game.betaGroupUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full">
                  1. Join tester group &rarr;
                </a>
              )}
              {game.playTestingUrl && (
                <a href={game.playTestingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light w-full">
                  2. Opt in on Google Play &rarr;
                </a>
              )}
            </>
          ) : (
            <>
              {game.playStoreUrl && (
                <a href={game.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full">
                  {rollingOut ? 'View on Google Play (rolling out)' : 'Get it on Google Play'} &rarr;
                </a>
              )}
              {game.appStoreUrl && (
                <a href={game.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full">
                  Download on the App Store &rarr;
                </a>
              )}
              {game.externalUrl && (
                <a href={game.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light w-full">
                  Play the web demo
                </a>
              )}
              {!game.playStoreUrl && !game.appStoreUrl && !game.externalUrl && (
                <p className="py-1 text-center text-sm text-[#5E5D59]">Upcoming release &middot; heading to Google Play</p>
              )}
              {game.betaGroupUrl && (rollingOut || (!game.playStoreUrl && !game.appStoreUrl && !game.externalUrl)) && (
                <a href={game.betaGroupUrl} target="_blank" rel="noopener noreferrer" className="link-arrow justify-center pt-1">
                  Join the Google Group for early access &rarr;
                </a>
              )}
            </>
          )}

          {game.projectUrl && (
            <Link href={game.projectUrl} className="link-arrow justify-center pt-1">
              More about {game.name} &rarr;
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
