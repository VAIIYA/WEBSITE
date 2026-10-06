import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaiiya.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/portfolio',
    '/about',
    '/apps',
    '/games',
    '/games/flapmoji',
    '/games/hexmoji',
    '/progress',
    '/podcast',
    '/privacy-policy',
    '/terms',
    '/cookies',
    '/projects/nightstudio',
    '/projects/blobio',
  ]

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return staticEntries
}
