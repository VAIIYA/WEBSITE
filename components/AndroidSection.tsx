'use client'

import React from 'react'
import Image from 'next/image'
import { portfolioApps } from '@/lib/portfolio'

export default function AndroidSection() {
  const androidApps = portfolioApps.filter((app) => app.platforms.includes('android'))

  return (
    <section id="android" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="backdrop-blur-md bg-white/80 p-8 sm:p-12 rounded-[40px] border border-gray-200 shadow-xl mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest border border-emerald-200/60 mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
            </svg>
            Android Apps Ecosystem
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-metamask-purple mb-4">
            Native <span className="text-emerald-500 italic">Android</span> Applications
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Engineered with modern Kotlin, Jetpack Compose, and Material 3 design systems. Optimized for performance across all Android devices and screen sizes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">Kotlin Coroutines</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">Jetpack Compose</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">Google Play Store</span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">Clean Architecture</span>
          </div>
        </div>

        {/* Android App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {androidApps.map((app) => (
            <div
              key={app.id}
              className="group backdrop-blur-xl bg-white/85 border border-gray-200/90 rounded-[36px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* App Header Visual */}
              <div className={`relative h-56 bg-gradient-to-br ${app.gradient} p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-slate-800 text-[10px] font-bold uppercase tracking-wider shadow">
                    ANDROID NATIVE
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white font-bold text-lg">
                    {app.name.charAt(0)}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-white drop-shadow-md">
                    {app.name}
                  </h3>
                </div>
              </div>

              {/* App Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                  {app.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  {app.playStoreUrl && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-emerald-600/30 active:scale-95"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                      </svg>
                      Get on Google Play
                    </a>
                  )}

                  {app.externalUrl && (
                    <a
                      href={app.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Live Demo / Web Version
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
