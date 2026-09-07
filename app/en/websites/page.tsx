import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Websites',
  description: 'Powerful websites & PWAs built with Next.js, Three.js and TailwindCSS — designed for speed, SEO and conversion.',
}

const stack = [
  { label: 'Next.js / React', detail: 'Server components, routing, built-in SEO' },
  { label: 'Three.js 3D WebGL', detail: 'Interactive canvas & shader work' },
  { label: 'TailwindCSS', detail: 'Consistent design system, fast iteration' },
  { label: 'Edge Hosting', detail: 'Global CDN, blazing-fast deploys' },
]

const process = [
  { step: '01', title: 'Discover', text: 'We map your audience, goals and content before a single line of code is written.' },
  { step: '02', title: 'Design', text: 'Clean, on-brand layouts — typography and motion tuned for clarity, not clutter.' },
  { step: '03', title: 'Build', text: 'Next.js + Tailwind, built from components and type-safe, with 3D/WebGL where it adds value.' },
  { step: '04', title: 'Launch', text: 'Rolled out globally with monitoring, analytics, and a 100/100 Lighthouse target.' },
]

const webProjects = portfolioApps.filter((app) => app.category === 'web')

export default function WebsitesPageEn() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-card-border text-xs font-bold uppercase tracking-widest mb-6">
            🌐 CORE PILLAR &bull; WEB STUDIO
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Powerful <span className="italic text-[#E25A3C]">Websites &amp; PWAs</span> Built For Speed
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            We build blazing-fast modern websites with Next.js, React, Three.js 3D WebGL, TailwindCSS and seamless cloud deployments — sites that load instantly and convert.
          </p>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((s) => (
            <div key={s.label} className="p-5 bg-card rounded-2xl border border-card-border">
              <div className="font-bold text-[#E25A3C] font-serif">{s.label}</div>
              <div className="text-xs text-ink/60 font-medium mt-1">{s.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-center mb-14">How We Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step}>
                <div className="text-4xl font-bold font-serif text-[#E25A3C]/40 mb-3">{p.step}</div>
                <h3 className="text-xl font-bold font-serif mb-2">{p.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-14">Live Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl border border-slate-800 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-300 text-[10px] font-bold uppercase tracking-wider border border-purple-800">
                    Live Project
                  </span>
                  <span className="text-[10px] text-[#E25A3C] font-mono font-semibold">LIVE ONLINE</span>
                </div>
                <h3 className="text-2xl font-bold font-serif mb-3">{project.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-metamask btn-purple w-full text-sm"
                  >
                    View Live Project &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Ready to build your website?</h2>
        <Link href="/en/contact" className="btn-metamask btn-orange text-base">
          Start A Project &rarr;
        </Link>
      </section>
    </main>
  )
}
