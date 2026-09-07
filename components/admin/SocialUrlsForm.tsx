'use client'

import { useState } from 'react'

export default function SocialUrlsForm({
  initialTiktokUrl,
  initialXUrl,
}: {
  initialTiktokUrl: string
  initialXUrl: string
}) {
  const [tiktokUrl, setTiktokUrl] = useState(initialTiktokUrl)
  const [xUrl, setXUrl] = useState(initialXUrl)
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('saving')
    setError(null)

    try {
      const res = await fetch('/api/admin/social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tiktokUrl, xUrl }),
      })
      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(json.error || 'Er ging iets mis.')
        setStatus('error')
        return
      }

      setStatus('saved')
      setTimeout(() => setStatus('idle'), 2500)
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw.')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E25A3C]/30 focus:border-[#E25A3C]/40'
  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
      <div>
        <label className={labelClass}>Laatste X-post URL</label>
        <input
          type="url"
          value={xUrl}
          onChange={(e) => setXUrl(e.target.value)}
          placeholder="https://x.com/V4IIYA/status/1234567890123456789"
          className={inputClass}
        />
        <p className="text-xs text-slate-400 mt-1.5">
          Plak hier de link naar je nieuwste post/video op X zodra je iets nieuws post — de homepage haalt de embed
          automatisch op via X's officiële oEmbed. Leeg laten verbergt het blok op de homepage weer.
        </p>
      </div>

      <div>
        <label className={labelClass}>Laatste TikTok-video URL</label>
        <input
          type="url"
          value={tiktokUrl}
          onChange={(e) => setTiktokUrl(e.target.value)}
          placeholder="https://www.tiktok.com/@vaiiya.media/video/1234567890123456789"
          className={inputClass}
        />
        <p className="text-xs text-slate-400 mt-1.5">
          Zelfde principe, via TikTok's officiële oEmbed.
        </p>
      </div>

      {error && <p className="text-sm text-red-600 font-medium">⚠️ {error}</p>}
      {status === 'saved' && <p className="text-sm text-emerald-600 font-medium">✅ Opgeslagen.</p>}

      <button type="submit" disabled={status === 'saving'} className="btn-metamask btn-orange text-sm disabled:opacity-60">
        {status === 'saving' ? 'Opslaan...' : 'Opslaan'}
      </button>
    </form>
  )
}
