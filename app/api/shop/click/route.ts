import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { getTursoClient, ensureSchema } from '@/lib/turso'
import { getProductBySlug } from '@/lib/shop'

export const runtime = 'nodejs'

/**
 * Fire-and-forget click logger for outbound affiliate links. The shop
 * pages call this with navigator.sendBeacon (falling back to fetch
 * keepalive) right as the visitor clicks through — it never blocks or
 * delays the actual navigation to the affiliate URL.
 */
export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { slug } = (body ?? {}) as Record<string, unknown>

  if (typeof slug !== 'string' || !(await getProductBySlug(slug))) {
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 })
  }

  try {
    await ensureSchema()
    const db = getTursoClient()
    await db.execute({
      sql: 'INSERT INTO affiliate_clicks (id, product_slug, created_at) VALUES (?, ?, ?)',
      args: [randomUUID(), slug, new Date().toISOString()],
    })
  } catch (err) {
    console.error('[shop/click] failed to log click:', err)
    // Never surface this to the visitor — it's just analytics.
  }

  return NextResponse.json({ ok: true })
}
