'use client'

import React from 'react'
import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'
import AgenticEngineeringSection from '@/components/AgenticEngineeringSection'
import WebBuildingSection from '@/components/WebBuildingSection'
import AndroidSection from '@/components/AndroidSection'
import IosSection from '@/components/IosSection'
import IndestructibleSocialsSection from '@/components/IndestructibleSocialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-slate-900 selection:bg-[#ff5c16] selection:text-white">
      <Header />
      <HomeSection />
      <AgenticEngineeringSection />
      <WebBuildingSection />
      <AndroidSection />
      <IosSection />
      <IndestructibleSocialsSection />
      <Footer />
    </main>
  )
}

