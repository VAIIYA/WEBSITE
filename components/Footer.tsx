'use client'

import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Android Apps', href: '/apps' },
  { name: 'Mobile Games', href: '/games' },
  { name: 'Web Platforms', href: '/websites' },
  { name: 'News', href: '/news' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
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
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              VAIIYA is an Android-first digital studio engineering high-performance mobile apps, games, and web applications.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://play.google.com/store/apps/dev?id=7804895561285369781"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <span>Google Play Developer Profile</span>
                <span>&rarr;</span>
              </a>
              <a
                href="https://groups.google.com/g/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-violet-400 hover:text-violet-300 font-semibold"
              >
                <span>Google Group Tester Community</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#E25A3C] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms & Testing */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Platforms &amp; Testing
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/early-access" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  🚀 Early Access Program
                </Link>
              </li>
              <li>
                <Link href="/android" className="text-slate-300 hover:text-[#E25A3C] font-medium">
                  🤖 Android Native Studio
                </Link>
              </li>
              <li>
                <Link href="/ios" className="text-slate-300 hover:text-[#E25A3C] font-medium">
                  🍎 iOS Capabilities &amp; Roadmap
                </Link>
              </li>
              <li>
                <a
                  href="https://groups.google.com/g/vaiiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#E25A3C] font-medium"
                >
                  👥 Tester Google Group
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/apps/testing/com.hexmoji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#E25A3C] font-medium"
                >
                  🎮 HEXMOJI Closed Beta
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/dev?id=7804895561285369781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#E25A3C] font-medium"
                >
                  🏪 Google Play Store
                </a>
              </li>
            </ul>
          </div>

          {/* Core Stack */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Kotlin &amp; Compose</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Android Native</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Next.js / React</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Swift &amp; SwiftUI</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Mobile Games</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VAIIYA Studio. All rights reserved. Deployed on Vercel.</p>
          <div className="flex items-center gap-2 font-medium">
            <span>Android-First Development &bull;</span>
            <span className="text-[#E25A3C]">Digital Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

