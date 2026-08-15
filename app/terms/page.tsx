import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing the use of VAIIYA applications, websites, and digital products.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-metamask-orange/10">
            <main className="max-w-4xl mx-auto px-6 py-20">
                <header className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-metamask-purple">Terms of Service</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm font-medium">
                        <p>Last updated: <span className="text-metamask-purple">March 2026</span></p>
                        <span className="hidden sm:inline text-gray-200">|</span>
                        <p>Jurisdiction: <span className="text-metamask-orange">Netherlands</span></p>
                    </div>
                </header>

                <div className="space-y-16 prose prose-indigo max-w-none">
                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            By accessing or using the services provided by VAIIYA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these
                            Terms of Service. If you do not agree to these terms, you must not access or use our applications,
                            websites, or any other digital products.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">2. Description of Services</h2>
                        <p className="text-gray-600 leading-relaxed">
                            VAIIYA is a digital studio specializing in the development of Web3 applications on the Solana blockchain,
                            Android mobile applications, and high-performance web projects. Our suite of products includes but is not
                            limited to FYNDER, VYNDER, BLOBIO, and NIGHTSTUDIO.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">3. User Responsibilities</h2>
                        <p className="text-gray-600 mb-4 font-medium">Users of VAIIYA products are responsible for:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
                            <li>Maintaining the confidentiality of their digital wallets and private keys.</li>
                            <li>Ensuring all activities performed under their account comply with applicable laws.</li>
                            <li>Providing accurate information when required for service functionality.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">4. Prohibited Conduct</h2>
                        <p className="text-gray-600 mb-4">You agree not to engage in any of the following activities:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Attempting to reverse engineer or decompile any VAIIYA software.',
                                'Exploiting smart contracts or protocol vulnerabilities.',
                                'Using our services for money laundering or illegal financing.',
                                'Engaging in harassment or harmful behavior within community features.'
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3 text-sm text-gray-500 bg-metamask-gray-50 p-3 rounded-lg border border-metamask-gray-100">
                                    <span className="text-metamask-orange font-bold">✕</span>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">5. Intellectual Property</h2>
                        <p className="text-gray-600 leading-relaxed">
                            All content, code, designs, logos, and brands, including the names of our various products (e.g., FYNDER,
                            VYNDER), are the exclusive property of VAIIYA. You are granted a limited, non-exclusive license to use
                            our products for their intended purposes only.
                        </p>
                    </section>

                    <section className="bg-metamask-gray-50 border border-metamask-orange/20 p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-metamask-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-4 flex items-center gap-2 relative z-10">
                            <span className="text-metamask-orange">⚠️</span> Blockchain Disclaimer
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                            VAIIYA provides interfaces for decentralized protocols. Users assume all financial risks associated with
                            blockchain transactions. We do not control the Solana network and are not responsible for transaction
                            failures, gas fees, or smart contract exploits beyond our control. Users are solely responsible for
                            verifying the accuracy of their on-chain interactions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">6. Disclaimer of Warranties</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without warranties of any kind,
                            whether express, implied, or statutory. To the fullest extent permitted by applicable law, VAIIYA
                            disclaims all warranties, including but not limited to implied warranties of merchantability, fitness
                            for a particular purpose, title, and non-infringement.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We do not warrant that our services will be uninterrupted, timely, secure, error-free, or free of
                            viruses or other harmful components, or that any defects will be corrected. You use our services
                            entirely at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">7. Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the maximum extent permitted by applicable law, in no event shall VAIIYA, its founders, employees,
                            contractors, or affiliates be liable for any indirect, incidental, special, consequential, exemplary,
                            or punitive damages, including but not limited to loss of profits, revenue, data, digital assets,
                            goodwill, or other intangible losses, arising out of or related to your use of, or inability to use,
                            our services &mdash; even if we have been advised of the possibility of such damages.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            To the extent such liability is not disclaimed entirely under applicable law, VAIIYA&apos;s total
                            aggregate liability arising out of or relating to these terms or our services shall not exceed the
                            greater of (a) the amount you paid us, if any, for the service giving rise to the claim in the twelve
                            (12) months preceding the event, or (b) one hundred euros (&euro;100).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">8. Indemnification</h2>
                        <p className="text-gray-600 leading-relaxed">
                            You agree to defend, indemnify, and hold harmless VAIIYA and its founders, employees, contractors,
                            and affiliates from and against any claims, liabilities, damages, losses, and expenses, including
                            reasonable legal fees, arising out of or in any way connected with your access to or use of our
                            services, your violation of these terms, or your violation of any rights of a third party.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">9. Third-Party Services & Links</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our services may contain links to or integrations with third-party websites, applications, or
                            protocols that are not owned or controlled by VAIIYA. We have no control over, and assume no
                            responsibility for, the content, privacy practices, or availability of any third-party services.
                            Your interactions with such third parties are solely between you and them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">10. Termination</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We reserve the right to suspend or terminate your access to our services at our sole discretion, without
                            notice, for behavior that violates these terms or threatens the security of our ecosystem. All
                            disclaimers, liability limitations, and indemnification obligations survive termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">11. Force Majeure & Severability</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            VAIIYA shall not be liable for any failure or delay in performance resulting from causes beyond our
                            reasonable control, including but not limited to network outages, blockchain congestion, acts of God,
                            or third-party service failures.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            If any provision of these terms is found unenforceable, that provision shall be limited or eliminated
                            to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                            These terms constitute the entire agreement between you and VAIIYA regarding our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-metamask-purple mb-6 border-l-4 border-metamask-orange pl-4">12. Changes to These Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may revise these terms from time to time. The updated version will be indicated by a revised
                            &quot;Last updated&quot; date. Continued use of our services after changes take effect constitutes
                            acceptance of the revised terms.
                        </p>
                    </section>

                    <section className="bg-metamask-purple p-8 rounded-2xl">
                        <h2 className="text-2xl font-serif text-white mb-6 border-l-4 border-metamask-orange pl-4">13. Governing Law</h2>
                        <p className="text-purple-100 leading-relaxed">
                            These terms are governed by and construed in accordance with the laws of the Netherlands, without
                            regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to
                            the exclusive jurisdiction of the courts in Amsterdam.
                        </p>
                    </section>

                    <section className="bg-metamask-gray-50 border border-metamask-gray-100 p-8 rounded-2xl">
                        <h2 className="text-xl font-semibold text-metamask-purple mb-4">Contact</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            For any questions regarding these terms, please reach out to:
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
