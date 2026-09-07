import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllTags } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Alle onderwerpen waarover VAIIYA nieuws publiceert.',
}

export default function TagsOverviewPage() {
  const tags = getAllTags()

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-metamask-purple hover:text-metamask-orange transition-colors mb-8"
          >
            &larr; Terug naar Nieuws
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metamask-orange/10 text-metamask-orange text-sm font-medium mb-8 block mx-auto w-fit">
            🏷️ ALLE TAGS
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif mb-6 leading-tight">
            Onderwerpen.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Blader per onderwerp door al het VAIIYA-nieuws.
          </p>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-metamask-orange/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-metamask-purple/5 rounded-full blur-3xl opacity-50"></div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {tags.map((t) => (
            <Link
              key={t.slug}
              href={`/news/tag/${t.slug}`}
              className="px-5 py-2.5 rounded-full bg-metamask-gray-50 border border-metamask-gray-100 text-sm font-semibold text-metamask-purple hover:bg-metamask-purple hover:text-white transition-colors"
            >
              {t.tag} <span className="opacity-60">({t.count})</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
