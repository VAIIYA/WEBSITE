import type { MetadataRoute } from 'next'
import { SITE_URL as siteUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
