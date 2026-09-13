import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HEXMOJI — Android Closed Beta Live',
  description:
    'HEXMOJI — a kawaii hexxagon board game with emoji pieces. Android Closed Beta is live now! Join our Google Group tester community to get instant access on Google Play.',
}

const RULES = [
  {
    title: 'Clone or jump',
    body: 'Move to an adjacent cell to clone your piece; jump two cells to leap there. Every enemy piece next to where you land flips to your colour.',
  },
  {
    title: 'Claim the board',
    body: 'The board fills up fast. When there are no moves left, whoever holds the most cells wins the round.',
  },
  {
    title: 'Beat the CPU',
    body: 'Three difficulty levels and a handful of board layouts — from tight Blitz grids to sprawling arenas.',
  },
]

const EXTRAS = [
  'A cabinet of 100+ emoji pieces to unlock as you level up',
  'Pastel "kawaii" themes that repaint the whole board',
  'Local profile with XP and progression — no account needed',
  'Pass-and-play and vs-CPU modes',
]

export default function HexmojiPage() {
  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-violet-600 selection:text-white">
      {/* Hero */}
      <section className="relative pt-16 pb-12 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/games" className="text-xs font-bold text-violet-700 hover:text-violet-900">
            ← Back to games
          </Link>

          <div className="mt-6 rounded-3xl overflow-hidden border border-card-border shadow-sm">
            <div className="relative aspect-[2/1]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/games/hexmoji/feature.svg"
                alt="HEXMOJI"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white border border-violet-200 text-violet-800 text-[10px] font-bold uppercase tracking-widest">
              Android Native
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Closed Beta Live
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-card-border text-ink/60 text-[10px] font-bold uppercase tracking-widest">
              iOS Planned
            </span>
          </div>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold font-serif leading-tight">HEXMOJI</h1>
          <p className="mt-3 text-xl text-violet-700 font-serif">Kawaii hexxagon. Claim the board.</p>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed max-w-2xl">
            A cute take on the classic hexxagon / Ataxx board game. Hop your emoji across a honeycomb grid, flip everything
            it touches, and out-claim a surprisingly sharp CPU. Android Closed Beta is live now!
          </p>

          {/* Closed Beta Opt-in Banner */}
          <div className="mt-8 p-6 sm:p-8 bg-gradient-to-br from-violet-900 via-slate-900 to-black text-white rounded-3xl shadow-xl space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                🚀 Play Right Now &bull; Early Access
              </span>
              <h2 className="text-2xl font-bold font-serif text-white">How to Get Instant Beta Access:</h2>
            </div>

            <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
              <li>
                <strong className="text-white">Join Google Group:</strong> Join{' '}
                <a
                  href="https://groups.google.com/g/vaiiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 font-semibold"
                >
                  groups.google.com/g/vaiiya
                </a>{' '}
                with the same Google account as your Google Play Store.
              </li>
              <li>
                <strong className="text-white">Opt-in on Google Play:</strong> Click{' '}
                <a
                  href="https://play.google.com/apps/testing/com.hexmoji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 underline underline-offset-2 hover:text-violet-200 font-semibold"
                >
                  play.google.com/apps/testing/com.hexmoji
                </a>{' '}
                and tap &quot;Become a Tester&quot;.
              </li>
              <li>
                <strong className="text-white">Download &amp; Play:</strong> Install the closed beta directly from Google Play.
              </li>
            </ol>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://groups.google.com/g/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold text-center"
              >
                1. Join Google Group
              </a>
              <a
                href="https://play.google.com/apps/testing/com.hexmoji"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metamask bg-violet-600 text-white hover:bg-violet-700 text-xs font-bold text-center"
              >
                2. Opt-in on Google Play
              </a>
              <a
                href="https://groups.google.com/g/vaiiya/c/FoPlDsHz-CY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metamask bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-bold text-center border border-slate-700"
              >
                💬 Closed Beta Forum Post
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it plays */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-10">How it plays</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RULES.map((r) => (
              <div key={r.title} className="p-6 bg-card rounded-3xl border border-card-border">
                <h3 className="text-lg font-bold font-serif text-violet-700">{r.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-8">What&apos;s in it</h2>
          <ul className="space-y-3">
            {EXTRAS.map((item) => (
              <li key={item} className="flex gap-3 text-ink/70 leading-relaxed">
                <span className="text-violet-600 font-bold" aria-hidden>
                  &bull;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Free to play */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">Free to play</h2>
          <p className="text-ink/70 leading-relaxed">
            No account, no sign-up — your progress lives on your device. Free to play, supported by occasional ads.
          </p>
          <Link
            href="/privacy-policy"
            className="inline-block text-xs font-bold text-violet-700 hover:text-violet-900"
          >
            Privacy policy &rarr;
          </Link>
        </div>
      </section>
    </main>
  )
}
