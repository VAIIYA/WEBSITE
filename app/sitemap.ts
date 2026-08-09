import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaiiya.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/portfolio',
    '/about',
    '/apps',
    '/games',
    '/progress',
    '/privacy-policy',
    '/terms',
    '/cookies',
    '/projects/fynder',
    '/projects/fynder/delete-account',
    '/projects/vynder',
    '/projects/nightstudio',
    '/projects/blobio',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
