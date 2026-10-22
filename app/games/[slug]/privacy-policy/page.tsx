import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { displayName, portfolioApps } from '@/lib/portfolio'
import TitleLegalPage from '@/components/TitleLegalPage'

type Params = { slug: string }

const titles = portfolioApps.filter((a) => a.category === 'game')

export const dynamicParams = false

export function generateStaticParams() {
  return titles.map((a) => ({ slug: a.id }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const app = titles.find((a) => a.id === params.slug)
  if (!app) return {}
  return {
    title: `${displayName(app.name)} Privacy Policy`,
    description: `How ${displayName(app.name)} handles your data.`,
  }
}

export default function Page({ params }: { params: Params }) {
  const app = titles.find((a) => a.id === params.slug)
  if (!app) notFound()
  return <TitleLegalPage app={app} />
}
