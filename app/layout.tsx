import type { Metadata } from 'next'
import { Inter, Poly } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

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
  description: 'Clean Tearable UI Experience inspired by pushmatrix tearable. Native Android, iOS, and Web3 ecosystem.',
  keywords: ['Android', 'iOS', 'Three.js', 'Tearable UI', 'VAIIYA'],
  authors: [{ name: 'VAIIYA', url: siteUrl }],
  creator: 'VAIIYA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'VAIIYA',
    title: 'VAIIYA - We. As One.',
    description: 'Clean Tearable UI Experience inspired by pushmatrix tearable.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAIIYA - We. As One.',
    description: 'Clean Tearable UI Experience inspired by pushmatrix tearable.',
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
      <body className="bg-white text-slate-900 m-0 p-0 antialiased flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

