import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Android Native Apps',
  description: 'Native Android apps built with Kotlin and Jetpack Compose — shipped to the Google Play Store.',
}

const stack = [
  { label: 'Kotlin / Jetpack Compose', detail: 'Modern native Android UI & Material 3' },
  { label: 'Coroutines & Flow', detail: 'Resilient, battery-efficient async pipelines' },
  { label: 'Google Play Store', detail: 'Verified developer & production releases' },
  { label: 'Closed Beta Community', detail: 'Google Group early tester feedback loops' },
]

export default function AppsPage() {
  const apps = portfolioApps.filter((app) => app.category === 'app')
  const liveApps = apps.filter((app) => app.status === 'live' || Boolean(app.playStoreUrl))

  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-blue-600 selection:text-white">
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
            📱 CORE PILLAR &bull; ANDROID NATIVE APPS
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Native <span className="italic text-blue-600">Android</span> Apps
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Engineered with Kotlin &amp; Jetpack Compose for Android. Shipped to the Google Play Store, designed for real-world reliability, fluid gesture response, and sleek Material 3 styling.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/dev?id=7804895561285369781"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask bg-blue-600 text-white hover:bg-blue-700 text-base font-bold shadow-lg"
            >
              Google Play Developer Store &rarr;
            </a>
            <Link
              href="/android"
              className="btn-metamask btn-outline-dark text-base font-bold"
            >
              🤖 Android Stack Deep-Dive
            </Link>
            <Link
              href="/ios"
              className="btn-metamask bg-card hover:bg-white text-base font-bold"
            >
              🍎 iOS Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((s) => (
            <div key={s.label} className="p-5 bg-card rounded-2xl border border-card-border">
              <div className="font-bold text-blue-600 font-serif text-sm">{s.label}</div>
              <div className="text-xs text-ink/60 font-medium mt-1">{s.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Apps Catalog */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Production Releases
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mt-1">
                Live on Google Play Store
              </h2>
            </div>
            <a
              href="https://play.google.com/store/apps/dev?id=7804895561285369781"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-600 hover:text-blue-800"
            >
              View Google Play Profile &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liveApps.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className={`h-48 bg-gradient-to-br ${app.gradient} p-6 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {app.platforms.map((p) => p.toUpperCase()).join(' · ')}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white font-bold text-lg">
                      {app.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif drop-shadow-md">{app.name}</h3>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                  <p className="text-ink/70 text-sm leading-relaxed">{app.description}</p>
                  <div className="space-y-2 pt-4 border-t border-card-border">
                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-metamask bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold text-center block"
                      >
                        Get on Google Play Store &rarr;
                      </a>
                    )}
                    {app.externalUrl && (
                      <a
                        href={app.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-metamask btn-outline-dark text-xs font-bold text-center block"
                      >
                        Live Demo Web Version
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In Development & Beta Pipeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-card-border bg-gradient-to-b from-white to-cream">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900/30">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Early Access &bull; Tester Community</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
                  Apps in Development &amp; Closed Beta
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Before our native Android applications reach the public Google Play Store, they pass through closed beta cohorts in our Google Group community. Testers help us validate Jetpack Compose UI smoothness, background worker battery efficiency, and device compatibility across Android 8 through 15.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-2">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 font-mono">
                    ✓ Kotlin Coroutines &amp; Flow
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 font-mono">
                    ✓ Material You / Dynamic Theming
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 font-mono">
                    ✓ Zero Web Wrappers
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="https://groups.google.com/g/vaiiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metamask bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold text-sm text-center shadow-lg"
                >
                  1. Join Tester Google Group &rarr;
                </a>
                <Link
                  href="/early-access"
                  className="btn-metamask bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm text-center"
                >
                  Early Access Hub &amp; FAQ
                </Link>
                <Link
                  href="/android"
                  className="text-center text-xs text-blue-300 hover:text-white pt-1"
                >
                  Android Native Architecture &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-linking to Android and iOS dedicated pages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-card-border rounded-3xl p-8 shadow-sm space-y-4">
            <span className="text-2xl">🤖</span>
            <h3 className="text-2xl font-bold font-serif">Android Native Architecture</h3>
            <p className="text-ink/70 text-sm leading-relaxed">
              Dive into our Kotlin &amp; Compose tech stack, performance profiling, and Google Play ecosystem.
            </p>
            <Link href="/android" className="inline-block text-xs font-bold text-emerald-700 hover:underline">
              Explore Android Studio &rarr;
            </Link>
          </div>

          <div className="bg-white border border-card-border rounded-3xl p-8 shadow-sm space-y-4">
            <span className="text-2xl">🍎</span>
            <h3 className="text-2xl font-bold font-serif">iOS Engineering &amp; Roadmap</h3>
            <p className="text-ink/70 text-sm leading-relaxed">
              Read why we are Android-first today, our Swift &amp; SwiftUI engineering capabilities, and planned App Store ports.
            </p>
            <Link href="/ios" className="inline-block text-xs font-bold text-blue-700 hover:underline">
              View iOS Roadmap &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
