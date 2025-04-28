import { Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import { Group, Vector3 } from "three";

function AstronautModel({
  wrapRef,
}: {
  wrapRef: RefObject<HTMLDivElement | null>;
}) {
  const { scene } = useGLTF("/astronaut/scene.gltf");
  const { size } = useThree();
  const astronautRef = useRef<Group>(null);
  const namePosition = new Vector3(0, 0, 0);

  useFrame(state => {
    const t = state.clock.getElapsedTime();
    const orbitSizeWidth = size.width < 640 ? 5 : size.width < 1024 ? 8 : 12;

    if (astronautRef.current) {
      const x = Math.sin(t * 0.2) * orbitSizeWidth;
      const y = Math.cos(t * 0.15) * 5 + Math.sin(t * 0.3) * 0.5;
      const z = Math.cos(t * 0.2) * 12;

      if (wrapRef.current) {
        if (x < -orbitSizeWidth + 2) {
          wrapRef.current.style.zIndex = "10";
        } else if (x > orbitSizeWidth - 2) {
          wrapRef.current.style.zIndex = "-10";
        }
      }

      astronautRef.current.position.set(x, y, z);

      astronautRef.current.lookAt(namePosition);
    }
  });

  return <primitive ref={astronautRef} object={scene} scale={5} />;
}

function Lights() {
  return (
    <>
      <hemisphereLight intensity={0.35} groundColor="white" />
      <spotLight
        position={[10, 20, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -10]} intensity={1} />
    </>
  );
}

function AstronautCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={wrapRef} className="absolute inset-0 -z-10">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 25], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Lights />
        <AstronautModel wrapRef={wrapRef} />
        <Preload all />
      </Canvas>
    </div>
  );
}

export default AstronautCanvas;
