'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        setError(json.error || 'Inloggen mislukt.')
        setLoading(false)
        return
      }

      router.push('/admin')
      router.refresh()
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold font-serif mb-2">VAIIYA Admin</h1>
          <p className="text-slate-400 text-sm">Log in om het beheerpaneel te openen.</p>
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
            Wachtwoord
          </label>
          <input
            id="password"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#E25A3C]/50 focus:border-[#E25A3C]/50"
          />
        </div>

        {error && <p className="text-sm text-red-400 font-medium">⚠️ {error}</p>}

        <button
          type="submit"
          disabled={loading || !password}
          className="btn-metamask btn-orange text-sm w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Bezig...' : 'Inloggen'}
        </button>
      </form>
    </main>
  )
}
