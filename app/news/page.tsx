import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'News',
  description: 'AI news, agentic engineering updates, and build notes from VAIIYA.',
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metamask-orange/10 text-metamask-orange text-sm font-medium mb-8">
            📰 AI News & Build Notes
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif mb-6 leading-tight">
            VAIIYA <span className="text-metamask-orange">News.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Short updates on AI, agentic engineering, and what we&apos;re building.
          </p>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-metamask-orange/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-metamask-purple/5 rounded-full blur-3xl opacity-50"></div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No posts yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group block rounded-3xl border border-metamask-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
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
                  <div className="p-6">
                    {post.date && (
                      <p className="text-xs font-semibold uppercase tracking-wider text-metamask-orange mb-2">
                        {formatDate(post.date)}
                      </p>
                    )}
                    <h2 className="text-xl font-semibold text-slate-900 font-serif mb-2 group-hover:text-metamask-purple transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-metamask-gray-50 border border-metamask-gray-100 text-[10px] font-semibold uppercase tracking-wider text-metamask-purple"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
