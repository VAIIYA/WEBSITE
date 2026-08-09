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
      colors: ['#ff5c16', '#3d065f', '#00f0ff', '#14F195'],
    })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@vaiiya.com')
    setCopiedEmail(true)
    triggerConfetti()
    setTimeout(() => setCopiedEmail(false), 3000)
  }

  return (
    <section id="socials" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto relative z-20 pointer-events-none">
        {/* Forcefield Protected Container */}
        <div
          id="indestructible-socials-zone"
          className="relative backdrop-blur-2xl bg-gradient-to-br from-slate-900/95 via-purple-950/90 to-slate-900/95 text-white p-8 sm:p-14 rounded-[48px] border-2 border-cyan-400/50 shadow-[0_0_90px_rgba(0,240,255,0.25)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_120px_rgba(255,92,22,0.35)] pointer-events-auto"
        >
          {/* Glowing Forcefield Background Halo */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-[48px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
          </div>

          {/* Section Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/60 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-lg shadow-cyan-500/20 mb-6 animate-bounce">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              🛡️ INDESTRUCTABLE ZONE • 100% UNBREAKABLE
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif text-white mb-6 tracking-tight">
              As <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-emerald-400 italic">Indestructible</span> Our Socials
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              While Three.js tearing physics rip through the rest of the website fabric, our socials stand <strong>impervious to tearing</strong>. Connect with VAIIYA across all official channels.
            </p>
          </div>

          {/* Social Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="group relative p-6 rounded-3xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.04] shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/10 group-hover:bg-cyan-500/20 text-cyan-400 group-hover:text-white transition-colors border border-white/10">
                    {social.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    UNBREAKABLE
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

          {/* Direct Email Copy Box */}
          <div className="relative z-10 max-w-xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Direct Contact</div>
              <div className="text-base text-white font-mono mt-0.5">contact@vaiiya.com</div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center justify-center gap-2"
            >
              {copiedEmail ? (
                <>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Official Email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
