'use client'

import React from 'react'
import Image from 'next/image'

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent py-12 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full relative z-20 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Card */}
          <div className="space-y-8 backdrop-blur-xl bg-slate-900/80 p-8 sm:p-12 rounded-[40px] border border-slate-700/80 shadow-2xl pointer-events-auto text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              VAIIYA • WE. AS ONE.
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.08] tracking-tight text-white">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 italic">Tearable Digital</span>
              <br />
              Ecosystems.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
              Welcome to VAIIYA. We design, engineer, and ship high-impact native mobile applications and Web3 experiences. <strong>Drag or right-click slash across the screen to rip through the Three.js mesh!</strong>
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-2xl text-center">
                <div className="text-2xl font-bold text-cyan-400 font-serif">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">Native Apps</div>
              </div>
              <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-2xl text-center">
                <div className="text-2xl font-bold text-orange-400 font-serif">Verlet</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">Cloth Physics</div>
              </div>
              <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-2xl text-center">
                <div className="text-2xl font-bold text-emerald-400 font-serif">60 FPS</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">Three.js</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#android"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-all shadow-lg shadow-orange-500/25 active:scale-95"
              >
                Android Apps
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#ios"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all active:scale-95"
              >
                iOS Apps
              </a>
              <a
                href="#socials"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full bg-slate-900 hover:bg-black text-cyan-400 border border-cyan-400/50 transition-all active:scale-95"
              >
                🛡️ Indestructible Socials
              </a>
            </div>
          </div>

          {/* Right Interactive Card */}
          <div className="relative group hidden lg:block h-[560px] pointer-events-none">
            <div className="relative h-full w-full flex items-center justify-center pointer-events-none">
              <div className="relative z-20 w-[320px] bg-slate-900/90 backdrop-blur-2xl rounded-[2.5rem] border border-slate-700/90 p-8 shadow-2xl text-white pointer-events-auto">
                <div className="flex items-center gap-4 mb-6">
                  <Image src="/v-logo.jpg" alt="VAIIYA Logo" width={48} height={48} className="rounded-2xl shadow-md" />
                  <div>
                    <div className="font-serif text-2xl text-white leading-none">VAIIYA</div>
                    <div className="text-xs text-orange-400 font-medium tracking-widest mt-1">STUDIO</div>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300 font-light">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>Android Engine</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400">ACTIVE</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>iOS Swift Architecture</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">ACTIVE</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span>Three.js Tearable Physics</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-400">PUSHMATRIX</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
                  <span>Interactive 1-Page</span>
                  <span className="text-orange-400 font-mono">v1.0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
