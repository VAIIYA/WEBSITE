import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'VAIIYA - We. As One.',
  description: 'Building beautiful native apps for Android and iOS. Agentic Engineering. Crafted with precision.',
  keywords: ['Android', 'iOS', 'App Development', 'Mobile Apps', 'Agentic Engineering', 'VAIIYA'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
