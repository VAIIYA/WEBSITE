import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  media?: ReactNode
}

/** Shared page header: serif headline on the left, intro + actions on the right. */
export default function PageHero({ eyebrow, title, description, children, media }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-site px-4 pb-14 pt-14 sm:px-6 sm:pt-20 lg:px-10 lg:pb-20 lg:pt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
        <div className="rise-in space-y-6 lg:col-span-8">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="font-serif text-[40px] leading-[1.06] sm:text-6xl lg:text-[72px]">{title}</h1>
        </div>
        {(description || children) && (
          <div className="rise-in rise-in-2 space-y-6 lg:col-span-4 lg:pb-2">
            {description && <p className="text-lg leading-relaxed text-[#3D3D3A]">{description}</p>}
            {children && <div className="flex flex-wrap gap-3">{children}</div>}
          </div>
        )}
      </div>
      {media && <div className="mt-12">{media}</div>}
    </section>
  )
}
