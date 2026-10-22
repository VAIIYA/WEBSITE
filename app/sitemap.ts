import type { MetadataRoute } from 'next'

import { portfolioApps, titlePath } from '@/lib/portfolio'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaiiya.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/portfolio',
    '/about',
    '/apps',
    '/games',
    '/websites',
    '/podcast',
    '/privacy-policy',
    '/terms',
    '/cookies',
    ...portfolioApps.map((a) => titlePath(a)),
  ]

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return staticEntries
}
