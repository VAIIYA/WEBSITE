'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { socialLinks } from '@/lib/socialLinks'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSocialOpen, setIsSocialOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative py-2">
          {/* Logo Main */}
          <Link href="/" className="flex-shrink-0 z-10 hidden sm:flex items-center gap-3">
            <Image src="/v-logo.jpg" alt="VAIIYA Logo" width={40} height={40} className="rounded-xl" />
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-metamask-purple leading-none">VAIIYA</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-medium">We. As One.</span>
            </div>
          </Link>

          {/* Mobile Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center z-0 sm:hidden">
            <Link href="/" className="flex flex-col items-center">
              <Image src="/v-logo.jpg" alt="VAIIYA Logo" width={32} height={32} className="rounded-lg mb-1" />
              <span className="text-xl font-serif text-metamask-purple leading-none">VAIIYA</span>
            </Link>
          </div>

          {/* Right Utilities (Socials) */}
          <div className="hidden md:flex items-center gap-6 z-10 w-full justify-end sm:w-auto">
            {/* Socials Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsSocialOpen(!isSocialOpen)}
                aria-expanded={isSocialOpen}
                aria-haspopup="true"
                className="flex items-center text-sm text-gray-600 hover:text-metamask-orange transition-colors font-medium"
              >
                Socials
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full right-0 mt-2 w-48 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-metamask-gray-100 transition-all duration-200 ${
                  isSocialOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible`}
              >
                <div className="py-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-metamask-gray-50 hover:text-metamask-orange transition-colors"
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className="text-gray-600 hover:text-metamask-orange transition-colors relative z-[60]"
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

        {/* Bottom Row: Navigation Menu */}
        <div className="hidden md:flex justify-center items-center space-x-10 mt-6 pb-2">
          <Link href="/" className="text-gray-600 hover:text-metamask-orange transition-colors font-medium">
            Home
          </Link>

          <Link href="/portfolio" className="text-gray-600 hover:text-metamask-orange transition-colors font-medium">
            Portfolio
          </Link>

          <Link href="/about" className="text-gray-600 hover:text-metamask-orange transition-colors font-medium">
            About
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden overflow-y-auto">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-white/98 backdrop-blur-xl"></div>

          <div className="relative pt-20 pb-12 px-6">
            <div className="flex flex-col space-y-8">
              {/* Main Links */}
              <div className="space-y-4">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-3xl font-serif text-metamask-purple hover:text-metamask-orange transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-3xl font-serif text-metamask-purple hover:text-metamask-orange transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-3xl font-serif text-metamask-purple hover:text-metamask-orange transition-colors"
                >
                  About
                </Link>
              </div>



              {/* Socials Section */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Connect</h3>
                <div className="flex flex-wrap gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-metamask-orange transition-colors p-2 bg-gray-50 rounded-xl"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
