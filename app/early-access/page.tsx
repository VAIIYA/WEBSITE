import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Early Access & Closed Beta Community',
  description:
    'Join the VAIIYA Google Group tester community to get closed beta access to our Android games and apps on Google Play before public release.',
}

const FAQS = [
  {
    q: "Why does Google Play say 'App not available' or return a 404 error?",
    a: "Google Play strictly restricts Closed Beta testing to members of our Google Group. You MUST join https://groups.google.com/g/vaiiya first using the EXACT SAME Google account logged into your Google Play Store app. Once you join, wait 1 to 2 minutes for Google servers to sync your permissions, then open the testing opt-in link again.",
  },
  {
    q: 'Do I have to pay or will I be charged?',
    a: 'No. All closed beta builds in the VAIIYA Early Access program are 100% free of charge for approved community testers.',
  },
  {
    q: 'How do I submit bug reports, suggestions, and feedback?',
    a: 'You can post directly to our Google Group forum at groups.google.com/g/vaiiya, respond to release announcement threads (like the HEXMOJI launch thread), or use the built-in private feedback button on the Google Play testing page.',
  },
  {
    q: 'Which devices are supported?',
    a: 'Our current Android releases support devices running Android 8.0 (Oreo / API level 26) and newer, including standard smartphones, foldables, and tablets.',
  },
  {
    q: 'How do updates work during the beta?',
    a: 'Once opted in, updates arrive automatically through the Google Play Store just like any standard app. You never have to manually download APKs or worry about untrusted file warnings.',
  },
  {
    q: 'What happens when a game graduates to full release?',
    a: 'Your installed beta app will automatically update to the public production release upon global launch, and your local high scores and progression will carry over seamlessly.',
  },
]

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-emerald-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>COMMUNITY TESTER PROGRAM &bull; ANDROID CLOSED BETA</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
            VAIIYA <span className="italic text-emerald-600">Early Access</span>
          </h1>

          <p className="text-xl sm:text-2xl text-ink/70 leading-relaxed max-w-3xl mx-auto mb-10 font-serif">
            Play our newest Android games and apps before the world sees them. Test builds, report bugs, balance mechanics, and join the creator circle.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://groups.google.com/g/vaiiya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-base font-bold shadow-lg shadow-emerald-600/20"
            >
              👥 1. Join Tester Google Group &rarr;
            </a>
            <a
              href="https://play.google.com/apps/testing/com.hexmoji"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask bg-slate-900 text-white hover:bg-black text-base font-bold shadow-lg"
            >
              🚀 2. Opt-in on Google Play &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 3-Step Tester Walkthrough */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">How It Works</h2>
            <p className="text-ink/70 text-base leading-relaxed">
              Google Play closed testing is restricted to group members. Follow this quick 3-step sequence to get instant access:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-0" />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-bold font-serif flex items-center justify-center text-xl shadow-md">
                  1
                </div>
                <h3 className="text-2xl font-bold font-serif">Join Google Group</h3>
                <p className="text-ink/70 text-sm leading-relaxed">
                  Head over to our official Google Group:{' '}
                  <a
                    href="https://groups.google.com/g/vaiiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
                  >
                    groups.google.com/g/vaiiya
                  </a>
                  . Click <strong>&quot;Join group&quot;</strong> using the exact same Google account associated with your Android phone or tablet.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-card-border relative z-10">
                <a
                  href="https://groups.google.com/g/vaiiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-metamask bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold text-center block"
                >
                  Join Google Group Now &rarr;
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0" />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold font-serif flex items-center justify-center text-xl shadow-md">
                  2
                </div>
                <h3 className="text-2xl font-bold font-serif">Opt-in on Google Play</h3>
                <p className="text-ink/70 text-sm leading-relaxed">
                  Click the test invitation link on Google Play:{' '}
                  <a
                    href="https://play.google.com/apps/testing/com.hexmoji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
                  >
                    play.google.com/apps/testing/com.hexmoji
                  </a>
                  . Click <strong>&quot;BECOME A TESTER&quot;</strong>. Google Play confirms your membership instantly.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-card-border relative z-10">
                <a
                  href="https://play.google.com/apps/testing/com.hexmoji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-metamask bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 text-xs font-bold text-center block"
                >
                  Accept Tester Invite &rarr;
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-2 border-violet-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-50 rounded-bl-full -z-0" />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white font-bold font-serif flex items-center justify-center text-xl shadow-md">
                  3
                </div>
                <h3 className="text-2xl font-bold font-serif">Download &amp; Play</h3>
                <p className="text-ink/70 text-sm leading-relaxed">
                  Tap <strong>&quot;Download it on Google Play&quot;</strong> to view the closed beta listing. Tap Install, jump in, and experience the game with seamless automatic updates as new test builds land.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-card-border relative z-10">
                <div className="text-xs font-semibold text-violet-700 text-center py-2 bg-violet-50 rounded-xl">
                  ✓ Official Google Play Store Build
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Closed Betas Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">
              Available Now for Testing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              Active Closed Beta Programs
            </h2>
            <p className="text-ink/70 text-base leading-relaxed">
              These games are currently running closed beta test cycles with our Google Group community.
            </p>
          </div>

          {/* HEXMOJI Spotlight Card */}
          <div className="bg-white border border-card-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/games/hexmoji/feature.svg"
                  alt="HEXMOJI Closed Beta"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  Android Closed Beta Live
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wider">
                      🎮 Kawaii Hexxagon
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      🟢 Testing Active
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold font-serif">HEXMOJI</h3>

                  <p className="text-ink/70 text-base leading-relaxed">
                    A cute, tactical re-imagination of the classic hexxagon / Ataxx puzzle game. Move adjacent to clone your piece, jump two cells to flip enemy tokens, and conquer the honeycomb board against an adaptive AI engine.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-ink/70">
                    <div className="p-3 bg-cream rounded-xl">
                      <span className="font-bold text-ink block">100+ Pieces</span>
                      Unlock emoji characters
                    </div>
                    <div className="p-3 bg-cream rounded-xl">
                      <span className="font-bold text-ink block">Adaptive AI</span>
                      3 distinct difficulty levels
                    </div>
                    <div className="p-3 bg-cream rounded-xl">
                      <span className="font-bold text-ink block">Kawaii Themes</span>
                      Pastel board cosmetics
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-card-border flex flex-col sm:flex-row gap-3 items-stretch">
                  <a
                    href="https://groups.google.com/g/vaiiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold text-center flex-1"
                  >
                    1. Join Group First
                  </a>
                  <a
                    href="https://play.google.com/apps/testing/com.hexmoji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-metamask bg-violet-600 text-white hover:bg-violet-700 text-xs font-bold text-center flex-1"
                  >
                    2. Opt-in on Google Play
                  </a>
                  <a
                    href="https://groups.google.com/g/vaiiya/c/FoPlDsHz-CY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-metamask btn-outline-dark text-xs font-bold text-center"
                  >
                    💬 View Beta Post
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming in Pipeline */}
          <div className="mt-12 bg-white border border-card-border rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-widest">
                  Next in Pipeline
                </span>
                <h3 className="text-2xl font-bold font-serif">FLAPMOJI &bull; Closed Beta Coming Next</h3>
                <p className="text-ink/70 text-sm max-w-2xl leading-relaxed">
                  One tap, one emoji, endless pipes. Classic runs or arcade chaos with physics power-ups, coin collecting, and 100+ unlockable skins. Members of our Google Group will automatically receive first access when the closed beta opens.
                </p>
              </div>
              <Link
                href="/games/flapmoji"
                className="btn-metamask btn-outline-dark text-xs font-bold whitespace-nowrap"
              >
                Preview FLAPMOJI &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting & FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              Tester FAQ &amp; Troubleshooting
            </h2>
            <p className="text-ink/70 text-base leading-relaxed">
              Got stuck during opt-in? Here are the most common questions and how to resolve them quickly.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-card-border rounded-2xl p-6 shadow-sm hover:border-emerald-300 transition-colors"
              >
                <h3 className="text-lg font-bold font-serif text-ink mb-2 flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Need assistance card */}
          <div className="mt-12 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-4">
            <h3 className="text-xl font-bold font-serif text-emerald-950">Still Having Trouble?</h3>
            <p className="text-emerald-800 text-sm max-w-xl mx-auto leading-relaxed">
              If your account is not being recognized by Google Play after joining the group, create a topic on our Google Group or reach out directly.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://groups.google.com/g/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold"
              >
                Post on Google Group
              </a>
              <Link
                href="/contact"
                className="btn-metamask btn-outline-dark text-xs font-bold"
              >
                Contact Studio Support
              </Link>
            </div>
          </div>

          {/* Android Studio & Developer Profile Link */}
          <div className="mt-12 text-center pt-8 border-t border-card-border">
            <p className="text-xs text-ink/60 mb-2">
              Interested in how we build native Android apps and games?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold">
              <Link href="/android" className="text-emerald-700 hover:text-emerald-900">
                🤖 Explore Android Native Architecture &rarr;
              </Link>
              <span className="text-ink/30">&bull;</span>
              <a
                href="https://play.google.com/store/apps/dev?id=7804895561285369781"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-700 hover:text-violet-900"
              >
                🏪 Verified Google Play Developer Profile &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
