'use client'

import React, { useState } from 'react'

export default function WebBuildingSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('interactive-3d')
  const [selectedTier, setSelectedTier] = useState<string>('pro')
  const [emailInput, setEmailInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmailInput('')
    }, 4000)
  }

  return (
    <section id="webbuilding" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#3d065f] text-xs font-bold uppercase tracking-widest">
            <span>🌐 CORE PILLAR • WEB BUILDING STUDIO</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-serif">
            High-Impact <span className="text-[#3d065f] italic">Websites & PWAs</span> Built for Speed
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            We architect ultra-fast modern websites using Next.js 14, Three.js 3D WebGL physics, TailwindCSS, and seamless cloud deployments on Vercel.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="font-bold text-[#ff5c16] text-xl font-serif">Three.js</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Interactive 3D Canvas</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="font-bold text-[#3d065f] text-xl font-serif">Next.js 14</div>
              <div className="text-xs text-slate-500 font-medium mt-1">React App Router</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="font-bold text-cyan-600 text-xl font-serif">Vercel</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Global Edge Host</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="font-bold text-emerald-600 text-xl font-serif">100/100</div>
              <div className="text-xs text-slate-500 font-medium mt-1">SEO & Performance</div>
            </div>
          </div>
        </div>

        {/* 2 Columns: Featured Showcase Card & Project Inquiry Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Web Studio Build Card */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-800">
                  FEATURED LIVE BUILD
                </span>
                <span className="text-xs text-[#ff5c16] font-mono font-semibold">VERCEL DEPLOYED</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
                NIGHTSTUDIO
              </h3>

              <p className="text-slate-300 leading-relaxed font-normal mb-8">
                Creative Web3 digital studio experience with interactive 3D WebGL visuals, custom responsive layouts, and seamless Solana wallet integration.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Interactive Three.js 3D WebGL Canvas</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Solana Web3 Smart Contract PWAs</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Sub-second Global Vercel Deployment</span>
                </div>
              </div>
            </div>

            <a
              href="https://nightstudio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask btn-purple w-full text-base"
            >
              Explore Live Build (NIGHTSTUDIO) &rarr;
            </a>
          </div>

          {/* Interactive Project Inquiry Builder */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-serif mb-2">
                Start Your Website Build
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Configure your project requirements below to submit a direct inquiry to VAIIYA.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Category */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    1. Website Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'interactive-3d', label: '3D WebGL / Interactive' },
                      { id: 'saas-pwa', label: 'SaaS App / Web3 PWA' },
                      { id: 'studio-portfolio', label: 'Studio Showcase' },
                      { id: 'custom-platform', label: 'Custom Enterprise App' },
                    ].map((cat) => (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-3 rounded-2xl text-left text-xs font-semibold border transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-[#3d065f] text-white border-transparent shadow'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Scope Tier */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    2. Project Scope Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'starter', label: 'Starter Launch' },
                      { id: 'pro', label: 'Pro 3D Web' },
                      { id: 'custom', label: 'Custom Fullstack' },
                    ].map((tier) => (
                      <button
                        type="button"
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id)}
                        className={`py-2.5 px-3 rounded-2xl text-center text-xs font-bold border transition-all ${
                          selectedTier === tier.id
                            ? 'bg-[#ff5c16] text-white border-transparent shadow'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Contact Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    3. Your Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5c16]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-metamask btn-orange w-full text-base font-bold"
                >
                  {submitted ? '✓ Request Submitted! We will reply shortly.' : 'Submit Website Build Inquiry'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

