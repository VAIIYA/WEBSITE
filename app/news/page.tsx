import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'News',
  description: 'Daily breakthroughs in AI, gaming innovations, and robotics — explained simply by VAIIYA.',
}

export default function NewsPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid">
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metamask-orange/10 text-metamask-orange text-sm font-medium mb-8">
            ⚡ AI, Gaming &amp; Robotics News
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif mb-6 leading-tight">
            VAIIYA <span className="text-metamask-orange">News.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Daily breakthroughs in AI, gaming innovations, and robotics — explained simply.
          </p>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-metamask-orange/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-metamask-purple/5 rounded-full blur-3xl opacity-50"></div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No posts yet — check back soon.</p>
          ) : (
            <ul className="divide-y divide-metamask-gray-100 border-y border-metamask-gray-100">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/news/${post.slug}`}
                    className="group block py-4 hover:bg-metamask-gray-50 -mx-3 px-3 rounded-lg transition-colors text-base sm:text-lg text-slate-900 font-serif leading-snug hover:text-metamask-purple"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  )
}
