import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'
import PageHero from '@/components/PageHero'
import FeatureList from '@/components/FeatureList'
import GameCard from '@/components/GameCard'

export const metadata: Metadata = {
  title: 'Android Native Engineering & Google Play Developer',
  description:
    'VAIIYA is an Android-first digital studio building high-performance native apps with Kotlin, Jetpack Compose, and 60fps mobile games shipped to the Google Play Store.',
}

const ANDROID_TECH = [
  {
    label: 'Modern Kotlin',
    detail: 'Idiomatic Kotlin utilizing Coroutines, StateFlow, and structured concurrency for resilient, battery-efficient asynchronous workloads.',
  },
  {
    label: 'Jetpack Compose',
    detail: 'Declarative, reactive UI built from the ground up with Material 3 / Material You dynamic color palettes and fluid physics-based animations.',
  },
  {
    label: 'Architecture Components',
    detail: 'Production MVVM/MVI architecture, Navigation Component, Room DB, encrypted DataStore, and WorkManager background tasks.',
  },
  {
    label: 'High-performance 60+ FPS',
    detail: 'Custom game loops, hardware-accelerated Canvas rendering, and zero-jank frame pacing tuned across low-end and flagship Android chipsets.',
  },
]

export default function AndroidPage() {
  const androidApps = portfolioApps.filter((app) => app.platforms.includes('android'))
  const liveApps = androidApps.filter((app) => app.status === 'live' || Boolean(app.playStoreUrl))
  const betaApps = androidApps.filter((app) => app.status === 'closed-beta' || app.status === 'in-development')

  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Android"
        title="Native Android engineering."
        description="We are an Android-first studio. Native experiences in Kotlin and Jetpack Compose, shipped with precision to Google Play."
      >
        <a
          href="https://play.google.com/store/apps/dev?id=7804895561285369781"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          Google Play profile &rarr;
        </a>
        <Link href="/early-access" className="btn btn-light">Join closed betas</Link>
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-7">Our native Android stack</h2>
          <p className="text-lg leading-relaxed text-[#3D3D3A] lg:col-span-5">
            No bloated web wrappers or brittle cross-platform shims. Native software that uses the full power of Android.
          </p>
        </div>
        <FeatureList items={ANDROID_TECH} />
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Production releases</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Live on Google Play</h2>
            </div>
            <div className="lg:col-span-5">
              <a
                href="https://play.google.com/store/apps/dev?id=7804895561285369781"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                All Google Play releases &rarr;
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {liveApps.map((app) => (
              <GameCard key={app.id} game={app} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <p className="eyebrow">Community-driven testing</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Join our Google Group early access program</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#3D3D3A]">
              Before anything launches to the public on Google Play, our tester group stress-tests it. Currently
              testing: <strong className="font-medium text-ink">HEXMOJI</strong>.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                1. Join Google Group
              </a>
              <a href="https://play.google.com/apps/testing/com.hexmoji" target="_blank" rel="noopener noreferrer" className="btn btn-light">
                2. Opt in for Hexmoji
              </a>
              <Link href="/early-access" className="btn btn-light">Full guide</Link>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F0EEE6] p-7 lg:col-span-4 lg:col-start-9">
            <h3 className="mb-5 font-serif text-2xl">Upcoming Android pipeline</h3>
            <ul className="divide-y divide-[#E8E6DC] text-[15px]">
              {betaApps.map((app) => (
                <li key={app.id} className="flex items-center justify-between gap-4 py-3">
                  <span>{app.name}</span>
                  <span className="shrink-0 text-sm text-[#5E5D59]">
                    {app.status === 'closed-beta' ? 'Closed beta' : 'In development'}
                  </span>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 py-3">
                <span>Next-gen apps</span>
                <span className="text-sm text-[#5E5D59]">Jetpack Compose</span>
              </li>
            </ul>
            <Link href="/games" className="link-arrow mt-5">Explore all games &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E6DC]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-6 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10">
          <h3 className="font-serif text-3xl lg:col-span-7">Looking for our iOS roadmap?</h3>
          <div className="space-y-4 lg:col-span-5">
            <p className="leading-relaxed text-[#3D3D3A]">
              Our active releases are currently focused on Android, but we also maintain deep Swift and SwiftUI expertise.
            </p>
            <Link href="/ios" className="link-arrow">View iOS capabilities &amp; roadmap &rarr;</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
