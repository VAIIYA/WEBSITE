import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Child Safety Standards',
  description: 'How FeedMe protects children and handles reports of child sexual abuse and exploitation.',
};

export default function ChildSafety() {
    return (
        <div className="bg-ivory text-ink">
            <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
                <header className="mb-16">
                    <h1 className="font-serif text-[40px] leading-[1.08] sm:text-6xl mb-6 text-ink">Child Safety Standards</h1>
                    <p className="text-[#3D3D3A] leading-relaxed">
                        FeedMe is a social app for people aged 18 and over. We have zero tolerance for child sexual abuse and
                        exploitation (CSAE) and child sexual abuse material (CSAM).
                    </p>
                </header>

                <div className="space-y-14 max-w-none">
                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">What FeedMe is</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            FeedMe is an app that connects to a decentralized communication network. We build and maintain the
                            app. We do not operate the network, and we do not host user posts or media on our own servers.
                            Because of that, we cannot delete content from the network itself. We do control what the app
                            shows, and we act on that.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">What is not allowed</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            Any content or behaviour that sexualises, endangers or exploits minors, including CSAM, grooming,
                            or solicitation of minors. Accounts that post such content are removed from view in FeedMe.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">How to report</h2>
                        <ul className="list-disc pl-6 space-y-2 text-[#3D3D3A] leading-relaxed">
                            <li><strong>In the app:</strong> open the menu on a post or a profile, choose <em>Report</em> and select <em>Illegal</em>.</li>
                            <li><strong>Block or mute:</strong> the same menus let you mute an account at any time.</li>
                            <li><strong>By email:</strong> <a className="text-[#C2603F] underline" href="mailto:vaiiya@googlegroups.com">vaiiya@googlegroups.com</a></li>
                        </ul>
                        <p className="text-[#3D3D3A] leading-relaxed mt-4">
                            Please do not forward or download the material itself. Send the account identifier or a link to the post.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">What we do when we receive a report</h2>
                        <ul className="list-disc pl-6 space-y-2 text-[#3D3D3A] leading-relaxed">
                            <li>We review reports promptly and act on confirmed CSAE or CSAM by adding the account to the FeedMe blocklist, which hides it in all copies of the app without requiring an update.</li>
                            <li>We report confirmed CSAM to the relevant national authorities and hotlines, such as the NCMEC CyberTipline and the Dutch Offlimits reporting line, and cooperate with law enforcement.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">Age requirement</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            FeedMe is intended for adults. By creating an account, users confirm they are 18 or older.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">Contact</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            Child safety contact: <a className="text-[#C2603F] underline" href="mailto:vaiiya@googlegroups.com">vaiiya@googlegroups.com</a>
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
