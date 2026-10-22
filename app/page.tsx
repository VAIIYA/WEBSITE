import Link from 'next/link'
import PodcastVideo from '@/components/PodcastVideo'
import { portfolioApps, PLAY_PROFILE_URL } from '@/lib/portfolio'
import TitleCard from '@/components/TitleCard'
import Wordmark from '@/components/Wordmark'

const PLAY_PROFILE = PLAY_PROFILE_URL

const titles = portfolioApps.filter((a) => a.status === 'live')

const offerings = [
  {
    title: 'Games',
    description: 'Arcade and puzzle games built with Unity, tuned for smooth, responsive touch play.',
    href: '/games',
  },
  {
    title: 'Apps',
    description: 'Focused utility apps with a clear design and nothing you don’t need.',
    href: '/apps',
  },
  {
    title: 'Websites',
    description: 'Fast, considered websites and PWAs built with Next.js, deployed on Vercel.',
    href: '/websites',
  },
]

export default function Home() {
  return (
    <main className="w-full bg-ivory text-ink">
      {/* Hero */}
      <section className="mx-auto max-w-site px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-10 lg:pb-16 lg:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <h1 className="rise-in font-serif text-[44px] leading-[1.04] sm:text-6xl lg:col-span-8 lg:text-[84px]">
            Android games and apps, made with care.
          </h1>
          <div className="rise-in rise-in-2 space-y-6 lg:col-span-4 lg:pb-3">
            <p className="text-lg leading-relaxed text-[#3D3D3A]">
              VAIIYA is an independent studio making games and apps — live on Google Play, crafted by people,
              accelerated by AI.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PLAY_PROFILE} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                Find us on Google Play &rarr;
              </a>
              <Link href="/portfolio" className="btn btn-light">
                See all titles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Horizon visual */}
      <section className="mx-auto max-w-site px-4 sm:px-6 lg:px-10">
        <div className="rise-in rise-in-3 relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[21/9]">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 95% 70% at 50% 128%, #15130F 0%, #15130F 61.5%, #F7CFA0 62.6%, #E8925A 64.5%, #B95E3E 68%, #5E4A4C 75%, #2D3442 85%, #1A1F27 100%)',
            }}
          />
          <svg className="absolute inset-0 h-full w-full opacity-[0.22] mix-blend-overlay" aria-hidden="true">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-ivory sm:p-8">
            <Wordmark className="text-xl opacity-90 sm:text-2xl" />
            <span className="hidden text-sm text-ivory/70 sm:block">Live on Google Play</span>
          </div>
        </div>
      </section>

      {/* Titles */}
      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-7">Live on Google Play</h2>
          <div className="space-y-4 lg:col-span-5">
            <p className="text-lg leading-relaxed text-[#3D3D3A]">
              Every title is free to try. Tap one to see what it does and how it’s built.
            </p>
            <a href={PLAY_PROFILE} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Our Google Play profile &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {titles.map((t) => (
            <TitleCard key={t.id} app={t} />
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="border-y border-[#E8E6DC]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <p className="eyebrow lg:col-span-3">Our approach</p>
          <div className="space-y-8 lg:col-span-9">
            <p className="font-serif text-3xl leading-[1.2] sm:text-[44px]">
              We are a small studio that pairs human craft with AI agents like Claude Code. That lets us ship
              faster — without cutting the corners that make software feel good to use.
            </p>
            <Link href="/about" className="link-arrow">
              More about VAIIYA <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What we make */}
      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-7">What we make</h2>
          <p className="text-lg leading-relaxed text-[#3D3D3A] lg:col-span-5">
            Our focus is Android games and apps, plus websites for clients.
          </p>
        </div>

        <ul className="border-t border-[#D1CFC5]">
          {offerings.map((d, i) => (
            <li key={d.title} className="border-b border-[#D1CFC5]">
              <Link
                href={d.href}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-7 sm:grid-cols-[4rem_14rem_1fr_auto] sm:py-9"
              >
                <span className="font-mono text-xs text-[#87867F]">0{i + 1}</span>
                <span className="font-serif text-3xl leading-none sm:text-4xl">{d.title}</span>
                <span className="col-span-3 col-start-2 text-[15px] leading-relaxed text-[#5E5D59] sm:col-span-1 sm:col-start-auto">
                  {d.description}
                </span>
                <span
                  aria-hidden="true"
                  className="col-start-3 row-start-1 text-xl text-[#87867F] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink sm:col-start-auto sm:row-start-auto"
                >
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Podcast */}
      <section className="bg-[#F0EEE6]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-28">
          <div className="space-y-6 lg:col-span-4">
            <p className="eyebrow">The VAIIYA Podcast</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">The future of AI &amp; robotics</h2>
            <p className="text-lg leading-relaxed text-[#3D3D3A]">
              Groundbreaking technology and the people shaping it — explained simply. New episodes on YouTube and
              every podcast app.
            </p>
            <Link href="/podcast" className="btn btn-dark">
              All episodes
            </Link>
          </div>
          <div className="lg:col-span-8">
            <PodcastVideo />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-site px-4 py-24 text-center sm:px-6 lg:px-10 lg:py-32">
        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Have something worth building?</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3D3D3A]">
          Tell us about your app, game or website idea.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-dark">
            Start a conversation
          </Link>
          <a
            href={PLAY_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            Our apps on Google Play
          </a>
        </div>
      </section>
    </main>
  )
}
