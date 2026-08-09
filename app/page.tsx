'use client'

import React, { useRef, useState } from 'react'
import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'
import AndroidSection from '@/components/AndroidSection'
import IosSection from '@/components/IosSection'
import WebBuildingSection from '@/components/WebBuildingSection'
import IndestructibleSocialsSection from '@/components/IndestructibleSocialsSection'
import TearableCanvas, { TearableCanvasRef } from '@/components/TearableCanvas'

export default function Home() {
  const canvasRef = useRef<TearableCanvasRef>(null)
  const [interactionMode, setInteractionMode] = useState<'drag' | 'cut'>('drag')
  const [gravityEnabled, setGravityEnabled] = useState<boolean>(true)
  const [physicsStats, setPhysicsStats] = useState<{ activeLinks: number; tornLinks: number }>({
    activeLinks: 0,
    tornLinks: 0,
  })

  const handleSetInteractionMode = (mode: 'drag' | 'cut') => {
    setInteractionMode(mode)
    if (canvasRef.current) {
      canvasRef.current.setInteractionMode(mode)
    }
  }

  const handleToggleGravity = () => {
    if (canvasRef.current) {
      const newState = canvasRef.current.toggleGravity()
      setGravityEnabled(newState)
    } else {
      setGravityEnabled((prev) => !prev)
    }
  }

  const handleResetCloth = () => {
    if (canvasRef.current) {
      canvasRef.current.resetCloth()
    }
  }

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Three.js Tearable WebGL Cloth Canvas Overlay */}
      <TearableCanvas
        ref={canvasRef}
        interactionMode={interactionMode}
        gravityEnabled={gravityEnabled}
        onPhysicsStatsChange={setPhysicsStats}
      />

      {/* Header Navigation with Controls */}
      <Header
        interactionMode={interactionMode}
        gravityEnabled={gravityEnabled}
        physicsStats={physicsStats}
        onSetInteractionMode={handleSetInteractionMode}
        onToggleGravity={handleToggleGravity}
        onResetCloth={handleResetCloth}
      />

      {/* 5 Single-Page Sections */}
      <main className="relative z-20 space-y-12 pb-20">
        <HomeSection />
        <AndroidSection />
        <IosSection />
        <WebBuildingSection />
        <IndestructibleSocialsSection />
      </main>
    </div>
  )
}
