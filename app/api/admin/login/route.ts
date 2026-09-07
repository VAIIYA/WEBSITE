import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, createSessionToken, isCorrectPassword } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { password } = (body ?? {}) as Record<string, unknown>

  if (typeof password !== 'string' || !isCorrectPassword(password)) {
    return NextResponse.json({ error: 'Onjuist wachtwoord.' }, { status: 401 })
  }

  const token = await createSessionToken()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}
