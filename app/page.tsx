'use client'

import React from 'react'
import HomeSection from '@/components/HomeSection'
import AgenticEngineeringSection from '@/components/AgenticEngineeringSection'
import WebBuildingSection from '@/components/WebBuildingSection'
import AndroidSection from '@/components/AndroidSection'
import IosSection from '@/components/IosSection'
import IndestructibleSocialsSection from '@/components/IndestructibleSocialsSection'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-slate-900 selection:bg-[#E25A3C] selection:text-white">
      <HomeSection />
      <AgenticEngineeringSection />
      <WebBuildingSection />
      <AndroidSection />
      <IosSection />
      <IndestructibleSocialsSection />
    </main>
  )
}

