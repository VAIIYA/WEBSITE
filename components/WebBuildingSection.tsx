import React from 'react'

export default function WebBuildingSection() {
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
            We architect ultra-fast modern websites using Vite, React, Next.js, Three.js 3D WebGL physics, TailwindCSS, and seamless cloud deployments on Vercel.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="font-bold text-[#ff5c16] text-xl font-serif">Three.js</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Interactive 3D Canvas</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="font-bold text-[#3d065f] text-xl font-serif">Vite / React</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Lightning Fast HMR</div>
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

        {/* Featured Web Studio Build Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between">
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
        </div>

      </div>
    </section>
  )
}

