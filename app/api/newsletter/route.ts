import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { getTursoClient, ensureSchema } from '@/lib/turso'

export const runtime = 'nodejs'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { email, locale, website } = (body ?? {}) as Record<string, unknown>

  // Honeypot field.
  if (typeof website === 'string' && website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  if (typeof email !== 'string' || !isValidEmail(email) || email.length > 320) {
    return NextResponse.json({ error: 'Vul een geldig e-mailadres in.' }, { status: 400 })
  }

  const safeLocale = locale === 'en' ? 'en' : 'nl'

  try {
    await ensureSchema()
    const db = getTursoClient()
    await db.execute({
      sql: 'INSERT INTO newsletter_subscribers (id, email, locale, created_at) VALUES (?, ?, ?, ?) ON CONFLICT(email) DO NOTHING',
      args: [randomUUID(), email.trim().toLowerCase(), safeLocale, new Date().toISOString()],
    })
  } catch (err) {
    console.error('[newsletter] failed to store subscriber:', err)
    return NextResponse.json({ error: 'Er ging iets mis. Probeer het later opnieuw.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
