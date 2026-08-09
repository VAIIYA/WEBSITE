'use client'

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
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
  px: number
  py: number
  pinned: boolean = false
  id: number

  constructor(x: number, y: number, id: number, pinned: boolean = false) {
    this.x = x
    this.y = y
    this.px = x
    this.py = y
    this.id = id
    this.pinned = pinned
  }

  update(dt: number, gravity: number, friction: number) {
    if (this.pinned) return

    const vx = (this.x - this.px) * friction
    const vy = (this.y - this.py) * friction

    this.px = this.x
    this.py = this.y

    this.x += vx
    this.y += vy + gravity * dt * dt
  }
}

class Link {
  p1: Point
  p2: Point
  restingDist: number
  tearDist: number
  active: boolean = true

  constructor(p1: Point, p2: Point, tearMultiplier: number = 3.2) {
    this.p1 = p1
    this.p2 = p2
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y
    this.restingDist = Math.hypot(dx, dy)
    this.tearDist = this.restingDist * tearMultiplier
  }

  resolve() {
    if (!this.active) return

    const dx = this.p2.x - this.p1.x
    const dy = this.p2.y - this.p1.y
    const currentDist = Math.hypot(dx, dy)

    if (currentDist > this.tearDist) {
      this.active = false
      return
    }

    if (currentDist === 0) return

    const difference = (this.restingDist - currentDist) / currentDist
    const stepX = dx * difference * 0.5
    const stepY = dy * difference * 0.5

    if (!this.p1.pinned) {
      this.p1.x -= stepX
      this.p1.y -= stepY
    }
    if (!this.p2.pinned) {
      this.p2.x += stepX
      this.p2.y += stepY
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

    const pointsRef = useRef<Point[]>([])
    const linksRef = useRef<Link[]>([])
    const grabbedPointRef = useRef<Point | null>(null)
    const mousePosRef = useRef<{ x: number; y: number; prevX: number; prevY: number; isDown: boolean; rightDown: boolean }>({
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      isDown: false,
      rightDown: false,
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

      let width = window.innerWidth
      let height = window.innerHeight

      // Scene Setup - Orthographic Camera mapped 1-to-1 to pixels for pushmatrix accuracy!
      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(0, width, 0, height, -1000, 1000)
      camera.position.z = 100

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      container.appendChild(renderer.domElement)

      // Pushmatrix Tearable Grid parameters
      const cols = Math.min(Math.floor(width / 18), 70)
      const rows = Math.min(Math.floor(height / 20), 45)

      const startX = (width - (cols - 1) * 16) / 2
      const startY = 40

      const stepX = 16
      const stepY = 16

      const createPhysicsGrid = () => {
        const points: Point[] = []
        const links: Link[] = []

        let id = 0
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = startX + c * stepX
            const y = startY + r * stepY

            // Pin top row particles to create curtain drape
            const pinned = r === 0 && (c % 2 === 0 || c === 0 || c === cols - 1)
            points.push(new Point(x, y, id++, pinned))
          }
        }

        // Structural Links
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c
            // Horizontal Link
            if (c < cols - 1) {
              links.push(new Link(points[i], points[i + 1], 3.2))
            }
            // Vertical Link
            if (r < rows - 1) {
              links.push(new Link(points[i], points[i + cols], 3.2))
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

      // Three.js LineSegments Geometry
      const maxLinks = linksRef.current.length
      const linePositions = new Float32Array(maxLinks * 6)
      const lineColors = new Float32Array(maxLinks * 6)

      const lineGeometry = new THREE.BufferGeometry()
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        linewidth: 2,
      })

      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
      scene.add(lineMesh)

      // Color Palette (Metamask Orange & Purple + Neon Cyan Tension)
      const colorNormalTop = new THREE.Color(0xff5c16) // Orange
      const colorNormalBottom = new THREE.Color(0x9945ff) // Purple/Solana
      const colorTension = new THREE.Color(0x00f0ff) // Bright Cyan

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

            posAttr.setXYZ(ptr, l.p1.x, l.p1.y, 0)
            posAttr.setXYZ(ptr + 1, l.p2.x, l.p2.y, 0)

            const dist = Math.hypot(l.p1.x - l.p2.x, l.p1.y - l.p2.y)
            const tension = Math.min(dist / l.restingDist - 1.0, 1.0)

            const c = colorNormalTop.clone().lerp(colorNormalBottom, l.p1.y / height)
            if (tension > 0.35) {
              c.lerp(colorTension, (tension - 0.35) * 1.8)
            }

            colAttr.setXYZ(ptr, c.r, c.g, c.b)
            colAttr.setXYZ(ptr + 1, c.r, c.g, c.b)
          } else {
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

      // Pointer Event Handlers
      const handlePointerMove = (e: PointerEvent) => {
        const mouseX = e.clientX
        const mouseY = e.clientY

        mousePosRef.current.prevX = mousePosRef.current.x
        mousePosRef.current.prevY = mousePosRef.current.y
        mousePosRef.current.x = mouseX
        mousePosRef.current.y = mouseY

        // Indestructible Socials Forcefield Repeller
        const socialsZone = document.getElementById('indestructible-socials-zone')
        if (socialsZone) {
          const sRect = socialsZone.getBoundingClientRect()
          const sCenterX = sRect.left + sRect.width / 2
          const sCenterY = sRect.top + sRect.height / 2
          const sRadius = Math.max(sRect.width, sRect.height) * 0.55

          for (let i = 0; i < pointsRef.current.length; i++) {
            const p = pointsRef.current[i]
            const dx = p.x - sCenterX
            const dy = p.y - sCenterY
            const dist = Math.hypot(dx, dy)

            if (dist < sRadius + 40 && dist > 0) {
              const repelForce = ((sRadius + 40 - dist) / (sRadius + 40)) * 22
              p.x += (dx / dist) * repelForce
              p.y += (dy / dist) * repelForce
            }
          }
        }

        // Dragging grabbed particle
        if (mousePosRef.current.isDown && grabbedPointRef.current) {
          grabbedPointRef.current.x = mouseX
          grabbedPointRef.current.y = mouseY
        }

        // Cutting / Ripping links under mouse path
        const isCutMode = modeRef.current === 'cut' || mousePosRef.current.rightDown
        const mouseSpeed = Math.hypot(mouseX - mousePosRef.current.prevX, mouseY - mousePosRef.current.prevY)

        if (isCutMode || (mousePosRef.current.isDown && mouseSpeed > 10)) {
          const cutRadius = isCutMode ? 28 : 20
          for (let i = 0; i < linksRef.current.length; i++) {
            const link = linksRef.current[i]
            if (!link.active) continue

            const d1 = Math.hypot(link.p1.x - mouseX, link.p1.y - mouseY)
            const d2 = Math.hypot(link.p2.x - mouseX, link.p2.y - mouseY)

            if (d1 < cutRadius || d2 < cutRadius) {
              link.active = false
            }
          }
        }
      }

      const handlePointerDown = (e: PointerEvent) => {
        if (e.button === 2) {
          mousePosRef.current.rightDown = true
        } else {
          mousePosRef.current.isDown = true
        }

        const mouseX = e.clientX
        const mouseY = e.clientY

        let closestPoint: Point | null = null
        let minDist = 35

        for (let i = 0; i < pointsRef.current.length; i++) {
          const p = pointsRef.current[i]
          const dist = Math.hypot(p.x - mouseX, p.y - mouseY)
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

      const handlePointerUp = (e: PointerEvent) => {
        if (e.button === 2) {
          mousePosRef.current.rightDown = false
        } else {
          mousePosRef.current.isDown = false
        }
        grabbedPointRef.current = null
      }

      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault()
      }

      const handleResize = () => {
        width = window.innerWidth
        height = window.innerHeight
        camera.right = width
        camera.bottom = height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }

      window.addEventListener('pointermove', handlePointerMove)
      window.addEventListener('pointerdown', handlePointerDown)
      window.addEventListener('pointerup', handlePointerUp)
      window.addEventListener('contextmenu', handleContextMenu)
      window.addEventListener('resize', handleResize)

      // Physics Animation Loop
      let animationId: number
      let lastTime = performance.now()

      const animate = (currentTime: number) => {
        animationId = requestAnimationFrame(animate)
        const dt = Math.min((currentTime - lastTime) / 1000, 0.033)
        lastTime = currentTime

        const gravityVal = gravityRef.current ? 950 : 0
        const points = pointsRef.current
        const links = linksRef.current

        // 1. Particle Integration
        for (let i = 0; i < points.length; i++) {
          points[i].update(dt, gravityVal, 0.99)
        }

        // 2. Constraint Resolution (5 iterations for firm cloth response)
        for (let pass = 0; pass < 5; pass++) {
          for (let i = 0; i < links.length; i++) {
            links[i].resolve()
          }
        }

        // 3. Render Three.js Mesh
        updateMeshGeometry()
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
        lineGeometry.dispose()
        lineMaterial.dispose()
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
