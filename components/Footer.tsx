import Link from 'next/link'
import Wordmark from '@/components/Wordmark'
import { socialLinks } from '@/lib/socialLinks'

const columns = [
  {
    title: 'Studio',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Podcast', href: '/podcast' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Work',
    links: [
      { name: 'Apps', href: '/apps' },
      { name: 'Games', href: '/games' },
      { name: 'Websites', href: '/websites' },
      { name: 'Google Play', href: 'https://play.google.com/store/apps/dev?id=7804895561285369781', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
    ],
  },
]

const linkClass = 'text-sm text-[#B0AEA5] transition-colors hover:text-ivory'

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-site px-4 pb-10 pt-16 sm:px-6 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5">
          <div className="col-span-2 space-y-6">
            <Link href="/" aria-label="VAIIYA home" className="inline-block text-ivory">
              <Wordmark className="text-[26px]" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[#B0AEA5]">
              An independent studio building Android apps and games, and websites.
            </p>
            <div className="flex items-center gap-4 text-[#B0AEA5]">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="transition-colors hover:text-ivory [&_svg]:h-4 [&_svg]:w-4"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-sans text-sm font-medium text-ivory">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {'external' in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[#3D3D3A] pt-6 text-xs text-[#87867F] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} VAIIYA. We. As One.</p>
          <p>Built with Next.js &middot; Hosted on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
