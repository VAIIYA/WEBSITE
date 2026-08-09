import Link from 'next/link'
import Image from 'next/image'
import { socialLinks } from '@/lib/socialLinks'

const sectionLinks = [
  { name: 'Homepage', href: '#home' },
  { name: 'Android Apps', href: '#android' },
  { name: 'iOS Apps', href: '#ios' },
  { name: 'Website Building', href: '#webbuilding' },
  { name: 'Indestructible Socials', href: '#socials' },
]

export default function Footer() {
  return (
    <footer className="relative z-30 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/v-logo.jpg" alt="VAIIYA Logo" width={40} height={40} className="rounded-xl shadow" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white leading-none">VAIIYA</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-orange-400 font-semibold">We. As One.</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light max-w-sm">
              1-Page Interactive Experience featuring real-time Three.js Verlet cloth physics simulation and indestructible socials. Built for Android, iOS, and Web3.
            </p>
          </div>

          {/* Navigation Sections */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Sections
            </h3>
            <ul className="space-y-3 text-sm">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Indestructible Socials
            </h3>
            <ul className="space-y-3 text-sm">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Engineered With
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300">Three.js</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300">Next.js 14</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300">TailwindCSS</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300">Verlet Physics</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VAIIYA. All rights reserved. Deployed on Vercel & GitHub.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <span className="font-semibold text-orange-400">Precision & Physics</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
