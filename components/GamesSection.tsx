'use client'

import React from 'react'
import { portfolioApps } from '@/lib/portfolio'

export default function GamesSection() {
  const games = portfolioApps.filter((app) => app.category === 'game')

  return (
    <section id="games" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-widest">
            <span>🎮 CORE PILLAR • MOBILE GAMES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-serif">
            Native <span className="text-violet-600 italic">Mobile</span> Games
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            Fast, fun, and built to last — mobile games engineered natively for Android and iOS, from core gameplay loop to store launch.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">Native Android &amp; iOS</span>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">Smooth 60fps+ Gameplay</span>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">Google Play Store</span>
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">App Store Connect</span>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between sm:col-span-2 sm:max-w-md sm:mx-auto"
            >
              {/* Header Visual Banner */}
              <div className={`h-52 bg-gradient-to-br ${game.gradient} p-7 flex flex-col justify-between relative`}>
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {game.platforms.map((p) => p.toUpperCase()).join(' · ')} GAME
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white font-bold text-xl">
                    {game.name.charAt(0)}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white font-serif drop-shadow-md">
                  {game.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-grow justify-between space-y-6">
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  {game.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {game.playStoreUrl && (
                    <a
                      href={game.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-metamask bg-violet-600 text-white hover:bg-violet-700 text-xs font-bold"
                    >
                      Get on Google Play Store &rarr;
                    </a>
                  )}
                  {game.appStoreUrl && (
                    <a
                      href={game.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-metamask bg-slate-900 text-white hover:bg-black text-xs font-bold"
                    >
                      Download on Apple App Store &rarr;
                    </a>
                  )}
                  {game.externalUrl && (
                    <a
                      href={game.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-metamask btn-outline-dark text-xs font-bold"
                    >
                      Play the Web Demo
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
