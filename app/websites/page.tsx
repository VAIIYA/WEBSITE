import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FeatureList from '@/components/FeatureList'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Websites',
  description: 'Fast, considered websites and PWAs built with Next.js, React, TailwindCSS and Vercel — made for speed, SEO and conversion.',
}

const stack = [
  { label: 'Next.js / React', detail: 'Server components, routing and SEO built in' },
  { label: 'Three.js 3D WebGL', detail: 'Interactive canvas and shader work where it earns its place' },
  { label: 'TailwindCSS', detail: 'A consistent design system and fast iteration' },
  { label: 'Vercel Edge', detail: 'Global CDN and sub-second deploys' },
]

const process = [
  { step: '01', title: 'Discover', text: 'We map your audience, goals and content before a single line of code is written.' },
  { step: '02', title: 'Design', text: 'Clean, brand-true layouts — typography and motion tuned for clarity, not clutter.' },
  { step: '03', title: 'Build', text: 'Next.js and Tailwind, componentized and typed, with 3D/WebGL where it earns its place.' },
  { step: '04', title: 'Ship', text: 'Deployed to Vercel’s global edge with analytics and a 100/100 Lighthouse target.' },
]

export default function WebsitesPage() {
  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Websites"
        title="Fast, considered websites and PWAs."
        description="Modern sites built with Next.js, React and TailwindCSS, deployed on Vercel — they load instantly and convert."
      >
        <Link href="/contact" className="btn btn-dark">Start a build</Link>
      </PageHero>

      <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-10 lg:pb-28">
        <FeatureList items={stack} />
      </section>

      <section className="bg-[#F0EEE6]">
        <div className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <h2 className="mb-12 font-serif text-4xl leading-tight sm:text-5xl">How we build</h2>
          <ul className="border-t border-[#D1CFC5]">
            {process.map((p) => (
              <li key={p.step} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[#D1CFC5] py-8 md:grid-cols-12 md:items-baseline">
                <span className="font-mono text-xs text-[#87867F] md:col-span-1">{p.step}</span>
                <h3 className="font-serif text-3xl md:col-span-4">{p.title}</h3>
                <p className="col-start-2 text-[15px] leading-relaxed text-[#3D3D3A] md:col-span-6 md:col-start-6">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Ready to build your website?" text="Tell us about your project and we’ll take it from there.">
        <Link href="/contact" className="btn btn-dark">Start a build</Link>
      </CtaBand>
    </main>
  )
}
