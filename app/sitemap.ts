import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaiiya.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/portfolio',
    '/about',
    '/apps',
    '/games',
    '/progress',
    '/news',
    '/privacy-policy',
    '/terms',
    '/cookies',
    '/projects/fynder',
    '/projects/fynder/delete-account',
    '/projects/vynder',
    '/projects/nightstudio',
    '/projects/blobio',
  ]

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/news/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...postEntries]
}
