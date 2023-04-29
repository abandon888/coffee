import Box from './Box.tsx'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'


function world1() {
  return (
    <>
    
        <Canvas camera={{fov:35,near:0.1,far:100,position:[0,0,5]}}>
          {/* 环境光 */}
          <ambientLight intensity={0.1} />
          {/* 直接光 */}
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial color={'green'}/>
          </mesh>
          <ambientLight />
          <pointLight position={[10, 10, 10]} /> <Box position={[-1.2, 0, 0]} />{' '}
          <Box position={[1.2, 0, 0]} />{' '}
        </Canvas>
    </>
  )
}

export default world1
