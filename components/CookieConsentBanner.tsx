'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { localeFromPathname, withLocale } from '@/lib/i18n'
import { getStoredConsent, setStoredConsent } from '@/lib/consent'

const COPY = {
  nl: {
    text: 'We gebruiken cookies om het gebruik van deze site te analyseren (Google Analytics). Ga je akkoord?',
    more: 'Meer info',
    decline: 'Weigeren',
    accept: 'Accepteren',
  },
  en: {
    text: 'We use cookies to analyze how this site is used (Google Analytics). Is that okay with you?',
    more: 'More info',
    decline: 'Decline',
    accept: 'Accept',
  },
} as const

export default function CookieConsentBanner() {
  const pathname = usePathname() || '/'
  const locale = localeFromPathname(pathname)
  const t = COPY[locale]

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getStoredConsent() === null)
  }, [])

  const choose = (choice: 'accepted' | 'declined') => {
    setStoredConsent(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-slate-950 text-white rounded-2xl shadow-2xl border border-slate-800 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-slate-300 leading-relaxed flex-1">
          {t.text}{' '}
          <Link href={withLocale('/cookies', locale)} className="text-[#E25A3C] hover:underline font-medium">
            {t.more}
          </Link>
        </p>
        <div className="flex gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => choose('declined')}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 border border-slate-700 hover:bg-slate-900 transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={() => choose('accepted')}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-sm font-semibold bg-[#E25A3C] hover:bg-[#c94b30] text-white transition-colors"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
