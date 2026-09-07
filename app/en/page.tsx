import Link from 'next/link'
import { getAllPostsEn } from '@/lib/posts'
import { getPodcastData } from '@/lib/podcast'
import PodcastFeaturedPlayer from '@/components/PodcastFeaturedPlayer'
import LatestSocialVideos from '@/components/LatestSocialVideos'

// Keeps the latest-video widgets reasonably fresh without needing a
// redeploy every time something new gets posted.
export const revalidate = 3600

const pillars = [
  {
    href: '/en/websites',
    emoji: '🌐',
    title: 'Websites',
    description: 'Powerful websites & PWAs built with Next.js and Three.js.',
    accent: 'text-[#E25A3C]',
  },
  {
    href: '/en/apps',
    emoji: '📱',
    title: 'Apps',
    description: 'Native Android & iOS apps built with Kotlin and Swift.',
    accent: 'text-blue-600',
  },
  {
    href: '/en/games',
    emoji: '🎮',
    title: 'Games',
    description: 'Native mobile games, optimized for buttery-smooth 60fps+ gameplay.',
    accent: 'text-violet-600',
  },
  {
    href: '/en/contact',
    emoji: '🛡️',
    title: 'Contact',
    description: 'Get in touch with the studio directly or follow us on our channels.',
    accent: 'text-cyan-600',
  },
]

const stats = [
  { value: '4+', label: 'Live Products' },
  { value: 'NL', label: 'Dutch Studio' },
  { value: '100', label: 'Lighthouse Score' },
]

const dotColors = ['bg-[#E25A3C]', 'bg-blue-600', 'bg-violet-600', 'bg-emerald-600']

type FeedItem = {
  key: string
  date: Date
  href: string
  title: string
  kind: 'post' | 'podcast'
  translated?: boolean
}

export default async function HomeEn() {
  const allPosts = getAllPostsEn()

  const podcast = await getPodcastData()
  const latestEpisode = podcast.episodes[0]

  const feedItems: FeedItem[] = [
    ...allPosts.slice(0, 6).map((post): FeedItem => ({
      key: post.slug,
      date: new Date(post.date),
      href: post.translated ? `/en/news/${post.slug}` : `/news/${post.slug}`,
      title: post.title,
      kind: 'post',
      translated: post.translated,
    })),
    ...(latestEpisode
      ? [
          {
            key: latestEpisode.id,
            date: new Date(latestEpisode.pubDate),
            href: '/en/podcast',
            title: latestEpisode.title,
            kind: 'podcast' as const,
          },
        ]
      : []),
  ]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 6)

  let dotIndex = 0

  return (
    <main className="w-full min-h-screen bg-cream text-ink selection:bg-[#E25A3C] selection:text-white">
      {/* Latest news */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-card-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif">
              Latest News
            </h2>
            <Link href="/en/news" className="text-sm font-semibold text-[#E25A3C] hover:underline shrink-0">
              All news &rarr;
            </Link>
          </div>

          {feedItems.length > 0 && (
            <ul>
              {feedItems.map((item) => {
                if (item.kind === 'podcast') {
                  return (
                    <li key={item.key} className="border-b border-card-border last:border-b-0">
                      <Link
                        href={item.href}
                        className="group flex items-baseline gap-3 py-2.5 hover:bg-cream/70 -mx-2 px-2 rounded-lg transition-colors"
                      >
                        <span className="shrink-0">🎙️</span>
                        <span className="text-sm sm:text-base text-ink group-hover:text-[#E25A3C] transition-colors leading-snug">
                          <span className="font-bold text-[#E25A3C] mr-1.5 uppercase text-xs tracking-wide">New Episode:</span>
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  )
                }

                const dotColor = dotColors[dotIndex % dotColors.length]
                dotIndex += 1

                return (
                  <li key={item.key} className="border-b border-card-border last:border-b-0">
                    <Link
                      href={item.href}
                      className="group flex items-baseline gap-3 py-2.5 hover:bg-cream/70 -mx-2 px-2 rounded-lg transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`} />
                      <span className="text-sm sm:text-base text-ink group-hover:text-blue-600 transition-colors leading-snug">
                        {item.title}
                      </span>
                      {!item.translated && (
                        <span className="shrink-0 text-[10px] font-bold text-ink/30 uppercase tracking-wide">🇳🇱 NL</span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}

          {latestEpisode && (
            <div className="mt-10">
              <PodcastFeaturedPlayer channel={podcast} locale="en" />
            </div>
          )}

          <LatestSocialVideos locale="en" />
        </div>
      </section>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid shadow-[0_-1px_0_0_rgba(0,0,0,0.03)]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border text-xs font-semibold text-ink shadow-sm mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E25A3C] animate-pulse" />
            <span>THE DIGITAL STUDIO</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] font-serif mb-6">
            Websites, Apps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E25A3C] via-ink to-blue-600 italic">
              &amp; Games.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            VAIIYA builds powerful websites, native Android &amp; iOS apps and mobile games for teams that want to get it right.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link href="/en/websites" className="btn-metamask btn-orange text-base">
              See Our Work
            </Link>
            <Link href="/en/contact" className="btn-metamask btn-outline-dark text-base">
              Get In Touch
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="p-4 bg-card rounded-2xl border border-card-border text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#E25A3C] font-serif">{s.value}</div>
                <div className="text-[11px] font-semibold text-ink/60 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-card-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif">
              Discover VAIIYA
            </h2>
            <p className="text-ink/70 text-base leading-relaxed">
              Four pillars, one studio. Pick a path for the full story, the tech stack, and the shipped work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-card-border rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <span className="text-3xl mb-4">{p.emoji}</span>
                <h3 className={`text-xl font-bold font-serif mb-2 ${p.accent}`}>{p.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed flex-grow">{p.description}</p>
                <span className={`mt-5 text-sm font-semibold ${p.accent} group-hover:underline`}>
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
