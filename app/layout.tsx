import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGroteskHeading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const spaceGroteskMono = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const spaceGroteskPixel = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaiiya.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'VAIIYA - We. As One.',
    template: '%s | VAIIYA',
  },
  description: 'VAIIYA is a digital studio building high-performance websites, native Android & iOS apps, and mobile games for teams who want it done right.',
  keywords: ['digital studio', 'web development', 'Next.js', 'Android apps', 'iOS apps', 'Kotlin', 'Swift', 'mobile games', 'VAIIYA'],
  authors: [{ name: 'VAIIYA', url: siteUrl }],
  creator: 'VAIIYA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'VAIIYA',
    title: 'VAIIYA - We. As One.',
    description: 'A digital studio building high-performance websites, native Android & iOS apps, and mobile games.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAIIYA - We. As One.',
    description: 'A digital studio building high-performance websites, native Android & iOS apps, and mobile games.',
    site: '@VAIIYA_MEDIA',
    creator: '@VAIIYA_MEDIA',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceGroteskHeading.variable} ${spaceGroteskMono.variable} ${spaceGroteskPixel.variable}`}>
      <body className="bg-white text-slate-900 m-0 p-0 antialiased flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
