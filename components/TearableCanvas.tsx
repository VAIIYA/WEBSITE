'use client'

import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react'
import * as THREE from 'three'

export interface TearableCanvasRef {
  resetCloth: () => void
  toggleGravity: () => boolean
  setInteractionMode: (mode: 'drag' | 'cut') => void
  getInteractionMode: () => 'drag' | 'cut'
  getGravityState: () => boolean
}

interface TearableCanvasProps {
  interactionMode: 'drag' | 'cut'
  gravityEnabled: boolean
  onPhysicsStatsChange?: (stats: { activeLinks: number; tornLinks: number }) => void
}

class Point {
  x: number
  y: number
  z: number
  px: number
  py: number
  pz: number
  vx: number = 0
  vy: number = 0
  vz: number = 0
  pinned: boolean = false
  initX: number
  initY: number
  initZ: number
  id: number

  constructor(x: number, y: number, z: number, id: number, pinned: boolean = false) {
    this.x = x
    this.y = y
    this.z = z
    this.px = x
    this.py = y
    this.pz = z
    this.initX = x
    this.initY = y
    this.initZ = z
    this.id = id
    this.pinned = pinned
  }

  update(dt: number, gravity: number, friction: number) {
    if (this.pinned) return

    this.vx = (this.x - this.px) * friction
    this.vy = (this.y - this.py) * friction
    this.vz = (this.z - this.pz) * friction

    this.px = this.x
    this.py = this.y
    this.pz = this.z

    this.x += this.vx
    this.y += this.vy + gravity * dt * dt
    this.z += this.vz
  }
}

class Link {
  p1: Point
  p2: Point
  restingDist: number
  tearDist: number
  active: boolean = true

  constructor(p1: Point, p2: Point, tearMultiplier: number = 3.5) {
    this.p1 = p1
    this.p2 = p2
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y
    const dz = p1.z - p2.z
    this.restingDist = Math.sqrt(dx * dx + dy * dy + dz * dz)
    this.tearDist = this.restingDist * tearMultiplier
  }

  resolve() {
    if (!this.active) return

    const dx = this.p2.x - this.p1.x
    const dy = this.p2.y - this.p1.y
    const dz = this.p2.z - this.p1.z
    const currentDist = Math.sqrt(dx * dx + dy * dy + dz * dz)

    if (currentDist > this.tearDist) {
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

const TearableCanvas = forwardRef<TearableCanvasRef, TearableCanvasProps>(
  ({ interactionMode, gravityEnabled, onPhysicsStatsChange }, ref) => {
    const mountRef = useRef<HTMLDivElement>(null)

    const modeRef = useRef<'drag' | 'cut'>(interactionMode)
    const gravityRef = useRef<boolean>(gravityEnabled)

    useEffect(() => {
      modeRef.current = interactionMode
    }, [interactionMode])

    useEffect(() => {
      gravityRef.current = gravityEnabled
    }, [gravityEnabled])

    // Physics Engine State
    const pointsRef = useRef<Point[]>([])
    const linksRef = useRef<Link[]>([])
    const grabbedPointRef = useRef<Point | null>(null)
    const mousePosRef = useRef<{ x: number; y: number; prevX: number; prevY: number; isDown: boolean }>({
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      isDown: false,
    })

    const resetTriggerRef = useRef<() => void>(() => {})

    useImperativeHandle(ref, () => ({
      resetCloth: () => {
        resetTriggerRef.current()
      },
      toggleGravity: () => {
        gravityRef.current = !gravityRef.current
        return gravityRef.current
      },
      setInteractionMode: (m) => {
        modeRef.current = m
      },
      getInteractionMode: () => modeRef.current,
      getGravityState: () => gravityRef.current,
    }))

    useEffect(() => {
      const container = mountRef.current
      if (!container) return

      let width = container.clientWidth || window.innerWidth
      let height = container.clientHeight || window.innerHeight

      // Scene, Camera, Renderer
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
      camera.position.z = 350

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      container.appendChild(renderer.domElement)

      // Grid Dimensions
      const cols = Math.min(Math.floor(width / 24), 55)
      const rows = Math.min(Math.floor(height / 28), 35)
      const clothWidth = 380
      const clothHeight = 240
      const startX = -clothWidth / 2
      const startY = clothHeight / 2

      const stepX = clothWidth / (cols - 1)
      const stepY = clothHeight / (rows - 1)

      const createPhysicsGrid = () => {
        const points: Point[] = []
        const links: Link[] = []

        let id = 0
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = startX + c * stepX
            const y = startY - r * stepY
            const z = Math.sin(c * 0.3) * Math.cos(r * 0.3) * 8

            // Pin top edge and outer top corners
            const pinned = r === 0 && (c % 2 === 0 || c === 0 || c === cols - 1)
            points.push(new Point(x, y, z, id++, pinned))
          }
        }

        // Create Structural Links
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c
            // Right link
            if (c < cols - 1) {
              links.push(new Link(points[i], points[i + 1], 3.8))
            }
            // Down link
            if (r < rows - 1) {
              links.push(new Link(points[i], points[i + cols], 3.8))
            }
            // Diagonal link (Shear)
            if (c < cols - 1 && r < rows - 1) {
              links.push(new Link(points[i], points[i + cols + 1], 4.2))
            }
          }
        }

        pointsRef.current = points
        linksRef.current = links
      }

      createPhysicsGrid()

      resetTriggerRef.current = () => {
        createPhysicsGrid()
        updateMeshGeometry()
      }

      // Three.js LineSegments & Glowing Nodes Geometry
      const linePositions = new Float32Array(linksRef.current.length * 6)
      const lineColors = new Float32Array(linksRef.current.length * 6)

      const lineGeometry = new THREE.BufferGeometry()
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        linewidth: 1.5,
      })

      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
      scene.add(lineMesh)

