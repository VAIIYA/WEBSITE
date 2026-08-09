'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  interactionMode?: 'drag' | 'cut'
  gravityEnabled?: boolean
  physicsStats?: { activeLinks: number; tornLinks: number }
  onSetInteractionMode?: (mode: 'drag' | 'cut') => void
  onToggleGravity?: () => void
  onResetCloth?: () => void
}

export default function Header({
  interactionMode = 'drag',
  gravityEnabled = true,
  physicsStats = { activeLinks: 0, tornLinks: 0 },
  onSetInteractionMode,
  onToggleGravity,
  onResetCloth,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      {/* Top Bar: Interactive Three.js Physics Controls */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>THREE.JS TEARABLE PHYSICS ACTIVE</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-orange-400">Torn Threads: {physicsStats.tornLinks}</span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-[11px] text-slate-400 hidden md:inline">Mode:</span>
            
            <button
              onClick={() => onSetInteractionMode && onSetInteractionMode('drag')}
              className={`px-3 py-1 rounded-lg font-semibold text-[11px] transition-all ${
                interactionMode === 'drag'
                  ? 'bg-metamask-orange text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🤏 Drag Cloth
            </button>

            <button
              onClick={() => onSetInteractionMode && onSetInteractionMode('cut')}
              className={`px-3 py-1 rounded-lg font-semibold text-[11px] transition-all ${
                interactionMode === 'cut'
                  ? 'bg-red-600 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              ✂️ Cut / Rip
            </button>

            <button
              onClick={onToggleGravity}
              className={`px-3 py-1 rounded-lg font-semibold text-[11px] transition-all ${
                gravityEnabled
                  ? 'bg-purple-600 text-white shadow'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              ⚡ Gravity: {gravityEnabled ? 'ON' : 'ZERO-G'}
            </button>

            <button
              onClick={onResetCloth}
              className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-[11px] transition-all border border-cyan-500/30 hover:border-cyan-400"
            >
              🔄 Reset Fabric
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo Main */}
          <Link href="#home" className="flex items-center gap-3">
            <Image src="/v-logo.jpg" alt="VAIIYA Logo" width={38} height={38} className="rounded-xl shadow-sm" />
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-metamask-purple leading-none tracking-tight">VAIIYA</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-semibold">We. As One.</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-metamask-orange font-medium text-sm transition-colors">
              Homepage
            </a>
            <a href="#android" className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Android Apps
            </a>
            <a href="#ios" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              iOS Apps
            </a>
            <a href="#webbuilding" className="text-gray-700 hover:text-metamask-purple font-medium text-sm transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Website Building
            </a>
            <a
              href="#socials"
              className="px-4 py-2 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-slate-900/20 border border-cyan-400/40 flex items-center gap-1.5"
            >
              🛡️ Indestructible Socials
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-metamask-orange transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-gray-200 px-6 py-6 space-y-4">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="block text-xl font-serif text-metamask-purple hover:text-metamask-orange"
          >
            Homepage
          </a>
          <a
            href="#android"
            onClick={() => setIsMenuOpen(false)}
            className="block text-xl font-serif text-emerald-600"
          >
            Android Apps
          </a>
          <a
            href="#ios"
            onClick={() => setIsMenuOpen(false)}
            className="block text-xl font-serif text-blue-600"
          >
            iOS Apps
          </a>
          <a
            href="#webbuilding"
            onClick={() => setIsMenuOpen(false)}
            className="block text-xl font-serif text-metamask-purple"
          >
            Website Building
          </a>
          <a
            href="#socials"
            onClick={() => setIsMenuOpen(false)}
            className="block text-xl font-serif text-cyan-600 font-bold"
          >
            🛡️ Indestructible Socials
          </a>
        </div>
      )}
    </header>
  )
}
