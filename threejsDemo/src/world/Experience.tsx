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

//console.log(OrbitControls)
//convert the OrbitControls(threejs component) to a React component
//extend({ OrbitControls })

export default function Experience() {
  //小心，任意的参数改动都会引起重新渲染
  //每一帧都会调用
  //const { camera, gl } = useThree()
  const cubeRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const sphereRef = useRef<THREE.Mesh>(null!)
  const directionalLight = useRef<THREE.DirectionalLight>(null!)
  //const cube1Ref = useRef<THREE.Mesh>(null!)

  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
  useFrame((state, delta) => {
    //console.log(state.clock)
    const angle = state.clock.getElapsedTime()
    // state.camera.position.x = Math.cos(angle)
    // state.camera.position.z = Math.sin(angle)
    // state.camera.lookAt(0, 0, 0)
    //cubeRef.current.rotation.y += delta
    //groupRef.current.rotation.y += delta
  })
  //可以解构赋值，position换为x,y,创建文件名称为sphere
  const { position, color, visible } = useControls('sphere', {
    color: '#ff0000',
    position: {
      value: { x: -2, y: 0 },
      min: -4,
      max: 4,
      step: 0.1,
    },
    visible: true,
    clickMe: button(() => {
      console.log('ok')
    }),
    choice: { options: ['a', 'b', 'c'] },
  })
  const box = useControls('box', {
    color: '#fff',
  })
  const perf = useControls('Perf', {
    visible: true,
  })
  return (
    <>
      <color args={['ivory']} attach="background" />
      {/* 调用了orbitControls才能用鼠标控制,通过makeDefault实现在orbitControl和transferControl的切换 */}
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      {perf.visible ? <Perf position="top-left" /> : null}

      <directionalLight
        intensity={1.5}
        position={[1, 2, 3]}
        ref={directionalLight}
        castShadow
      />
      <group ref={groupRef}>
        <PivotControls anchor={[0, 0, 0]} depthTest={false}>
          <mesh position-x={-2} ref={sphereRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={'hotpink'} />
            <Html
              position={[0, 2, 2]}
              wrapperClass="label"
              center
              distanceFactor={6}
              occlude={[sphereRef, cubeRef]}>
              小球
            </Html>
          </mesh>
        </PivotControls>
        <mesh
          ref={cubeRef}
          scale={1.5}
          position={[2, 0, 0]}
          rotation-y={Math.PI * 0.25}>
          <boxGeometry />
          {/* careful about this args has {[{}]} */}
          {/* <meshBasicMaterial args={[{color:'red',wireframe:true}]}/> */}
          <meshStandardMaterial color={box.color} />
        </mesh>
        {/* woc,这个transformControls拖曳控制好强 */}
        <TransformControls object={cubeRef} mode="rotate" />
      </group>
      <Box position={[position.x, position.y, 2]} visible={visible} />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* <CustomObject /> */}
      {/* <Float position={[0, 1, 0]} speed={5} floatIntensity={2}>
      <Text
        position={[0, 2, -4]}
        fontSize={1}
        color="salmon"
        maxWidth={3}
        textAlign="center">
        {' '}
        I Love R3F
      </Text>
      </Float> */}
    </>
  )
}

//the Experience component should be wrapped in a Canvas component
