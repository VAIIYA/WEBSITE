'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { localeFromPathname, withLocale } from '@/lib/i18n'
import NewsletterSignup from './NewsletterSignup'

const COPY = {
  nl: {
    tagline: 'VAIIYA is een digitale studio die krachtige websites, native Android & iOS apps en mobiele games bouwt.',
    nav: 'Navigatie',
    stack: 'Kerntechnologieën',
    rights: 'Alle rechten voorbehouden.',
    designedFor: 'Ontworpen voor',
    excellence: 'Digitale Excellentie',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Websites Bouwen', href: '/websites' },
      { name: 'Apps', href: '/apps' },
      { name: 'Games', href: '/games' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Team', href: '/team' },
      { name: 'Contact', href: '/contact' },
      { name: 'Nieuws', href: '/news' },
      { name: 'Podcast', href: '/podcast' },
      { name: 'Shop', href: '/shop' },
    ],
  },
  en: {
    tagline: 'VAIIYA is a digital studio building powerful websites, native Android & iOS apps and mobile games.',
    nav: 'Navigation',
    stack: 'Core Technologies',
    rights: 'All rights reserved.',
    designedFor: 'Designed for',
    excellence: 'Digital Excellence',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Building Websites', href: '/websites' },
      { name: 'Apps', href: '/apps' },
      { name: 'Games', href: '/games' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Team', href: '/team' },
      { name: 'Contact', href: '/contact' },
      { name: 'News', href: '/news' },
      { name: 'Podcast', href: '/podcast' },
    ],
  },
} as const

export default function Footer() {
  const pathname = usePathname() || '/'
  const locale = localeFromPathname(pathname)
  const t = COPY[locale]

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href={withLocale('/', locale)} className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow">
                <Image
                  src="/v-logo.jpg"
                  alt="VAIIYA Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold font-serif text-white tracking-tight">VAIIYA</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-normal">
              {t.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              {t.nav}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={withLocale(link.href, locale)}
                    className="text-slate-300 hover:text-[#E25A3C] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterSignup locale={locale} />
          </div>

        </div>

        {/* Core Stack */}
        <div className="flex flex-wrap gap-2 text-xs mb-8 pb-8 border-b border-slate-900">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Next.js / React</span>
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Three.js 3D</span>
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Kotlin Compose</span>
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Swift 5 SwiftUI</span>
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Mobile Games</span>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VAIIYA Studio. {t.rights}</p>
          <div className="flex items-center gap-2 font-medium">
            <span>{t.designedFor}</span>
            <span className="text-[#E25A3C]">{t.excellence}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
