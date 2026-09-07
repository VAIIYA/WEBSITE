import { NextResponse } from 'next/server'
import { getAffiliateClickStats } from '@/lib/turso'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const stats = await getAffiliateClickStats()
  return NextResponse.json({ stats })
}
