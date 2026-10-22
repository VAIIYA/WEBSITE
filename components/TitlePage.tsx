import Link from 'next/link'
import { displayName, portfolioApps, titlePath, type DescriptionBlock, type PortfolioApp } from '@/lib/portfolio'
import PageHero from '@/components/PageHero'
import PlayButton from '@/components/PlayButton'


function Description({ blocks }: { blocks: DescriptionBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.t === 'h') {
          return (
            <h3 key={i} className="!mt-10 font-serif text-2xl text-ink first:!mt-0">
              {b.text}
            </h3>
          )
        }
        if (b.t === 'ul') {
          return (
            <ul key={i} className="border-t border-[#D1CFC5]">
              {b.items.map((item) => (
                <li key={item} className="border-b border-[#D1CFC5] py-3 text-[16px] leading-relaxed text-[#3D3D3A]">
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="text-[17px] leading-relaxed text-[#3D3D3A]">
            {b.text}
          </p>
        )
      })}
    </div>
  )
}

/** Detail page for one game or app. */
export default function TitlePage({ app }: { app: PortfolioApp }) {
  const isGame = app.category === 'game'
  const live = app.status === 'live' && Boolean(app.playStoreUrl)
  const others = portfolioApps.filter((a) => a.id !== app.id)
  const listPath = isGame ? '/games' : '/apps'

  const glance: { label: string; value: string }[] = [
    { label: 'Type', value: isGame ? 'Game' : 'App' },
    { label: 'Platform', value: 'Android · Google Play' },
    { label: 'Status', value: live ? 'Available now' : 'In development' },
  ]
  if (app.facts?.category) glance.push({ label: 'Category', value: app.facts.category })
  if (app.facts?.rating) glance.push({ label: 'Rating', value: app.facts.rating })
  if (app.facts?.ads !== undefined) glance.push({ label: 'Ads', value: app.facts.ads ? 'Contains ads' : 'No ads' })
  if (app.tech?.length) glance.push({ label: 'Built with', value: app.tech.join(', ') })

  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow={`${isGame ? 'Game' : 'App'} · Android`}
        title={displayName(app.name)}
        description={app.summary}
        media={
          <div className={`relative aspect-[2/1] overflow-hidden rounded-2xl bg-gradient-to-br ${app.gradient}`}>
            {app.featureImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={app.featureImage} alt={displayName(app.name)} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <span className="text-center font-serif text-5xl text-ivory sm:text-8xl">{displayName(app.name)}</span>
              </div>
            )}
          </div>
        }
      >
        {live && app.playStoreUrl ? (
          <PlayButton href={app.playStoreUrl} size="lg" />
        ) : (
          <span className="inline-flex items-center rounded-xl border border-[#D1CFC5] px-5 py-3.5 text-[0.95rem] text-[#5E5D59]">
            Coming soon to Google Play
          </span>
        )}
        <Link href={listPath} className="btn btn-light !py-3.5">
          &larr; All {isGame ? 'games' : 'apps'}
        </Link>
      </PageHero>

      <section className="border-y border-[#E8E6DC]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow mb-4">At a glance</p>
              <dl className="border-t border-[#D1CFC5] text-[15px]">
                {glance.map((g) => (
                  <div key={g.label} className="grid grid-cols-3 gap-4 border-b border-[#D1CFC5] py-3">
                    <dt className="text-[#5E5D59]">{g.label}</dt>
                    <dd className="col-span-2">{g.value}</dd>
                  </div>
                ))}
              </dl>
              {live && app.playStoreUrl && (
                <div className="mt-6">
                  <PlayButton href={app.playStoreUrl} />
                </div>
              )}
              <Link href={app.privacyHref ?? '/privacy-policy'} className="link-arrow mt-6">
                Privacy &amp; data deletion <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <h2 className="mb-8 font-serif text-4xl leading-tight sm:text-5xl">
              About {isGame ? 'this game' : 'this app'}
            </h2>
            <Description blocks={app.about} />
          </div>
        </div>
      </section>

      {app.screenshots && app.screenshots.length > 0 && (
        <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <h2 className="mb-10 font-serif text-4xl leading-tight sm:text-5xl">Screenshots</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {app.screenshots.map((shot) => (
              <div key={shot.src} className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#F0EEE6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.src} alt={shot.alt} className="absolute inset-0 h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {live && app.playStoreUrl && (
        <section className="bg-ink text-ivory">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Download {displayName(app.name)}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#B0AEA5]">Available now on Google Play.</p>
            <div className="mt-8 flex justify-center">
              <PlayButton href={app.playStoreUrl} size="lg" tone="light" />
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 className="mb-10 font-serif text-4xl leading-tight sm:text-5xl">More from VAIIYA</h2>
        <ul className="border-t border-[#D1CFC5]">
          {others.map((o) => (
            <li key={o.id} className="border-b border-[#D1CFC5]">
              <Link href={titlePath(o)} className="group flex items-baseline justify-between gap-6 py-6">
                <span className="font-serif text-3xl">{displayName(o.name)}</span>
                <span className="hidden flex-1 text-[15px] text-[#5E5D59] sm:block">{o.summary}</span>
                <span aria-hidden="true" className="text-xl text-[#87867F] transition-transform group-hover:translate-x-1 group-hover:text-ink">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
