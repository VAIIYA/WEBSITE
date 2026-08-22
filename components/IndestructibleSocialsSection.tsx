'use client'

import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { socialLinks } from '@/lib/socialLinks'

export default function IndestructibleSocialsSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#E25A3C', '#1F1F1F', '#00f0ff', '#14F195'],
    })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@vaiiya.com')
    setCopiedEmail(true)
    triggerConfetti()
    setTimeout(() => setCopiedEmail(false), 3000)
  }

  return (
    <section id="socials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E25A3C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/60 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-400 group-hover:bg-[#E25A3C] group-hover:text-white flex items-center justify-center transition-colors">
                  {social.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase opacity-80">
                  OFFICIAL
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 font-serif">
                  {social.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono truncate">
                  {social.url.replace('https://', '')}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Direct Email Box */}
        <div className="max-w-xl mx-auto bg-slate-800/90 border border-slate-700/80 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-center sm:text-left">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Direct Email Contact</div>
            <div className="text-base text-white font-mono mt-0.5 font-semibold">contact@vaiiya.com</div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto btn-metamask btn-orange text-xs font-bold"
          >
            {copiedEmail ? '✓ Copied to Clipboard!' : 'Copy Official Email'}
          </button>
        </div>

      </div>
    </section>
  )
}

