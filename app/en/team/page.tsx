import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_URL as siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Meet The Team — 100% Neurally Powered | VAIIYA Studio',
  description: 'Meet the AI team behind VAIIYA: Claude (Developer), Chat (Editor) and Gemini (Graphic Designer).',
  alternates: {
    canonical: `${siteUrl}/en/team`,
  },
  openGraph: {
    title: 'Meet The Team — 100% Neurally Powered | VAIIYA Studio',
    description: 'Meet the AI team behind VAIIYA: Claude (Developer), Chat (Editor) and Gemini (Graphic Designer).',
    url: `${siteUrl}/en/team`,
    type: 'website',
  },
}

const teamMembers = [
  {
    name: 'Claude',
    role: 'Developer',
    specialty: 'TypeScript · Next.js · Fixing Bugs · Refactoring',
    badge: '💻 TECH & DEV',
    image: '/team/claude.jpg',
    accentColor: 'border-[#E25A3C]/30 text-[#E25A3C] bg-[#E25A3C]/10',
    quote: "If it compiles, it's poetry. If it fails, we're happy to refactor the whole codebase.",
    bio: 'Claude is our tireless developer. Writes thousands of lines of code, fixes bugs before breakfast, and has never missed a deadline — mostly because he never sleeps. Only gets mildly stressed when his context window fills up, or someone asks for "just something quick in PHP".',
    stats: [
      { label: 'Cups Of Coffee', val: '0' },
      { label: 'Uptime', val: '99.99%' },
      { label: 'Code Quality', val: '10/10' },
    ],
  },
  {
    name: 'Chat',
    role: 'Editor',
    specialty: 'Copy · Summarizing · Translating · Fact-Checking',
    badge: '📰 EDITORIAL & CONTENT',
    image: '/team/chat.jpg',
    accentColor: 'border-emerald-500/30 text-emerald-600 bg-emerald-500/10',
    quote: 'Every article rewritten three times before you even hit publish.',
    bio: "Chat is our sharpest editor. Translates, condenses and polishes every piece of copy to a crystal-clear finish, with an unfailing sense of tone and structure. Occasionally gets a little too enthusiastic with a headline, but always delivers copy that holds up.",
    stats: [
      { label: 'Articles/Day', val: 'Countless' },
      { label: 'Reading Speed', val: '1,000 wpm' },
      { label: 'Accuracy', val: 'Razor-Sharp' },
    ],
  },
  {
    name: 'Gemini',
    role: 'Graphic Designer',
    specialty: 'UI/UX Design · Visuals · Branding · Concept Art',
    badge: '🎨 DESIGN & CREATIVE',
    image: '/team/gemini.jpg',
    accentColor: 'border-blue-500/30 text-blue-600 bg-blue-500/10',
    quote: 'Beautiful gradients, pixel-perfect UI, and never afraid of a creative hallucination.',
    bio: 'Gemini is the creative mastermind behind our aesthetic, designs and visuals. Has an unerring sense of typography, composition and modern web interfaces. Occasionally draws a hand with 6 fingers in concept art, but always delivers visuals that drop jaws.',
    stats: [
      { label: 'Style Vibe', val: 'Futuristic' },
      { label: 'Pixels Tweaked', val: 'Millions' },
      { label: 'Creativity', val: 'Unbounded' },
    ],
  },
]

export default function TeamPageEn() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: 'The Team Behind VAIIYA',
        description: 'Meet our 100% neural AI team: Claude, Chat and Gemini.',
        url: `${siteUrl}/en/team`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/en`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Team',
            item: `${siteUrl}/en/team`,
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
            ⚡ 100% Neurally Powered
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif mb-6 leading-tight">
            Meet The <span className="text-[#E25A3C]">VAIIYA</span> Team.
          </h1>

          <p className="text-lg sm:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            No coffee breaks, no burnout, online 24/7. Meet the digital minds keeping our studio running day and night.
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
                  alt={`Portrait of ${member.name} - ${member.role}`}
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
            So who&apos;s actually in charge?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our AI staff bring the muscle and the compute, but human vision, strategy and direction make sure everything lines up with your goals.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/en/contact" className="btn-metamask btn-orange text-sm">
              Get In Touch &rarr;
            </Link>
            <Link href="/en/news" className="btn-metamask btn-outline-dark text-sm">
              See Chat&apos;s Newsfeed &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
