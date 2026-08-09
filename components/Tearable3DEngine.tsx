'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { createCardTexture } from '@/lib/TextureGenerator'

class Point3D {
  x: number
  y: number
  z: number
  px: number
  py: number
  pz: number
  pinned: boolean
  id: number

  constructor(x: number, y: number, z: number, id: number, pinned: boolean = false) {
    this.x = x
    this.y = y
    this.z = z
    this.px = x
    this.py = y
    this.pz = z
    this.id = id
    this.pinned = pinned
  }

  update(dt: number, gravity: number, friction: number) {
    if (this.pinned) return

    const vx = (this.x - this.px) * friction
    const vy = (this.y - this.py) * friction
    const vz = (this.z - this.pz) * friction

    this.px = this.x
    this.py = this.y
    this.pz = this.z

    this.x += vx
    this.y += vy + gravity * dt * dt
    this.z += vz
  }
}

class Link3D {
  p1: Point3D
  p2: Point3D
  restingDist: number
  tearDist: number
  active: boolean = true
  indestructible: boolean = false

  constructor(p1: Point3D, p2: Point3D, indestructible: boolean = false) {
    this.p1 = p1
    this.p2 = p2
    this.indestructible = indestructible
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y
    const dz = p1.z - p2.z
    this.restingDist = Math.sqrt(dx * dx + dy * dy + dz * dz)
    this.tearDist = this.restingDist * (indestructible ? 999 : 3.4)
  }

  resolve() {
    if (!this.active) return

    const dx = this.p2.x - this.p1.x
    const dy = this.p2.y - this.p1.y
    const dz = this.p2.z - this.p1.z
    const currentDist = Math.sqrt(dx * dx + dy * dy + dz * dz)

    if (!this.indestructible && currentDist > this.tearDist) {
      this.active = false
      return
    }

    if (currentDist === 0) return

    const difference = (this.restingDist - currentDist) / currentDist
    const stepX = dx * difference * 0.5
    const stepY = dy * difference * 0.5
    const stepZ = dz * difference * 0.5

    if (!this.p1.pinned) {
      this.p1.x -= stepX
      this.p1.y -= stepY
      this.p1.z -= stepZ
    }
    if (!this.p2.pinned) {
      this.p2.x += stepX
      this.p2.y += stepY
      this.p2.z += stepZ
    }
  }
}

class TearableCard {
  id: string
  type: 'homepage' | 'android' | 'ios' | 'webbuilding' | 'socials'
  indestructible: boolean
  mesh: THREE.Mesh
  wireframeMesh: THREE.LineSegments
  cols: number = 24
  rows: number = 14
  width: number = 5.4
  height: number = 2.7
  points: Point3D[] = []
  links: Link3D[] = []
  initialCenterY: number

  constructor(
    id: string,
    type: 'homepage' | 'android' | 'ios' | 'webbuilding' | 'socials',
    centerY: number,
    scene: THREE.Scene,
    indestructible: boolean = false
  ) {
    this.id = id
    this.type = type
    this.initialCenterY = centerY
    this.indestructible = indestructible

    // 1. Create Mesh Geometry & Material
    const geometry = new THREE.PlaneGeometry(this.width, this.height, this.cols - 1, this.rows - 1)
    const texture = createCardTexture(type)

    const material = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide,
      roughness: 0.3,
      metalness: indestructible ? 0.6 : 0.1,
    })

    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
    scene.add(this.mesh)

    // 2. Wireframe Overlay Mesh
    const wireGeo = new THREE.WireframeGeometry(geometry)
    const wireMat = new THREE.LineBasicMaterial({
      color: indestructible ? 0x00f0ff : 0xff5c16,
      transparent: true,
      opacity: 0.25,
    })
    this.wireframeMesh = new THREE.LineSegments(wireGeo, wireMat)
    this.mesh.add(this.wireframeMesh)

    this.initPhysics()
  }

  initPhysics() {
    const points: Point3D[] = []
    const links: Link3D[] = []

    const startX = -this.width / 2
    const startY = this.initialCenterY + this.height / 2
    const stepX = this.width / (this.cols - 1)
    const stepY = this.height / (this.rows - 1)

    let id = 0
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const x = startX + c * stepX
        const y = startY - r * stepY
        const z = Math.sin(c * 0.4) * 0.05

        // Pin top edge corners & center
        const pinned = r === 0 && (c === 0 || c === Math.floor(this.cols / 2) || c === this.cols - 1)
        points.push(new Point3D(x, y, z, id++, pinned))
      }
    }

    // Links
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const i = r * this.cols + c
        if (c < this.cols - 1) {
          links.push(new Link3D(points[i], points[i + 1], this.indestructible))
        }
        if (r < this.rows - 1) {
          links.push(new Link3D(points[i], points[i + this.cols], this.indestructible))
        }
      }
    }

    this.points = points
    this.links = links
  }

  updatePhysics(dt: number, gravity: number, friction: number) {
    // 1. Point Integration
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].update(dt, gravity, friction)
    }

    // 2. Constraint Resolution
    for (let pass = 0; pass < 4; pass++) {
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].resolve()
      }
    }

    // 3. Update Three.js Mesh Position Attribute
    const posAttr = this.mesh.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < this.points.length; i++) {
      posAttr.setXYZ(i, this.points[i].x, this.points[i].y - this.initialCenterY, this.points[i].z)
    }
    posAttr.needsUpdate = true
    this.mesh.geometry.computeVertexNormals()

    // Position container mesh
    this.mesh.position.y = this.initialCenterY
  }

  reset() {
    this.initPhysics()
  }
}

