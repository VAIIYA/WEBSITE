import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Verwijderen',
  description: 'Vraag permanente verwijdering aan van je FYNDER-account en bijbehorende persoonsgegevens.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DeleteAccount() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-metamask-orange/10">
            <main className="max-w-4xl mx-auto px-6 py-20">
                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-metamask-orange/10 text-metamask-orange text-[10px] font-bold tracking-widest uppercase mb-6">
                        FYNDER Support
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-metamask-purple">Account Verwijderen</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm font-medium">
                        <p>Product: <span className="text-metamask-purple">FYNDER Android</span></p>
                        <span className="hidden sm:inline text-gray-200">|</span>
                        <p>Actie: <span className="text-red-500 font-semibold">Permanente Verwijdering</span></p>
                    </div>
                </header>

                <div className="space-y-16 prose prose-indigo max-w-none">
                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">Verzoek Om Accountverwijdering</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We hechten waarde aan je privacy en je recht om vergeten te worden. Als je wilt stoppen met het gebruik van FYNDER en wilt dat je gegevens
                            uit onze systemen worden verwijderd, kun je een permanente accountverwijdering aanvragen.
                        </p>
                    </section>

                    <section className="bg-metamask-gray-50 border border-metamask-gray-100 p-8 rounded-[32px]">
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6">Wat wordt er verwijderd?</h2>
                        <p className="text-gray-600 mb-8">Wanneer je je account verwijdert, worden de volgende gegevens permanent verwijderd uit onze productiedatabases:</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Profielinformatie', desc: 'Je naam, leeftijd, bio en alle persoonlijke voorkeuren.' },
                                { title: "Foto's", desc: 'Alle geüploade profielfoto\'s en privé-galerijafbeeldingen.' },
                                { title: 'Matches', desc: 'Alle actieve en eerdere matchverbindingen met andere gebruikers.' },
                                { title: 'Berichten', desc: 'Je volledige chatgeschiedenis van alle gesprekken.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-metamask-gray-100 shadow-sm shrink-0">
                                        <span className="text-metamask-orange text-sm font-bold">{i + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-metamask-purple mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">Hoe Verwijder Je Je Account</h2>
                        <div className="space-y-6">
                            <div className="p-6 border border-metamask-gray-100 rounded-2xl bg-white hover:border-metamask-orange/20 transition-all">
                                <h3 className="font-bold text-metamask-purple mb-2">Optie 1: Verwijdering In De App</h3>
                                <p className="text-gray-600 text-sm">
                                    Open FYNDER &gt; Ga naar Profielinstellingen &gt; Veiligheid & Privacy &gt; Tik op &quot;Account Verwijderen&quot;.
                                    Dit is de snelste methode en verwerkt je verzoek direct.
                                </p>
                            </div>

                            <div className="p-6 border border-metamask-gray-100 rounded-2xl bg-white hover:border-metamask-orange/20 transition-all">
                                <h3 className="font-bold text-metamask-purple mb-2">Optie 2: E-mailverzoek</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Als je geen toegang meer hebt tot de app, kun je ons supportteam mailen. Vermeld daarbij je
                                    geregistreerde e-mailadres of telefoonnummer.
                                </p>
                                <a href="mailto:support@vaiiya.com" className="text-metamask-orange font-mono font-bold hover:text-metamask-purple transition-colors">
                                    support@vaiiya.com
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="bg-red-50 border border-red-100 p-8 rounded-2xl">
                        <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Belangrijke Mededeling
                        </h2>
                        <p className="text-red-800 text-sm leading-relaxed">
                            Accountverwijdering is **permanent en onomkeerbaar**. Zodra dit is verwerkt, kan je profiel niet worden hersteld.
                            Houd er rekening mee dat bepaalde gegevens voor een beperkte periode kunnen worden bewaard indien wettelijk verplicht of voor
                            gerechtvaardigde veiligheidsdoeleinden (bijv. het voorkomen dat geblokkeerde gebruikers nieuwe accounts aanmaken).
                        </p>
                    </section>

                    <section className="text-center py-12 border-t border-metamask-gray-100">
                        <h2 className="text-lg font-semibold text-metamask-purple mb-4">Vragen over je gegevens?</h2>
                        <p className="text-gray-500 text-sm mb-8">Bekijk ons Privacybeleid voor meer details over hoe we omgaan met gebruikersinformatie.</p>
                        <div className="flex justify-center gap-4">
                            <a href="/privacy-policy" className="px-6 py-2 bg-metamask-gray-50 hover:bg-metamask-gray-100 rounded-lg text-sm font-bold text-metamask-purple transition-all">
                                Bekijk Privacybeleid
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
