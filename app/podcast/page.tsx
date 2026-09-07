import type { Metadata } from 'next'
import { getPodcastData } from '@/lib/podcast'
import PodcastPlayer from '@/components/PodcastPlayer'
import { SITE_URL as siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Podcast | VAIIYA — De Toekomst van AI & Robotica',
  description:
    'Luister naar de officiële VAIIYA Podcast over AI-prompting, gauntlet loops, autonome agents en de technologie van morgen.',
  alternates: {
    canonical: `${siteUrl}/podcast`,
  },
  openGraph: {
    title: 'Podcast | VAIIYA — De Toekomst van AI & Robotica',
    description:
      'Luister naar de officiële VAIIYA Podcast over AI-prompting, gauntlet loops, autonome agents en de technologie van morgen.',
    url: `${siteUrl}/podcast`,
    type: 'website',
    images: [
      'https://media.rss.com/vaiiya/podcast_cover_20260826_202755_d75539571ef52f597940a8c70d7dfa21.png',
    ],
  },
}

export default async function PodcastPage() {
  const channel = await getPodcastData()

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'PodcastSeries',
        name: channel.title,
        description: channel.description,
        url: `${siteUrl}/podcast`,
        image: channel.image,
        webFeed: channel.feedUrl,
        author: {
          '@type': 'Organization',
          name: 'VAIIYA Studio',
          url: siteUrl,
        },
      },
      ...channel.episodes.map((ep) => ({
        '@type': 'PodcastEpisode',
        name: ep.title,
        description: ep.description,
        url: `${siteUrl}/podcast`,
        datePublished: ep.pubDate,
        duration: `PT${Math.floor(ep.durationSeconds / 60)}M${ep.durationSeconds % 60}S`,
        associatedMedia: {
          '@type': 'MediaObject',
          contentUrl: ep.audioUrl,
        },
      })),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Podcast',
            item: `${siteUrl}/podcast`,
          },
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen bg-cream text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E25A3C]/10 border border-[#E25A3C]/20 text-[#E25A3C] text-xs font-bold uppercase tracking-widest mb-6">
            🎙️ Officiële Audio Feed
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif mb-6 leading-tight">
            VAIIYA <span className="text-[#E25A3C]">Podcast.</span>
          </h1>

          <p className="text-lg sm:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Diepgravende audio-afleveringen over AI-technieken, robotica-innovaties en de toekomst van autonome software.
          </p>
        </div>
      </section>

      {/* Main Podcast Content & Player */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <PodcastPlayer channel={channel} />
        </div>
      </section>
    </main>
  )
}
