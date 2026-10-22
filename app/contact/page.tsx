import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import IndestructibleSocialsSection from '@/components/IndestructibleSocialsSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach the VAIIYA studio directly or follow along on our official channels — X, YouTube, TikTok and GitHub.',
}

export default function ContactPage() {
  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="Contact"
        title="Let’s talk."
        description="Whether you have an app, game or website in mind — or just want to follow our updates — here’s where to find us."
      />
      <IndestructibleSocialsSection />
    </main>
  )
}
