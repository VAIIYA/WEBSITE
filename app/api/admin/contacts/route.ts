import { NextResponse } from 'next/server'
import { getContactSubmissions } from '@/lib/turso'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const submissions = await getContactSubmissions()
  return NextResponse.json({ submissions })
}
