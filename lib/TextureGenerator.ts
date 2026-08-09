import * as THREE from 'three'

export function createCardTexture(
  type: 'homepage' | 'android' | 'ios' | 'webbuilding' | 'socials',
  width: number = 1024,
  height: number = 1024
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.CanvasTexture(canvas)

  // Background Gradient
  const grad = ctx.createLinearGradient(0, 0, width, height)

  if (type === 'homepage') {
    grad.addColorStop(0, '#0f172a')
    grad.addColorStop(0.5, '#1e1b4b')
    grad.addColorStop(1, '#0f172a')
  } else if (type === 'android') {
    grad.addColorStop(0, '#022c22')
    grad.addColorStop(0.5, '#064e3b')
    grad.addColorStop(1, '#022c22')
  } else if (type === 'ios') {
    grad.addColorStop(0, '#0f172a')
    grad.addColorStop(0.5, '#1e3a8a')
    grad.addColorStop(1, '#0f172a')
  } else if (type === 'webbuilding') {
    grad.addColorStop(0, '#2e1065')
    grad.addColorStop(0.5, '#3b0764')
    grad.addColorStop(1, '#1e1b4b')
  } else if (type === 'socials') {
    grad.addColorStop(0, '#082f49')
    grad.addColorStop(0.5, '#0f172a')
    grad.addColorStop(1, '#1e1b4b')
  }

  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // Card Outer Border
  ctx.lineWidth = 12
  if (type === 'socials') {
    ctx.strokeStyle = '#00f0ff'
  } else if (type === 'android') {
    ctx.strokeStyle = '#10b981'
  } else if (type === 'ios') {
    ctx.strokeStyle = '#3b82f6'
  } else {
    ctx.strokeStyle = '#ff5c16'
  }
  ctx.strokeRect(12, 12, width - 24, height - 24)

  // Content Rendering based on type
  ctx.fillStyle = '#ffffff'
  ctx.textAlign = 'left'

  if (type === 'homepage') {
    // Badge
    ctx.fillStyle = '#ff5c16'
    ctx.font = 'bold 28px sans-serif'
    ctx.fillText('VAIIYA • WE. AS ONE.', 60, 100)

    // Heading
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 64px Georgia, serif'
    ctx.fillText('Crafting Native Apps', 60, 200)
    ctx.fillStyle = '#ff5c16'
    ctx.fillText('& 3D Tearable UI', 60, 280)

    // Description
    ctx.fillStyle = '#cbd5e1'
    ctx.font = '32px sans-serif'
    ctx.fillText('We design, build, and ship native mobile applications', 60, 380)
    ctx.fillText('and Web3 experiences. Drag or slash across cards to rip!', 60, 430)

    // Stats Grid
    ctx.fillStyle = '#1e293b'
    ctx.fillRect(60, 520, 260, 160)
    ctx.fillRect(360, 520, 260, 160)
    ctx.fillRect(660, 520, 260, 160)

    ctx.fillStyle = '#00f0ff'
    ctx.font = 'bold 44px Georgia, serif'
    ctx.fillText('100%', 90, 590)
    ctx.fillText('Verlet', 390, 590)
    ctx.fillText('60 FPS', 690, 590)

    ctx.fillStyle = '#94a3b8'
    ctx.font = 'bold 22px sans-serif'
    ctx.fillText('NATIVE CODE', 90, 640)
    ctx.fillText('CLOTH PHYSICS', 390, 640)
    ctx.fillText('THREE.JS WEBGL', 690, 640)

    // Call to Action
    ctx.fillStyle = '#ff5c16'
    ctx.fillRect(60, 750, 400, 90)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 32px sans-serif'
    ctx.fillText('DRAG OR TEAR CARD', 100, 808)
  } else if (type === 'android') {
    // Header Badge
    ctx.fillStyle = '#10b981'
    ctx.font = 'bold 28px sans-serif'
    ctx.fillText('ANDROID APPS ECOSYSTEM', 60, 100)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 60px Georgia, serif'
    ctx.fillText('Native Android Apps', 60, 190)

    // App List
    const apps = [
      { name: 'FYNDER', desc: 'Premium Android Dating Experience • Google Play' },
      { name: 'VYNDER', desc: 'Dating on Solana Blockchain • Web3 PWA & Android' },
      { name: 'BLOBIO', desc: 'Thrilling Arena Blob Battles • Android Native' },
    ]

    apps.forEach((app, idx) => {
      const y = 300 + idx * 160
      ctx.fillStyle = '#064e3b'
      ctx.fillRect(60, y, width - 120, 130)

      ctx.fillStyle = '#10b981'
      ctx.font = 'bold 40px Georgia, serif'
      ctx.fillText(app.name, 90, y + 55)

      ctx.fillStyle = '#e2e8f0'
      ctx.font = '24px sans-serif'
      ctx.fillText(app.desc, 90, y + 100)
    })

    ctx.fillStyle = '#10b981'
    ctx.fillRect(60, 800, 420, 90)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 30px sans-serif'
    ctx.fillText('GET ON GOOGLE PLAY', 95, 858)
  } else if (type === 'ios') {
    ctx.fillStyle = '#3b82f6'
    ctx.font = 'bold 28px sans-serif'
    ctx.fillText('iOS APPS ECOSYSTEM', 60, 100)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 60px Georgia, serif'
    ctx.fillText('Native Swift & SwiftUI Apps', 60, 190)

    const iosApps = [
      { name: 'VYNDER iOS', desc: 'Swift 5 & SwiftUI • App Store Connect' },
      { name: 'BLOBIO iOS', desc: 'Arena Blob Battle • Metal & Combine Graphics' },
    ]

    iosApps.forEach((app, idx) => {
      const y = 310 + idx * 200
      ctx.fillStyle = '#1e3a8a'
      ctx.fillRect(60, y, width - 120, 160)

      ctx.fillStyle = '#60a5fa'
      ctx.font = 'bold 44px Georgia, serif'
      ctx.fillText(app.name, 90, y + 65)

      ctx.fillStyle = '#e2e8f0'
      ctx.font = '26px sans-serif'
      ctx.fillText(app.desc, 90, y + 120)
    })

    ctx.fillStyle = '#3b82f6'
    ctx.fillRect(60, 800, 420, 90)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 30px sans-serif'
    ctx.fillText('DOWNLOAD ON APP STORE', 80, 858)
  } else if (type === 'webbuilding') {
    ctx.fillStyle = '#c084fc'
    ctx.font = 'bold 28px sans-serif'
    ctx.fillText('WEBSITE BUILDING STUDIO', 60, 100)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 58px Georgia, serif'
    ctx.fillText('Custom Web & 3D WebGL', 60, 190)

    ctx.fillStyle = '#3b0764'
    ctx.fillRect(60, 260, width - 120, 420)

    ctx.fillStyle = '#e9d5ff'
    ctx.font = 'bold 36px Georgia, serif'
    ctx.fillText('NIGHTSTUDIO', 90, 330)

    ctx.fillStyle = '#cbd5e1'
    ctx.font = '26px sans-serif'
    ctx.fillText('Immersive 3D WebGL & Web3 experiences on Solana.', 90, 390)
    ctx.fillText('Next.js 14 • TailwindCSS • Three.js Physics Engine', 90, 440)
    ctx.fillText('100 Lighthouse Performance & Sub-second Edge Load', 90, 490)

    ctx.fillStyle = '#a855f7'
    ctx.fillRect(90, 540, 380, 80)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 28px sans-serif'
    ctx.fillText('EXPLORE NIGHTSTUDIO', 115, 592)
  } else if (type === 'socials') {
    // Indestructible Shield Banner
    ctx.fillStyle = '#0284c7'
    ctx.fillRect(60, 60, width - 120, 100)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 32px sans-serif'
    ctx.fillText('🛡️ INDESTRUCTABLE ZONE • 100% UNBREAKABLE', 90, 122)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 56px Georgia, serif'
    ctx.fillText('As Indestructible Our Socials', 60, 240)

    ctx.fillStyle = '#94a3b8'
    ctx.font = '26px sans-serif'
    ctx.fillText('Impervious to tearing physics. Connect with VAIIYA.', 60, 290)

    // Social Channels Cards
    const socials = [
      { name: 'X (Twitter)', url: 'x.com/VAIIYA_MEDIA' },
      { name: 'YouTube', url: 'youtube.com/@VAIIYA-MEDIA' },
      { name: 'TikTok', url: 'tiktok.com/@vaiiya.media' },
      { name: 'GitHub', url: 'github.com/vaiiya' },
    ]

    socials.forEach((soc, idx) => {
      const col = idx % 2
      const row = Math.floor(idx / 2)
      const x = 60 + col * 460
      const y = 350 + row * 180

      ctx.fillStyle = '#0f172a'
      ctx.fillRect(x, y, 440, 150)
      ctx.strokeStyle = '#00f0ff'
      ctx.lineWidth = 4
      ctx.strokeRect(x, y, 440, 150)

      ctx.fillStyle = '#00f0ff'
      ctx.font = 'bold 32px Georgia, serif'
      ctx.fillText(soc.name, x + 30, y + 60)

      ctx.fillStyle = '#cbd5e1'
      ctx.font = '22px monospace'
      ctx.fillText(soc.url, x + 30, y + 110)
    })

    ctx.fillStyle = '#38bdf8'
    ctx.font = 'bold 28px monospace'
    ctx.fillText('Direct Email: contact@vaiiya.com', 60, 800)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}
