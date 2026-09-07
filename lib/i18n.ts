export type Locale = 'nl' | 'en'

export const DEFAULT_LOCALE: Locale = 'nl'

/** Given a pathname, is it under the /en prefix? */
export function isEnglishPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/')
}

export function localeFromPathname(pathname: string): Locale {
  return isEnglishPath(pathname) ? 'en' : 'nl'
}

/** Strip a leading /en prefix, so both locales can be compared/linked against the same "route". */
export function stripLocale(pathname: string): string {
  if (pathname === '/en') return '/'
  if (pathname.startsWith('/en/')) return pathname.slice(3)
  return pathname
}

/** Build the href for `route` (an un-prefixed path like "/websites") in the given locale. */
export function withLocale(route: string, locale: Locale): string {
  if (locale === 'nl') return route
  return route === '/' ? '/en' : `/en${route}`
}

/** Given the *current* pathname, return the equivalent path in the other locale. */
export function otherLocalePath(pathname: string): string {
  const current = localeFromPathname(pathname)
  const bare = stripLocale(pathname)
  return current === 'nl' ? withLocale(bare, 'en') : withLocale(bare, 'nl')
}
