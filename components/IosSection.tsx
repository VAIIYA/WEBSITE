'use client'

import React from 'react'
import { portfolioApps } from '@/lib/portfolio'

export default function IosSection() {
  const iosApps = portfolioApps.filter((app) => app.platforms.includes('ios'))

  return (
    <section id="ios" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest">
            <span>📱 CORE PILLAR • NATIVE IOS APPS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-serif">
            Native <span className="text-blue-600 italic">iOS</span> Applications
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            Crafted exclusively for Apple iOS and iPadOS using Swift 5.10 and SwiftUI. Engineered with fluid 120Hz animations, haptics, and uncompromising elegance.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">Swift 5.10</span>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">SwiftUI</span>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">App Store Connect</span>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">Combine & Async/Await</span>
          </div>
        </div>

        {/* iOS Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {iosApps.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Header Visual Banner */}
              <div className={`h-52 bg-gradient-to-br ${app.gradient} p-7 flex flex-col justify-between relative`}>
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    iOS NATIVE
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white font-bold text-xl">
                    {app.name.charAt(0)}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white font-serif drop-shadow-md">
                  {app.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-grow justify-between space-y-6">
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  {app.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-metamask bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold"
                    >
                      Download on Apple App Store &rarr;
                    </a>
                  )}
                  {app.externalUrl && (
                    <a
                      href={app.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-metamask btn-outline-dark text-xs font-bold"
                    >
                      Visit Live Web Experience
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

