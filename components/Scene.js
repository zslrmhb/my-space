import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useRouter } from "next/router";
import { useRef } from "react";
import * as THREE from "three";

extend({ OrbitControls: OrbitControls });

function HomeScene() {
  const { camera, gl } = useThree();
  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle);
    state.camera.position.y = Math.cos(angle);
    state.camera.lookAt(0, 0, 0);
    cubeRef.current.rotation.y += delta;
    groupRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="lightred" />
        </mesh>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </group>
    </>
  );
}

export default function Scene() {
  const router = useRouter();
  return (
    <div className={`scene-overlay ${router.asPath === "/" ? "" : "hidden"}`}>
      {router.asPath === "/" && (
        <Canvas
          className="w-full h-full"
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}>
          <HomeScene />
        </Canvas>
      )}
    </div>
  );
}
