import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Android Native Engineering & Google Play Developer',
  description:
    'VAIIYA is an Android-first digital studio building high-performance native apps with Kotlin, Jetpack Compose, and 60fps mobile games shipped to the Google Play Store.',
}

const ANDROID_TECH = [
  {
    title: 'Modern Kotlin',
    desc: 'Idiomatic Kotlin utilizing Coroutines, StateFlow, and structured concurrency for resilient, battery-efficient asynchronous workloads.',
  },
  {
    title: 'Jetpack Compose',
    desc: 'Declarative, reactive UI built from the ground up with Material 3 / Material You dynamic color palettes and fluid physics-based animations.',
  },
  {
    title: 'Architecture Components',
    desc: 'Production MVVM/MVI architecture, Navigation Component, Room DB, encrypted DataStore, and WorkManager background tasks.',
  },
  {
    title: 'High-Performance 60+ FPS',
    desc: 'Custom game loops, hardware-accelerated Canvas rendering, and zero-jank frame pacing tuned across low-end and flagship Android chipsets.',
  },
]

export default function AndroidPage() {
  const androidApps = portfolioApps.filter((app) =>
    app.platforms.includes('android')
  )
  const liveApps = androidApps.filter((app) => app.status === 'live' || Boolean(app.playStoreUrl))
  const betaApps = androidApps.filter((app) => app.status === 'closed-beta' || app.status === 'in-development')

  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-emerald-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-6">
            🤖 VERIFIED GOOGLE PLAY DEVELOPER
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
            Native <span className="italic text-emerald-600">Android</span> Engineering
          </h1>

          <p className="text-xl sm:text-2xl text-ink/70 leading-relaxed max-w-3xl mx-auto mb-10 font-serif">
            We are an Android-first studio. We craft native experiences powered by Kotlin and Jetpack Compose, shipped with precision to the Google Play Store.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/dev?id=7804895561285369781"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-base font-bold shadow-lg shadow-emerald-600/20"
            >
              🏪 View Google Play Developer Profile &rarr;
            </a>
            <Link
              href="/early-access"
              className="btn-metamask bg-slate-900 text-white hover:bg-black text-base font-bold shadow-lg"
            >
              🚀 Join Early Access Closed Betas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Engineered Without Compromise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              Our Native Android Stack
            </h2>
            <p className="text-ink/70 text-base leading-relaxed">
              No bloated web wrappers or brittle cross-platform shims. We build native software that harnesses the full power of Android.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ANDROID_TECH.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-card-border rounded-3xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold font-serif text-ink mb-3">{t.title}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{t.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border">
                  <span className="text-xs font-mono text-emerald-600 font-semibold">100% Android Native</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live on Google Play */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
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
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
            >
              All Google Play Releases &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {liveApps.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className={`h-40 bg-gradient-to-br ${app.gradient} p-6 flex flex-col justify-between relative`}>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      Android Native
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif drop-shadow-md">{app.name}</h3>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                  <p className="text-ink/70 text-sm leading-relaxed">{app.description}</p>
                  <div className="space-y-2 pt-4 border-t border-card-border">
                    {app.playStoreUrl ? (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold text-center block"
                      >
                        Install from Google Play &rarr;
                      </a>
                    ) : (
                      <span className="text-xs text-ink/50 text-center block">Google Play Live</span>
                    )}
                    {app.projectUrl && (
                      <Link
                        href={app.projectUrl}
                        className="block text-center text-xs font-bold text-ink/70 hover:text-ink pt-1"
                      >
                        Read Project Case Study &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closed Beta & Community Callout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
                  <span>🚀 Community-Driven Testing</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
                  Join Our Google Group Early Access Program
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Before any game or app launches to millions on Google Play, our tester group stress-tests it. Currently testing: <strong className="text-white">HEXMOJI</strong> (Kawaii Hexxagon Closed Beta).
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://groups.google.com/g/vaiiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-metamask bg-emerald-500 text-slate-950 hover:bg-emerald-400 text-sm font-bold shadow-lg"
                  >
                    1. Join Google Group
                  </a>
                  <a
                    href="https://play.google.com/apps/testing/com.hexmoji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-metamask bg-violet-600 text-white hover:bg-violet-500 text-sm font-bold shadow-lg"
                  >
                    2. Opt-in for HEXMOJI
                  </a>
                  <Link
                    href="/early-access"
                    className="btn-metamask btn-outline-dark !text-white !border-slate-700 hover:!bg-slate-800 text-sm font-bold"
                  >
                    Full Early Access Guide
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
                <h3 className="text-lg font-bold font-serif text-white">Upcoming Android Pipeline</h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {betaApps.map((app) => (
                    <li key={app.id} className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          app.status === 'closed-beta' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                        }`}
                      />
                      <span>
                        <strong>{app.name}:</strong>{' '}
                        {app.status === 'closed-beta' ? 'Closed Beta Live' : 'In Development'}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span><strong>Next Gen Apps:</strong> Jetpack Compose</span>
                  </li>
                </ul>
                <div className="pt-3 border-t border-slate-700">
                  <Link href="/games" className="text-xs font-bold text-emerald-400 hover:text-emerald-300">
                    Explore all games &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iOS Transparency Link */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-card-border text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="text-xl font-bold font-serif">Looking for our iOS roadmap?</h3>
          <p className="text-ink/70 text-sm leading-relaxed">
            While our active production releases are currently 100% focused on Android, we also maintain deep Swift and SwiftUI engineering expertise.
          </p>
          <Link href="/ios" className="inline-block text-sm font-bold text-blue-600 hover:underline">
            View iOS Capabilities &amp; Roadmap &rarr;
          </Link>
        </div>
      </section>
    </main>
  )
}
