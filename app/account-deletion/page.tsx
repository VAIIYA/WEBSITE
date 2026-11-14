import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Deletion',
  description: 'How to delete your account and data in RELAYS, RELAY and FeedMe by VAIIYA.',
};

const MAIL = 'vaiiya@googlegroups.com';

export default function AccountDeletion() {
    return (
        <div className="bg-ivory text-ink">
            <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
                <header className="mb-16">
                    <h1 className="font-serif text-[40px] leading-[1.08] sm:text-6xl mb-6 text-ink">Account Deletion</h1>
                    <p className="text-[#5E5D59] text-sm font-medium">
                        Applies to <span className="text-ink">RELAYS</span>, <span className="text-ink">RELAY</span> and{' '}
                        <span className="text-ink">FeedMe</span> by VAIIYA. Last updated: <span className="text-ink">November 2026</span>
                    </p>
                </header>

                <div className="space-y-14 max-w-none">
                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">What an account is</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            These apps connect to the open Nostr network. When you create an account in the app, the app
                            generates a key pair on your device. VAIIYA does not run a central account server and does not hold a
                            copy of your private key, so there is no VAIIYA user database that your account lives in.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">Delete your account from your device</h2>
                        <ol className="list-decimal pl-6 space-y-2 text-[#3D3D3A] leading-relaxed">
                            <li>Open the app and choose <strong>Sign Out</strong> from the side menu. This removes the account from the app.</li>
                            <li>Uninstall the app from your device. This removes all data the app stored locally, including cached content and settings.</li>
                            <li>Delete the backup of your private key (for example in a password manager). Without the key nobody can sign in as that account again.</li>
                        </ol>
                        <p className="text-[#3D3D3A] leading-relaxed mt-4">
                            Make sure you have saved your private key first if you want to keep using the account elsewhere.
                            Signing out without a saved key cannot be undone.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">Content published to Nostr relays</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            Profile details and posts you publish are sent to independent Nostr relays that VAIIYA does not
                            control, so we cannot erase them from those relays ourselves. You can overwrite your profile with empty
                            details before signing out, and you can ask relays to delete your events using a Nostr deletion request.
                            Each relay operator decides whether to honour such a request.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl text-ink mb-5 pt-8 border-t border-[#D1CFC5]">Ask VAIIYA to delete your data</h2>
                        <p className="text-[#3D3D3A] leading-relaxed">
                            If you contacted us, or we hold any other data about you (for example support messages), email us from
                            the address you used and tell us the app name. We will delete that data and confirm by email within
                            30 days.
                        </p>
                    </section>

                    <section className="bg-ink p-8 rounded-2xl">
                        <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
                        <a href={`mailto:${MAIL}?subject=Account%20deletion%20request`} className="text-xl font-mono text-[#C2603F] hover:text-white transition-colors">
                            {MAIL}
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
}
