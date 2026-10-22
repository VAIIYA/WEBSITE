import type { Metadata } from 'next'
import { getPodcast, PODCAST_LINKS } from '@/lib/podcast'
import PageHero from '@/components/PageHero'
import PodcastPlayer from '@/components/PodcastPlayer'

export const metadata: Metadata = {
  title: 'Podcast',
  description:
    'The VAIIYA podcast — the future of AI and robotics, explained simply. Listen here or wherever you get your podcasts.',
}

export const revalidate = 3600

export default async function PodcastPage() {
  const data = await getPodcast()
  const show = data?.show
  const episodes = data?.episodes ?? []

  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="The VAIIYA Podcast"
        title={show?.title ?? 'VAIIYA'}
        description={show?.description}
      />

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl">Listen to episodes</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3D3D3A]">Press play, or pick any episode from the list.</p>
          </div>
          <div className="lg:col-span-8">
            <PodcastPlayer episodes={episodes} cover={show?.image} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 className="mb-2 font-serif text-3xl sm:text-4xl">Follow the show anywhere</h2>
        <p className="mb-10 text-[#5E5D59]">Same feed, your app of choice.</p>
        <ul className="grid grid-cols-1 border-t border-[#D1CFC5] sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {PODCAST_LINKS.map((link) => (
            <li key={link.name} className="border-b border-[#D1CFC5]">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 text-[15px]"
              >
                <span>{link.name}</span>
                <span aria-hidden="true" className="text-[#87867F] transition-colors group-hover:text-ink">&#8599;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
