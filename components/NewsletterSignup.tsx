'use client'

import { useState } from 'react'

const COPY = {
  nl: {
    heading: 'Blijf op de hoogte',
    description: 'Nieuwe artikelen en updates, af en toe een e-mail. Geen spam.',
    placeholder: 'jij@voorbeeld.nl',
    submit: 'Aanmelden',
    sending: '...',
    success: '✅ Bedankt voor je aanmelding!',
    genericError: 'Er ging iets mis. Probeer het opnieuw.',
  },
  en: {
    heading: 'Stay in the loop',
    description: 'New articles and updates, every once in a while. No spam.',
    placeholder: 'you@example.com',
    submit: 'Subscribe',
    sending: '...',
    success: '✅ Thanks for subscribing!',
    genericError: 'Something went wrong. Please try again.',
  },
} as const

export default function NewsletterSignup({ locale = 'nl' }: { locale?: 'nl' | 'en' }) {
  const t = COPY[locale]
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    setError(null)

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.get('email'),
          locale,
          website: data.get('website'),
        }),
      })

      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(json.error || t.genericError)
        setStatus('error')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setError(t.genericError)
      setStatus('error')
    }
  }

  return (
    <div>
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{t.heading}</h3>
      <p className="text-slate-500 text-xs mb-4 leading-relaxed">{t.description}</p>

      {status === 'success' ? (
        <p className="text-emerald-400 text-sm font-medium">{t.success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <input
            type="email"
            name="email"
            required
            maxLength={320}
            placeholder={t.placeholder}
            className="min-w-0 flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#E25A3C]/50"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#E25A3C] hover:bg-[#c94b30] text-white text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? t.sending : t.submit}
          </button>
        </form>
      )}
      {status === 'error' && error && (
        <p className="text-red-400 text-xs mt-2">{error}</p>
      )}
    </div>
  )
}
