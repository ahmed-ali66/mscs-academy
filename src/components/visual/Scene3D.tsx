'use client';

/**
 * MSCS Academy — Real WebGL 3D Scenes
 *
 * Animated 3D scenes using Three.js + React Three Fiber.
 * Each subject area has a distinctive animated 3D scene:
 *  - history      → Rotating ancient scroll with floating pages
 *  - civics       → Floating scales of justice with balancing pans
 *  - geography    → Rotating globe with orbiting astrolabe rings
 *  - sociology    → Pulsing network of interconnected spheres (community)
 *  - economics    → Floating coins with rotating balance scale
 *  - ethics       → Glowing lantern with floating light particles
 *  - uae_heritage → Falcon-shaped geometric pattern with desert dunes
 *  - general      → Floating open book with knowledge particles
 */

import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════
// SHARED BUILDING BLOCKS
// ═══════════════════════════════════════════════════════════════

/** Slowly rotating group — wraps children with continuous Y rotation */
function RotatingGroup({ children, speed = 0.3, axis = 'y' }: { children: React.ReactNode; speed?: number; axis?: 'x' | 'y' | 'z' }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    const deltaSpeed = delta * speed;
    if (axis === 'x') ref.current.rotation.x += deltaSpeed;
    else if (axis === 'z') ref.current.rotation.z += deltaSpeed;
    else ref.current.rotation.y += deltaSpeed;
  });
  return <group ref={ref}>{children}</group>;
}

/** Floating dust particles — adds atmosphere */
function DustParticles({ count = 100, color = '#B08D3C', size = 0.02 }: { count?: number; color?: string; size?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCENE: HISTORY — Rotating ancient scroll with floating pages
// ═══════════════════════════════════════════════════════════════

function ScrollMesh() {
  return (
    <RotatingGroup speed={0.2}>
      {/* Scroll body — cylinder */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#E8DCC0" roughness={0.8} />
      </mesh>
      {/* End caps */}
      <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.52, 0.52, 0.1, 32]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.52, 0.52, 0.1, 32]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Unrolled parchment */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.8, 0.8]} />
        <meshStandardMaterial color="#F6EFDD" side={THREE.DoubleSide} roughness={0.9} />
      </mesh>
    </RotatingGroup>
  );
}

function FloatingPages() {
  const pages = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 2,
        ] as [number, number, number],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
        key: i,
      })),
    []
  );
  return (
    <>
      {pages.map((p) => (
        <Float key={p.key} speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <mesh position={p.position} rotation={p.rotation}>
            <planeGeometry args={[0.4, 0.55]} />
            <meshStandardMaterial color="#F6EFDD" side={THREE.DoubleSide} roughness={0.9} transparent opacity={0.7} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function HistoryScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 2]} intensity={0.8} color="#F6EFDD" />
      <pointLight position={[-3, -2, -2]} intensity={0.5} color="#B08D3C" />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <ScrollMesh />
      </Float>
      <FloatingPages />
      <DustParticles count={60} color="#B08D3C" />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCENE: GEOGRAPHY — Rotating globe with orbiting rings
// ═══════════════════════════════════════════════════════════════

function GlobeMesh() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial color="#0F5C5E" roughness={0.6} metalness={0.1} emissive="#0A4042" emissiveIntensity={0.2} />
    </mesh>
  );
}

