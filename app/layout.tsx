import type { Metadata } from 'next'
import { IBM_Plex_Mono, Barlow_Condensed } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsTicker from '@/components/NewsTicker'
import { getAllPosts } from '@/lib/posts'
import './globals.css'

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
  const tickerPosts = getAllPosts().slice(0, 8)

  return (
    <html lang="en" className={`${plexMono.variable} ${barlowCondensed.variable}`}>
      <body className="bg-white text-slate-900 m-0 p-0 antialiased flex flex-col min-h-screen">
        <NewsTicker posts={tickerPosts} />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

