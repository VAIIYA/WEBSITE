import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How VAIIYA collects, uses, and protects your data across its Android and iOS applications.',
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-ivory text-ink">
            <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
                <header className="mb-16">
                    <h1 className="font-serif text-[40px] leading-[1.08] sm:text-6xl mb-6 text-ink">Privacy Policy</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#5E5D59] text-sm font-medium">
                        <p>Last updated: <span className="text-ink">September 2026</span></p>
                        <span className="hidden sm:inline text-[#D1CFC5]">|</span>
                        <p>Status: <span className="text-[#C2603F]">Published</span></p>
                    </div>
                </header>

                <div className="space-y-14 max-w-none">
                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">1. Overview</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            At VAIIYA, we take your digital sovereignty seriously. As a studio building mobile apps and games,
                            we are committed to transparency in how we collect and process your data. This policy applies to all
                            products under the VAIIYA umbrella, including HEXMOJI and FlapMoji.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">2. Data We Collect</h2>
                        <p className="text-[#3D3D3A] mb-4 font-medium">We collect information to provide better services and improved user experiences:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                { title: 'Identity Data', desc: 'Name and email address when provided via support or account creation.' },
                                { title: 'Technical Data', desc: 'Device and advertising identifiers, IP addresses, and operating system versions.' },
                                { title: 'Usage Data', desc: 'How you interact with our apps, including feature usage and session duration.' },
                                { title: 'Location Data', desc: 'Approximate location for localized services and app compliance.' }
                            ].map((item, i) => (
                                <li key={i} className="bg-[#F0EEE6] border border-[#E8E6DC] p-4 rounded-xl">
                                    <span className="block text-[#C2603F] font-semibold mb-1">{item.title}</span>
                                    <span className="text-sm text-[#5E5D59]">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">3. How We Use Data</h2>
                        <p className="text-[#3D3D3A] mb-4">Your data is processed based on the following purposes:</p>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-lg bg-[#F0EEE6] border border-transparent">
                                <div className="text-[#C2603F] font-bold">01</div>
                                <p className="text-sm text-[#3D3D3A]">To maintain and optimize our mobile apps and games.</p>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-[#F0EEE6] border border-transparent">
                                <div className="text-[#C2603F] font-bold">02</div>
                                <p className="text-sm text-[#3D3D3A]">To provide customer support and respond to privacy requests.</p>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-[#F0EEE6] border border-transparent">
                                <div className="text-[#C2603F] font-bold">03</div>
                                <p className="text-sm text-[#3D3D3A]">To monitor and prevent fraudulent activities or unauthorized access.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">4. Third-Party Services</h2>
                        <p className="text-[#3D3D3A] mb-6">We utilize trusted third-party services that may collect information used to identify you:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: 'Google Play', utility: 'Distribution & Analytics' },
                                { name: 'Google AdMob', utility: 'Advertising' },
                                { name: 'Firebase', utility: 'Authentication & CRM' }
                            ].map((svc) => (
                                <div key={svc.name} className="p-4 border border-[#E8E6DC] bg-[#F0EEE6] rounded-lg text-center">
                                    <p className="font-semibold text-ink">{svc.name}</p>
                                    <p className="text-[10px] uppercase text-[#87867F] tracking-wider mt-1">{svc.utility}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">5. Advertising</h2>
                        <p className="text-[#3D3D3A] leading-relaxed mb-4">
                            Some of our apps, including <strong>FlapMoji</strong>, are free and supported by
                            advertising served through <strong>Google AdMob</strong>. To serve and measure
                            ads, the Google Mobile Ads SDK collects and shares your device&apos;s
                            <strong> advertising identifier</strong> along with standard technical
                            information (such as IP address and device type) with Google. Google may use
                            this data as an independent controller as described in the{" "}
                            <a href="https://policies.google.com/privacy" className="text-[#C2603F] hover:text-ink transition-colors">Google Privacy Policy</a>{" "}
                            and{" "}
                            <a href="https://policies.google.com/technologies/partner-sites" className="text-[#C2603F] hover:text-ink transition-colors">How Google uses information from sites or apps that use our services</a>.
                        </p>
                        <p className="text-[#3D3D3A] leading-relaxed mb-4">
                            Where required (for example in the EEA, the UK, and Switzerland), the app shows a
                            Google-certified consent form before any ads are requested, and serves
                            non-personalised ads where consent for personalised ads is not given. You can
                            reset or limit your advertising identifier at any time in your device settings
                            (Android: <span className="font-mono text-sm">Settings &rarr; Privacy &rarr; Ads</span>).
                        </p>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            FlapMoji has no account system. All game progress and settings are stored only on
                            your device and are never transmitted to us.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">6. Data Storage & Retention</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            We store your data only for as long as necessary to provide our services. We apply
                            industry-standard security measures to protect it.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">7. Your Rights (GDPR & CCPA)</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            Depending on your location, you have the right to access, rectify, or delete your personal data.
                            European residents have additional rights under the General Data Protection Regulation (GDPR),
                            and California residents under the California Consumer Privacy Act (CCPA).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">8. Data Deletion</h2>
                        <p className="text-[#3D3D3A] leading-relaxed mb-4">
                            You may request the deletion of your account and associated personal data at any time. VAIIYA
                            offers multiple ways to delete your data, in line with Google Play requirements:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-[#3D3D3A] ml-2 mb-6">
                            <li>
                                <strong>In-app:</strong> Use the account deletion option available within the app settings of each product.
                            </li>
                            <li>
                                <strong>Email:</strong> Contact us at{" "}
                                <a href="mailto:privacy@vaiiya.com" className="text-[#C2603F] font-mono hover:text-ink transition-colors">
                                    privacy@vaiiya.com
                                </a>{" "}
                                with the subject &quot;Data Deletion&quot; and your registered email or account identifier.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">9. Children&apos;s Privacy</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            In accordance with the Children&apos;s Online Privacy Protection Act (COPPA), VAIIYA does not
                            knowingly collect any personal information from children under the age of 13. If you believe
                            a child has provided us with personal data, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">10. Security & Liability Disclaimer</h2>
                        <p className="text-[#3D3D3A] leading-relaxed mb-4">
                            We implement reasonable technical and organizational measures to protect your data, but no method of
                            transmission or storage is 100% secure. To the fullest extent permitted by applicable law, VAIIYA
                            disclaims liability for unauthorized access, data breaches, or loss of data arising from circumstances
                            beyond our reasonable control, including third-party service failures.
                        </p>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            In no event shall VAIIYA be liable for any indirect, incidental, or consequential damages arising from
                            the processing or loss of your personal data, beyond what is required by mandatory law.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">11. Changes to This Policy</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            We may update this policy from time to time to reflect changes in our practices or legal requirements.
                            The updated version will be indicated by a revised &quot;Last updated&quot; date. We encourage you to
                            review this page periodically.
                        </p>
                    </section>

                    <section className="bg-ink p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0EEE6] rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-coral/20 transition-all"></div>
                        <h2 className="text-xl font-semibold text-white mb-4 relative z-10">Contact</h2>
                        <p className="text-[#D1CFC5] text-sm mb-4 relative z-10">
                            For any privacy-related inquiries or to exercise your rights, please reach out to our legal team:
                        </p>
                        <a href="mailto:privacy@vaiiya.com" className="text-xl font-mono text-[#C2603F] hover:text-white transition-colors relative z-10">
                            privacy@vaiiya.com
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
}
