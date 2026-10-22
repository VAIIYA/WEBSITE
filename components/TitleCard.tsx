import Link from 'next/link'
import { titlePath, type PortfolioApp } from '@/lib/portfolio'
import PlayButton from '@/components/PlayButton'

/** Card for a game or app: links to its detail page, with a Google Play button when it is live. */
export default function TitleCard({ app }: { app: PortfolioApp }) {
  const href = titlePath(app)
  const live = app.status === 'live' && Boolean(app.playStoreUrl)

  return (
    <article className="group flex flex-col rounded-2xl bg-[#F0EEE6] p-3 transition-colors hover:bg-[#E8E6DC]">
      <Link href={href} className="block" aria-label={app.name}>
        <div className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${app.gradient}`}>
          {app.featureImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={app.featureImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center font-serif text-6xl text-ivory/90">
              {app.name.charAt(0)}
            </span>
          )}
          {!live && (
            <span className="absolute left-3 top-3 rounded-md bg-ivory px-2 py-1 text-xs font-medium text-ink">
              Coming soon
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 pt-5">
        <div className="mb-3 flex flex-wrap gap-2 text-xs text-[#5E5D59]">
          <span className="rounded border border-[#D1CFC5] px-1.5 py-0.5">{app.category === 'game' ? 'Game' : 'App'}</span>
          {app.tech?.map((t) => (
            <span key={t} className="rounded border border-[#D1CFC5] px-1.5 py-0.5">{t}</span>
          ))}
        </div>
        <h3 className="mb-2 font-serif text-2xl leading-tight">
          <Link href={href}>{app.name}</Link>
        </h3>
        <p className="mb-6 flex-1 text-[15px] leading-relaxed text-[#3D3D3A]">{app.summary}</p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          {live && app.playStoreUrl ? <PlayButton href={app.playStoreUrl} /> : <span />}
          <Link href={href} className="link-arrow">
            Details <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
