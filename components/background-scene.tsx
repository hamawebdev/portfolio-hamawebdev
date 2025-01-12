'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

function FloatingParticles() {
  const particlesRef = useRef<Mesh>(null)

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.001
      particlesRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={particlesRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#2196F3" wireframe />
    </mesh>
  )
}

export function BackgroundScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}

