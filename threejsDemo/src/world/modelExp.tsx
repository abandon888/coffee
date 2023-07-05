import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function modelExp() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const model: THREE.Group = useLoader(
  //   GLTFLoader,
  //   '../assets/models/Flamingo.glb'
  // )
  // console.log(model)
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Perf position="top-left" />
    </>
  )
}
