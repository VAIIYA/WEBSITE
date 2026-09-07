import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllTags, getPostsByTagSlug, slugifyTag } from '@/lib/posts'

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }))
}

export function generateMetadata({ params }: { params: { tag: string } }): Metadata {
  const posts = getPostsByTagSlug(params.tag)
  if (posts.length === 0) return {}
  const displayTag = posts[0].tags?.find((t) => slugifyTag(t) === params.tag) || params.tag

  return {
    title: `${displayTag} — Nieuws`,
    description: `Alle VAIIYA-nieuwsartikelen getagd met ${displayTag}.`,
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getPostsByTagSlug(params.tag)
  if (posts.length === 0) notFound()

  const displayTag = posts[0].tags?.find((t) => slugifyTag(t) === params.tag) || params.tag

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
            🏷️ TAG
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif mb-6 leading-tight">
            {displayTag}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {posts.length} {posts.length === 1 ? 'artikel' : 'artikelen'} getagd met &ldquo;{displayTag}&rdquo;.
          </p>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-metamask-orange/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-metamask-purple/5 rounded-full blur-3xl opacity-50"></div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="group rounded-3xl border border-metamask-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <Link href={`/news/${post.slug}`} className="block">
                  {post.coverImage && (
                    <div className="aspect-[16/9] w-full overflow-hidden bg-metamask-gray-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 pb-0">
                    {post.date && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-metamask-orange mb-2">
                        {formatDate(post.date)}
                        {post.sourceName && (
                          <span className="text-gray-400 normal-case font-medium"> &middot; via {post.sourceName}</span>
                        )}
                      </p>
                    )}
                    <h2 className="text-xl font-semibold text-slate-900 font-serif mb-2 group-hover:text-metamask-purple transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 p-6 pt-4">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/news/tag/${slugifyTag(tag)}`}
                        className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                          slugifyTag(tag) === params.tag
                            ? 'bg-metamask-purple text-white border-metamask-purple'
                            : 'bg-metamask-gray-50 border-metamask-gray-100 text-metamask-purple hover:bg-metamask-purple hover:text-white'
                        }`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
