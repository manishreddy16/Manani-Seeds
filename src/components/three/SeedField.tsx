import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SEED_COUNT = 90;

function Seeds() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const seedData = useMemo(
    () =>
      Array.from({ length: SEED_COUNT }, () => ({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 9,
        z: (Math.random() - 0.5) * 8 - 2,
        speed: 0.15 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        scale: 0.35 + Math.random() * 0.5,
        rotSpeed: (Math.random() - 0.5) * 0.6,
      })),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    seedData.forEach((seed, i) => {
      const y = seed.y + Math.sin(t * seed.speed + seed.phase) * 0.6;
      const x = seed.x + Math.cos(t * seed.speed * 0.6 + seed.phase) * 0.3;
      dummy.position.set(x, y, seed.z);
      dummy.rotation.set(t * seed.rotSpeed, t * seed.rotSpeed * 0.7, 0);
      dummy.scale.setScalar(seed.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, SEED_COUNT]}>
      <capsuleGeometry args={[0.11, 0.22, 4, 8]} />
      <meshStandardMaterial
        color="#c9e26a"
        roughness={0.35}
        metalness={0.05}
        emissive="#8fbb19"
        emissiveIntensity={0.08}
      />
    </instancedMesh>
  );
}

function CenterSeed() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.25;
    ref.current.rotation.z = Math.sin(t * 0.3) * 0.15;
    ref.current.position.y = Math.sin(t * 0.6) * 0.25;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <capsuleGeometry args={[0.55, 1.1, 8, 24]} />
      <meshStandardMaterial
        color="#00b0f4"
        roughness={0.25}
        metalness={0.15}
        emissive="#00b0f4"
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

export function SeedField({ interactive = false }: { interactive?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} color="#fff6e0" />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#00b0f4" />
      {interactive && <CenterSeed />}
      <Seeds />
    </Canvas>
  );
}
