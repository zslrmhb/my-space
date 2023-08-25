import myInfo from "../constants/info";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Scene() {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial color="lightred" />
      </mesh>
      <mesh
        ref={cubeRef}
        rotation-y={Math.PI * 0.25}
        position-x={2}
        scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="lightblue" />
      </mesh>
      {/* <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh> */}
    </>
  );
}

export default function Hero() {
  return (
    <div className="relative flex flex-grow w-full h-full">
      <Canvas className="flex-grow w-full h-screen">
        <Scene />
      </Canvas>
      <div className="absolute top-10">
        <h1 className="text-8xl">光臨</h1>

        <h2 className="text-6xl">
          <strong>WELCOME</strong> TO MY SPACE
        </h2>
      </div>
    </div>
  );
}
