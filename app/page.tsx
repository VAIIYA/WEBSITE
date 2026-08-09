'use client'

import React from 'react'
import Tearable3DEngine from '@/components/Tearable3DEngine'

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden bg-slate-950">
      <Tearable3DEngine />
    </main>
  )
}
