import { NextResponse } from 'next/server'
import { getNewsletterSubscribers } from '@/lib/turso'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const subscribers = await getNewsletterSubscribers()
  return NextResponse.json({ subscribers })
}
