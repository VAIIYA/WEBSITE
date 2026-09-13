import Link from 'next/link'
import PodcastVideo from '@/components/PodcastVideo'
import { getAllPosts } from '@/lib/posts'

const pillars = [
  {
    href: '/early-access',
    emoji: '🚀',
    title: 'Early Access',
    description: 'Join our Google Group tester community to play closed betas before anyone else.',
    accent: 'text-emerald-600',
  },
  {
    href: '/android',
    emoji: '🤖',
    title: 'Android Native',
    description: 'Kotlin & Jetpack Compose apps live on the Google Play Store.',
    accent: 'text-blue-600',
  },
  {
    href: '/games',
    emoji: '🎮',
    title: 'Mobile Games',
    description: 'Native arcade and puzzle games engineered for smooth 60fps+ gameplay.',
    accent: 'text-violet-600',
  },
  {
    href: '/websites',
    emoji: '🌐',
    title: 'Web Platforms',
    description: 'High-impact websites & PWAs built with Next.js and deployed on Vercel.',
    accent: 'text-[#E25A3C]',
  },
]

const stats = [
  { value: 'Google Play', label: 'Verified Developer' },
  { value: 'Closed Beta', label: 'Active Community' },
  { value: '60 FPS', label: 'Native Performance' },
]

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <main className="w-full min-h-screen bg-cream text-ink selection:bg-[#E25A3C] selection:text-white">
      {/* Hero */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border text-xs font-semibold text-ink shadow-sm mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>ANDROID-FIRST DIGITAL STUDIO &bull; TESTER COMMUNITY LIVE</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] font-serif mb-6">
            Android-First Apps, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-ink to-blue-600 italic">
              Games &amp; Platforms.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            VAIIYA builds high-performance native Android applications with Kotlin &amp; Jetpack Compose, 60fps mobile games, and modern web platforms — backed by an active Google Play closed tester community.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link href="/early-access" className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-base font-bold shadow-lg shadow-emerald-600/20">
              🚀 Join Early Access Beta
            </Link>
            <a
              href="https://play.google.com/store/apps/dev?id=7804895561285369781"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask btn-outline-dark text-base"
            >
              Google Play Store &rarr;
            </a>
            <Link href="/android" className="btn-metamask bg-card hover:bg-white text-base">
              Android Studio
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="p-4 bg-card rounded-2xl border border-card-border text-center">
                <div className="text-xl sm:text-2xl font-bold text-ink font-serif">{s.value}</div>
                <div className="text-[11px] font-semibold text-ink/60 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access & Closed Beta Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-card-border bg-gradient-to-b from-white to-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-bold uppercase tracking-widest">
                🚀 Closed Tester Community
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
                Test Our Android Apps <br />
                <span className="text-emerald-700 italic">Before They Hit Google Play</span>
              </h2>
              <p className="text-ink/70 text-base sm:text-lg leading-relaxed">
                Google Play requires closed beta testing before public launch. Join our official Google Group to get exclusive early access, shape upcoming mechanics, and test our latest releases directly on your Android device.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://groups.google.com/g/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-bold shadow-md text-center"
              >
                Join Tester Google Group &rarr;
              </a>
              <Link
                href="/early-access"
                className="btn-metamask btn-outline-dark text-sm font-bold text-center"
              >
                Early Access Hub
              </Link>
            </div>
          </div>

          {/* 3-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 font-bold font-serif flex items-center justify-center text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">Join Our Google Group</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                Join <strong className="text-ink font-semibold">groups.google.com/g/vaiiya</strong> using the exact same Google account associated with your Android device.
              </p>
              <a
                href="https://groups.google.com/g/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                Open Google Group &rarr;
              </a>
            </div>

            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 font-bold font-serif flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">Opt-in on Google Play</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                Open the Google Play testing link. Google will verify your group membership and unlock the closed beta track for your account.
              </p>
              <a
                href="https://play.google.com/apps/testing/com.hexmoji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
              >
                Google Play Testing Link &rarr;
              </a>
            </div>

            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-violet-100 text-violet-800 font-bold font-serif flex items-center justify-center text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">Download &amp; Play</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                Install the game directly from the Google Play Store app on your Android phone or tablet. Receive automatic test updates as we patch!
              </p>
              <span className="text-xs font-semibold text-ink/50">
                Seamless Play Store updates &bull; No APK side-loading
              </span>
            </div>
          </div>

          {/* Spotlight: HEXMOJI Closed Beta Live Card */}
          <div className="bg-gradient-to-br from-violet-900 via-slate-900 to-ink text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-violet-800/40 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/30 border border-violet-400/40 text-violet-200 text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Active Closed Beta &bull; Android</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
                  HEXMOJI Closed Beta is Live! 🚀
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Kawaii hexxagon tactical board game. Flip cells, unlock 100+ emoji characters, and challenge the AI. Ready to play? Join our Google Group to unlock your Google Play tester seat right now.
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>✓ Android 8.0+</span>
                  <span>✓ Instant Access</span>
                  <span>✓ Free to Play</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="https://groups.google.com/g/vaiiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metamask bg-violet-500 text-white hover:bg-violet-400 text-center font-bold text-sm shadow-lg shadow-violet-500/20"
                >
                  1. Join Google Group
                </a>
                <a
                  href="https://play.google.com/apps/testing/com.hexmoji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metamask bg-white text-slate-950 hover:bg-slate-100 text-center font-bold text-sm shadow-lg"
                >
                  2. Opt-in on Google Play
                </a>
                <div className="flex flex-col items-center gap-1.5 pt-1">
                  <Link
                    href="/games/hexmoji"
                    className="text-xs text-violet-300 hover:text-white underline underline-offset-4 font-medium"
                  >
                    View Game Details &rarr;
                  </Link>
                  <a
                    href="https://groups.google.com/g/vaiiya/c/FoPlDsHz-CY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-slate-400 hover:text-violet-200"
                  >
                    💬 Read Forum Launch Thread &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-card-border bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-violet-200 text-violet-800 text-[10px] font-bold uppercase tracking-widest">
              🎙️ The VAIIYA Podcast
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif">The Future of AI &amp; Robotics</h2>
            <p className="text-ink/70 text-base leading-relaxed">
              Groundbreaking technologies and the people shaping them — explained simply. New episodes on YouTube and
              every podcast app.
            </p>
          </div>

          <PodcastVideo />

          <div className="mt-8 text-center">
            <Link href="/podcast" className="btn-metamask btn-outline-dark text-base">
              All episodes &amp; players &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Latest news */}
      {latestPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-card-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif">Latest News</h2>
                <p className="text-ink/70 text-base leading-relaxed max-w-xl">
                  Daily breakthroughs in AI, gaming and robotics — explained simply.
                </p>
              </div>
              <Link href="/news" className="text-sm font-semibold text-[#E25A3C] hover:underline">
                All news &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group bg-white border border-card-border rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {post.date && (
                    <time className="text-[11px] font-semibold text-ink/50 uppercase tracking-wider">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                  )}
                  <h3 className="mt-2 text-lg font-bold font-serif leading-snug text-ink group-hover:text-[#E25A3C] transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-3 text-ink/60 text-sm leading-relaxed line-clamp-3 flex-grow">{post.excerpt}</p>
                  )}
                  <span className="mt-5 text-sm font-semibold text-[#E25A3C] group-hover:underline">Read more &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pillars — agentics.org-style teaser grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-card-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif">
              Explore VAIIYA
            </h2>
            <p className="text-ink/70 text-base leading-relaxed">
              Four pillars, one studio. Pick a path to see the full story, tech stack, and shipped work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-card-border rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <span className="text-3xl mb-4">{p.emoji}</span>
                <h3 className={`text-xl font-bold font-serif mb-2 ${p.accent}`}>{p.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed flex-grow">{p.description}</p>
                <span className={`mt-5 text-sm font-semibold ${p.accent} group-hover:underline`}>
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
