import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about the cookies VAIIYA uses, how we handle your preferences, and the third-party tools that help us improve our products.',
};

export default function CookiePolicy() {
    return (
        <div className="bg-ivory text-ink">
            <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
                <header className="mb-16">
                    <h1 className="font-serif text-[40px] leading-[1.08] sm:text-6xl mb-6 text-ink">Cookie Policy</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#5E5D59] text-sm font-medium">
                        <p>Last updated: <span className="text-ink">March 2026</span></p>
                        <span className="hidden sm:inline text-[#D1CFC5]">|</span>
                        <p>Type: <span className="text-[#C2603F]">User Disclosure</span></p>
                    </div>
                </header>

                <div className="space-y-14 max-w-none">
                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">1. What are Cookies?</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            Cookies are small data files stored on your device that help us improve your experience. They allow us
                            to remember your preferences, analyze site performance, and ensure our services function securely.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">2. Types of Cookies We Use</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-[#F0EEE6] border border-[#E8E6DC] rounded-2xl hover:border-[#D1CFC5] transition-colors">
                                <p className="text-[#C2603F] font-bold mb-2 uppercase text-xs tracking-wider">Essential</p>
                                <p className="text-sm text-[#5E5D59]">Necessary for the website to function. These cannot be disabled.</p>
                            </div>
                            <div className="p-6 bg-[#F0EEE6] border border-[#E8E6DC] rounded-2xl hover:border-[#D1CFC5] transition-colors">
                                <p className="text-[#C2603F] font-bold mb-2 uppercase text-xs tracking-wider">Analytics</p>
                                <p className="text-sm text-[#5E5D59]">Help us understand how visitors interact with our digital products.</p>
                            </div>
                            <div className="p-6 bg-[#F0EEE6] border border-[#E8E6DC] rounded-2xl hover:border-[#D1CFC5] transition-colors">
                                <p className="text-[#C2603F] font-bold mb-2 uppercase text-xs tracking-wider">Functional</p>
                                <p className="text-sm text-[#5E5D59]">Used to remember settings like language preferences and themes.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">3. Third-Party Cookies</h2>
                        <p className="text-[#3D3D3A] mb-6">We utilize specific third-party analytics tools to measure performance:</p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-[#E8E6DC] rounded-xl bg-[#F0EEE6] hover:bg-white transition-all group">
                                <div>
                                    <p className="font-semibold text-ink group-hover:text-[#C2603F] transition-colors">Google Analytics</p>
                                    <p className="text-xs text-[#87867F] italic">Global usage tracking & feature performance</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-coral animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between p-4 border border-[#E8E6DC] rounded-xl bg-[#F0EEE6] hover:bg-white transition-all group">
                                <div>
                                    <p className="font-semibold text-ink group-hover:text-[#C2603F] transition-colors">Vercel Analytics</p>
                                    <p className="text-xs text-[#87867F] italic">Next.js deployment health & user flow</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-coral animate-pulse"></div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#F0EEE6] border border-transparent p-8 rounded-2xl">
                        <h2 className="font-serif text-3xl text-ink mb-4">4. Manage Your Preferences</h2>
                        <p className="text-[#3D3D3A] mb-6 leading-relaxed">
                            You can control or opt out of cookies through your browser settings. Most browsers allow you to block
                            cookies or alert you when a cookie is being sent. Note that disabling essential cookies may impact
                            your ability to use certain features.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white rounded-lg text-xs font-medium text-ink border border-[#E8E6DC]">Chrome Settings</span>
                            <span className="px-4 py-2 bg-white rounded-lg text-xs font-medium text-ink border border-[#E8E6DC]">Safari Privacy</span>
                            <span className="px-4 py-2 bg-white rounded-lg text-xs font-medium text-ink border border-[#E8E6DC]">Firefox Preferences</span>
                        </div>
                    </section>


                    <section className="bg-ink p-10 rounded-2xl text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-metamask-orange/5 to-transparent"></div>
                        <h2 className="font-serif text-3xl text-ivory mb-2 relative z-10">Questions?</h2>
                        <p className="text-[#D1CFC5] text-sm mb-8 max-w-sm mx-auto relative z-10">If you have questions about our cookie usage, please contact our privacy team.</p>
                        <a href="mailto:vaiiya@googlegroups.com" className="btn bg-ivory text-ink hover:bg-[#E8E6DC] relative z-10">
                            Contact Privacy Team
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
}
