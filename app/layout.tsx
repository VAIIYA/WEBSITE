import type { Metadata } from 'next'
import { Inter, Poly } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poly = Poly({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poly',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaiiya.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'VAIIYA - We. As One.',
    template: '%s | VAIIYA',
  },
  description: 'Building beautiful native apps for Android and iOS. Agentic Engineering. Crafted with precision.',
  keywords: ['Android', 'iOS', 'App Development', 'Mobile Apps', 'Agentic Engineering', 'VAIIYA'],
  authors: [{ name: 'VAIIYA', url: siteUrl }],
  creator: 'VAIIYA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'VAIIYA',
    title: 'VAIIYA - We. As One.',
    description: 'Building beautiful native apps for Android and iOS. Agentic Engineering. Crafted with precision.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAIIYA - We. As One.',
    description: 'Building beautiful native apps for Android and iOS. Agentic Engineering. Crafted with precision.',
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
    <html lang="en" className={`${inter.variable} ${poly.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
