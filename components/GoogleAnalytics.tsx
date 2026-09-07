'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { CONSENT_CHANGED_EVENT, getStoredConsent } from '@/lib/consent'

/**
 * GA4 — only actually loads gtag.js once the visitor has accepted the
 * cookie consent banner (components/CookieConsentBanner.tsx). Declining,
 * or not having answered yet, means no script tag gets injected at all.
 */
export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    setConsented(getStoredConsent() === 'accepted')

    const handleChange = (e: Event) => {
      const detail = (e as CustomEvent<'accepted' | 'declined'>).detail
      setConsented(detail === 'accepted')
    }

    window.addEventListener(CONSENT_CHANGED_EVENT, handleChange)
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, handleChange)
  }, [])

  if (!measurementId || !consented) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');`}
      </Script>
    </>
  )
}
