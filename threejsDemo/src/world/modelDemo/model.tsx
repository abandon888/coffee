import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default function Model() {
  // const model: THREE.Group = useLoader(
  //   GLTFLoader,
  //   './Flamingo.glb',
  //   (loader) => {
  //     //console.log(loader)
  //     const dracoLoader = new DRACOLoader()
  //     dracoLoader.setDecoderPath('./draco/')
  //     loader.setDRACOLoader(dracoLoader)
  //   }
  // )
  // console.log(model)
  const model: any = useGLTF('./Flamingo.glb')
  return <primitive object={model.scene} scale={5} position-y={-1} />
}
