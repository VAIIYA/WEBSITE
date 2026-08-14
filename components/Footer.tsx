'use client'

import Link from 'next/link'
import Image from 'next/image'

const sectionLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Agentic AI', href: '#agentic' },
  { name: 'Web Studio', href: '#webbuilding' },
  { name: 'Android Apps', href: '#android' },
  { name: 'iOS Apps', href: '#ios' },
  { name: 'Socials', href: '#socials' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="#home" className="flex items-center gap-3">
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
              VAIIYA is an agentic engineering studio specializing in autonomous AI software development, Vite & React web applications, native Android Kotlin, and iOS SwiftUI apps. Hosted on GitHub & Vercel ([vaiiya.vercel.app](https://vaiiya.vercel.app)).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#ff5c16] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Stack */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Agentic AI</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Vite / React</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Three.js 3D</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Kotlin Compose</span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono">Swift 5 SwiftUI</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VAIIYA Studio. All rights reserved. Deployed on Vercel.</p>
          <div className="flex items-center gap-2 font-medium">
            <span>Designed for</span>
            <span className="text-[#ff5c16]">Agentic Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

