'use client'

import React, { useState } from 'react'

export default function WebBuildingSection() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('3d-web')
  const [selectedBudget, setSelectedBudget] = useState<string>('premium')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section id="webbuilding" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="backdrop-blur-md bg-white/80 p-8 sm:p-12 rounded-[40px] border border-gray-200 shadow-xl mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-metamask-purple text-white text-xs font-bold uppercase tracking-widest mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Website Building Studio
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-metamask-purple mb-4">
            Custom <span className="text-metamask-orange italic">Web Building</span> & 3D WebGL
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            We architect ultra-fast, modern websites using Next.js 14, Three.js 3D physics, TailwindCSS, and Web3 integrations. Turn your web vision into an interactive reality.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-purple-50/70 border border-purple-100 rounded-2xl">
              <div className="font-bold text-metamask-purple text-lg font-serif">Three.js / WebGL</div>
              <div className="text-xs text-gray-500 mt-1">3D Physics & Canvas</div>
            </div>
            <div className="p-4 bg-orange-50/70 border border-orange-100 rounded-2xl">
              <div className="font-bold text-metamask-orange text-lg font-serif">Next.js 14</div>
              <div className="text-xs text-gray-500 mt-1">SSR & Edge Architecture</div>
            </div>
            <div className="p-4 bg-cyan-50/70 border border-cyan-100 rounded-2xl">
              <div className="font-bold text-cyan-700 text-lg font-serif">Web3 & Solana</div>
              <div className="text-xs text-gray-500 mt-1">Smart Contract PWAs</div>
            </div>
            <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl">
              <div className="font-bold text-emerald-700 text-lg font-serif">100 Lighthouse</div>
              <div className="text-xs text-gray-500 mt-1">SEO & Performance</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Featured Web Project Card */}
          <div className="backdrop-blur-xl bg-white/85 border border-gray-200/90 rounded-[40px] p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="px-3.5 py-1 rounded-full bg-purple-100 text-metamask-purple text-xs font-bold uppercase tracking-wider">
                  FEATURED STUDIO BUILD
                </span>
                <span className="text-xs text-gray-400 font-mono">LIVE PROJECT</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-metamask-purple mb-4">
                NIGHTSTUDIO
              </h3>

              <p className="text-gray-600 leading-relaxed font-light mb-8">
                Creative digital studio crafting immersive Web3 experiences on Solana. Built with bespoke 3D visual language, custom interactive shaders, and responsive UI design.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactive 3D WebGL Canvas & Physics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Solana Web3 Wallet Connection</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sub-second Vercel Global Edge Deployment</span>
                </div>
              </div>
            </div>

            <a
              href="https://nightstudio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-metamask-purple text-white font-semibold text-base transition-all hover:bg-metamask-purple/90 shadow-lg shadow-purple-950/20 active:scale-95"
            >
              Explore NIGHTSTUDIO Live
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Interactive Project Request Builder */}
          <div className="backdrop-blur-xl bg-white/85 border border-gray-200/90 rounded-[40px] p-8 sm:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-serif text-metamask-purple mb-2">
              Start Your Website Build
            </h3>
            <p className="text-gray-600 text-sm font-light mb-6">
              Configure your desired website features below and send an instant inquiry to VAIIYA.
            </p>

            <form onSubmit={handleSubmitRequest} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  1. Project Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: '3d-web', name: '3D Physics / Tearable Website' },
                    { id: 'web3-pwa', name: 'Web3 / Solana PWA' },
                    { id: 'agency-portfolio', name: 'Agency / Studio Portfolio' },
                    { id: 'custom-app', name: 'Custom Full-Stack App' },
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setSelectedProjectType(cat.id)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                        selectedProjectType === cat.id
                          ? 'border-metamask-orange bg-orange-50/80 text-metamask-orange shadow-sm'
                          : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  2. Budget & Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'starter', name: 'Starter' },
                    { id: 'premium', name: 'Premium 3D' },
                    { id: 'enterprise', name: 'Custom Enterprise' },
                  ].map((budget) => (
                    <button
                      type="button"
                      key={budget.id}
                      onClick={() => setSelectedBudget(budget.id)}
                      className={`py-2.5 px-3 rounded-xl text-center text-xs font-bold border transition-all ${
                        selectedBudget === budget.id
                          ? 'border-metamask-purple bg-purple-50/80 text-metamask-purple shadow-sm'
                          : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {budget.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  3. Contact Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-metamask-orange/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-metamask-orange text-white font-bold text-base transition-all hover:bg-metamask-orange/90 shadow-lg shadow-orange-500/25 active:scale-95 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Inquiry Received! We will be in touch.
                  </>
                ) : (
                  <>
                    Submit Website Project Request
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
