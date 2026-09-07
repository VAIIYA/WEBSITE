import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Hoe VAIIYA je gegevens verzamelt, gebruikt en beschermt binnen haar Android- en iOS-applicaties.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-metamask-orange/10">
            <main className="max-w-4xl mx-auto px-6 py-20">
                <header className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-metamask-purple">Privacybeleid</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm font-medium">
                        <p>Laatst bijgewerkt: <span className="text-metamask-purple">september 2026</span></p>
                        <span className="hidden sm:inline text-gray-200">|</span>
                        <p>Status: <span className="text-metamask-orange">Gepubliceerd</span></p>
                    </div>
                </header>

                <div className="space-y-16 prose prose-indigo max-w-none">
                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">1. Overzicht</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Bij VAIIYA nemen we jouw digitale zelfbeschikking serieus. Als studio die Web3- en mobiele applicaties bouwt,
                            zetten we ons in voor transparantie over hoe we jouw gegevens verzamelen en verwerken. Dit beleid geldt voor alle
                            producten onder de VAIIYA-paraplu, waaronder FYNDER, VYNDER, BLOBIO en FlapMoji.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">2. Gegevens Die We Verzamelen</h2>
                        <p className="text-gray-600 mb-4 font-medium">We verzamelen informatie om betere diensten en een verbeterde gebruikerservaring te bieden:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                { title: 'Identiteitsgegevens', desc: 'Naam en e-mailadres wanneer deze worden opgegeven via support of accountaanmaak.' },
                                { title: 'Technische Gegevens', desc: 'Apparaat- en advertentie-identifiers, IP-adressen en besturingssysteemversies.' },
                                { title: 'Gebruiksgegevens', desc: 'Hoe je omgaat met onze apps, waaronder functiegebruik en sessieduur.' },
                                { title: 'Locatiegegevens', desc: 'Geschatte locatie voor gelokaliseerde diensten en naleving van app-vereisten.' },
                                { title: 'Blockchaingegevens', desc: 'Publieke walletadressen gebruikt voor transacties op het Solana-netwerk.' }
                            ].map((item, i) => (
                                <li key={i} className="bg-metamask-gray-50 border border-metamask-gray-100 p-4 rounded-xl">
                                    <span className="block text-metamask-orange font-semibold mb-1">{item.title}</span>
                                    <span className="text-sm text-gray-500">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">3. Hoe We Gegevens Gebruiken</h2>
                        <p className="text-gray-600 mb-4">Jouw gegevens worden verwerkt op basis van de volgende doeleinden:</p>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-lg bg-metamask-orange/5 border border-metamask-orange/10">
                                <div className="text-metamask-orange font-bold">01</div>
                                <p className="text-sm text-gray-700">Om onze mobiele en Web3-applicaties te onderhouden en te optimaliseren.</p>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-metamask-orange/5 border border-metamask-orange/10">
                                <div className="text-metamask-orange font-bold">02</div>
                                <p className="text-sm text-gray-700">Om klantenondersteuning te bieden en te reageren op privacyverzoeken.</p>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-metamask-orange/5 border border-metamask-orange/10">
                                <div className="text-metamask-orange font-bold">03</div>
                                <p className="text-sm text-gray-700">Om frauduleuze activiteiten of ongeautoriseerde toegang te monitoren en te voorkomen.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">4. Diensten Van Derden</h2>
                        <p className="text-gray-600 mb-6">We maken gebruik van vertrouwde diensten van derden die mogelijk informatie verzamelen waarmee je geïdentificeerd kunt worden:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: 'Google Play', utility: 'Distributie & Analytics' },
                                { name: 'Google AdMob', utility: 'Advertenties' },
                                { name: 'Firebase', utility: 'Authenticatie & CRM' },
                                { name: 'Solana', utility: 'Publiek Grootboek Transacties' }
                            ].map((svc) => (
                                <div key={svc.name} className="p-4 border border-metamask-gray-100 bg-metamask-gray-50 rounded-lg text-center">
                                    <p className="font-semibold text-metamask-purple">{svc.name}</p>
                                    <p className="text-[10px] uppercase text-gray-400 tracking-wider mt-1">{svc.utility}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">5. Adverteren</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Sommige van onze apps, waaronder <strong>FlapMoji</strong>, zijn gratis en worden
                            gefinancierd met advertenties via <strong>Google AdMob</strong>. Om advertenties te
                            tonen en te meten verzamelt en deelt de Google Mobile Ads SDK de
                            <strong> advertentie-identifier</strong> van je apparaat samen met standaard
                            technische gegevens (zoals IP-adres en apparaattype) met Google. Google kan deze
                            gegevens als zelfstandige verwerkingsverantwoordelijke gebruiken, zoals beschreven in het{" "}
                            <a href="https://policies.google.com/privacy" className="text-metamask-orange hover:text-metamask-purple transition-colors">Google Privacybeleid</a>{" "}
                            en{" "}
                            <a href="https://policies.google.com/technologies/partner-sites" className="text-metamask-orange hover:text-metamask-purple transition-colors">Hoe Google gegevens gebruikt van sites of apps die onze services gebruiken</a>.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Waar vereist (bijvoorbeeld in de EER, het VK en Zwitserland) toont de app een
                            door Google gecertificeerd toestemmingsformulier voordat er advertenties worden
                            opgevraagd, en worden niet-gepersonaliseerde advertenties getoond wanneer er geen
                            toestemming voor gepersonaliseerde advertenties is gegeven. Je kunt je
                            advertentie-identifier op elk moment resetten of beperken via je apparaatinstellingen
                            (Android: <span className="font-mono text-sm">Instellingen &rarr; Privacy &rarr; Advertenties</span>).
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            FlapMoji heeft geen accountsysteem. Alle spelvoortgang en instellingen worden
                            uitsluitend op je apparaat opgeslagen en worden nooit naar ons verzonden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">6. Opslag & Bewaartermijn Van Gegevens</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We bewaren je gegevens alleen zolang als nodig is om onze diensten te leveren. Hoewel we
                            industriestandaard beveiligingsmaatregelen toepassen, houd er rekening mee dat informatie die is vastgelegd op de
                            Solana-blockchain permanent en onveranderlijk is.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">7. Jouw Rechten (AVG & CCPA)</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Afhankelijk van je locatie heb je het recht om je persoonsgegevens in te zien, te corrigeren of te laten verwijderen.
                            Inwoners van de Europese Unie hebben aanvullende rechten onder de Algemene Verordening Gegevensbescherming (AVG/GDPR),
                            en inwoners van Californië onder de California Consumer Privacy Act (CCPA).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">8. Verwijdering Van Gegevens</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Je kunt op elk moment verzoeken om verwijdering van je account en bijbehorende persoonsgegevens. VAIIYA
                            biedt meerdere manieren om je gegevens te verwijderen, in lijn met de vereisten van Google Play:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2 mb-6">
                            <li>
                                <strong>In de app:</strong> Gebruik de optie voor accountverwijdering in de app-instellingen van elk product.
                            </li>
                            <li>
                                <strong>E-mail:</strong> Neem contact met ons op via{" "}
                                <a href="mailto:privacy@vaiiya.com" className="text-metamask-orange font-mono hover:text-metamask-purple transition-colors">
                                    privacy@vaiiya.com
                                </a>{" "}
                                met als onderwerp &quot;Data Deletion&quot; en je geregistreerde e-mailadres of accountidentificatie.
                            </li>
                        </ul>
                        <a
                            href="/projects/fynder/delete-account"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-metamask-orange text-white text-sm font-bold hover:bg-metamask-orange/90 transition-all hover:shadow-lg hover:shadow-orange-500/20"
                        >
                            Verzoek Om Accountverwijdering
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">9. Privacy Van Kinderen</h2>
                        <p className="text-gray-600 leading-relaxed">
                            In overeenstemming met de Children&apos;s Online Privacy Protection Act (COPPA) verzamelt VAIIYA niet
                            bewust persoonsgegevens van kinderen jonger dan 13 jaar. Als je vermoedt dat
                            een kind ons persoonsgegevens heeft verstrekt, neem dan direct contact met ons op.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">10. Beveiliging & Aansprakelijkheidsverklaring</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We nemen redelijke technische en organisatorische maatregelen om je gegevens te beschermen, maar geen enkele methode van
                            verzending of opslag is 100% veilig. Voor zover maximaal toegestaan door toepasselijk recht, wijst VAIIYA
                            aansprakelijkheid af voor ongeautoriseerde toegang, datalekken of gegevensverlies die voortvloeien uit omstandigheden
                            buiten onze redelijke controle, waaronder storingen bij diensten van derden of kwetsbaarheden in het
                            blockchainnetwerk.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            VAIIYA is in geen geval aansprakelijk voor indirecte, incidentele of gevolgschade voortvloeiend uit
                            de verwerking of het verlies van je persoonsgegevens, verder dan wettelijk verplicht is.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">11. Wijzigingen In Dit Beleid</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We kunnen dit beleid van tijd tot tijd bijwerken om wijzigingen in onze werkwijze of wettelijke vereisten weer te geven.
                            De bijgewerkte versie wordt aangegeven met een herziene datum &quot;Laatst bijgewerkt&quot;. We raden je aan om
                            deze pagina regelmatig te bekijken.
                        </p>
                    </section>

                    <section className="bg-metamask-purple p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-metamask-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-metamask-orange/20 transition-all"></div>
                        <h2 className="text-xl font-semibold text-white mb-4 relative z-10">Contact</h2>
                        <p className="text-purple-100 text-sm mb-4 relative z-10">
                            Voor privacygerelateerde vragen of om je rechten uit te oefenen, neem contact op met ons juridisch team:
                        </p>
                        <a href="mailto:privacy@vaiiya.com" className="text-xl font-mono text-metamask-orange hover:text-white transition-colors relative z-10">
                            privacy@vaiiya.com
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
}
