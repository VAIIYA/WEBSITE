'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { localeFromPathname, withLocale, stripLocale } from '@/lib/i18n'

const STORAGE_KEY = 'vaiiya-locale'

/**
 * Mounted once in the root layout. On a visitor's very first load (no
 * stored preference yet) it redirects non-Dutch browsers from a /nl page
 * to its /en equivalent, since this is a static export and has no
 * middleware to do that server-side. After that first decision — whether
 * made automatically here or by clicking the language switcher — the
 * choice is remembered in localStorage and never overridden again.
 */
export default function LocaleSync() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      const currentLocale = localeFromPathname(pathname)

      if (!stored) {
        const browserIsDutch = (navigator.language || '').toLowerCase().startsWith('nl')
        if (currentLocale === 'nl' && !browserIsDutch) {
          localStorage.setItem(STORAGE_KEY, 'en')
          router.replace(withLocale(stripLocale(pathname), 'en'))
          return
        }
        localStorage.setItem(STORAGE_KEY, currentLocale)
      }

      document.documentElement.lang = currentLocale
      // eslint-disable-next-line no-empty
    } catch {}
    // Intentionally run once per full page load only — layout stays mounted
    // across client-side navigations, so this must not re-fire (and fight)
    // every time the visitor clicks a link or the language switcher.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.lang = localeFromPathname(pathname)
  }, [pathname])

  return null
}
