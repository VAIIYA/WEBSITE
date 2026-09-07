// Uses the Web Crypto API (globalThis.crypto) rather than Node's `crypto`
// module — this file is imported from middleware.ts, which runs on the
// Edge runtime and doesn't have Node's crypto module available.

export const ADMIN_SESSION_COOKIE = 'vaiiya_admin_session'
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not set')
  }
  return secret
}

async function hmacHex(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message))
  return [...new Uint8Array(signature)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return diff === 0
}

/** Builds a signed `payload.signature` token for the session cookie. */
export async function createSessionToken(): Promise<string> {
  const expiresAt = Date.now() + SESSION_TTL_MS
  const payload = `admin.${expiresAt}`
  const signature = await hmacHex(payload)
  return `${payload}.${signature}`
}

/** Verifies a session cookie value: correct signature and not expired. */
export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false

  const lastDot = token.lastIndexOf('.')
  if (lastDot === -1) return false

  const payload = token.slice(0, lastDot)
  const signature = token.slice(lastDot + 1)

  let expected: string
  try {
    expected = await hmacHex(payload)
  } catch {
    return false
  }
  if (!timingSafeEqual(signature, expected)) return false

  const [, expiresAtStr] = payload.split('.')
  const expiresAt = Number(expiresAtStr)
  if (!expiresAt || Date.now() > expiresAt) return false

  return true
}

/** Password check against ADMIN_PASSWORD. */
export function isCorrectPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return false
  return timingSafeEqual(candidate, expected)
}
