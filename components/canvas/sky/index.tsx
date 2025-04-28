"use client";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Points as PointsImpl } from "three";

export function randomInSphere(count: number, radius: number = 1.0) {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    let x = 0,
      y = 0,
      z = 0;
    let lengthSq = 0;

    // Keep generating points until they are inside the sphere
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      lengthSq = x * x + y * y + z * z;
    } while (lengthSq > 1);

    positions[i * 3] = x * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = z * radius;
  }

  return positions;
}

function Sky() {
  const ref = useRef<PointsImpl>(null);
  const [sphere] = useState(() => randomInSphere(3000, 1.5));

  useFrame((_, delta) => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function SkyCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }} color="white">
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 10, 5]} />
        {/* Add your sky components here */}
        <Sky />
      </Canvas>
    </div>
  );
}

export default SkyCanvas;
