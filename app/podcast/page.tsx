import type { Metadata } from 'next'
import { getPodcast, PODCAST_LINKS } from '@/lib/podcast'
import PodcastVideo from '@/components/PodcastVideo'
import PodcastPlayer from '@/components/PodcastPlayer'

export const metadata: Metadata = {
  title: 'Podcast',
  description:
    'The VAIIYA podcast — the future of AI and robotics, explained simply. Watch on YouTube or listen wherever you get your podcasts.',
}

export const revalidate = 3600

export default async function PodcastPage() {
  const data = await getPodcast()
  const show = data?.show
  const episodes = data?.episodes ?? []

  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative pt-16 pb-12 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {show?.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={show.image}
                alt=""
                className="h-28 w-28 shrink-0 rounded-2xl border border-card-border object-cover shadow-sm"
              />
            )}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-violet-200 text-violet-800 text-[10px] font-bold uppercase tracking-widest">
                🎙️ The VAIIYA Podcast
              </div>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold font-serif leading-tight">
                {show?.title ?? 'VAIIYA'}
              </h1>
            </div>
          </div>
          {show?.description && (
            <p className="mt-5 text-lg text-ink/70 leading-relaxed max-w-2xl">{show.description}</p>
          )}
        </div>
      </section>

      {/* Watch */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-serif mb-5">Watch on YouTube</h2>
          <PodcastVideo />
        </div>
      </section>

      {/* Listen */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-serif mb-5">Listen to episodes</h2>
          <PodcastPlayer episodes={episodes} />
        </div>
      </section>

      {/* Everywhere */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-serif mb-2">Follow the show anywhere</h2>
          <p className="text-ink/60 text-sm mb-8">Same feed, your app of choice.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PODCAST_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-card-border bg-white px-4 py-3 text-sm font-semibold text-ink hover:border-violet-300 hover:-translate-y-0.5 transition-all"
              >
                <span aria-hidden>{link.icon || '🎧'}</span>
                <span className="truncate">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
