'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#ff5c16] font-bold mt-0.5">
                WE. AS ONE.
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 text-sm font-medium">
            <a
              href="/"
              className="px-4 py-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-white transition-all"
            >
              Home
            </a>
            <a
              href="/#agentic"
              className="px-4 py-2 rounded-full text-slate-700 hover:text-[#ff5c16] hover:bg-white transition-all flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff5c16] animate-pulse" />
              Agentic AI
            </a>
            <a
              href="/#webbuilding"
              className="px-4 py-2 rounded-full text-slate-700 hover:text-purple-600 hover:bg-white transition-all"
            >
              Web Studio
            </a>
            <a
              href="/#android"
              className="px-4 py-2 rounded-full text-slate-700 hover:text-emerald-600 hover:bg-white transition-all"
            >
              Android
            </a>
            <a
              href="/#ios"
              className="px-4 py-2 rounded-full text-slate-700 hover:text-blue-600 hover:bg-white transition-all"
            >
              iOS Apps
            </a>
            <Link
              href="/news"
              className="px-4 py-2 rounded-full text-slate-700 hover:text-metamask-purple hover:bg-white transition-all"
            >
              News
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/#socials"
              className="btn-metamask btn-outline-dark !py-2.5 !px-5 text-xs uppercase tracking-wider"
            >
              🛡️ Socials
            </a>
            <a
              href="/#webbuilding"
              className="btn-metamask btn-orange !py-2.5 !px-6 text-xs uppercase tracking-wider"
            >
              Start Build
            </a>
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
          <a
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-900"
          >
            Home
          </a>
          <a
            href="/#agentic"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-[#ff5c16]"
          >
            🤖 Agentic Engineering
          </a>
          <a
            href="/#webbuilding"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-purple-700"
          >
            🌐 Website Building Studio
          </a>
          <a
            href="/#android"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-emerald-600"
          >
            🤖 Android Applications
          </a>
          <a
            href="/#ios"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-blue-600"
          >
            📱 iOS Swift Apps
          </a>
          <a
            href="/#socials"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-700"
          >
            🛡️ Indestructible Socials
          </a>
          <Link
            href="/news"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold text-slate-700"
          >
            📰 News
          </Link>
          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <a
              href="/#webbuilding"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center btn-metamask btn-orange text-xs"
            >
              Start Build Request
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

