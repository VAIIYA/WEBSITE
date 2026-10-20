import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FeatureList from '@/components/FeatureList'

export const metadata: Metadata = {
  title: 'iOS Engineering & Product Roadmap',
  description:
    'Learn about VAIIYA’s Swift & SwiftUI iOS engineering capabilities, our Android-first roadmap, and upcoming App Store releases.',
}

const IOS_ROADMAP = [
  {
    title: 'HEXMOJI (iOS)',
    status: 'Planned Port',
    eta: 'Following Android Production Release',
    desc: 'The complete Kawaii Hexxagon board game rewritten in native SwiftUI and GameKit with Game Center leaderboards and Metal-accelerated effects.',
  },
  {
    title: 'FLAPMOJI (iOS)',
    status: 'In Design',
    eta: 'Following Android Beta Cycle',
    desc: 'One-tap arcade physics runner built natively with SpriteKit/Swift for zero input latency on ProMotion 120Hz displays.',
  },
]

const IOS_STACK = [
  { label: 'Swift & Concurrency', detail: 'Modern Swift with async/await, Actors and Sendable for memory safety and zero data races.' },
  { label: 'SwiftUI & Metal', detail: 'Fluid declarative interfaces with Metal shaders for high frame-rate effects and 120Hz scrolling.' },
  { label: 'Unity & GameKit', detail: 'Unity builds with iOS native bridges, Game Center achievements and low-latency touch controls.' },
  { label: 'Apple ecosystem', detail: 'StoreKit 2 in-app purchases, haptics, Dynamic Island and native home screen widgets.' },
]

export default function IosPage() {
  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="iOS"
        title="iOS engineering and roadmap."
        description="Apple engineering with Swift and SwiftUI — and a transparent look at what’s coming to the App Store."
      >
        <Link href="/android" className="btn btn-dark">Active Android releases &rarr;</Link>
        <Link href="/contact" className="btn btn-light">Join the iOS waitlist</Link>
      </PageHero>

      <section className="border-y border-[#E8E6DC]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <p className="eyebrow lg:col-span-3">Why Android-first</p>
          <div className="space-y-6 lg:col-span-9">
            <p className="font-serif text-3xl leading-[1.2] sm:text-[40px]">
              We release polished, thoroughly tested software — not rushed cross-platform ports.
            </p>
            <div className="grid grid-cols-1 gap-8 text-[17px] leading-relaxed text-[#3D3D3A] md:grid-cols-2">
              <p>
                Android lets us run agile closed beta cycles through our{' '}
                <a
                  href="https://groups.google.com/g/vaiiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#D1CFC5] underline-offset-4 hover:decoration-ink"
                >
                  Google Group community
                </a>
                , ship daily patches without review friction, and perfect gameplay feel with real players.
              </p>
              <p>
                Once our Android games and apps reach stability and feature maturity, we bring them to iOS as native
                Swift &amp; SwiftUI builds — engineered without third-party bridging layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-7">Our iOS tech stack</h2>
          <p className="text-lg leading-relaxed text-[#3D3D3A] lg:col-span-5">
            When we build for iOS, we write native code that feels at home in the Apple ecosystem.
          </p>
        </div>
        <FeatureList items={IOS_STACK} />
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-7">Upcoming iOS releases</h2>
            <p className="text-lg leading-relaxed text-[#3D3D3A] lg:col-span-5">
              Planned App Store ports as they move through design and production.
            </p>
          </div>

          <ul className="border-t border-[#D1CFC5]">
            {IOS_ROADMAP.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-1 gap-4 border-b border-[#D1CFC5] py-8 md:grid-cols-12 md:items-center"
              >
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <span className="mt-2 inline-block rounded border border-[#D1CFC5] px-1.5 py-0.5 text-xs text-[#5E5D59]">
                    {item.status}
                  </span>
                </div>
                <div className="space-y-1 md:col-span-6">
                  <p className="text-[15px] leading-relaxed text-[#3D3D3A]">{item.desc}</p>
                  <p className="text-sm text-[#87867F]">Target: {item.eta}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <Link href="/contact" className="link-arrow">Request alert &rarr;</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-24 text-center sm:px-6 lg:px-10 lg:py-32">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Want to test right now on Android?</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3D3D3A]">
          With an Android device you don&apos;t have to wait. Play HEXMOJI today on Google Play through our tester community.
        </p>
        <div className="mt-10">
          <Link href="/early-access" className="btn btn-dark">Join early access on Android</Link>
        </div>
      </section>
    </main>
  )
}
