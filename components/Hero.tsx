export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white overflow-hidden py-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-metamask-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-metamask-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metamask-orange/10 text-metamask-orange text-sm font-medium animate-fade-in">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Android & iOS App Development
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-metamask-purple">
              Crafting <br />
              <span className="text-metamask-orange italic font-light">Native Apps</span>
              <br />
              People Love.
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-xl leading-relaxed font-light">
              From concept to App Store. We design, build, and ship beautiful native applications for Android and iOS. No compromises. Just pure innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#portfolio"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Explore Our Portfolio
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://github.com/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg border-metamask-purple/20 text-metamask-purple hover:bg-metamask-purple/5"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right Visual - Multi-Platform App Showcase */}
          <div className="relative group hidden lg:block h-[600px]">
            <div className="absolute inset-0 bg-metamask-orange/5 rounded-3xl blur-3xl" />

            <div className="relative h-full w-full">
              {/* iOS Phone Mockup */}
              <div className="absolute top-6 right-0 w-[240px] aspect-[9/19] bg-white rounded-[3rem] border-[10px] border-slate-200 overflow-hidden transform rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-110 z-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-200 rounded-b-2xl z-10" />
                <div className="relative h-full w-full bg-gradient-to-br from-blue-500 to-cyan-400 p-8 flex flex-col justify-end text-white">
                  <div className="space-y-4 mb-10">
                    <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-2xl tracking-tight">iOS</div>
                      <div className="text-xs opacity-60 font-light">Native. Beautiful.</div>
                    </div>
                  </div>
                  <div className="h-12 w-full bg-white rounded-2xl shadow-xl flex items-center justify-center text-xs font-bold text-blue-600 tracking-widest">
                    APP STORE
                  </div>
                </div>
              </div>

              {/* Android Phone Mockup */}
              <div className="absolute bottom-10 left-0 w-[240px] aspect-[9/19] bg-slate-900 rounded-[3rem] shadow-3xl border-[8px] border-slate-800 overflow-hidden transform -rotate-12 transition-all duration-700 hover:rotate-0 hover:scale-110 z-30 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-10" />
                <div className="relative h-full w-full bg-gradient-to-br from-metamask-purple to-indigo-900 p-8 flex flex-col justify-end text-white">
                  <div className="space-y-4 mb-10">
                    <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-2xl tracking-tight">ANDROID</div>
                      <div className="text-xs opacity-60 font-light">Fast. Reliable.</div>
                    </div>
                  </div>
                  <div className="h-12 w-full bg-white rounded-2xl shadow-xl flex items-center justify-center text-xs font-bold text-metamask-purple tracking-widest">
                    GOOGLE PLAY
                  </div>
                </div>
              </div>

              {/* Floating Tech Orbs */}
              <div className="absolute top-1/4 -right-12 w-20 h-20 bg-metamask-orange rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 animate-bounce z-10">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div className="absolute bottom-1/4 right-0 w-16 h-16 bg-metamask-purple rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40 animate-pulse z-40">
                <div className="w-6 h-6 rounded-full border-2 border-white/50 border-t-white animate-spin" />
              </div>

              {/* Decorative Circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-metamask-gray-100 rounded-full opacity-50" />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-metamask-gray-50 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
