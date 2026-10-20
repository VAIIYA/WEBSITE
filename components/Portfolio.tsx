import Image from 'next/image'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'

const platformLabels: Record<string, string> = { android: 'Android', ios: 'iOS', web: 'Web' }

const playIcon = (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
  </svg>
)

export default function Portfolio() {
  const displayedApps = portfolioApps.filter((app) => !app.hideFromPortfolio)

  return (
    <section id="portfolio" className="mx-auto max-w-site px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${displayedApps.length > 2 ? 'lg:grid-cols-3' : ''}`}>
        {displayedApps.map((app) => {
          const status =
            app.status === 'closed-beta' ? 'Closed beta' : app.comingSoon ? 'Coming soon' : null

          return (
            <article key={app.id} className="group flex flex-col rounded-2xl bg-[#F0EEE6] p-3">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${app.gradient}`}>
                {app.image ? (
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-7xl text-ivory/90">{app.id.charAt(0).toUpperCase()}</span>
                  </div>
                )}
                {status && (
                  <span className="absolute left-3 top-3 rounded-md bg-ivory px-2 py-1 text-xs font-medium text-ink">
                    {status}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4 pt-5">
                <div className="mb-3 flex flex-wrap gap-2 text-xs text-[#5E5D59]">
                  {app.platforms.map((p) => (
                    <span key={p} className="rounded border border-[#D1CFC5] px-1.5 py-0.5">{platformLabels[p] ?? p}</span>
                  ))}
                  {app.engine === 'unity' && (
                    <span className="rounded border border-[#D1CFC5] px-1.5 py-0.5">Unity</span>
                  )}
                </div>
                <h3 className="mb-2 font-serif text-2xl leading-tight">{app.name}</h3>
                <p className="mb-6 flex-1 text-[15px] leading-relaxed text-[#3D3D3A]">{app.description}</p>

                <div className="flex flex-col gap-2">
                  {app.status === 'closed-beta' && app.betaGroupUrl && (
                    <a href={app.betaGroupUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light w-full">
                      1. Join tester group &rarr;
                    </a>
                  )}
                  {app.playTestingUrl && (
                    <a href={app.playTestingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light w-full">
                      {app.status === 'closed-beta' ? '2. Opt in on Google Play' : 'Early access on Google Play'} &rarr;
                    </a>
                  )}
                  {app.playStoreUrl && (
                    <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full">
                      {playIcon} Google Play
                    </a>
                  )}
                  {app.appStoreUrl && (
                    <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full">
                      App Store
                    </a>
                  )}
                  {app.projectUrl && (
                    <Link href={app.projectUrl} className="btn btn-light w-full">
                      View project &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
