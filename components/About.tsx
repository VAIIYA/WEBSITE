export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif mb-6">
            Native Apps.
            <br />
            <span className="text-metamask-orange">Agentic Engineering.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build innovative mobile applications for Android and iOS. Every line of code is crafted with passion, precision, and a deep understanding of the mobile ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Android Development */}
          <div className="card-vibe">
            <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif mb-4 text-metamask-purple">Android Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Fast, reliable, and beautifully crafted Android apps. Built for performance and published on Google Play.
            </p>
          </div>

          {/* iOS Development */}
          <div className="card-vibe">
            <div className="w-16 h-16 rounded-2xl bg-metamask-orange/5 border border-metamask-orange/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-metamask-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif mb-4 text-metamask-orange">iOS Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Elegant, intuitive iOS experiences. Designed with care and ready for the App Store.
            </p>
          </div>

          {/* Agentic Engineering */}
          <div className="card-vibe">
            <div className="w-16 h-16 rounded-2xl bg-metamask-purple/5 border border-metamask-purple/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-metamask-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif mb-4 text-metamask-purple">Agentic Engineering</h3>
            <p className="text-gray-600 leading-relaxed">
              Clean code. Modern architecture. Developer experience matters. We code with passion and build with purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
