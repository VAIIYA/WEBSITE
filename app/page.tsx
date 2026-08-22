import Link from 'next/link'

const pillars = [
  {
    href: '/websites',
    emoji: '🌐',
    title: 'Websites',
    description: 'High-impact websites & PWAs built with Next.js, Three.js and Vercel.',
    accent: 'text-[#E25A3C]',
  },
  {
    href: '/apps',
    emoji: '📱',
    title: 'Apps',
    description: 'Native Android & iOS apps built with Kotlin and Swift.',
    accent: 'text-blue-600',
  },
  {
    href: '/games',
    emoji: '🎮',
    title: 'Games',
    description: 'Native mobile games engineered for smooth 60fps+ gameplay.',
    accent: 'text-violet-600',
  },
  {
    href: '/contact',
    emoji: '🛡️',
    title: 'Contact',
    description: 'Reach the studio directly or follow along on our official channels.',
    accent: 'text-cyan-600',
  },
]

const stats = [
  { value: '4+', label: 'Shipped Products' },
  { value: 'Vercel', label: 'Global Edge Hosting' },
  { value: '100', label: 'Lighthouse Score' },
]

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-cream text-ink selection:bg-[#E25A3C] selection:text-white">
      {/* Hero */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border text-xs font-semibold text-ink shadow-sm mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E25A3C] animate-pulse" />
            <span>THE DIGITAL STUDIO</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] font-serif mb-6">
            Websites, Apps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E25A3C] via-ink to-blue-600 italic">
              &amp; Games.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            VAIIYA builds high-performance websites, native Android &amp; iOS apps, and mobile games for teams who want it done right.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link href="/websites" className="btn-metamask btn-orange text-base">
              Explore Our Work
            </Link>
            <Link href="/contact" className="btn-metamask btn-outline-dark text-base">
              Get in Touch
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="p-4 bg-card rounded-2xl border border-card-border text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#E25A3C] font-serif">{s.value}</div>
                <div className="text-[11px] font-semibold text-ink/60 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
