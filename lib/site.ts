/**
 * Single source of truth for the canonical site URL. Every page that needs
 * an absolute URL (metadata, sitemap, robots.txt, JSON-LD) should import
 * this instead of reading `process.env.NEXT_PUBLIC_SITE_URL` with its own
 * ad-hoc fallback — mismatched fallbacks across files previously caused
 * canonical tags, the sitemap and robots.txt to point at different domains
 * whenever the env var wasn't set.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaiiya.nl'
