import { useGLTF, Clone } from '@react-three/drei'
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
  //const model: any = useGLTF('./家园设计组.gltf')
  const model: any = useGLTF('./Flamingo.glb')
  return (
    <>
      <Clone object={model.scene} position-y={6} />
      <Clone object={model.scene} position-y={3} />
      <Clone object={model.scene} position-y={1} />
    </>
  )
}

//useGLTF.preload('./家园设计组.gltf')
useGLTF.preload('./Flamingo.glb')
