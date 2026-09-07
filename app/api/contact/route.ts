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

  const { name, email, message, website } = (body ?? {}) as Record<string, unknown>

  // Honeypot: a real visitor never fills this hidden field in.
  if (typeof website === 'string' && website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  if (typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ error: 'Vul een geldige naam in.' }, { status: 400 })
  }
  if (typeof email !== 'string' || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Vul een geldig e-mailadres in.' }, { status: 400 })
  }
  if (typeof message !== 'string' || message.trim().length < 10) {
    return NextResponse.json({ error: 'Je bericht is te kort.' }, { status: 400 })
  }
  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return NextResponse.json({ error: 'Een van de velden is te lang.' }, { status: 400 })
  }

  try {
    await ensureSchema()
    const db = getTursoClient()
    await db.execute({
      sql: 'INSERT INTO contact_submissions (id, name, email, message, created_at) VALUES (?, ?, ?, ?, ?)',
      args: [randomUUID(), name.trim(), email.trim(), message.trim(), new Date().toISOString()],
    })
  } catch (err) {
    console.error('[contact] failed to store submission:', err)
    return NextResponse.json({ error: 'Er ging iets mis. Probeer het later opnieuw.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
