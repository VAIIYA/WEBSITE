import { NextRequest, NextResponse } from 'next/server'
import { getSiteConfig, setSiteConfig } from '@/lib/turso'
import { TIKTOK_LATEST_URL_KEY } from '@/lib/tiktok'
import { X_LATEST_URL_KEY } from '@/lib/x'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TIKTOK_URL_PATTERN = /^https:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+/
const X_URL_PATTERN = /^https:\/\/(www\.)?(x|twitter)\.com\/[\w]+\/status\/\d+/

export async function GET() {
  const [tiktokUrl, xUrl] = await Promise.all([
    getSiteConfig(TIKTOK_LATEST_URL_KEY),
    getSiteConfig(X_LATEST_URL_KEY),
  ])
  return NextResponse.json({ tiktokUrl, xUrl })
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { tiktokUrl, xUrl } = (body ?? {}) as Record<string, unknown>

  if (typeof tiktokUrl !== 'string' || (tiktokUrl.trim() && !TIKTOK_URL_PATTERN.test(tiktokUrl.trim()))) {
    return NextResponse.json(
      { error: 'Vul een geldige TikTok-video-URL in (https://www.tiktok.com/@gebruiker/video/1234...), of laat leeg.' },
      { status: 400 }
    )
  }
  if (typeof xUrl !== 'string' || (xUrl.trim() && !X_URL_PATTERN.test(xUrl.trim()))) {
    return NextResponse.json(
      { error: 'Vul een geldige X-post-URL in (https://x.com/gebruiker/status/1234...), of laat leeg.' },
      { status: 400 }
    )
  }

  try {
    await Promise.all([
      setSiteConfig(TIKTOK_LATEST_URL_KEY, tiktokUrl.trim()),
      setSiteConfig(X_LATEST_URL_KEY, xUrl.trim()),
    ])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/social] failed to save:', err)
    return NextResponse.json({ error: 'Er ging iets mis bij het opslaan.' }, { status: 500 })
  }
}
