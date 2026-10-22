import Link from 'next/link'
import { displayName, titlePath, type PortfolioApp } from '@/lib/portfolio'
import { privacySections } from '@/lib/privacy'
import PageHero from '@/components/PageHero'
import PlayButton from '@/components/PlayButton'
import TitleBanner from '@/components/TitleBanner'
import DescriptionBlocks from '@/components/DescriptionBlocks'

const sectionTitle = 'font-serif text-3xl text-ink mb-6 pt-8 border-t border-[#D1CFC5]'

/** Privacy policy page for one game or app, with the same hero banner as its detail page. */
export default function TitleLegalPage({ app }: { app: PortfolioApp }) {
  const name = displayName(app.name)
  const sections = privacySections[app.id] ?? []
  const live = app.status === 'live' && Boolean(app.playStoreUrl)

  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow={`${name} · Privacy`}
        title="Privacy policy"
        description={`How ${name} handles your data.`}
        media={<TitleBanner app={app} />}
      >
        <Link href={titlePath(app)} className="btn btn-dark !py-3.5">&larr; Back to {name}</Link>
        {live && app.playStoreUrl && <PlayButton href={app.playStoreUrl} size="lg" tone="light" />}
      </PageHero>

      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:pb-32">
        <p className="mb-14 text-[17px] leading-relaxed text-[#3D3D3A]">
          This policy explains how {name}, made by VAIIYA, handles your data. It supplements the{' '}
          <Link href="/privacy-policy" className="text-[#C2603F] underline underline-offset-4 hover:text-ink">
            general VAIIYA privacy policy
          </Link>
          , which also applies. Last updated: October 2026.
        </p>

        <div className="space-y-14">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className={sectionTitle}>{s.title}</h2>
              <DescriptionBlocks blocks={s.blocks} />
            </section>
          ))}

          {app.links && app.links.length > 0 && (
            <section>
              <h2 className={sectionTitle}>Related</h2>
              <ul className="border-t border-[#D1CFC5]">
                {app.links.map((l) => (
                  <li key={l.href} className="border-b border-[#D1CFC5] py-3">
                    <Link href={l.href} className="link-arrow">
                      {l.label} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className={sectionTitle}>Contact</h2>
            <p className="text-[17px] leading-relaxed text-[#3D3D3A]">
              Questions or requests about {name}? Contact us at{' '}
              <a href="mailto:vaiiya@googlegroups.com" className="font-mono text-[#C2603F] underline underline-offset-4 hover:text-ink">
                vaiiya@googlegroups.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
