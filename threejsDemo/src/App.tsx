/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
//import { World } from './World1/World.js'
import Experience from './world/Experience.js'
import { Leva } from 'leva'

export default function App() {
  const created = ({scene}:any)=>{
    scene.background= new THREE.Color('white')
  }
  return (
    <>
    <Leva collapsed></Leva>
      <Canvas
        //dir='2'
        // orthographic
        //flat
      //   gl={ { antialias: true,
      //   toneMapping: THREE.ACESFilmicToneMapping,
      //   outputEncoding: THREE.sRGBEncoding,
      // } }
        camera={{
          position: [3, 2, 6],
          //  zoom: 50,
          fov: 45,
          near: 0.1,
          far: 200,
        }}
        onCreated={created}
        >
        <Experience />
      </Canvas>
    </>
  )
}
