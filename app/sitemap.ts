import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { getAllProductSlugs } from '@/lib/shop'
import { SITE_URL as siteUrl } from '@/lib/site'

// Routes translated into English at /en/*. A few deep pages (the
// project subpages for discontinued products) don't have an English
// version yet, so they're only listed once, under their Dutch
// (default) path.
const TRANSLATED_ROUTES = [
  '',
  '/portfolio',
  '/about',
  '/apps',
  '/games',
  '/websites',
  '/contact',
  '/progress',
  '/team',
  '/news',
  '/podcast',
  '/privacy-policy',
  '/terms',
  '/cookies',
  '/projects/nightstudio',
  '/projects/fynder/delete-account',
]

// Revalidate periodically so newly added shop products show up in the
// sitemap without requiring a full redeploy.
export const revalidate = 3600

const NL_ONLY_ROUTES = [
  '/news/tag',
  '/shop',
  '/projects/fynder',
  '/projects/vynder',
  '/projects/blobio',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const nlEntries: MetadataRoute.Sitemap = [...TRANSLATED_ROUTES, ...NL_ONLY_ROUTES].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  const enEntries: MetadataRoute.Sitemap = TRANSLATED_ROUTES.map((route) => ({
    url: `${siteUrl}/en${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 0.9 : 0.7,
  }))

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/news/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Turso may be unreachable at build time (e.g. building locally without
  // the TURSO_* env vars) — degrade to no product entries rather than
  // failing the whole sitemap/build.
  const productSlugs = await getAllProductSlugs().catch(() => [])
  const productEntries: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${siteUrl}/shop/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...nlEntries, ...enEntries, ...postEntries, ...productEntries]
}
