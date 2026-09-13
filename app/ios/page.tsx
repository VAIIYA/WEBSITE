import type { Metadata } from 'next'
import Link from 'next/link'

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
  {
    title: 'VYNDER (iOS)',
    status: 'Design Prototype',
    eta: 'Future Roadmap',
    desc: 'Web3-integrated mobile dating experience with native biometric authentication and Apple Wallet integration.',
  },
]

export default function IosPage() {
  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
            🍎 SWIFT &bull; SWIFTUI &bull; APPLE PLATFORMS
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
            iOS Engineering &amp; <span className="italic text-blue-600">Roadmap</span>
          </h1>

          <p className="text-xl sm:text-2xl text-ink/70 leading-relaxed max-w-3xl mx-auto mb-10 font-serif">
            Full-stack Apple engineering with Swift and SwiftUI. Here is our transparent philosophy and upcoming App Store roadmap.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/android"
              className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-base font-bold shadow-lg"
            >
              🤖 Explore Our Active Android Releases &rarr;
            </Link>
            <Link
              href="/contact"
              className="btn-metamask btn-outline-dark text-base font-bold"
            >
              Join iOS Notification Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <h2 className="text-2xl font-bold font-serif text-ink">Why We Are Android-First Today</h2>
            </div>
            <p className="text-ink/70 text-base sm:text-lg leading-relaxed">
              At VAIIYA, we believe in releasing polished, thoroughly tested software rather than rushed cross-platform ports. Android allows us to run agile closed beta cycles through our{' '}
              <a
                href="https://groups.google.com/g/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
              >
                Google Group community
              </a>
              , deploy daily patches without review friction, and perfect gameplay feel directly with real players.
            </p>
            <p className="text-ink/70 text-base sm:text-lg leading-relaxed">
              Once our Android games and apps hit peak stability and feature maturity, we bring them to iOS with dedicated native Swift &amp; SwiftUI builds — engineered without third-party bridging layers.
            </p>
          </div>
        </div>
      </section>

      {/* iOS Technical Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Native Apple Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              Our iOS Tech Stack
            </h2>
            <p className="text-ink/70 text-base leading-relaxed">
              When we build for iOS, we write native code that feels immediately at home in the Apple ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-bold font-serif mb-2 text-ink">Swift &amp; Concurrency</h3>
              <p className="text-ink/70 text-sm leading-relaxed">
                Modern Swift utilizing async/await, Actors, and Sendable protocols for memory safety and zero data races.
              </p>
            </div>
            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-bold font-serif mb-2 text-ink">SwiftUI &amp; Metal</h3>
              <p className="text-ink/70 text-sm leading-relaxed">
                Fluid declarative interfaces integrated with Metal shaders for high frame-rate particle systems and buttery 120Hz scrolling.
              </p>
            </div>
            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-bold font-serif mb-2 text-ink">Apple Ecosystem</h3>
              <p className="text-ink/70 text-sm leading-relaxed">
                Deep integrations with Game Center, StoreKit 2 in-app purchases, Dynamic Island, and native Widgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* iOS Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              Upcoming iOS Releases
            </h2>
            <p className="text-ink/70 text-base leading-relaxed">
              Track our planned App Store ports as they move through design and production phases.
            </p>
          </div>

          <div className="space-y-6">
            {IOS_ROADMAP.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-card-border rounded-3xl p-7 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold font-serif text-ink">{item.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-ink/70 text-sm leading-relaxed">{item.desc}</p>
                  <div className="text-xs font-mono text-ink/50 pt-1">Target: {item.eta}</div>
                </div>

                <Link
                  href="/contact"
                  className="btn-metamask btn-outline-dark text-xs font-bold whitespace-nowrap"
                >
                  Request iOS Alert &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-card border border-card-border rounded-3xl text-center space-y-4">
            <h3 className="text-2xl font-bold font-serif text-ink">Want to test right now on Android?</h3>
            <p className="text-ink/70 text-base max-w-xl mx-auto leading-relaxed">
              If you have an Android device or tablet, you don&apos;t have to wait. You can play HEXMOJI closed beta right now through our Google Group tester community.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/early-access"
                className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-bold shadow-md"
              >
                Join Early Access on Android
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
