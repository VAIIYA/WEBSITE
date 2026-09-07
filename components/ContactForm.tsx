'use client'

import { useState } from 'react'

const COPY = {
  nl: {
    name: 'Naam',
    email: 'E-mailadres',
    message: 'Bericht',
    submit: 'Verstuur Bericht',
    sending: 'Versturen...',
    success: 'Bedankt! We nemen zo snel mogelijk contact met je op.',
    genericError: 'Er ging iets mis. Probeer het later opnieuw.',
  },
  en: {
    name: 'Name',
    email: 'Email address',
    message: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: "Thanks! We'll get back to you as soon as possible.",
    genericError: 'Something went wrong. Please try again later.',
  },
} as const

export default function ContactForm({ locale = 'nl' }: { locale?: 'nl' | 'en' }) {
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          website: data.get('website'), // honeypot
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

  if (status === 'success') {
    return (
      <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium">
        ✅ {t.success}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real visitors via CSS, bots fill it in anyway */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={200}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#E25A3C]/50 focus:border-[#E25A3C]/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
          {t.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={320}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#E25A3C]/50 focus:border-[#E25A3C]/50"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#E25A3C]/50 focus:border-[#E25A3C]/50 resize-none"
        />
      </div>

      {status === 'error' && error && (
        <p className="text-sm text-red-400 font-medium">⚠️ {error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-metamask btn-orange text-sm w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>
    </form>
  )
}
