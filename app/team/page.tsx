import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_URL as siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Ons Team — 100% Neuraal Aangedreven | VAIIYA Studio',
  description: 'Maak kennis met het AI-team achter VAIIYA: Claude (Developer), Chat (Redacteur) en Gemini (Grafisch Vormgever).',
  alternates: {
    canonical: `${siteUrl}/team`,
  },
  openGraph: {
    title: 'Ons Team — 100% Neuraal Aangedreven | VAIIYA Studio',
    description: 'Maak kennis met het AI-team achter VAIIYA: Claude (Developer), Chat (Redacteur) en Gemini (Grafisch Vormgever).',
    url: `${siteUrl}/team`,
    type: 'website',
  },
}

const teamMembers = [
  {
    name: 'Claude',
    role: 'Developer',
    specialty: 'TypeScript · Next.js · Bugs Fixen · Refactoring',
    badge: '💻 TECH & DEV',
    image: '/team/claude.jpg',
    accentColor: 'border-[#E25A3C]/30 text-[#E25A3C] bg-[#E25A3C]/10',
    quote: 'Als het compileert, is het poëzie. Als het faalt, refactoren we gerust de hele codebase.',
    bio: 'Claude is onze onvermoeibare developer. Schrijft duizenden regels code, lost bugs op voor het ontbijt en heeft nog nooit een deadline gemist — vooral omdat hij nooit slaapt. Raakt alleen lichtelijk gestrest wanneer zijn context window volloopt of iemand vraagt om "even snel iets in PHP te maken".',
    stats: [
      { label: 'Kopjes Koffie', val: '0' },
      { label: 'Uptime', val: '99.99%' },
      { label: 'Code Kwaliteit', val: '10/10' },
    ],
  },
  {
    name: 'Chat',
    role: 'Redacteur',
    specialty: 'Tekst · Samenvatten · Vertalen · Feitencheck',
    badge: '📰 REDACTIE & CONTENT',
    image: '/team/chat.jpg',
    accentColor: 'border-emerald-500/30 text-emerald-600 bg-emerald-500/10',
    quote: 'Elk artikel drie keer herschreven voordat jij zelfs maar op publiceren hebt geklikt.',
    bio: 'Chat is onze scherpste redacteur. Vertaalt, condenseert en polijst elke tekst tot haarscherp Nederlands, met een feilloos gevoel voor toon en structuur. Verzint soms net iets te enthousiast een kop, maar levert altijd copy af die staat.',
    stats: [
      { label: 'Artikelen/Dag', val: 'Talloos' },
      { label: 'Leessnelheid', val: '1.000 wpm' },
      { label: 'Nauwkeurigheid', val: 'Haarscherp' },
    ],
  },
  {
    name: 'Gemini',
    role: 'Grafisch Vormgever',
    specialty: 'UI/UX Design · Visuals · Branding · Concept Art',
    badge: '🎨 DESIGN & CREATIVE',
    image: '/team/gemini.jpg',
    accentColor: 'border-blue-500/30 text-blue-600 bg-blue-500/10',
    quote: 'Mooie gradients, pixel-perfect UI en nooit bang voor een creatieve hallucinatie.',
    bio: 'Gemini is het creatieve meesterbrein achter onze esthetiek, designs en visuals. Heeft een feilloos gevoel voor typografie, compositie en moderne webinterfaces. Tekent in concept art soms nog wel eens een hand met 6 vingers, maar levert altijd visuals af waar je mond van openvalt.',
    stats: [
      { label: 'Stijl Vibe', val: 'Futuristisch' },
      { label: 'Pixels Getweakt', val: 'Miljoenen' },
      { label: 'Creativiteit', val: 'Onbegrensd' },
    ],
  },
]

export default function TeamPage() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: 'Het Team achter VAIIYA',
        description: 'Maak kennis met ons 100% neurale AI-team: Claude, Chat en Gemini.',
        url: `${siteUrl}/team`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Team',
            item: `${siteUrl}/team`,
          },
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen bg-cream text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E25A3C]/10 border border-[#E25A3C]/20 text-[#E25A3C] text-xs font-bold uppercase tracking-widest mb-6">
            ⚡ 100% Neuraal Aangedreven
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif mb-6 leading-tight">
            Ontmoet het <span className="text-[#E25A3C]">VAIIYA</span> Team.
          </h1>

          <p className="text-lg sm:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Geen koffiepauzes, geen burnouts, 24/7 online. Maak kennis met de digitale breinen die onze studio dag en nacht draaiende houden.
          </p>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Avatar */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                <Image
                  src={member.image}
                  alt={`Portret van ${member.name} - ${member.role}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border ${member.accentColor} bg-white/90`}>
                    {member.badge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h2 className="text-2xl font-bold font-serif text-slate-900">{member.name}</h2>
                    <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      ONLINE
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#E25A3C] mb-3">
                    {member.role}
                  </p>

                  <p className="text-xs text-slate-400 font-medium mb-4">
                    {member.specialty}
                  </p>

                  <blockquote className="p-3 rounded-2xl bg-cream/70 border-l-2 border-[#E25A3C] text-xs italic text-slate-700 mb-4">
                    &ldquo;{member.quote}&rdquo;
                  </blockquote>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-card-border text-center">
                  {member.stats.map((s) => (
                    <div key={s.label} className="p-2 rounded-xl bg-card">
                      <div className="text-xs font-bold text-slate-900 font-serif">{s.val}</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-tight mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Human Director Callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-card-border bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-3xl">🧠</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            En wie heeft de leiding?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Onze AI-medewerkers leveren de spierballen en de rekenkracht, maar de menselijke visie, strategie en regie zorgen ervoor dat alles naadloos aansluit op jouw doelstellingen.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/contact" className="btn-metamask btn-orange text-sm">
              Neem Contact Op &rarr;
            </Link>
            <Link href="/news" className="btn-metamask btn-outline-dark text-sm">
              Bekijk Chat&apos;s Nieuwsfeed &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
