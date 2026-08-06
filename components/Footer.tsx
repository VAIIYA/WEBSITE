import Link from 'next/link'
import Image from 'next/image'
import { socialLinks } from '@/lib/socialLinks'

const appLinks = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'FYNDER', href: '/projects/fynder' },
  { name: 'VYNDER', href: '/projects/vynder' },
  { name: 'NIGHTSTUDIO', href: '/projects/nightstudio' },
  { name: 'BLOBIO', href: '/projects/blobio' },
]

export default function Footer() {
  return (
    <footer className="bg-metamask-gray-50 border-t border-metamask-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/v-logo.jpg" alt="VAIIYA Logo" width={32} height={32} className="rounded-lg" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-metamask-purple leading-none">VAIIYA</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-medium">We. As One.</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Building beautiful native apps for Android and iOS. Agentic Engineering. Crafted with precision.
            </p>
          </div>

          {/* Apps */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Apps
            </h3>
            <ul className="space-y-3">
              {appLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-metamask-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-metamask-orange transition-colors"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-metamask-orange transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-metamask-orange transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-600 hover:text-metamask-orange transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} VAIIYA. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <span className="font-semibold text-metamask-purple">Love</span>
            <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