      // Sparkles / Particles for Torn Threads
      const sparkCount = 150
      const sparkPositions = new Float32Array(sparkCount * 3)
      const sparkColors = new Float32Array(sparkCount * 3)

      for (let i = 0; i < sparkCount; i++) {
        sparkPositions[i * 3] = (Math.random() - 0.5) * 400
        sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 300
        sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 100

        sparkColors[i * 3] = 1.0 // R
        sparkColors[i * 3 + 1] = 0.36 // G (Metamask orange)
        sparkColors[i * 3 + 2] = 0.08 // B
      }

      const sparkGeometry = new THREE.BufferGeometry()
      sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3))
      sparkGeometry.setAttribute('color', new THREE.BufferAttribute(sparkColors, 3))

      const sparkMaterial = new THREE.PointsMaterial({
        size: 3.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      })

      const sparkParticles = new THREE.Points(sparkGeometry, sparkMaterial)
      scene.add(sparkParticles)

      // Colors
      const colorNormal1 = new THREE.Color(0x3d065f) // Metamask purple
      const colorNormal2 = new THREE.Color(0xff5c16) // Metamask orange
      const colorTension = new THREE.Color(0x00f0ff) // Cyan tension glow

      const updateMeshGeometry = () => {
        const links = linksRef.current
        const posAttr = lineGeometry.attributes.position as THREE.BufferAttribute
        const colAttr = lineGeometry.attributes.color as THREE.BufferAttribute

        let activeCount = 0
        let ptr = 0

        for (let i = 0; i < links.length; i++) {
          const l = links[i]
          if (l.active) {
            activeCount++

            posAttr.setXYZ(ptr, l.p1.x, l.p1.y, l.p1.z)
            posAttr.setXYZ(ptr + 1, l.p2.x, l.p2.y, l.p2.z)

            // Calculate link tension for gradient color
            const dx = l.p1.x - l.p2.x
            const dy = l.p1.y - l.p2.y
            const dz = l.p1.z - l.p2.z
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
            const tension = Math.min(dist / l.restingDist - 1.0, 1.0)

            const c1 = colorNormal1.clone().lerp(colorNormal2, (l.p1.y + 120) / 240)
            if (tension > 0.4) {
              c1.lerp(colorTension, (tension - 0.4) * 1.5)
            }

            colAttr.setXYZ(ptr, c1.r, c1.g, c1.b)
            colAttr.setXYZ(ptr + 1, c1.r, c1.g, c1.b)
          } else {
            // Degenerate segment for inactive link
            posAttr.setXYZ(ptr, 0, 0, 0)
            posAttr.setXYZ(ptr + 1, 0, 0, 0)
            colAttr.setXYZ(ptr, 0, 0, 0)
            colAttr.setXYZ(ptr + 1, 0, 0, 0)
          }
          ptr += 2
        }

        posAttr.needsUpdate = true
        colAttr.needsUpdate = true

        const tornCount = links.length - activeCount
        if (onPhysicsStatsChange) {
          onPhysicsStatsChange({ activeLinks: activeCount, tornLinks: tornCount })
        }
      }

      // Convert Screen Coords (px) to Three.js World Coords at Z=0
      const screenToWorld = (screenX: number, screenY: number) => {
        const vec = new THREE.Vector3(
          (screenX / width) * 2 - 1,
          -(screenY / height) * 2 + 1,
          0.5
        )
        vec.unproject(camera)
        const dir = vec.sub(camera.position).normalize()
        const distance = -camera.position.z / dir.z
        const pos = camera.position.clone().add(dir.multiplyScalar(distance))
        return pos
      }

      // Pointer Listeners
      const handlePointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        mousePosRef.current.prevX = mousePosRef.current.x
        mousePosRef.current.prevY = mousePosRef.current.y
        mousePosRef.current.x = mouseX
        mousePosRef.current.y = mouseY

        const worldPos = screenToWorld(mouseX, mouseY)
        const prevWorldPos = screenToWorld(mousePosRef.current.prevX, mousePosRef.current.prevY)

        // Indestructible Socials Forcefield Repeller logic
        const socialsElement = document.getElementById('indestructible-socials-zone')
        if (socialsElement) {
          const sRect = socialsElement.getBoundingClientRect()
          const sWorldCenter = screenToWorld(
            sRect.left + sRect.width / 2 - rect.left,
            sRect.top + sRect.height / 2 - rect.top
          )
          const sRadius = Math.max(sRect.width, sRect.height) * 0.45

          // Repel points around indestructible socials
          for (let i = 0; i < pointsRef.current.length; i++) {
            const p = pointsRef.current[i]
            const dx = p.x - sWorldCenter.x
            const dy = p.y - sWorldCenter.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < sRadius + 30 && dist > 0) {
              const force = ((sRadius + 30 - dist) / (sRadius + 30)) * 15
              p.x += (dx / dist) * force
              p.y += (dy / dist) * force
            }
          }
        }

        // Dragging grabbed point
        if (mousePosRef.current.isDown && grabbedPointRef.current) {
          grabbedPointRef.current.x = worldPos.x
          grabbedPointRef.current.y = worldPos.y
        }

        // Cut / Rip Mode or Fast Mouse Slash
        const isCutMode = modeRef.current === 'cut' || e.buttons === 2
        const mouseSpeed = Math.hypot(worldPos.x - prevWorldPos.x, worldPos.y - prevWorldPos.y)

        if (isCutMode || (mousePosRef.current.isDown && mouseSpeed > 12)) {
          const cutRadius = isCutMode ? 25 : 18
          for (let i = 0; i < linksRef.current.length; i++) {
            const link = linksRef.current[i]
            if (!link.active) continue

            // Distance from link segment to world mouse position
            const d1 = Math.hypot(link.p1.x - worldPos.x, link.p1.y - worldPos.y)
            const d2 = Math.hypot(link.p2.x - worldPos.x, link.p2.y - worldPos.y)

            if (d1 < cutRadius || d2 < cutRadius) {
              link.active = false
            }
          }
        }
      }

      const handlePointerDown = (e: PointerEvent) => {
        mousePosRef.current.isDown = true
        const rect = container.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const worldPos = screenToWorld(mouseX, mouseY)

        // Find closest particle
        let closestPoint: Point | null = null
        let minDist = 35

        for (let i = 0; i < pointsRef.current.length; i++) {
          const p = pointsRef.current[i]
          const dist = Math.hypot(p.x - worldPos.x, p.y - worldPos.y)
          if (dist < minDist) {
            minDist = dist
            closestPoint = p
          }
        }

        grabbedPointRef.current = closestPoint

        if (modeRef.current === 'cut' || e.button === 2) {
          handlePointerMove(e)
        }
      }

      const handlePointerUp = () => {
        mousePosRef.current.isDown = false
        grabbedPointRef.current = null
      }

      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault() // Prevent right-click context menu so user can cut freely!
      }

      const handleResize = () => {
        width = container.clientWidth || window.innerWidth
        height = container.clientHeight || window.innerHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }

      container.addEventListener('pointermove', handlePointerMove)
      container.addEventListener('pointerdown', handlePointerDown)
      window.addEventListener('pointerup', handlePointerUp)
      container.addEventListener('contextmenu', handleContextMenu)
      window.addEventListener('resize', handleResize)

      // Animation Loop
      let animationFrameId: number
      let lastTime = performance.now()

      const animate = (currentTime: number) => {
        animationFrameId = requestAnimationFrame(animate)
        const dt = Math.min((currentTime - lastTime) / 1000, 0.033)
        lastTime = currentTime

        const gravityVal = gravityRef.current ? -1200 : 0
        const points = pointsRef.current
        const links = linksRef.current

        // 1. Particle Integration
        for (let i = 0; i < points.length; i++) {
          points[i].update(dt, gravityVal, 0.985)
        }

        // 2. Constraint Resolution (4 passes for crisp stiffness)
        for (let pass = 0; pass < 4; pass++) {
          for (let i = 0; i < links.length; i++) {
            links[i].resolve()
          }
        }

        // 3. Sparkles Float Animation
        const sparkPosAttr = sparkGeometry.attributes.position as THREE.BufferAttribute
        for (let i = 0; i < sparkCount; i++) {
          let y = sparkPosAttr.getY(i) - 0.4
          if (y < -180) y = 180
          sparkPosAttr.setY(i, y)
        }
        sparkPosAttr.needsUpdate = true

        // 4. Update Three.js Mesh
        updateMeshGeometry()

        // 5. Render Scene
        renderer.render(scene, camera)
      }

      animate(performance.now())

      return () => {
        cancelAnimationFrame(animationFrameId)
        container.removeEventListener('pointermove', handlePointerMove)
        container.removeEventListener('pointerdown', handlePointerDown)
        window.removeEventListener('pointerup', handlePointerUp)
        container.removeEventListener('contextmenu', handleContextMenu)
        window.removeEventListener('resize', handleResize)
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement)
        }
        lineGeometry.dispose()
        lineMaterial.dispose()
        sparkGeometry.dispose()
        sparkMaterial.dispose()
        renderer.dispose()
      }
    }, [onPhysicsStatsChange])

    return (
      <div
        ref={mountRef}
        className="fixed inset-0 pointer-events-auto z-10 select-none overflow-hidden"
        style={{ touchAction: 'none' }}
      />
    )
  }
)

TearableCanvas.displayName = 'TearableCanvas'

export default TearableCanvas
