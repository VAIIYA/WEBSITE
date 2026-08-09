'use client'

import React from 'react'
import Image from 'next/image'

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent py-16">
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 backdrop-blur-md bg-white/70 p-8 sm:p-12 rounded-[40px] border border-gray-200/80 shadow-2xl shadow-purple-950/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metamask-orange/10 text-metamask-orange text-sm font-semibold tracking-wide">
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              VAIIYA • WE. AS ONE.
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.08] tracking-tight text-metamask-purple">
              Crafting <br />
              <span className="text-metamask-orange italic font-light">Digital Ecosystems</span>
              <br />
              That Break Boundaries.
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-xl leading-relaxed font-light">
              Welcome to VAIIYA. We design, engineer, and ship high-impact native mobile applications and Web3 experiences. Drag or slash across the page to tear through the Three.js mesh fabric!
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-purple-50/80 border border-purple-100 rounded-2xl text-center">
                <div className="text-2xl font-bold text-metamask-purple font-serif">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold mt-1">Native Code</div>
              </div>
              <div className="p-3 bg-orange-50/80 border border-orange-100 rounded-2xl text-center">
                <div className="text-2xl font-bold text-metamask-orange font-serif">Multi</div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold mt-1">Platform</div>
              </div>
              <div className="p-3 bg-emerald-50/80 border border-emerald-100 rounded-2xl text-center">
                <div className="text-2xl font-bold text-emerald-600 font-serif">60 FPS</div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold mt-1">3D Physics</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#android"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base shadow-lg shadow-orange-500/25"
              >
                Android Apps
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#ios"
                className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-base"
              >
                iOS Apps
              </a>
              <a
                href="#webbuilding"
                className="btn-secondary-outline inline-flex items-center justify-center px-8 py-4 text-base"
              >
                Web Building
              </a>
            </div>
          </div>

          {/* Right Interactive Mockup Showcase */}
          <div className="relative group hidden lg:block h-[560px]">
            <div className="relative h-full w-full flex items-center justify-center">
              {/* Floating Center Card */}
              <div className="relative z-20 w-[300px] bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] border border-slate-700/80 p-8 shadow-2xl text-white transform hover:scale-105 transition-transform duration-500">
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
                    <span>Web3 & 3D Physics</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-400">TEARABLE</span>
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
