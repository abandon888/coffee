import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box.tsx'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial color={'green'}/>
          </mesh>
          <ambientLight />
          <pointLight position={[10, 10, 10]} /> <Box position={[-1.2, 0, 0]} />{' '}
          <Box position={[1.2, 0, 0]} />{' '}
        </Canvas>
      </div>
    </>
  )
}

export default App
