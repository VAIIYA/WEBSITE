'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', name: 'Home', mobile: 'Home', hover: 'hover:text-slate-900' },
  {
    href: '/early-access',
    name: 'Early Access',
    mobile: '🚀 Early Access Beta',
    hover: 'hover:text-emerald-700',
    highlight: true,
  },
  { href: '/news', name: 'News', mobile: '📰 News', hover: 'hover:text-metamask-purple' },
  { href: '/podcast', name: 'Podcast', mobile: '🎙️ Podcast', hover: 'hover:text-violet-600' },
  { href: '/websites', name: 'Website', mobile: '🌐 Website Building', hover: 'hover:text-[#E25A3C]' },
  { href: '/apps', name: 'Apps', mobile: '📱 Android Apps', hover: 'hover:text-blue-600' },
  { href: '/games', name: 'Games', mobile: '🎮 Mobile Games', hover: 'hover:text-violet-600' },
  { href: '/portfolio', name: 'Portfolio', mobile: '🗂️ Portfolio', hover: 'hover:text-[#E25A3C]' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <Link href="/" className="flex items-center gap-3 group">
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
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 font-semibold transition-all shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{link.name}</span>
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-slate-700 hover:bg-white transition-all ${link.hover}`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-metamask btn-outline-dark !py-2.5 !px-5 text-xs uppercase tracking-wider"
            >
              🛡️ Contact
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
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-3 shadow-xl">
          {navLinks.map((link) =>
            link.highlight ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-base"
              >
                <span>{link.mobile}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                  Open
                </span>
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-2 text-lg font-semibold text-slate-700 hover:text-slate-900"
              >
                {link.mobile}
              </Link>
            )
          )}
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <Link
              href="/android"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-2 py-2 text-base font-semibold text-emerald-700 hover:text-emerald-900"
            >
              <span>🤖 Android Studio</span>
            </Link>
            <Link
              href="/ios"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-2 py-2 text-base font-semibold text-blue-700 hover:text-blue-900"
            >
              <span>🍎 iOS Roadmap</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-slate-100 flex gap-3">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center btn-metamask btn-orange text-xs"
            >
              🛡️ Contact Studio
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

