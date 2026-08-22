import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Apps',
  description: 'Native Android & iOS apps built with Kotlin Jetpack Compose and Swift SwiftUI — shipped to the Play Store and App Store.',
}

const stack = [
  { label: 'Kotlin / Jetpack Compose', detail: 'Modern native Android UI' },
  { label: 'Swift / SwiftUI', detail: 'Modern native iOS UI' },
  { label: 'Google Play Store', detail: 'Published & maintained' },
  { label: 'App Store Connect', detail: 'Published & maintained' },
]

const apps = portfolioApps.filter((app) => app.category === 'app')

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
            📱 CORE PILLAR &bull; NATIVE APPS
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Native <span className="italic text-blue-600">Android &amp; iOS</span> Apps
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            Built with Kotlin &amp; Jetpack Compose for Android, Swift &amp; SwiftUI for iOS. Shipped to the Play Store and App Store, engineered for real-world performance — not just a demo build.
          </p>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((s) => (
            <div key={s.label} className="p-5 bg-card rounded-2xl border border-card-border">
              <div className="font-bold text-blue-600 font-serif text-sm">{s.label}</div>
              <div className="text-xs text-ink/60 font-medium mt-1">{s.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif">What Goes Into a VAIIYA App</h2>
          <p className="text-ink/70 leading-relaxed">
            Every app starts with a native-first architecture — no cross-platform compromises. We design the interface, build the data layer,
            wire up push notifications and analytics, and take care of App Store &amp; Play Store submission, review and ongoing releases.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">Apps We&apos;ve Shipped</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app) => (
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
                      <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full btn-metamask bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold">
                        Get on Google Play Store &rarr;
                      </a>
                    )}
                    {app.appStoreUrl && (
                      <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full btn-metamask bg-slate-900 text-white hover:bg-black text-xs font-bold">
                        Download on Apple App Store &rarr;
                      </a>
                    )}
                    {app.externalUrl && (
                      <a href={app.externalUrl} target="_blank" rel="noopener noreferrer" className="w-full btn-metamask btn-outline-dark text-xs font-bold">
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

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Have an app idea?</h2>
        <Link href="/contact" className="btn-metamask btn-orange text-base">
          Start a Build &rarr;
        </Link>
      </section>
    </main>
  )
}
