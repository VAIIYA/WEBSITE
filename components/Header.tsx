'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Wordmark from '@/components/Wordmark'

const primaryLinks = [
  { href: '/apps', name: 'Apps' },
  { href: '/games', name: 'Games' },
  { href: '/podcast', name: 'Podcast' },
]

const secondaryLinks = [
  { href: '/portfolio', name: 'Portfolio' },
  { href: '/early-access', name: 'Early Access' },
]

const mobileLinks = [
  { href: '/', name: 'Home' },
  ...primaryLinks,
  { href: '/android', name: 'Android' },
  { href: '/ios', name: 'iOS' },
  ...secondaryLinks,
  { href: '/about', name: 'About' },
]

const pill =
  'inline-flex items-center rounded-md px-2.5 py-1 text-[13px] text-[#3D3D3A] transition-colors hover:bg-[#E8E6DC] hover:text-ink'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsMenuOpen(false), [pathname])

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname?.startsWith(href))

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/90 backdrop-blur-md transition-[border-color] duration-300 border-b ${
        isScrolled || isMenuOpen ? 'border-[#E8E6DC]' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto grid h-16 max-w-site grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-10">
        {/* Left: primary nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pill} ${isActive(link.href) ? 'bg-[#E8E6DC] text-ink' : 'bg-[#F0EEE6]'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="lg:hidden" />

        {/* Center: wordmark */}
        <Link href="/" aria-label="VAIIYA home" className="justify-self-center text-ink">
          <Wordmark className="text-[19px] sm:text-[21px]" />
        </Link>

        {/* Right: secondary nav + CTA */}
        <div className="flex items-center justify-end gap-1">
          <div className="hidden items-center gap-1 lg:flex">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${pill} ${isActive(link.href) ? 'bg-[#E8E6DC] text-ink' : 'bg-[#F0EEE6]'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="ml-1 hidden items-center rounded-md bg-ink px-3 py-1 text-[13px] text-ivory transition-colors hover:bg-[#3D3D3A] sm:inline-flex"
          >
            Contact
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#F0EEE6] text-ink transition-colors hover:bg-[#E8E6DC] lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-[#E8E6DC] bg-ivory px-4 pb-8 pt-4 sm:px-6 lg:hidden">
          <ul className="divide-y divide-[#E8E6DC]">
            {mobileLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-3.5 font-serif text-2xl text-ink"
                >
                  {link.name}
                  <span aria-hidden="true" className="text-base text-[#87867F]">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-dark mt-6 w-full">
            Contact the studio
          </Link>
        </div>
      )}
    </header>
  )
}