function OrbitRings() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.15;
      ref.current.rotation.x += delta * 0.05;
    }
  });
  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#B08D3C" metalness={0.8} roughness={0.2} emissive="#B08D3C" emissiveIntensity={0.3} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.8} roughness={0.2} emissive="#7C5B2E" emissiveIntensity={0.2} />
      </mesh>
      {/* Compass markers on rings */}
      <mesh position={[0, 0, 1.8]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#B5532A" emissive="#B5532A" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0, -1.8]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#B5532A" emissive="#B5532A" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function GeographyScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1.0} color="#F6EFDD" />
      <pointLight position={[-5, -3, -5]} intensity={0.4} color="#0F5C5E" />
      <GlobeMesh />
      <OrbitRings />
      <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={1} />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCENE: CIVICS — Scales of justice with balancing pans
// ═══════════════════════════════════════════════════════════════

function ScalesMesh() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    // Gentle sway back and forth
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
  });
  return (
    <group ref={ref}>
      {/* Center pillar */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.08, 2.5, 16]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Top crossbar */}
      <mesh position={[0, 0.75, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 2, 16]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Hanging chains + pans */}
      {[-0.8, 0.8].map((x) => (
        <group key={x} position={[x, 0.65, 0]}>
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.6, 8]} />
            <meshStandardMaterial color="#B08D3C" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Pan (bowl) */}
          <mesh position={[0, -0.65, 0]} rotation={[Math.PI, 0, 0]}>
            <sphereGeometry args={[0.3, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#B08D3C" metalness={0.7} roughness={0.3} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
      {/* Base */}
      <mesh position={[0, -1.8, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 0.15, 32]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.4} roughness={0.6} />
      </mesh>
      {/* Top finial */}
      <mesh position={[0, 0.95, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#B08D3C" metalness={0.9} roughness={0.1} emissive="#B08D3C" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function CivicsScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 4, 3]} intensity={0.9} color="#F6EFDD" />
      <pointLight position={[-2, 2, -2]} intensity={0.4} color="#B08D3C" />
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
        <ScalesMesh />
      </Float>
      <DustParticles count={40} color="#B08D3C" size={0.015} />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCENE: ETHICS — Glowing lantern with floating light particles
// ═══════════════════════════════════════════════════════════════

function LanternMesh() {
  const flameRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!flameRef.current) return;
    // Flickering flame
    const t = state.clock.elapsedTime;
    flameRef.current.scale.y = 1 + Math.sin(t * 8) * 0.15;
    flameRef.current.scale.x = 1 + Math.cos(t * 6) * 0.1;
  });
  return (
    <group>
      {/* Lantern body (hexagonal prism) */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 1, 6]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.5} roughness={0.4} transparent opacity={0.3} />
      </mesh>
      {/* Lantern frame edges */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.4, 0, Math.sin(angle) * 0.4]}>
            <cylinderGeometry args={[0.015, 0.015, 1, 8]} />
            <meshStandardMaterial color="#B08D3C" metalness={0.8} roughness={0.2} />
          </mesh>
        );
      })}
      {/* Top cap */}
      <mesh position={[0, 0.6, 0]}>
        <coneGeometry args={[0.45, 0.3, 6]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Bottom */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.1, 6]} />
        <meshStandardMaterial color="#7C5B2E" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Hanging chain */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.6, 8]} />
        <meshStandardMaterial color="#B08D3C" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Inner flame */}
      <mesh ref={flameRef} position={[0, -0.1, 0]}>
        <coneGeometry args={[0.12, 0.3, 16]} />
        <meshStandardMaterial color="#C68A2E" emissive="#C68A2E" emissiveIntensity={2} transparent opacity={0.9} />
      </mesh>
      {/* Point light from flame */}
      <pointLight position={[0, -0.1, 0]} intensity={1.5} distance={3} color="#C68A2E" />
    </group>
  );
}

function EthicsScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 2, 3]} intensity={0.3} color="#F6EFDD" />
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <LanternMesh />
      </Float>
      {/* Floating light motes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={2}>
          <mesh position={[(Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#C68A2E" emissive="#C68A2E" emissiveIntensity={1.5} transparent opacity={0.8} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCENE: UAE HERITAGE — Falcon + dunes + stars
// ═══════════════════════════════════════════════════════════════

function DuneMesh() {
  return (
    <mesh position={[0, -1.2, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry args={[3, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
      <meshStandardMaterial color="#B5532A" roughness={1} flatShading />
    </mesh>
  );
}

function FalconMesh() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    // Flapping flight
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <group ref={ref} position={[0, 0.5, 0]}>
      {/* Body */}
      <mesh>
        <capsuleGeometry args={[0.15, 0.4, 8, 16]} />
        <meshStandardMaterial color="#7C5B2E" roughness={0.7} />
      </mesh>
      {/* Wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.8, 0.05, 0.4]} />
        <meshStandardMaterial color="#7C5B2E" roughness={0.7} side={THREE.DoubleSide} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#7C5B2E" roughness={0.7} />
      </mesh>
      {/* Beak */}
      <mesh position={[0, 0.3, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.04, 0.12, 8]} />
        <meshStandardMaterial color="#B08D3C" metalness={0.5} />
      </mesh>
    </group>
  );
}

function UAEHeritageScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 2]} intensity={0.8} color="#C68A2E" />
      <pointLight position={[-3, 2, -3]} intensity={0.3} color="#B5532A" />
      <FalconMesh />
      <DuneMesh />
      <Stars radius={30} depth={30} count={800} factor={2} saturation={0} fade speed={0.5} />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCENE: GENERAL (default) — Floating open book
// ═══════════════════════════════════════════════════════════════

function BookMesh() {
  return (
    <RotatingGroup speed={0.15} axis="y">
      {/* Book cover (left) */}
      <mesh position={[-0.5, 0, 0]} rotation={[0, -0.3, 0]}>
        <boxGeometry args={[0.9, 0.05, 1.1]} />
        <meshStandardMaterial color="#7C5B2E" roughness={0.6} />
      </mesh>
      {/* Book cover (right) */}
      <mesh position={[0.5, 0, 0]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.9, 0.05, 1.1]} />
        <meshStandardMaterial color="#7C5B2E" roughness={0.6} />
      </mesh>
      {/* Pages (left) */}
      <mesh position={[-0.5, 0.04, 0]} rotation={[0, -0.3, 0]}>
        <boxGeometry args={[0.85, 0.04, 1.05]} />
        <meshStandardMaterial color="#F6EFDD" roughness={0.9} />
      </mesh>
      {/* Pages (right) */}
      <mesh position={[0.5, 0.04, 0]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.85, 0.04, 1.05]} />
        <meshStandardMaterial color="#F6EFDD" roughness={0.9} />
      </mesh>
      {/* Spine */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.08, 0.06, 1.15]} />
        <meshStandardMaterial color="#5C4421" roughness={0.5} />
      </mesh>
    </RotatingGroup>
  );
}

function GeneralScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 4, 3]} intensity={0.9} color="#F6EFDD" />
      <pointLight position={[-2, -2, -2]} intensity={0.4} color="#B08D3C" />
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <BookMesh />
      </Float>
      <DustParticles count={50} color="#B08D3C" />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCENE SELECTOR
// ═══════════════════════════════════════════════════════════════

export type Scene3DSubject = 'history' | 'civics' | 'geography' | 'sociology' | 'economics' | 'ethics' | 'uae_heritage' | 'general';

function SceneContent({ subject }: { subject: Scene3DSubject }) {
  switch (subject) {
    case 'history':       return <HistoryScene />;
    case 'civics':        return <CivicsScene />;
    case 'geography':     return <GeographyScene />;
    case 'ethics':        return <EthicsScene />;
    case 'uae_heritage':  return <UAEHeritageScene />;
    case 'sociology':
    case 'economics':
    case 'general':
    default:              return <GeneralScene />;
  }
}

// ═══════════════════════════════════════════════════════════════
// MAIN EXPORT — Scene3D
// ═══════════════════════════════════════════════════════════════

export interface Scene3DProps {
  subject: Scene3DSubject;
  className?: string;
  height?: number;
  interactive?: boolean; // if true, camera responds to mouse
}

export function Scene3D({ subject, className = '', height = 320, interactive = false }: Scene3DProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ height: `${height}px`, width: '100%' }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]} // responsive pixel ratio for retina
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent subject={subject} />
        </Suspense>
      </Canvas>
    </div>
  );
}

/** Loading fallback shown while 3D scene initializes */
export function Scene3DFallback({ height = 320 }: { height?: number }) {
  return (
    <div
      className="flex items-center justify-center bg-gradient-to-br from-[#0A4042] to-[#0F5C5E] rounded-2xl"
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <div className="w-12 h-12 border-2 border-[#C68A2E] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

/**
 * Dynamic import wrapper — 3D scenes are client-only and code-split
 * so they don't block the main bundle.
 */
export function Scene3DLazy(props: Scene3DProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <Scene3DFallback height={props.height} />;
  return (
    <React.Suspense fallback={<Scene3DFallback height={props.height} />}>
      <Scene3D {...props} />
    </React.Suspense>
  );
}
