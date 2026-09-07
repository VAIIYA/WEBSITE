import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookiebeleid',
  description: 'Lees meer over de cookies die VAIIYA gebruikt, hoe we omgaan met je voorkeuren en de tools van derden die ons helpen onze producten te verbeteren.',
};

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-metamask-orange/10">
            <main className="max-w-4xl mx-auto px-6 py-20">
                <header className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-metamask-purple">Cookiebeleid</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm font-medium">
                        <p>Laatst bijgewerkt: <span className="text-metamask-purple">maart 2026</span></p>
                        <span className="hidden sm:inline text-gray-200">|</span>
                        <p>Type: <span className="text-metamask-orange">Gebruikersverklaring</span></p>
                    </div>
                </header>

                <div className="space-y-16 prose prose-indigo max-w-none">
                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">1. Wat zijn Cookies?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Cookies zijn kleine bestandjes die op je apparaat worden opgeslagen en die ons helpen jouw ervaring te verbeteren. Ze stellen ons in staat
                            om je voorkeuren te onthouden, de prestaties van de site te analyseren en ervoor te zorgen dat onze diensten veilig functioneren.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">2. Soorten Cookies Die We Gebruiken</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-metamask-gray-50 border border-metamask-gray-100 rounded-2xl hover:border-metamask-orange/30 transition-colors">
                                <p className="text-metamask-orange font-bold mb-2 uppercase text-xs tracking-wider">Essentieel</p>
                                <p className="text-sm text-gray-500">Noodzakelijk voor het functioneren van de website. Deze kunnen niet worden uitgeschakeld.</p>
                            </div>
                            <div className="p-6 bg-metamask-gray-50 border border-metamask-gray-100 rounded-2xl hover:border-metamask-orange/30 transition-colors">
                                <p className="text-metamask-orange font-bold mb-2 uppercase text-xs tracking-wider">Analytisch</p>
                                <p className="text-sm text-gray-500">Helpen ons begrijpen hoe bezoekers omgaan met onze digitale producten.</p>
                            </div>
                            <div className="p-6 bg-metamask-gray-50 border border-metamask-gray-100 rounded-2xl hover:border-metamask-orange/30 transition-colors">
                                <p className="text-metamask-orange font-bold mb-2 uppercase text-xs tracking-wider">Functioneel</p>
                                <p className="text-sm text-gray-500">Worden gebruikt om instellingen zoals taalvoorkeuren en thema's te onthouden.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">3. Cookies van Derden</h2>
                        <p className="text-gray-600 mb-6">We gebruiken specifieke analysetools van derden om prestaties te meten:</p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-metamask-gray-100 rounded-xl bg-metamask-gray-50 hover:bg-white transition-all group">
                                <div>
                                    <p className="font-semibold text-metamask-purple group-hover:text-metamask-orange transition-colors">Google Analytisch</p>
                                    <p className="text-xs text-gray-400 italic">Wereldwijde gebruikstracking & functieprestaties</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-metamask-orange ring-4 ring-metamask-orange/10 animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between p-4 border border-metamask-gray-100 rounded-xl bg-metamask-gray-50 hover:bg-white transition-all group">
                                <div>
                                    <p className="font-semibold text-metamask-purple group-hover:text-metamask-orange transition-colors">Vercel Analytisch</p>
                                    <p className="text-xs text-gray-400 italic">Statistieken over website-gebruik en gebruikersstromen</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-metamask-orange ring-4 ring-metamask-orange/10 animate-pulse"></div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-metamask-orange/5 border border-metamask-orange/10 p-8 rounded-2xl">
                        <h2 className="text-2xl font-serif text-metamask-purple mb-4">4. Beheer Je Voorkeuren</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Je kunt cookies beheren of uitschakelen via je browserinstellingen. De meeste browsers stellen je in staat om
                            cookies te blokkeren of je te waarschuwen wanneer een cookie wordt verzonden. Let op: het uitschakelen van essentiële cookies kan
                            invloed hebben op het gebruik van bepaalde functies.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white rounded-lg text-xs font-medium text-metamask-purple border border-metamask-gray-100 shadow-sm">Chrome-instellingen</span>
                            <span className="px-4 py-2 bg-white rounded-lg text-xs font-medium text-metamask-purple border border-metamask-gray-100 shadow-sm">Safari Privacy</span>
                            <span className="px-4 py-2 bg-white rounded-lg text-xs font-medium text-metamask-purple border border-metamask-gray-100 shadow-sm">Firefox-voorkeuren</span>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">5. Web3 & Digitale Wallets</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Let op: interacties met Web3-wallets (bijv. Phantom, Solflare) maken geen gebruik van traditionele HTTP-
                            cookies. Deze wallets gebruiken lokale browseropslag of beveiligde omgevingen om cryptografische sleutels
                            en status te beheren. VAIIYA heeft via dit opslagmechanisme geen toegang tot je privésleutels.
                        </p>
                    </section>

                    <section className="bg-metamask-purple p-10 rounded-[40px] text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-metamask-orange/5 to-transparent"></div>
                        <h2 className="text-2xl font-serif text-white mb-2 relative z-10">Vragen?</h2>
                        <p className="text-purple-100 text-sm mb-8 max-w-sm mx-auto relative z-10">Heb je vragen over ons cookiegebruik? Neem dan contact op met ons privacyteam.</p>
                        <a href="mailto:privacy@vaiiya.com" className="px-10 py-4 bg-metamask-orange hover:bg-white hover:text-metamask-orange text-white rounded-2xl font-bold transition-all inline-block shadow-xl shadow-metamask-orange/10 relative z-10">
                            Neem Contact Op Met Privacyteam
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
}
