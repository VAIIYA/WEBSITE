import type { Metadata } from 'next'
import FlapmojiPage, { flapmojiMetadata } from '@/components/FlapmojiPage'

export const metadata: Metadata = flapmojiMetadata

export default function Page() {
  return <FlapmojiPage />
}
