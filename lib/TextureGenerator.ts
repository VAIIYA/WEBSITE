import * as THREE from 'three'

export function createLayerTexture(
  layerIndex: 1 | 2 | 3,
  width: number = 2048,
  height: number = 1536
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.CanvasTexture(canvas)

  if (layerIndex === 1) {
    // LAYER 1: Top Green / Sage Aesthetic Sheet (Homepage Hero)
    const grad = ctx.createLinearGradient(0, 0, width, height)
    grad.addColorStop(0, '#86efac')
    grad.addColorStop(0.5, '#4ade80')
    grad.addColorStop(1, '#22c55e')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, width, height)

    // Organic Background Doodles / Waves
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
    ctx.beginPath()
    ctx.arc(width * 0.2, height * 0.3, 350, 0, Math.PI * 2)
    ctx.arc(width * 0.85, height * 0.7, 450, 0, Math.PI * 2)
    ctx.fill()

    // Title & Typography
    ctx.fillStyle = '#0f172a'
    ctx.textAlign = 'center'
    ctx.font = '900 110px "Special Gothic Expanded One", Georgia, serif'
    ctx.fillText('VAIIYA', width / 2, height * 0.28)

    ctx.font = 'bold 44px sans-serif'
    ctx.fillStyle = '#14532d'
    ctx.fillText('WE. AS ONE.', width / 2, height * 0.35)

    // Tagline / Subtitle
    ctx.font = 'normal 48px sans-serif'
    ctx.fillStyle = '#052e16'
    ctx.fillText('Crafting Native Apps & Tearable Digital Experiences', width / 2, height * 0.46)

    // "Works with images & video" showcase box
    ctx.fillStyle = '#ffffff'
    ctx.roundRect(width * 0.25, height * 0.55, width * 0.5, height * 0.3, 32)
    ctx.fill()
    ctx.lineWidth = 8
    ctx.strokeStyle = '#15803d'
    ctx.stroke()

    ctx.fillStyle = '#15803d'
    ctx.font = 'bold 44px sans-serif'
    ctx.fillText('✂️ DRAG & TEAR THIS PAGE OPEN ✂️', width / 2, height * 0.72)

    ctx.fillStyle = '#4b5563'
    ctx.font = '32px sans-serif'
    ctx.fillText('Grab any corner or slash across to reveal what lies beneath', width / 2, height * 0.78)

  } else if (layerIndex === 2) {
    // LAYER 2: Middle Warm Cardboard / Craft Sheet (Android, iOS & Web Building)
    const grad = ctx.createLinearGradient(0, 0, width, height)
    grad.addColorStop(0, '#d97706')
    grad.addColorStop(0.5, '#b45309')
    grad.addColorStop(1, '#92400e')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, width, height)

    // Background Pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'
    for (let i = 0; i < 15; i++) {
      ctx.fillRect(i * 150, 0, 75, height)
    }

    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.font = 'bold 84px Georgia, serif'
    ctx.fillText('OUR APPS & WEB STUDIO', width / 2, 160)

    // 3 Cards: Android Apps, iOS Apps, Website Building
    const cards = [
      {
        title: 'ANDROID APPS',
        subtitle: 'FYNDER • VYNDER • BLOBIO',
        desc: 'Kotlin & Jetpack Compose Native',
        color: '#10b981',
        x: width * 0.08,
      },
      {
        title: 'iOS APPS',
        subtitle: 'VYNDER iOS • BLOBIO iOS',
        desc: 'Swift 5.10 & SwiftUI Ecosystem',
        color: '#3b82f6',
        x: width * 0.38,
      },
      {
        title: 'WEB STUDIO',
        subtitle: 'NIGHTSTUDIO • 3D WEBGL',
        desc: 'Next.js 14 & Solana Web3 PWAs',
        color: '#a855f7',
        x: width * 0.68,
      },
    ]

    cards.forEach((c) => {
      ctx.fillStyle = '#ffffff'
      ctx.roundRect(c.x, 260, width * 0.24, height * 0.52, 28)
      ctx.fill()

      ctx.fillStyle = c.color
      ctx.fillRect(c.x, 260, width * 0.24, 24)

      ctx.fillStyle = '#0f172a'
      ctx.textAlign = 'center'
      ctx.font = 'bold 36px sans-serif'
      ctx.fillText(c.title, c.x + (width * 0.24) / 2, 340)

      ctx.fillStyle = '#475569'
      ctx.font = 'bold 24px sans-serif'
      ctx.fillText(c.subtitle, c.x + (width * 0.24) / 2, 420)

      ctx.fillStyle = '#64748b'
      ctx.font = '22px sans-serif'
      ctx.fillText(c.desc, c.x + (width * 0.24) / 2, 500)
    })

    ctx.fillStyle = '#fef3c7'
    ctx.textAlign = 'center'
    ctx.font = 'bold 42px sans-serif'
    ctx.fillText('TEAR AGAIN TO REVEAL OUR INDESTRUCTIBLE SOCIALS ⬇️', width / 2, height - 120)

  } else if (layerIndex === 3) {
    // LAYER 3: Bottom Layer (INDESTRUCTABLE SOCIALS)
    const grad = ctx.createLinearGradient(0, 0, width, height)
    grad.addColorStop(0, '#0f172a')
    grad.addColorStop(0.5, '#0284c7')
    grad.addColorStop(1, '#0f172a')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, width, height)

    // Titanium Shield Header
    ctx.fillStyle = '#00f0ff'
    ctx.font = 'bold 36px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('🛡️ INDESTRUCTABLE ZONE • 100% UNBREAKABLE 🛡️', width / 2, 140)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 88px Georgia, serif'
    ctx.fillText('As Indestructible Our Socials', width / 2, 250)

    ctx.fillStyle = '#93c5fd'
    ctx.font = '34px sans-serif'
    ctx.fillText('Impervious to tearing physics. Connect directly with VAIIYA.', width / 2, 320)

    // Social Links Grid
    const socials = [
      { name: 'X (Twitter)', handle: '@VAIIYA_MEDIA', url: 'x.com/VAIIYA_MEDIA' },
      { name: 'YouTube', handle: '@VAIIYA-MEDIA', url: 'youtube.com/@VAIIYA-MEDIA' },
      { name: 'TikTok', handle: '@vaiiya.media', url: 'tiktok.com/@vaiiya.media' },
      { name: 'GitHub', handle: 'github.com/vaiiya', url: 'github.com/vaiiya' },
    ]

    socials.forEach((soc, idx) => {
      const col = idx % 2
      const row = Math.floor(idx / 2)
      const x = width * 0.12 + col * (width * 0.4)
      const y = 420 + row * 260

      ctx.fillStyle = '#1e293b'
      ctx.roundRect(x, y, width * 0.36, 210, 32)
      ctx.fill()
      ctx.lineWidth = 6
      ctx.strokeStyle = '#00f0ff'
      ctx.stroke()

      ctx.fillStyle = '#00f0ff'
      ctx.textAlign = 'left'
      ctx.font = 'bold 44px Georgia, serif'
      ctx.fillText(soc.name, x + 40, y + 80)

      ctx.fillStyle = '#e2e8f0'
      ctx.font = 'bold 30px monospace'
      ctx.fillText(soc.handle, x + 40, y + 145)
    })

    // Contact Email Box
    ctx.fillStyle = '#ff5c16'
    ctx.roundRect(width * 0.25, height - 200, width * 0.5, 110, 28)
    ctx.fill()

    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.font = 'bold 36px monospace'
    ctx.fillText('Official Email: contact@vaiiya.com', width / 2, height - 132)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}
