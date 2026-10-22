import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { displayName, portfolioApps } from '@/lib/portfolio'
import TitlePage from '@/components/TitlePage'

type Params = { slug: string }

const titles = portfolioApps.filter((a) => a.category === 'app')

export const dynamicParams = false

export function generateStaticParams() {
  return titles.map((a) => ({ slug: a.id }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const app = titles.find((a) => a.id === params.slug)
  if (!app) return {}
  return {
    title: `${displayName(app.name)} — ${app.summary}`,
    description: app.about.find((b) => b.t === 'p')?.text ?? app.summary,
  }
}

export default function Page({ params }: { params: Params }) {
  const app = titles.find((a) => a.id === params.slug)
  if (!app) notFound()
  return <TitlePage app={app} />
}
