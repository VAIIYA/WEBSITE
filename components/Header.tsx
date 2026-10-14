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
  { href: '/apps', name: 'Apps', mobile: '📱 Android & iOS Apps', hover: 'hover:text-emerald-600' },
  { href: '/games', name: 'Games', mobile: '🎮 Unity & Mobile Games', hover: 'hover:text-violet-600' },
  { href: '/ios', name: 'iOS', mobile: '🍎 iOS Engineering', hover: 'hover:text-blue-600' },
  { href: '/websites', name: 'Web', mobile: '🌐 Web Platforms', hover: 'hover:text-[#E25A3C]' },
  { href: '/podcast', name: 'Podcast', mobile: '🎙️ Podcast', hover: 'hover:text-amber-600' },
  { href: '/portfolio', name: 'Portfolio', mobile: '🗂️ Portfolio', hover: 'hover:text-slate-900' },
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
          ? 'bg-[#F4EFE6]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#D8CEBA]'
          : 'bg-[#F4EFE6]/80 backdrop-blur-xs py-4 border-b border-[#D8CEBA]/40'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#D8CEBA] shadow-xs group-hover:border-[#D9532F] transition-colors">
              <Image
                src="/v-logo.jpg"
                alt="VAIIYA Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider text-[#1A1815] font-mono leading-none">
                  VAIIYA
                </span>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 bg-[#EAE3D2] border border-[#D8CEBA] text-[#1A1815]/70 rounded">
                  SYS:AI
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#D9532F] font-mono font-bold mt-1">
                DELOS // ARC DIVISION
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#EAE3D2]/90 p-1.5 rounded-xl border border-[#D8CEBA] text-xs font-mono font-semibold">
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#1A1815] bg-[#E59B27]/20 hover:bg-[#E59B27]/30 border border-[#E59B27]/60 font-bold transition-all shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E59B27] animate-pulse" />
                  <span>{link.name}</span>
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-[#1A1815]/80 hover:text-[#1A1815] hover:bg-white/80 transition-all ${link.hover}`}
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
              className="btn-metamask btn-orange !py-2.5 !px-5 text-[11px]"
            >
              [ TRANSMIT // CONTACT ]
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

