'use client'

import React from 'react'
import { portfolioApps } from '@/lib/portfolio'

export default function IosSection() {
  const iosApps = portfolioApps.filter((app) => app.platforms.includes('ios'))

  return (
    <section id="ios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto relative z-20 pointer-events-none">
        {/* Section Header */}
        <div className="backdrop-blur-xl bg-slate-900/85 p-8 sm:p-12 rounded-[40px] border border-slate-700/80 shadow-2xl mb-12 text-center max-w-4xl mx-auto pointer-events-auto text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/30 mb-4">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            iOS Apps Ecosystem
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">
            Native <span className="text-blue-400 italic">iOS</span> Applications
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            Crafted for Apple platforms using Swift 5.10 and SwiftUI. Engineered with fluid animations, haptic feedback, and uncompromising elegance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">Swift 5</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">SwiftUI</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">Combine Framework</span>
            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">App Store Connect</span>
          </div>
        </div>

        {/* iOS App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pointer-events-none">
          {iosApps.map((app) => (
            <div
              key={app.id}
              className="group backdrop-blur-xl bg-slate-900/85 border border-slate-700/80 rounded-[36px] overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col pointer-events-auto text-white"
            >
              {/* App Header Visual */}
              <div className={`relative h-56 bg-gradient-to-br ${app.gradient} p-8 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                    iOS NATIVE
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white font-bold text-xl">
                    {app.name.charAt(0)}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-4xl font-serif text-white drop-shadow-md">
                    {app.name}
                  </h3>
                </div>
              </div>

              {/* App Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                  {app.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/30 active:scale-95"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      Download on App Store
                    </a>
                  )}

                  {app.externalUrl && (
                    <a
                      href={app.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Visit Live Web Experience
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