export default function Tearable3DEngine() {
  const mountRef = useRef<HTMLDivElement>(null)

  const [interactionMode, setInteractionMode] = useState<'drag' | 'cut'>('drag')
  const [gravityEnabled, setGravityEnabled] = useState<boolean>(true)
  const [wireframeVisible, setWireframeVisible] = useState<boolean>(true)
  const [stats, setStats] = useState({ activeLinks: 0, tornLinks: 0 })

  const cardsRef = useRef<TearableCard[]>([])
  const grabbedPointRef = useRef<{ card: TearableCard; point: Point3D } | null>(null)
  const modeRef = useRef<'drag' | 'cut'>('drag')
  const gravityRef = useRef<boolean>(true)

  useEffect(() => {
    modeRef.current = interactionMode
  }, [interactionMode])

  useEffect(() => {
    gravityRef.current = gravityEnabled
  }, [gravityEnabled])

  useEffect(() => {
    cardsRef.current.forEach((c) => {
      c.wireframeMesh.visible = wireframeVisible
    })
  }, [wireframeVisible])

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    let width = window.innerWidth
    let height = window.innerHeight

    // 1. Scene & Camera
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x05050a)

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 9.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
    dirLight.position.set(5, 8, 10)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 2048
    dirLight.shadow.mapSize.height = 2048
    scene.add(dirLight)

    const cyanLight = new THREE.PointLight(0x00f0ff, 2, 15)
    cyanLight.position.set(-4, -6, 4)
    scene.add(cyanLight)

    // 3. Create 5 3D Tearable Cards
    const cards: TearableCard[] = [
      new TearableCard('card-home', 'homepage', 3.2, scene, false),
      new TearableCard('card-android', 'android', 0.3, scene, false),
      new TearableCard('card-ios', 'ios', -2.6, scene, false),
      new TearableCard('card-webbuilding', 'webbuilding', -5.5, scene, false),
      new TearableCard('card-socials', 'socials', -8.4, scene, true), // INDESTRUCTABLE!
    ]

    cardsRef.current = cards

    // Raycaster for Pointer Pickup & Slicing
    const raycaster = new THREE.Raycaster()
    const mouseVector = new THREE.Vector2()
    const prevMouseVector = new THREE.Vector2()
    let isMouseDown = false
    let isRightMouseDown = false

    const updateMousePos = (e: PointerEvent) => {
      prevMouseVector.copy(mouseVector)
      mouseVector.x = (e.clientX / width) * 2 - 1
      mouseVector.y = -(e.clientY / height) * 2 + 1
    }

    const handlePointerMove = (e: PointerEvent) => {
      updateMousePos(e)

      raycaster.setFromCamera(mouseVector, camera)
      const ray = raycaster.ray

      // Dragging grabbed 3D point
      if (isMouseDown && grabbedPointRef.current) {
        const targetZ = grabbedPointRef.current.point.z
        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), -targetZ)
        const intersection = new THREE.Vector3()
        if (ray.intersectPlane(planeZ, intersection)) {
          grabbedPointRef.current.point.x = intersection.x
          grabbedPointRef.current.point.y = intersection.y
        }
      }

      // Slicing links under 3D mouse vector
      const isCut = modeRef.current === 'cut' || isRightMouseDown
      if (isCut || (isMouseDown && mouseVector.distanceTo(prevMouseVector) > 0.03)) {
        cards.forEach((card) => {
          if (card.indestructible) return

          card.links.forEach((link) => {
            if (!link.active) return

            const p1 = new THREE.Vector3(link.p1.x, link.p1.y, link.p1.z)
            const p2 = new THREE.Vector3(link.p2.x, link.p2.y, link.p2.z)

            const linkCenter = p1.clone().add(p2).multiplyScalar(0.5)
            const distToRay = ray.distanceToPoint(linkCenter)

            if (distToRay < (isCut ? 0.35 : 0.22)) {
              link.active = false
            }
          })
        })
      }
    }

    const handlePointerDown = (e: PointerEvent) => {
      updateMousePos(e)

      if (e.button === 2) {
        isRightMouseDown = true
      } else {
        isMouseDown = true
      }

      raycaster.setFromCamera(mouseVector, camera)
      const meshes = cards.map((c) => c.mesh)
      const intersects = raycaster.intersectObjects(meshes)

      if (intersects.length > 0) {
        const hit = intersects[0]
        const hitCard = cards.find((c) => c.mesh === hit.object)

        if (hitCard && hit.point) {
          // Find closest vertex in card physics points
          let closestPt: Point3D | null = null
          let minDist = 1.5

          hitCard.points.forEach((p) => {
            const d = Math.hypot(p.x - hit.point.x, p.y - hit.point.y)
            if (d < minDist) {
              minDist = d
              closestPt = p
            }
          })

          if (closestPt) {
            grabbedPointRef.current = { card: hitCard, point: closestPt }
          }
        }
      }
    }

    const handlePointerUp = (e: PointerEvent) => {
      if (e.button === 2) {
        isRightMouseDown = false
      } else {
        isMouseDown = false
      }
      grabbedPointRef.current = null
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationId: number
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate)
      const dt = Math.min((currentTime - lastTime) / 1000, 0.033)
      lastTime = currentTime

      const gVal = gravityRef.current ? -3.8 : 0

      let totalActive = 0
      let totalTorn = 0

      cards.forEach((card) => {
        card.updatePhysics(dt, gVal, 0.985)

        card.links.forEach((l) => {
          if (l.active) totalActive++
          else totalTorn++
        })
      })

      setStats({ activeLinks: totalActive, tornLinks: totalTorn })
      renderer.render(scene, camera)
    }

    animate(performance.now())

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('resize', handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  const resetAllCards = () => {
    cardsRef.current.forEach((c) => c.reset())
  }

  const scrollCameraTo = (targetY: number) => {
    window.scrollTo({ top: (3.2 - targetY) * 120, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950 text-white selection:bg-orange-500">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-10 select-none overflow-hidden" />

      {/* Floating Control HUD */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-xl px-6 py-3 rounded-full border border-slate-700/80 shadow-2xl flex flex-wrap items-center gap-4 text-xs">
        <div className="flex items-center gap-2 font-mono text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-orange-400">3D TEARABLE UI</span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-400">Torn Links: {stats.tornLinks}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setInteractionMode('drag')}
            className={`px-3 py-1.5 rounded-full font-bold transition-all ${
              interactionMode === 'drag'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            🤏 Drag Card
          </button>

          <button
            onClick={() => setInteractionMode('cut')}
            className={`px-3 py-1.5 rounded-full font-bold transition-all ${
              interactionMode === 'cut'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            ✂️ Slice Card
          </button>

          <button
            onClick={() => setGravityEnabled(!gravityEnabled)}
            className={`px-3 py-1.5 rounded-full font-bold transition-all ${
              gravityEnabled
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            ⚡ Gravity: {gravityEnabled ? 'ON' : 'ZERO-G'}
          </button>

          <button
            onClick={() => setWireframeVisible(!wireframeVisible)}
            className={`px-3 py-1.5 rounded-full font-bold transition-all ${
              wireframeVisible
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            👁️ Wireframe
          </button>

          <button
            onClick={resetAllCards}
            className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold border border-cyan-500/40 transition-all"
          >
            🔄 Reset Cards
          </button>
        </div>
      </div>

      {/* Navigation Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-xl px-6 py-3 rounded-full border border-slate-700/80 shadow-2xl flex items-center gap-4 text-xs">
        <button onClick={() => scrollCameraTo(3.2)} className="hover:text-orange-400 font-bold">
          Homepage
        </button>
        <button onClick={() => scrollCameraTo(0.3)} className="hover:text-emerald-400 font-bold">
          Android Apps
        </button>
        <button onClick={() => scrollCameraTo(-2.6)} className="hover:text-blue-400 font-bold">
          iOS Apps
        </button>
        <button onClick={() => scrollCameraTo(-5.5)} className="hover:text-purple-400 font-bold">
          Website Building
        </button>
        <button
          onClick={() => scrollCameraTo(-8.4)}
          className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 font-bold border border-cyan-400/60 shadow"
        >
          🛡️ Indestructible Socials
        </button>
      </div>
    </div>
  )
}
