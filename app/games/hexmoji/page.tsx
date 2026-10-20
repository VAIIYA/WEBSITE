import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

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
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Android closed beta · iOS planned"
        title="Hexmoji. Claim the board."
        description="A cute take on the classic hexxagon / Ataxx board game. Hop your emoji across a honeycomb grid, flip everything it touches, and out-claim a surprisingly sharp CPU."
        media={
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-[#F0EEE6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/games/hexmoji/feature.svg" alt="HEXMOJI" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        }
      >
        <Link href="/games" className="btn btn-light">&larr; All games</Link>
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-ink p-7 text-ivory sm:p-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <p className="text-sm text-[#B0AEA5]">Play right now · early access</p>
            <h2 className="font-serif text-3xl sm:text-4xl">How to get instant beta access</h2>
          </div>
          <div className="space-y-8 lg:col-span-7">
            <ol className="space-y-4 text-[15px] leading-relaxed text-[#D1CFC5]">
              <li>
                <strong className="font-medium text-ivory">1. Join the Google Group.</strong> Join{' '}
                <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ivory">
                  groups.google.com/g/vaiiya
                </a>{' '}
                with the same Google account as your Play Store.
              </li>
              <li>
                <strong className="font-medium text-ivory">2. Opt in on Google Play.</strong> Open{' '}
                <a href="https://play.google.com/apps/testing/com.hexmoji" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ivory">
                  play.google.com/apps/testing/com.hexmoji
                </a>{' '}
                and tap “Become a tester”.
              </li>
              <li>
                <strong className="font-medium text-ivory">3. Download & play.</strong> Install the closed beta directly from Google Play.
              </li>
            </ol>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="btn bg-ivory text-ink hover:bg-[#E8E6DC]">
                1. Join the group
              </a>
              <a href="https://play.google.com/apps/testing/com.hexmoji" target="_blank" rel="noopener noreferrer" className="btn border border-[#5E5D59] text-ivory hover:bg-[#262624]">
                2. Opt in on Google Play
              </a>
              <a href="https://groups.google.com/g/vaiiya/c/FoPlDsHz-CY" target="_blank" rel="noopener noreferrer" className="btn border border-[#5E5D59] text-ivory hover:bg-[#262624]">
                Beta forum post
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <h2 className="mb-10 font-serif text-4xl leading-tight sm:text-5xl">How it plays</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {RULES.map((r, i) => (
            <div key={r.title} className="rounded-2xl bg-[#F0EEE6] p-7">
              <span className="font-mono text-xs text-[#87867F]">0{i + 1}</span>
              <h3 className="mb-3 mt-8 font-serif text-2xl">{r.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#3D3D3A]">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E8E6DC]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-5">What’s in it</h2>
          <ul className="border-t border-[#D1CFC5] lg:col-span-7">
            {EXTRAS.map((item) => (
              <li key={item} className="border-b border-[#D1CFC5] py-4 text-[17px] leading-relaxed text-[#3D3D3A]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-serif text-4xl">Free to play</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3D3D3A]">
            No account, no sign-up — your progress lives on your device. Free to play, supported by occasional ads.
          </p>
          <Link href="/privacy-policy" className="link-arrow mt-6">Privacy policy &rarr;</Link>
        </div>
      </section>
    </main>
  )
}
