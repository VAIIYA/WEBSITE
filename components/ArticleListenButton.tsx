'use client'

import { useEffect, useRef, useState } from 'react'

const COPY = {
  nl: { listen: 'Beluister dit artikel', pause: 'Pauzeren', resume: 'Hervatten', stop: 'Stoppen' },
  en: { listen: 'Listen to this article', pause: 'Pause', resume: 'Resume', stop: 'Stop' },
} as const

/**
 * Free, zero-infrastructure "read aloud" button using the browser's
 * built-in Web Speech API — no API key, no server call, no per-character
 * cost. Voice quality depends on the visitor's OS/browser rather than
 * anything we control, but it costs nothing and never rate-limits.
 */
export default function ArticleListenButton({
  title,
  contentSelector,
  locale = 'nl',
}: {
  title: string
  /** CSS selector (e.g. "#article-body") for the element whose visible
   *  text should be read aloud, in addition to the title. */
  contentSelector: string
  locale?: 'nl' | 'en'
}) {
  const t = COPY[locale]
  const [supported, setSupported] = useState(false)
  const [state, setState] = useState<'idle' | 'playing' | 'paused'>('idle')
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const pickVoice = (): SpeechSynthesisVoice | undefined => {
    const voices = window.speechSynthesis.getVoices()
    const langPrefix = locale === 'nl' ? 'nl' : 'en'
    return voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix))
  }

  const start = () => {
    const el = document.querySelector(contentSelector)
    const bodyText = el?.textContent?.trim() || ''
    const text = [title, bodyText].filter(Boolean).join('. ')
    if (!text) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = locale === 'nl' ? 'nl-NL' : 'en-US'
    const voice = pickVoice()
    if (voice) utterance.voice = voice

    utterance.onend = () => setState('idle')
    utterance.onerror = () => setState('idle')

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
    setState('playing')
  }

  const togglePause = () => {
    if (state === 'playing') {
      window.speechSynthesis.pause()
      setState('paused')
    } else if (state === 'paused') {
      window.speechSynthesis.resume()
      setState('playing')
    }
  }

  const stop = () => {
    window.speechSynthesis.cancel()
    setState('idle')
  }

  if (!supported) return null

  return (
    <div className="inline-flex items-center gap-2 mb-8">
      {state === 'idle' ? (
        <button
          onClick={start}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-metamask-gray-100 bg-metamask-gray-50 hover:bg-metamask-purple hover:text-white hover:border-metamask-purple text-sm font-semibold text-slate-700 transition-colors"
        >
          🔊 {t.listen}
        </button>
      ) : (
        <>
          <button
            onClick={togglePause}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-metamask-gray-100 bg-metamask-gray-50 hover:bg-white text-sm font-semibold text-slate-700 transition-colors"
          >
            {state === 'playing' ? `⏸️ ${t.pause}` : `▶️ ${t.resume}`}
          </button>
          <button
            onClick={stop}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-metamask-gray-100 bg-metamask-gray-50 hover:bg-white text-sm font-semibold text-slate-500 transition-colors"
            title={t.stop}
          >
            ⏹️
          </button>
        </>
      )}
    </div>
  )
}
