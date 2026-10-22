import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing the use of VAIIYA applications, websites, and digital products.',
};

export default function TermsOfService() {
    return (
        <div className="bg-ivory text-ink">
            <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
                <header className="mb-16">
                    <h1 className="font-serif text-[40px] leading-[1.08] sm:text-6xl mb-6 text-ink">Terms of Service</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#5E5D59] text-sm font-medium">
                        <p>Last updated: <span className="text-ink">March 2026</span></p>
                        <span className="hidden sm:inline text-[#D1CFC5]">|</span>
                        <p>Jurisdiction: <span className="text-[#C2603F]">Netherlands</span></p>
                    </div>
                </header>

                <div className="space-y-14 max-w-none">
                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">1. Acceptance of Terms</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            By accessing or using the services provided by VAIIYA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these
                            Terms of Service. If you do not agree to these terms, you must not access or use our applications,
                            websites, or any other digital products.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">2. Description of Services</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            VAIIYA is a digital studio specializing in the development of mobile apps, games and websites.
                            Our suite of products includes but is not limited to FLAPMOJI, HEXMOJI, EMOJI BLOCKS, MATCHMOJI and TAPEDECK.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">3. User Responsibilities</h2>
                        <p className="text-[#3D3D3A] mb-4 font-medium">Users of VAIIYA products are responsible for:</p>
                        <ul className="list-disc list-inside space-y-2 text-[#3D3D3A] ml-2">
                            <li>Ensuring all activities performed under their account comply with applicable laws.</li>
                            <li>Providing accurate information when required for service functionality.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">4. Prohibited Conduct</h2>
                        <p className="text-[#3D3D3A] mb-4">You agree not to engage in any of the following activities:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Attempting to reverse engineer or decompile any VAIIYA software.',
                                'Exploiting smart contracts or protocol vulnerabilities.',
                                'Using our services for money laundering or illegal financing.',
                                'Engaging in harassment or harmful behavior within community features.'
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3 text-sm text-[#5E5D59] bg-[#F0EEE6] p-3 rounded-lg border border-[#E8E6DC]">
                                    <span className="text-[#C2603F] font-bold">✕</span>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">5. Intellectual Property</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            All content, code, designs, logos, and brands, including the names of our various products (e.g., HEXMOJI,
                            FLAPMOJI), are the exclusive property of VAIIYA. You are granted a limited, non-exclusive license to use
                            our products for their intended purposes only.
                        </p>
                    </section>


                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">6. Disclaimer of Warranties</h2>
                        <p className="text-[#3D3D3A] leading-relaxed mb-4">
                            Our services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without warranties of any kind,
                            whether express, implied, or statutory. To the fullest extent permitted by applicable law, VAIIYA
                            disclaims all warranties, including but not limited to implied warranties of merchantability, fitness
                            for a particular purpose, title, and non-infringement.
                        </p>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            We do not warrant that our services will be uninterrupted, timely, secure, error-free, or free of
                            viruses or other harmful components, or that any defects will be corrected. You use our services
                            entirely at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">7. Limitation of Liability</h2>
                        <p className="text-[#3D3D3A] leading-relaxed mb-4">
                            To the maximum extent permitted by applicable law, in no event shall VAIIYA, its founders, employees,
                            contractors, or affiliates be liable for any indirect, incidental, special, consequential, exemplary,
                            or punitive damages, including but not limited to loss of profits, revenue, data, digital assets,
                            goodwill, or other intangible losses, arising out of or related to your use of, or inability to use,
                            our services &mdash; even if we have been advised of the possibility of such damages.
                        </p>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            To the extent such liability is not disclaimed entirely under applicable law, VAIIYA&apos;s total
                            aggregate liability arising out of or relating to these terms or our services shall not exceed the
                            greater of (a) the amount you paid us, if any, for the service giving rise to the claim in the twelve
                            (12) months preceding the event, or (b) one hundred euros (&euro;100).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">8. Indemnification</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            You agree to defend, indemnify, and hold harmless VAIIYA and its founders, employees, contractors,
                            and affiliates from and against any claims, liabilities, damages, losses, and expenses, including
                            reasonable legal fees, arising out of or in any way connected with your access to or use of our
                            services, your violation of these terms, or your violation of any rights of a third party.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">9. Third-Party Services & Links</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            Our services may contain links to or integrations with third-party websites, applications, or
                            protocols that are not owned or controlled by VAIIYA. We have no control over, and assume no
                            responsibility for, the content, privacy practices, or availability of any third-party services.
                            Your interactions with such third parties are solely between you and them.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">10. Termination</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            We reserve the right to suspend or terminate your access to our services at our sole discretion, without
                            notice, for behavior that violates these terms or threatens the security of our ecosystem. All
                            disclaimers, liability limitations, and indemnification obligations survive termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">11. Force Majeure & Severability</h2>
                        <p className="text-[#3D3D3A] leading-relaxed mb-4">
                            VAIIYA shall not be liable for any failure or delay in performance resulting from causes beyond our
                            reasonable control, including but not limited to network outages, acts of God,
                            or third-party service failures.
                        </p>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            If any provision of these terms is found unenforceable, that provision shall be limited or eliminated
                            to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                            These terms constitute the entire agreement between you and VAIIYA regarding our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">12. Changes to These Terms</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            We may revise these terms from time to time. The updated version will be indicated by a revised
                            &quot;Last updated&quot; date. Continued use of our services after changes take effect constitutes
                            acceptance of the revised terms.
                        </p>
                    </section>

                    <section className="bg-ink p-8 rounded-2xl">
                        <h2 className="font-serif text-3xl text-ivory mb-5">13. Governing Law</h2>
                        <p className="text-[#D1CFC5] leading-relaxed">
                            These terms are governed by and construed in accordance with the laws of the Netherlands, without
                            regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to
                            the exclusive jurisdiction of the courts in Amsterdam.
                        </p>
                    </section>

                    <section className="bg-[#F0EEE6] border border-[#E8E6DC] p-8 rounded-2xl">
                        <h2 className="text-xl font-semibold text-ink mb-4">Contact</h2>
                        <p className="text-[#3D3D3A] text-sm mb-4">
                            For any questions regarding these terms, please reach out to:
                        </p>
                        <a href="mailto:vaiiya@googlegroups.com" className="text-xl font-mono text-[#C2603F] hover:text-ink transition-colors">
                            vaiiya@googlegroups.com
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
}
