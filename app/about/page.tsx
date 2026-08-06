import Link from 'next/link'
import Footer from '@/components/Footer'

export default function AboutPage() {
    return (
        <main className="min-h-screen">

            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl sm:text-7xl font-serif mb-8 leading-tight">
                            Crafting High-Vibe <br />
                            <span className="text-metamask-orange">Native Applications.</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            VAIIYA is a creative studio specializing in native app development for Android and iOS. We don&apos;t just write code; we curate experiences through Agentic Engineering.
                        </p>
                    </div>
                </div>

                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-metamask-orange/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-metamask-purple/5 rounded-full blur-3xl opacity-50"></div>
            </section>

            {/* What is Agentic Engineering? */}
            <section className="py-24 bg-metamask-gray-50/50 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif mb-6">What is Agentic Engineering?</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Agentic Engineering represents a paradigm shift in software development. Coined by Andrej Karpathy, it&apos;s the practice of using advanced AI to bridge the gap between human intent and machine execution.
                                </p>
                                <p>
                                    At VAIIYA, we&apos;ve embraced this fully. We act as creative directors, guiding powerful AI agents to manifest complex native applications at the speed of thought. This isn&apos;t just about efficiency; it&apos;s about maintaining a higher level of creative flow&mdash;the &apos;vibe&apos;&mdash;throughout the entire building process.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-metamask-purple to-metamask-orange rounded-3xl opacity-10 blur-2xl absolute inset-0 transform rotate-3"></div>
                            <div className="relative bg-white border border-metamask-gray-100 p-8 rounded-3xl shadow-xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                </div>
                                <div className="space-y-4 font-mono text-sm uppercase tracking-wider text-metamask-purple/60">
                                    <div className="flex gap-4">
                                        <span className="text-metamask-orange">01</span>
                                        <span>Initialize Vision</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-metamask-orange">02</span>
                                        <span>Set Neural Parameters</span>
                                    </div>
                                    <div className="flex gap-4 pl-4 border-l border-metamask-gray-100">
                                        <span>- Architecture: Modular</span>
                                    </div>
                                    <div className="flex gap-4 pl-4 border-l border-metamask-gray-100">
                                        <span>- Platform: Android &amp; iOS</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-metamask-orange">03</span>
                                        <span>Execute Vibe Check...</span>
                                    </div>
                                    <div className="flex gap-4 text-metamask-orange animate-pulse">
                                        <span>&gt; Status: High Vibe Detected</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Native Advantage */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-serif mb-16">Why Native?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-vibe p-10">
                            <div className="w-14 h-14 bg-metamask-orange/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-metamask-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium mb-4">Unmatched Performance</h3>
                            <p className="text-gray-600">Native apps deliver buttery-smooth interactions and full access to device capabilities for real-world impact.</p>
                        </div>

                        <div className="card-vibe p-10">
                            <div className="w-14 h-14 bg-metamask-purple/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-metamask-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium mb-4">Long-Term Value</h3>
                            <p className="text-gray-600">One codebase vision, maintained with care. Scalable architecture that grows with your product.</p>
                        </div>

                        <div className="card-vibe p-10">
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium mb-4">Ecosystem Reach</h3>
                            <p className="text-gray-600">Google Play and the App Store connect your app to billions of users worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-24 bg-metamask-purple text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-serif mb-8 text-white">The VAIIYA Vision</h2>
                    <p className="text-xl text-purple-100 leading-relaxed mb-12">
                        &quot;We believe the future of software isn&apos;t just about functional utility, but about how it makes you feel. By combining AI-augmented development with strong product intuition, we create apps that feel like magic.&quot;
                    </p>
                    <div className="h-px w-24 bg-metamask-orange mx-auto mb-12"></div>
                    <div className="flex flex-wrap justify-center gap-8 italic text-purple-200">
                        <span>#AgenticEngineering</span>
                        <span>#Android</span>
                        <span>#iOS</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-metamask-gray-50 rounded-[40px] p-8 md:p-16 text-center border border-metamask-gray-100">
                        <h2 className="text-4xl font-serif mb-6">Ready to join the vibe?</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Explore our portfolio or reach out to see how we can bring your app idea to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/portfolio" className="btn-primary">
                                View Portfolio
                            </Link>
                            <a href="https://x.com/VAIIYA_MEDIA" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                Follow @V4IIYA
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
