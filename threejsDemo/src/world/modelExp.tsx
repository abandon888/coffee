import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function modelExp() {
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[0, 10, 0]} intensity={ 1.5 }/>
      <ambientLight intensity={ 0.5 }/>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Perf position="top-left" />
    </>
  );
}