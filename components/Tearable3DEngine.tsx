'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { createLayerTexture } from '@/lib/TextureGenerator'

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
    this.tearDist = this.restingDist * (indestructible ? 9999 : 3.0)
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

class TearableLayer {
  layerIndex: 1 | 2 | 3
  indestructible: boolean
  mesh: THREE.Mesh
  cols: number = 42
  rows: number = 30
  width: number = 14
  height: number = 10.5
  points: Point3D[] = []
  links: Link3D[] = []
  baseZ: number

  constructor(layerIndex: 1 | 2 | 3, baseZ: number, scene: THREE.Scene) {
    this.layerIndex = layerIndex
    this.baseZ = baseZ
    this.indestructible = layerIndex === 3 // Bottom layer is indestructible!

    // Create Geometry & Texture
    const geometry = new THREE.PlaneGeometry(this.width, this.height, this.cols - 1, this.rows - 1)
    const texture = createLayerTexture(layerIndex)

    const material = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide,
      roughness: 0.4,
      metalness: this.indestructible ? 0.4 : 0.1,
    })

    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.position.z = baseZ
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
    scene.add(this.mesh)

    this.initPhysics()
  }

  initPhysics() {
    const points: Point3D[] = []
    const links: Link3D[] = []

    const startX = -this.width / 2
    const startY = this.height / 2
    const stepX = this.width / (this.cols - 1)
    const stepY = this.height / (this.rows - 1)

    let id = 0
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const x = startX + c * stepX
        const y = startY - r * stepY
        const z = this.baseZ + Math.sin(c * 0.3) * 0.04

        // Pin top edge and corners so sheet drapes like paper/fabric
        const pinned = r === 0 && (c % 3 === 0 || c === 0 || c === this.cols - 1)
        points.push(new Point3D(x, y, z, id++, pinned))
      }
    }

    // Horizontal & Vertical Links
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
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].update(dt, gravity, friction)
    }

    for (let pass = 0; pass < 4; pass++) {
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].resolve()
      }
    }

    // Update Three.js Position Attribute
    const posAttr = this.mesh.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < this.points.length; i++) {
      posAttr.setXYZ(i, this.points[i].x, this.points[i].y, this.points[i].z - this.baseZ)
    }
    posAttr.needsUpdate = true
    this.mesh.geometry.computeVertexNormals()
  }
}

export default function Tearable3DEngine() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    let width = window.innerWidth
    let height = window.innerHeight

    // 1. Three.js Scene & Camera Setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x05050a)

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 10.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
    dirLight.position.set(4, 6, 10)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 2048
    dirLight.shadow.mapSize.height = 2048
    scene.add(dirLight)

    const cyanGlow = new THREE.PointLight(0x00f0ff, 2.5, 20)
    cyanGlow.position.set(-5, -4, 5)
    scene.add(cyanGlow)

    // 3. Create 3 Stacked Full-Screen Tearable Layers
    const layers: TearableLayer[] = [
      new TearableLayer(3, 0.0, scene), // Base Layer: Indestructible Socials
      new TearableLayer(2, 0.2, scene), // Middle Layer: Apps & Web Studio
      new TearableLayer(1, 0.4, scene), // Top Layer: Green Sage Hero
    ]

    // Pointer Interaction Engine
    const raycaster = new THREE.Raycaster()
    const mouseVector = new THREE.Vector2()
    const prevMouseVector = new THREE.Vector2()
    let isMouseDown = false
    let isRightMouseDown = false
    let grabbedPoint: Point3D | null = null

    const updateMousePos = (e: PointerEvent) => {
      prevMouseVector.copy(mouseVector)
      mouseVector.x = (e.clientX / width) * 2 - 1
      mouseVector.y = -(e.clientY / height) * 2 + 1
    }

    const handlePointerMove = (e: PointerEvent) => {
      updateMousePos(e)
      raycaster.setFromCamera(mouseVector, camera)
      const ray = raycaster.ray

      // Dragging grabbed 3D vertex
      if (isMouseDown && grabbedPoint) {
        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), -grabbedPoint.z)
        const intersection = new THREE.Vector3()
        if (ray.intersectPlane(planeZ, intersection)) {
          grabbedPoint.x = intersection.x
          grabbedPoint.y = intersection.y
        }
      }

      // Slicing/Ripping Links under mouse path
      const mouseSpeed = mouseVector.distanceTo(prevMouseVector)
      if (isRightMouseDown || (isMouseDown && mouseSpeed > 0.025)) {
        layers.forEach((layer) => {
          if (layer.indestructible) return

          layer.links.forEach((link) => {
            if (!link.active) return

            const p1 = new THREE.Vector3(link.p1.x, link.p1.y, link.p1.z)
            const p2 = new THREE.Vector3(link.p2.x, link.p2.y, link.p2.z)

            const linkCenter = p1.clone().add(p2).multiplyScalar(0.5)
            const distToRay = ray.distanceToPoint(linkCenter)

            if (distToRay < 0.38) {
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

      // Test top active layers from front to back
      for (let i = layers.length - 1; i >= 0; i--) {
        const layer = layers[i]
        const intersects = raycaster.intersectObject(layer.mesh)

        if (intersects.length > 0 && intersects[0].point) {
          const hitPt = intersects[0].point

          // Click on Social Links on Layer 3 (Indestructible)
          if (layer.layerIndex === 3) {
            if (hitPt.y < -2.2) {
              window.open('https://x.com/VAIIYA_MEDIA', '_blank')
              return
            }
          }

          // Find closest vertex in active layer
          let closest: Point3D | null = null
          let minDist = 2.0

          layer.points.forEach((p) => {
            const d = Math.hypot(p.x - hitPt.x, p.y - hitPt.y)
            if (d < minDist) {
              minDist = d
              closest = p
            }
          })

          if (closest) {
            grabbedPoint = closest
            break
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
      grabbedPoint = null
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

    // Physics Animation Loop
    let animationId: number
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate)
      const dt = Math.min((currentTime - lastTime) / 1000, 0.033)
      lastTime = currentTime

      const gravity = -3.2

      layers.forEach((layer) => {
        layer.updatePhysics(dt, gravity, 0.985)
      })

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

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-screen overflow-hidden bg-slate-950 select-none"
      style={{ touchAction: 'none' }}
    />
  )
}
