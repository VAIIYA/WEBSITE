import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HEXMOJI',
  description:
    'HEXMOJI — a kawaii hexxagon board game with emoji pieces. Claim the board against a sharp CPU, unlock characters and pastel themes. Native Android, iOS to follow. Coming soon.',
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
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative pt-16 pb-12 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/games" className="text-xs font-bold text-violet-700 hover:text-violet-900">
            ← Back to games
          </Link>

          <div className="mt-6 rounded-3xl overflow-hidden border border-card-border shadow-sm">
            <div className="relative aspect-[2/1]">
              <Image src="/games/hexmoji/feature.svg" alt="HEXMOJI" fill priority className="object-cover" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white border border-violet-200 text-violet-800 text-[10px] font-bold uppercase tracking-widest">
              Android &middot; iOS
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-card-border text-ink text-[10px] font-bold uppercase tracking-widest">
              Coming soon
            </span>
          </div>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold font-serif leading-tight">HEXMOJI</h1>
          <p className="mt-3 text-xl text-violet-700 font-serif">Kawaii hexxagon. Claim the board.</p>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed max-w-2xl">
            A cute take on the classic hexxagon / Ataxx board game. Hop your emoji across a honeycomb grid, flip everything
            it touches, and out-claim a surprisingly sharp CPU. Native for Android now, with an iOS build to follow.
          </p>

          <p className="mt-8 text-sm text-ink/60 font-medium max-w-sm">
            Still in the workshop — heading to the Google Play Store and Apple App Store soon.
          </p>
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
