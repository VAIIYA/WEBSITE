import type { Metadata } from 'next'
import { IBM_Plex_Mono, Barlow_Condensed } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocaleSync from '@/components/LocaleSync'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import './globals.css'
import { SITE_URL as siteUrl } from '@/lib/site'

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'VAIIYA - We. As One.',
    template: '%s | VAIIYA',
  },
  description: 'Vernieuwende digitale studio voor websites, native Android & iOS apps en mobiele games.',
  keywords: ['Android', 'iOS', 'Three.js', 'Website', 'Apps', 'VAIIYA'],
  authors: [{ name: 'VAIIYA', url: siteUrl }],
  creator: 'VAIIYA',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: siteUrl,
    siteName: 'VAIIYA',
    title: 'VAIIYA - We. As One.',
    description: 'Vernieuwende digitale studio voor websites, native Android & iOS apps en mobiele games.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAIIYA - We. As One.',
    description: 'Vernieuwende digitale studio voor websites, native Android & iOS apps en mobiele games.',
    site: '@V4IIYA',
    creator: '@V4IIYA',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${plexMono.variable} ${barlowCondensed.variable}`}>
      <body className="bg-white text-slate-900 m-0 p-0 antialiased flex flex-col min-h-screen">
        <GoogleAnalytics />
        <LocaleSync />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  )
}

