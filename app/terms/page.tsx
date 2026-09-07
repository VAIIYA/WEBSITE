import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gebruiksvoorwaarden',
  description: 'De voorwaarden voor het gebruik van VAIIYA-applicaties, websites en digitale producten.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-metamask-orange/10">
            <main className="max-w-4xl mx-auto px-6 py-20">
                <header className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-metamask-purple">Gebruiksvoorwaarden</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm font-medium">
                        <p>Laatst bijgewerkt: <span className="text-metamask-purple">maart 2026</span></p>
                        <span className="hidden sm:inline text-gray-200">|</span>
                        <p>Rechtsgebied: <span className="text-metamask-orange">Nederland</span></p>
                    </div>
                </header>

                <div className="space-y-16 prose prose-indigo max-w-none">
                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">1. Aanvaarding Van De Voorwaarden</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Door toegang te krijgen tot of gebruik te maken van de diensten van VAIIYA (&quot;wij,&quot; &quot;ons,&quot; of &quot;onze&quot;), ga je akkoord met deze
                            Gebruiksvoorwaarden. Als je niet akkoord gaat met deze voorwaarden, mag je onze applicaties,
                            websites of andere digitale producten niet gebruiken.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">2. Beschrijving Van Onze Diensten</h2>
                        <p className="text-gray-600 leading-relaxed">
                            VAIIYA is een digitale studio gespecialiseerd in de ontwikkeling van Web3-applicaties op de Solana-blockchain,
                            Android-mobiele applicaties en krachtige webprojecten. Onze productlijn omvat onder andere
                            FYNDER, VYNDER, BLOBIO en NIGHTSTUDIO.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">3. Verantwoordelijkheden Van De Gebruiker</h2>
                        <p className="text-gray-600 mb-4 font-medium">Gebruikers van VAIIYA-producten zijn verantwoordelijk voor:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
                            <li>Het vertrouwelijk houden van hun digitale wallets en privésleutels.</li>
                            <li>Ervoor zorgen dat alle activiteiten onder hun account voldoen aan de toepasselijke wetgeving.</li>
                            <li>Het verstrekken van juiste informatie wanneer dit nodig is voor de werking van de dienst.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">4. Verboden Gedrag</h2>
                        <p className="text-gray-600 mb-4">Je gaat ermee akkoord je niet bezig te houden met een van de volgende activiteiten:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Het reverse-engineeren of decompileren van VAIIYA-software.',
                                'Het misbruiken van kwetsbaarheden in smart contracts of protocollen.',
                                'Het gebruiken van onze diensten voor witwaspraktijken of illegale financiering.',
                                'Je bezighouden met intimidatie of schadelijk gedrag binnen community-functies.'
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3 text-sm text-gray-500 bg-metamask-gray-50 p-3 rounded-lg border border-metamask-gray-100">
                                    <span className="text-metamask-orange font-bold">✕</span>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">5. Intellectueel Eigendom</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Alle content, code, ontwerpen, logo&apos;s en merken, waaronder de namen van onze verschillende producten (bijv. FYNDER,
                            VYNDER), zijn exclusief eigendom van VAIIYA. Je krijgt een beperkte, niet-exclusieve licentie om
                            onze producten uitsluitend voor hun beoogde doel te gebruiken.
                        </p>
                    </section>

                    <section className="bg-metamask-gray-50 border border-metamask-orange/20 p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-metamask-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-4 flex items-center gap-2 relative z-10">
                            <span className="text-metamask-orange">⚠️</span> Blockchain Disclaimer
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                            VAIIYA biedt interfaces voor gedecentraliseerde protocollen. Gebruikers aanvaarden alle financiële risico&apos;s verbonden aan
                            blockchaintransacties. Wij hebben geen controle over het Solana-netwerk en zijn niet verantwoordelijk voor
                            mislukte transacties, gas fees of misbruik van smart contracts buiten onze controle. Gebruikers zijn zelf volledig verantwoordelijk voor
                            het verifiëren van de juistheid van hun on-chain interacties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">6. Uitsluiting Van Garanties</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Onze diensten worden geleverd op &quot;AS IS&quot;- en &quot;AS AVAILABLE&quot;-basis, zonder enige garantie,
                            uitdrukkelijk, impliciet of wettelijk. Voor zover maximaal toegestaan door toepasselijk recht, wijst VAIIYA
                            alle garanties af, waaronder — maar niet beperkt tot — impliciete garanties van verkoopbaarheid, geschiktheid
                            voor een bepaald doel, eigendomsrecht en niet-inbreuk.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Wij garanderen niet dat onze diensten ononderbroken, tijdig, veilig, foutloos of vrij van
                            virussen of andere schadelijke componenten zullen zijn, of dat eventuele gebreken zullen worden verholpen. Je gebruikt onze diensten
                            volledig op eigen risico.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">7. Beperking Van Aansprakelijkheid</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Voor zover maximaal toegestaan door toepasselijk recht, is VAIIYA, haar oprichters, medewerkers,
                            contractanten of gelieerde partijen in geen geval aansprakelijk voor indirecte, incidentele, bijzondere, gevolg-, exemplaire
                            of punitieve schade, inclusief maar niet beperkt tot verlies van winst, omzet, gegevens, digitale bezittingen,
                            goodwill of andere immateriële verliezen, voortvloeiend uit of gerelateerd aan je gebruik van, of onvermogen om gebruik te maken van,
                            onze diensten &mdash; zelfs als wij op de hoogte zijn gesteld van de mogelijkheid van dergelijke schade.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Voor zover een dergelijke aansprakelijkheid niet volledig kan worden uitgesloten onder toepasselijk recht, zal VAIIYA&apos;s totale
                            aansprakelijkheid voortvloeiend uit of gerelateerd aan deze voorwaarden of onze diensten niet hoger zijn dan het
                            hoogste bedrag van (a) het bedrag dat je ons hebt betaald, indien van toepassing, voor de dienst die aanleiding gaf tot de claim in de twaalf
                            (12) maanden voorafgaand aan de gebeurtenis, of (b) honderd euro (&euro;100).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">8. Vrijwaring</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Je gaat ermee akkoord VAIIYA en haar oprichters, medewerkers, contractanten
                            en gelieerde partijen te verdedigen, te vrijwaren en schadeloos te stellen voor alle claims, aansprakelijkheden, schade, verliezen en kosten, inclusief
                            redelijke juridische kosten, die voortvloeien uit of op enige wijze verband houden met jouw toegang tot of gebruik van onze
                            diensten, jouw schending van deze voorwaarden of jouw schending van rechten van derden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">9. Diensten & Links Van Derden</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Onze diensten kunnen links naar of integraties met websites, applicaties of
                            protocollen van derden bevatten die niet eigendom zijn van of onder controle staan van VAIIYA. Wij hebben geen controle over, en aanvaarden geen
                            verantwoordelijkheid voor, de inhoud, privacypraktijken of beschikbaarheid van diensten van derden.
                            Jouw interacties met dergelijke derden zijn uitsluitend tussen jou en hen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">10. Beëindiging</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Wij behouden ons het recht voor om je toegang tot onze diensten naar eigen goeddunken op te schorten of te beëindigen, zonder
                            kennisgeving, bij gedrag dat deze voorwaarden schendt of de veiligheid van ons ecosysteem bedreigt. Alle
                            disclaimers, aansprakelijkheidsbeperkingen en vrijwaringsverplichtingen blijven van kracht na beëindiging.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">11. Overmacht & Deelbaarheid</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            VAIIYA is niet aansprakelijk voor enig falen of enige vertraging in de uitvoering als gevolg van oorzaken buiten onze
                            redelijke controle, waaronder maar niet beperkt tot netwerkstoringen, congestie op de blockchain, overmacht,
                            of storingen bij diensten van derden.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Indien enige bepaling van deze voorwaarden onafdwingbaar wordt bevonden, wordt die bepaling beperkt of geschrapt
                            tot het minimaal noodzakelijke, en blijven de overige bepalingen volledig van kracht.
                            Deze voorwaarden vormen de volledige overeenkomst tussen jou en VAIIYA met betrekking tot onze diensten.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">12. Wijzigingen In Deze Voorwaarden</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Wij kunnen deze voorwaarden van tijd tot tijd herzien. De bijgewerkte versie wordt aangegeven met een herziene
                            datum &quot;Laatst bijgewerkt&quot;. Voortgezet gebruik van onze diensten nadat wijzigingen van kracht worden, geldt als
                            aanvaarding van de herziene voorwaarden.
                        </p>
                    </section>

                    <section className="bg-metamask-purple p-8 rounded-2xl">
                        <h2 className="text-2xl font-serif text-white mb-6 border-l-4 border-metamask-orange pl-4">13. Toepasselijk Recht</h2>
                        <p className="text-purple-100 leading-relaxed">
                            Deze voorwaarden worden beheerst door en geïnterpreteerd in overeenstemming met het recht van Nederland, ongeacht
                            regels van internationaal privaatrecht. Eventuele geschillen die voortvloeien uit deze voorwaarden vallen onder
                            de exclusieve bevoegdheid van de rechtbanken in Amsterdam.
                        </p>
                    </section>

                    <section className="bg-metamask-gray-50 border border-metamask-gray-100 p-8 rounded-2xl">
                        <h2 className="text-xl font-semibold text-metamask-purple mb-4">Contact</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            Voor vragen over deze voorwaarden kun je contact opnemen via:
                        </p>
                        <a href="mailto:legal@vaiiya.com" className="text-xl font-mono text-metamask-orange hover:text-metamask-purple transition-colors">
                            legal@vaiiya.com
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
}
