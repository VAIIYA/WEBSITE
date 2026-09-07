import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getCoverImage, slugifyTag } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Nieuws',
  description: 'AI-industrienieuws en ontwikkelupdates van VAIIYA.',
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metamask-orange/10 text-metamask-orange text-sm font-medium mb-8">
            📰 AI-Nieuws & Ontwikkelupdates
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif mb-6 leading-tight">
            VAIIYA <span className="text-metamask-orange">Nieuws.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            AI-industrienieuws, eenvoudig uitgelegd, plus updates over waar we aan werken.
          </p>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-metamask-orange/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-metamask-purple/5 rounded-full blur-3xl opacity-50"></div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">Nog geen berichten — kom snel terug.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="group rounded-3xl border border-metamask-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <Link href={`/news/${post.slug}`} className="block">
                    <div className="aspect-[16/9] w-full overflow-hidden bg-metamask-gray-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getCoverImage(post)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
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
                          className="px-2.5 py-1 rounded-full bg-metamask-gray-50 border border-metamask-gray-100 text-[10px] font-semibold uppercase tracking-wider text-metamask-purple hover:bg-metamask-purple hover:text-white transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
