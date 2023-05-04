import React, { useRef } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
  useHelper,
} from '@react-three/drei'
import CustomObject from './CustomObject'
import Box from './Box'
import { useControls, button } from 'leva'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'

export default function World1() {
  const directionalLight = useRef<THREE.DirectionalLight>(null!)
  //const cube1Ref = useRef<THREE.Mesh>(null!)

  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
  useFrame((state, delta) => {
    //console.log(state.clock)
    const angle = state.clock.getElapsedTime()
  })
//光线投影很棒，用castShadow和receiveShadow,还有在canvas中加上shadow
  return (
    <>
      <color args={['ivory']} attach="background" />
      {/* 调用了orbitControls才能用鼠标控制,通过makeDefault实现在orbitControl和transferControl的切换 */}
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <Perf position="top-left" />

      <directionalLight
        intensity={1.5}
        position={[1, 2, 3]}
        ref={directionalLight}
        castShadow
      />

      <mesh position-x={-2} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>

      <mesh scale={1.5} position={[2, 0, 0]} rotation-y={Math.PI * 0.25} castShadow>
        <boxGeometry />
        {/* careful about this args has {[{}]} */}
        {/* <meshBasicMaterial args={[{color:'red',wireframe:true}]}/> */}
        <meshStandardMaterial color='mediumpurple'/>
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10} receiveShadow>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color='greenyellow'/>
      </mesh>
    </>
  )
}

//the Experience component should be wrapped in a Canvas component
