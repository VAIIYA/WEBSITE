import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Child Safety Standards',
  description: 'How RELAYS protects children and handles reports of child sexual abuse and exploitation.',
};

export default function ChildSafety() {
    return (
        <div className="bg-ivory text-ink">
            <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
                <header className="mb-16">
                    <h1 className="font-serif text-[40px] leading-[1.08] sm:text-6xl mb-6 text-ink">Child Safety Standards</h1>
                    <p className="text-[#3D3D3A] leading-relaxed">
                        RELAYS is a social video and photo app for people aged 18 and over. We have zero tolerance for child
                        sexual abuse and exploitation (CSAE) and child sexual abuse material (CSAM). These standards apply to
                        the RELAYS app published on Google Play by VAIIYA.
                    </p>
                </header>

                <div className="space-y-14 max-w-none">
                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">What RELAYS is</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            RELAYS is an app that connects to a decentralized communication network (Nostr). We build and
                            maintain the app. We do not operate the network, and we do not host user posts or media on our own
                            servers. Videos and photos are stored by independent media hosts and posts travel across independent
                            relays. The operators of those relays and media hosts can remove content from their servers. We
                            cannot delete content from the network itself, but we do our best within our own app: reporting and
                            muting decide what the app shows, and we can notify the operators involved when we confirm illegal
                            content.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">What is not allowed</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            Any content or behaviour that sexualises, endangers or exploits minors, including CSAM, grooming,
                            sexualised depictions of minors, and solicitation of minors. Accounts that post such content are not
                            welcome in RELAYS and are removed from view where we can.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">How to report</h2>
                        <ul className="list-disc pl-6 space-y-2 text-[#3D3D3A] leading-relaxed">
                            <li><strong>In the app:</strong> open the menu on a post or a profile, choose <em>Report</em> and select <em>Illegal</em>.</li>
                            <li><strong>Mute:</strong> the same menus let you mute an account at any time.</li>
                            <li><strong>By email:</strong> <a className="text-[#C2603F] underline" href="mailto:vaiiya@googlegroups.com">vaiiya@googlegroups.com</a></li>
                        </ul>
                        <p className="text-[#3D3D3A] leading-relaxed mt-4">
                            Please do not forward or download the material itself. Send the account identifier or a link to the post.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">What we do when we receive a report</h2>
                        <ul className="list-disc pl-6 space-y-2 text-[#3D3D3A] leading-relaxed">
                            <li>We review reports promptly and act on confirmed CSAE or CSAM by removing the content or account from view in RELAYS where we can, and by notifying the relay and media host operators involved.</li>
                            <li>We report confirmed CSAM to the relevant national authorities and hotlines, such as the NCMEC CyberTipline and the Dutch Offlimits reporting line, and cooperate with law enforcement.</li>
                            <li>We comply with applicable child safety laws and regulations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">Age requirement</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            RELAYS is intended for adults aged 18 and over and is not directed at children.
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
