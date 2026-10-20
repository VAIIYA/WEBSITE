import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

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

const STEPS = [
  {
    title: 'Join the Google Group',
    body: (
      <>
        Head to{' '}
        <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="underline decoration-[#D1CFC5] underline-offset-4 hover:decoration-ink">
          groups.google.com/g/vaiiya
        </a>{' '}
        and click <strong className="font-medium text-ink">“Join group”</strong> with the exact same Google account that’s on your Android device.
      </>
    ),
    cta: { label: 'Join the group', href: 'https://groups.google.com/g/vaiiya' },
  },
  {
    title: 'Opt in on Google Play',
    body: (
      <>
        Open the test invitation at{' '}
        <a href="https://play.google.com/apps/testing/com.hexmoji" target="_blank" rel="noopener noreferrer" className="underline decoration-[#D1CFC5] underline-offset-4 hover:decoration-ink">
          play.google.com/apps/testing/com.hexmoji
        </a>{' '}
        and click <strong className="font-medium text-ink">“Become a tester”</strong>.
      </>
    ),
    cta: { label: 'Accept the invite', href: 'https://play.google.com/apps/testing/com.hexmoji' },
  },
  {
    title: 'Download & play',
    body: (
      <>
        Tap <strong className="font-medium text-ink">“Download it on Google Play”</strong> to open the closed beta listing. Install, jump in, and receive new test builds automatically.
      </>
    ),
  },
]

const hexmojiFacts = [
  { title: '100+ pieces', text: 'Unlock emoji characters' },
  { title: 'Adaptive AI', text: '3 distinct difficulty levels' },
  { title: 'Kawaii themes', text: 'Pastel board cosmetics' },
]

export default function EarlyAccessPage() {
  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Community tester program"
        title="Play it before the world does."
        description="Test our newest Android games and apps, report bugs, balance mechanics and join the creator circle."
      >
        <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          1. Join the group &rarr;
        </a>
        <a href="https://play.google.com/apps/testing/com.hexmoji" target="_blank" rel="noopener noreferrer" className="btn btn-light">
          2. Opt in on Google Play &rarr;
        </a>
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:col-span-7">How it works</h2>
          <p className="text-lg leading-relaxed text-[#3D3D3A] lg:col-span-5">
            Google Play closed testing is restricted to group members. Follow these three steps to get access.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col rounded-2xl bg-[#F0EEE6] p-7">
              <span className="font-mono text-xs text-[#87867F]">0{i + 1}</span>
              <h3 className="mb-3 mt-8 font-serif text-2xl">{step.title}</h3>
              <p className="flex-1 text-[15px] leading-relaxed text-[#3D3D3A]">{step.body}</p>
              {step.cta && (
                <a href={step.cta.href} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6">
                  {step.cta.label} &rarr;
                </a>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Available now for testing</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Active closed betas</h2>
            </div>
            <p className="text-lg leading-relaxed text-[#3D3D3A] lg:col-span-5 lg:self-end">
              These games are running closed beta cycles with our Google Group community.
            </p>
          </div>

          <article className="grid grid-cols-1 overflow-hidden rounded-2xl bg-ivory lg:grid-cols-12">
            <div className="relative aspect-[16/10] min-h-[260px] lg:col-span-5 lg:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/games/hexmoji/feature.svg" alt="HEXMOJI closed beta" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-between gap-8 p-7 sm:p-10 lg:col-span-7">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 text-xs text-[#5E5D59]">
                  <span className="rounded border border-[#D1CFC5] px-1.5 py-0.5">Android closed beta</span>
                  <span className="rounded border border-[#D1CFC5] px-1.5 py-0.5">Testing active</span>
                </div>
                <h3 className="font-serif text-4xl">Hexmoji</h3>
                <p className="text-[17px] leading-relaxed text-[#3D3D3A]">
                  A cute, tactical take on the classic hexxagon / Ataxx puzzle game. Move adjacent to clone your piece, jump two cells to flip enemy tokens, and conquer the honeycomb board against an adaptive AI.
                </p>
                <dl className="grid grid-cols-1 divide-y divide-[#E8E6DC] border-y border-[#E8E6DC] text-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {hexmojiFacts.map((f) => (
                    <div key={f.title} className="py-3 sm:px-4 sm:first:pl-0">
                      <dt className="font-medium">{f.title}</dt>
                      <dd className="text-[#5E5D59]">{f.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="btn btn-dark flex-1">
                  1. Join group first
                </a>
                <a href="https://play.google.com/apps/testing/com.hexmoji" target="_blank" rel="noopener noreferrer" className="btn btn-light flex-1">
                  2. Opt in on Google Play
                </a>
                <a href="https://groups.google.com/g/vaiiya/c/FoPlDsHz-CY" target="_blank" rel="noopener noreferrer" className="btn btn-light">
                  Beta post
                </a>
              </div>
            </div>
          </article>

          <div className="mt-4 flex flex-col justify-between gap-6 rounded-2xl bg-ivory p-7 sm:p-10 md:flex-row md:items-center">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs text-[#5E5D59]">Live on Google Play</p>
              <h3 className="font-serif text-3xl">Flapmoji is out now</h3>
              <p className="leading-relaxed text-[#3D3D3A]">
                One tap, one emoji, endless pipes. Classic runs or arcade chaos with power-ups, coins and 100+ unlockable skins. Download it now, or join our group to test upcoming features first.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a href="https://play.google.com/store/apps/details?id=com.flapmoji.game" target="_blank" rel="noopener noreferrer" className="btn btn-dark whitespace-nowrap">
                Get Flapmoji &rarr;
              </a>
              <Link href="/games/flapmoji" className="btn btn-light whitespace-nowrap">Preview</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Tester FAQ</h2>
            <p className="text-lg leading-relaxed text-[#3D3D3A]">
              Stuck during opt-in? These are the most common questions.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-[#D1CFC5]">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group border-b border-[#D1CFC5] py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl leading-snug [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span aria-hidden="true" className="mt-1 text-[#87867F] transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#3D3D3A]">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#F0EEE6] p-7">
              <h3 className="mb-2 font-serif text-2xl">Still having trouble?</h3>
              <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-[#3D3D3A]">
                If Google Play doesn’t recognise your account after joining the group, post a topic in the group or contact us directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://groups.google.com/g/vaiiya" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  Post in the group
                </a>
                <Link href="/contact" className="btn btn-light">Contact support</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
