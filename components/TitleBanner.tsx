import { displayName, type PortfolioApp } from '@/lib/portfolio'

/** Wide hero banner for a title: its feature image, or a gradient with the name. */
export default function TitleBanner({ app }: { app: PortfolioApp }) {
  return (
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
  )
}
