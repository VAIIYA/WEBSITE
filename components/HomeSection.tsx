'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function HomeSection() {
  const [activeTab, setActiveTab] = useState<'agents' | 'web' | 'mobile'>('agents')

  return (
    <section id="home" className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-mesh-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold MetaMask Style Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E25A3C] animate-pulse" />
              <span>THE AGENTIC DEVELOPMENT STUDIO</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#1F1F1F] font-bold">VAIIYA v2.0</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] font-serif">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E25A3C] via-[#1F1F1F] to-[#00f0ff] italic">
                Agentic Future.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              VAIIYA crafts intelligent AI Agents, high-performance websites, and native Android & iOS mobile applications. Built for visionary teams and modern web ecosystems.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-3 max-w-lg">
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <div className="text-2xl font-bold text-[#E25A3C] font-serif">AI Agents</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Autonomous</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <div className="text-2xl font-bold text-[#1F1F1F] font-serif">Next.js</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Web 3D</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <div className="text-2xl font-bold text-emerald-600 font-serif">Kotlin/Swift</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Native Mobile</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#agentic"
                className="btn-metamask btn-orange text-base"
              >
                🤖 Explore Agentic AI
              </a>
              <a
                href="#webbuilding"
                className="btn-metamask btn-purple text-base"
              >
                🌐 Web Studio
              </a>
              <a
                href="#android"
                className="btn-metamask btn-outline-dark text-base"
              >
                📱 Mobile Apps
              </a>
            </div>
          </div>

          {/* Right Column: Playful Interactive 3D Mockup Card */}
          <div className="lg:col-span-5 relative">
            {/* Glow backing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-orange-400 to-purple-600 rounded-full blur-[80px] opacity-30 animate-pulse-glow" />

            <div className="relative bg-slate-900 text-white rounded-[36px] p-7 shadow-2xl border border-slate-800 animate-float-slow">
              
              {/* Top Bar of Interactive Widget */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E25A3C] flex items-center justify-center font-bold text-lg text-white shadow-md">
                    V
                  </div>
                  <div>
                    <div className="font-bold text-base font-serif">VAIIYA Engine</div>
                    <div className="text-xs text-slate-400">Agent Status: <span className="text-emerald-400 font-semibold">Active & Orchestrating</span></div>
                  </div>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Tab Selector inside Card */}
              <div className="grid grid-cols-3 gap-2 bg-slate-800/80 p-1.5 rounded-2xl mb-6 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('agents')}
                  className={`py-2 rounded-xl transition-all ${
                    activeTab === 'agents' ? 'bg-[#E25A3C] text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🤖 Agent AI
                </button>
                <button
                  onClick={() => setActiveTab('web')}
                  className={`py-2 rounded-xl transition-all ${
                    activeTab === 'web' ? 'bg-[#1F1F1F] text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🌐 Web Studio
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`py-2 rounded-xl transition-all ${
                    activeTab === 'mobile' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  📱 Mobile
                </button>
              </div>

              {/* Dynamic Content Preview Box */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs text-slate-300 space-y-3 min-h-[180px] flex flex-col justify-between">
                {activeTab === 'agents' && (
                  <>
                    <div className="text-orange-400 font-bold">$ vaiiya agent --task &quot;build multi-agent app&quot;</div>
                    <div className="text-slate-400">✓ Initializing DeepMind Agentic Workflow...</div>
                    <div className="text-slate-400">✓ Generating Vite + React + Kotlin codebase...</div>
                    <div className="text-emerald-400 font-semibold">⚡ Agentic Engine: Deployed successfully</div>
                  </>
                )}

                {activeTab === 'web' && (
                  <>
                    <div className="text-purple-400 font-bold">$ vaiiya web --framework vite-react</div>
                    <div className="text-slate-400">✓ Three.js 3D WebGL Shader Enabled</div>
                    <div className="text-slate-400">✓ 100 Lighthouse Performance Score</div>
                    <div className="text-cyan-400 font-semibold">🚀 Live URL: vaiiya.vercel.app</div>
                  </>
                )}

                {activeTab === 'mobile' && (
                  <>
                    <div className="text-emerald-400 font-bold">$ vaiiya mobile --target android-ios</div>
                    <div className="text-slate-400">✓ Kotlin Jetpack Compose (Android)</div>
                    <div className="text-slate-400">✓ Swift 5.10 SwiftUI (iOS)</div>
                    <div className="text-amber-400 font-semibold">📱 App Store & Play Store Ready</div>
                  </>
                )}

                <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500 font-sans">
                  <span>VAIIYA Agentic Platform</span>
                  <span className="text-emerald-400 font-semibold">ONLINE</span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  GitHub & Vercel Hosted
                </span>
                <a href="#agentic" className="text-[#E25A3C] hover:underline font-semibold">
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

