import Link from 'next/link'
import PodcastVideo from '@/components/PodcastVideo'
import Wordmark from '@/components/Wordmark'

const featured = [
  {
    tag: 'Live on Google Play',
    kind: 'Game',
    title: 'Hexmoji',
    description:
      'A hex-grid strategy game: clone, jump and convert your opponent’s emoji before the board fills up. Plays offline against an adaptive CPU.',
    rows: [
      { label: 'Get the game', value: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.hexmoji' },
      { label: 'Details', value: 'Hexmoji', href: '/games/hexmoji' },
    ],
    cta: { label: 'Play Hexmoji', href: 'https://play.google.com/store/apps/details?id=com.hexmoji' },
  },
  {
    tag: 'Open to everyone',
    kind: 'Community',
    title: 'Early Access',
    description:
      'Join our tester group on Google Groups and play closed betas of upcoming Android releases before they launch publicly.',
    rows: [
      { label: 'Tester group', value: 'Google Groups', href: 'https://groups.google.com/g/vaiiya' },
      { label: 'How it works', value: 'Guide', href: '/early-access' },
    ],
    cta: { label: 'Become a tester', href: '/early-access' },
  },
  {
    tag: 'New episodes',
    kind: 'Podcast',
    title: 'The VAIIYA Podcast',
    description:
      'Conversations about AI, robotics and the people building what comes next, explained in plain language.',
    rows: [
      { label: 'Watch', value: 'YouTube', href: 'https://www.youtube.com/@VAIIYA-MEDIA' },
      { label: 'Listen', value: 'All players', href: '/podcast' },
    ],
    cta: { label: 'Browse episodes', href: '/podcast' },
  },
]

const disciplines = [
  {
    title: 'Android',
    description: 'Native apps in Kotlin and Jetpack Compose, shipped to Google Play after a proper closed beta.',
    href: '/android',
  },
  {
    title: 'iOS',
    description: 'Swift and SwiftUI builds that bring our Android titles to the App Store.',
    href: '/ios',
  },
  {
    title: 'Games',
    description: 'Unity-powered arcade and puzzle games tuned for smooth, responsive touch play.',
    href: '/games',
  },
]

function isExternal(href: string) {
  return href.startsWith('http')
}

function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return isExternal(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <main className="w-full bg-ivory text-ink">
      {/* Hero */}
      <section className="mx-auto max-w-site px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-10 lg:pb-16 lg:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <h1 className="rise-in font-serif text-[44px] leading-[1.04] sm:text-6xl lg:col-span-8 lg:text-[84px]">
            Apps and games, made with care. We. As One.
          </h1>
          <div className="rise-in rise-in-2 space-y-6 lg:col-span-4 lg:pb-3">
            <p className="text-lg leading-relaxed text-[#3D3D3A]">
              VAIIYA is an independent studio building native Android and iOS apps and Unity games —
              crafted by people, accelerated by AI.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/portfolio" className="btn btn-dark">
                See our work
              </Link>
              <Link href="/early-access" className="btn btn-light">
                Join early access
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
            <span className="hidden text-sm text-ivory/70 sm:block">Android &middot; iOS &middot; Unity</span>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <article key={item.title} className="flex flex-col rounded-2xl bg-[#F0EEE6] p-6">
              <div className="mb-5 flex items-center gap-3 text-xs text-[#5E5D59]">
                <span className="rounded border border-[#D1CFC5] px-1.5 py-0.5">{item.kind}</span>
                <span>{item.tag}</span>
              </div>
              <h2 className="mb-3 font-serif text-[28px] leading-tight">{item.title}</h2>
              <p className="mb-8 text-[15px] leading-relaxed text-[#3D3D3A]">{item.description}</p>

              <div className="mt-auto">
                <dl className="divide-y divide-[#E8E6DC] border-y border-[#E8E6DC] text-sm">
                  {item.rows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-3">
                      <dt className="text-[#5E5D59]">{row.label}</dt>
                      <dd>
                        <SmartLink href={row.href} className="inline-flex items-center gap-1 hover:underline">
                          {row.value} <span aria-hidden="true">&#8599;</span>
                        </SmartLink>
                      </dd>
                    </div>
                  ))}
                </dl>
                <SmartLink
                  href={item.cta.href}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#D1CFC5] py-2.5 text-sm font-medium transition-colors hover:bg-[#E8E6DC]"
                >
                  {item.cta.label} <span aria-hidden="true">&rarr;</span>
                </SmartLink>
              </div>
            </article>
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

      {/* Disciplines */}
      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-7">What we make</h2>
          <p className="text-lg leading-relaxed text-[#3D3D3A] lg:col-span-5">
            Three disciplines, one standard. Every product starts on Android, is tested by our community, and grows
            from there.
          </p>
        </div>

        <ul className="border-t border-[#D1CFC5]">
          {disciplines.map((d, i) => (
            <li key={d.href} className="border-b border-[#D1CFC5]">
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
                  className="row-start-1 col-start-3 text-xl text-[#87867F] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink sm:row-start-auto sm:col-start-auto"
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
          Tell us about your app or game idea.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-dark">
            Start a conversation
          </Link>
          <a
            href="https://play.google.com/store/apps/dev?id=7804895561285369781"
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
