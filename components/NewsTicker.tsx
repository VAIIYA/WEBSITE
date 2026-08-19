import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

interface NewsTickerProps {
  posts: PostMeta[]
}

export default function NewsTicker({ posts }: NewsTickerProps) {
  const items =
    posts.length > 0
      ? posts.map((post) => ({ label: post.title, href: `/news/${post.slug}` }))
      : [{ label: 'Welcome to VAIIYA — websites, apps & games, built right.', href: '/news' }]

  return (
    <div className="relative bg-ink text-cream overflow-hidden">
      <div className="flex items-center">
        <div className="ticker-track flex shrink-0 items-center gap-10 py-2.5 pr-10">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-10 pl-10"
            >
              {items.map((item, i) => (
                <Link
                  key={`${copy}-${i}`}
                  href={item.href}
                  tabIndex={copy === 1 ? -1 : 0}
                  className="flex items-center gap-10 text-xs font-medium uppercase tracking-wider text-cream/90 hover:text-coral transition-colors whitespace-nowrap"
                >
                  <span>📰 {item.label}</span>
                  <span className="text-coral">&middot;</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/news"
        className="hidden sm:flex absolute right-0 top-0 h-full items-center gap-1.5 bg-coral pl-4 pr-5 text-xs font-semibold uppercase tracking-wider text-cream hover:bg-coral/90 transition-colors"
      >
        Read News &rarr;
      </Link>
    </div>
  )
}
