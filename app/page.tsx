'use client'

import React from 'react'
import HomeSection from '@/components/HomeSection'
import WebBuildingSection from '@/components/WebBuildingSection'
import AppsSection from '@/components/AppsSection'
import GamesSection from '@/components/GamesSection'
import IndestructibleSocialsSection from '@/components/IndestructibleSocialsSection'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-slate-900 selection:bg-[#E25A3C] selection:text-white">
      <HomeSection />
      <WebBuildingSection />
      <AppsSection />
      <GamesSection />
      <IndestructibleSocialsSection />
    </main>
  )
}

