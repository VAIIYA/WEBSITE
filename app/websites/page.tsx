import type { Metadata } from 'next'
import Link from 'next/link'
import { portfolioApps } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Websites',
  description: 'Krachtige websites & PWA’s gebouwd met Next.js, Three.js en TailwindCSS — ontworpen voor snelheid, SEO en conversie.',
}

const stack = [
  { label: 'Next.js / React', detail: 'Server components, routing, ingebouwde SEO' },
  { label: 'Three.js 3D WebGL', detail: 'Interactieve canvas & shader-werk' },
  { label: 'TailwindCSS', detail: 'Consistent designsysteem, snelle iteratie' },
  { label: 'Edge Hosting', detail: 'Wereldwijd CDN, razendsnelle deploys' },
]

const process = [
  { step: '01', title: 'Ontdekken', text: 'We brengen je doelgroep, doelen en content in kaart voordat er een regel code geschreven wordt.' },
  { step: '02', title: 'Ontwerpen', text: 'Strakke, merkgetrouwe layouts — typografie en beweging afgestemd op helderheid, niet op drukte.' },
  { step: '03', title: 'Bouwen', text: 'Next.js + Tailwind, opgebouwd uit componenten en typesafe, met 3D/WebGL waar het meerwaarde biedt.' },
  { step: '04', title: 'Lanceren', text: 'Wereldwijd uitgerold met monitoring, analytics en een 100/100 Lighthouse-doelstelling.' },
]

const webProjects = portfolioApps.filter((app) => app.category === 'web')

export default function WebsitesPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-card border-b border-card-border overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-card-border text-xs font-bold uppercase tracking-widest mb-6">
            🌐 KERNPIJLER &bull; WEBBOUW STUDIO
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Krachtige <span className="italic text-[#E25A3C]">Websites &amp; PWA’s</span> Gebouwd Voor Snelheid
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
            We bouwen razendsnelle moderne websites met Next.js, React, Three.js 3D WebGL, TailwindCSS en naadloze cloud-deployments — sites die direct laden en converteren.
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
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-center mb-14">Hoe We Bouwen</h2>
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
          <h2 className="text-3xl font-bold font-serif text-center mb-14">Live Projecten</h2>
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
                    Bekijk Live Project &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Klaar om je website te bouwen?</h2>
        <Link href="/contact" className="btn-metamask btn-orange text-base">
          Start Een Project &rarr;
        </Link>
      </section>
    </main>
  )
}
