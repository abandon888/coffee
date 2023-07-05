import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default function modelExp() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const model: THREE.Group = useLoader(
    GLTFLoader,
    './Flamingo.glb',
    (loader) => {
      //console.log(loader)
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('./draco/')
      loader.setDRACOLoader(dracoLoader)
    }
  )
  console.log(model)
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <primitive object={model.scene} />
      <Perf position="top-left" />
    </>
  )
}
