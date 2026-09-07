'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { localeFromPathname, otherLocalePath, withLocale } from '@/lib/i18n'

const COPY = {
  nl: {
    home: 'Home',
    websites: 'Website',
    apps: 'Apps',
    games: 'Games',
    portfolio: 'Portfolio',
    team: 'Team',
    news: 'Nieuws',
    podcast: 'Podcast',
    contact: 'Contact',
    websitesMobile: '🌐 Websites Bouwen',
    appsMobile: '📱 Android & iOS Apps',
    gamesMobile: '🎮 Mobiele Games',
    portfolioMobile: '🗂️ Portfolio',
    teamMobile: '🤖 Team',
    newsMobile: '📰 Nieuws',
    podcastMobile: '🎙️ Podcast',
    contactMobile: '🛡️ Contact',
    toggleLabel: 'EN',
  },
  en: {
    home: 'Home',
    websites: 'Websites',
    apps: 'Apps',
    games: 'Games',
    portfolio: 'Portfolio',
    team: 'Team',
    news: 'News',
    podcast: 'Podcast',
    contact: 'Contact',
    websitesMobile: '🌐 Building Websites',
    appsMobile: '📱 Android & iOS Apps',
    gamesMobile: '🎮 Mobile Games',
    portfolioMobile: '🗂️ Portfolio',
    teamMobile: '🤖 Team',
    newsMobile: '📰 News',
    podcastMobile: '🎙️ Podcast',
    contactMobile: '🛡️ Contact',
    toggleLabel: 'NL',
  },
} as const

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() || '/'
  const locale = localeFromPathname(pathname)
  const t = COPY[locale]
  const switchHref = otherLocalePath(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const switchLanguage = () => {
    try {
      localStorage.setItem('vaiiya-locale', locale === 'nl' ? 'en' : 'nl')
    } catch {}
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
          : 'bg-white/70 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link href={withLocale('/', locale)} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform">
              <Image
                src="/v-logo.jpg"
                alt="VAIIYA Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-serif leading-none">
                VAIIYA
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E25A3C] font-bold mt-0.5">
                WE. AS ONE.
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 text-sm font-medium">
            <Link
              href={withLocale('/', locale)}
              className="px-4 py-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-white transition-all"
            >
              {t.home}
            </Link>
            <Link
              href={withLocale('/websites', locale)}
              className="px-4 py-2 rounded-full text-slate-700 hover:text-[#E25A3C] hover:bg-white transition-all"
            >
              {t.websites}
            </Link>
            <Link
              href={withLocale('/apps', locale)}
              className="px-4 py-2 rounded-full text-slate-700 hover:text-blue-600 hover:bg-white transition-all"
            >
              {t.apps}
            </Link>
            <Link
              href={withLocale('/games', locale)}
              className="px-4 py-2 rounded-full text-slate-700 hover:text-violet-600 hover:bg-white transition-all"
            >
              {t.games}
            </Link>
            <Link
              href={withLocale('/portfolio', locale)}
              className="px-4 py-2 rounded-full text-slate-700 hover:text-[#E25A3C] hover:bg-white transition-all"
            >
              {t.portfolio}
            </Link>
            <Link
              href={withLocale('/team', locale)}
              className="px-4 py-2 rounded-full text-slate-700 hover:text-[#E25A3C] hover:bg-white transition-all"
            >
              {t.team}
            </Link>
            <Link
              href={withLocale('/news', locale)}
              className="px-4 py-2 rounded-full text-slate-700 hover:text-metamask-purple hover:bg-white transition-all"
            >
              {t.news}
            </Link>
            <Link
              href={withLocale('/podcast', locale)}
              className="px-4 py-2 rounded-full text-slate-700 hover:text-[#E25A3C] hover:bg-white transition-all"
            >
              {t.podcast}
            </Link>
            <Link
              href="/shop"
              className="px-4 py-2 rounded-full text-slate-700 hover:text-[#E25A3C] hover:bg-white transition-all"
            >
              Shop
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href={switchHref}
              onClick={switchLanguage}
              className="px-3.5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-500 hover:text-[#E25A3C] hover:border-[#E25A3C]/40 transition-all"
              title={locale === 'nl' ? 'Switch to English' : 'Overschakelen naar Nederlands'}
            >
              {t.toggleLabel}
            </Link>
            <Link
              href={withLocale('/contact', locale)}
              className="btn-metamask btn-outline-dark !py-2.5 !px-5 text-xs uppercase tracking-wider"
            >
              {t.contactMobile}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-2xl bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <Link
            href={withLocale('/', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-900"
          >
            {t.home}
          </Link>
          <Link
            href={withLocale('/websites', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-[#E25A3C]"
          >
            {t.websitesMobile}
          </Link>
          <Link
            href={withLocale('/apps', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-blue-600"
          >
            {t.appsMobile}
          </Link>
          <Link
            href={withLocale('/games', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-violet-600"
          >
            {t.gamesMobile}
          </Link>
          <Link
            href={withLocale('/portfolio', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-700"
          >
            {t.portfolioMobile}
          </Link>
          <Link
            href={withLocale('/contact', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-700"
          >
            {t.contactMobile}
          </Link>
          <Link
            href={withLocale('/team', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-700"
          >
            {t.teamMobile}
          </Link>
          <Link
            href={withLocale('/news', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-700"
          >
            {t.newsMobile}
          </Link>
          <Link
            href={withLocale('/podcast', locale)}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-[#E25A3C]"
          >
            {t.podcastMobile}
          </Link>
          <Link
            href="/shop"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-700"
          >
            🛍️ Shop
          </Link>
          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <Link
              href={switchHref}
              onClick={() => {
                switchLanguage()
                setIsMenuOpen(false)
              }}
              className="px-4 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-500"
            >
              {locale === 'nl' ? '🇬🇧 English' : '🇳🇱 Nederlands'}
            </Link>
            <Link
              href={withLocale('/contact', locale)}
              onClick={() => setIsMenuOpen(false)}
              className="flex-1 text-center btn-metamask btn-orange text-xs"
            >
              {t.contactMobile}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
