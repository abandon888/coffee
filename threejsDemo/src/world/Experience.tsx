import React, { useRef } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  OrbitControls,
  TransformControls,
  PivotControls,
} from '@react-three/drei'
import CustomObject from './CustomObject'

//console.log(OrbitControls)
//convert the OrbitControls(threejs component) to a React component
//extend({ OrbitControls })

export default function Experience() {
  //小心，任意的参数改动都会引起重新渲染
  //每一帧都会调用
  //const { camera, gl } = useThree()
  const cubeRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  //const cube1Ref = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    //console.log(state.clock)
    const angle = state.clock.getElapsedTime()
    // state.camera.position.x = Math.cos(angle)
    // state.camera.position.z = Math.sin(angle)
    // state.camera.lookAt(0, 0, 0)
    cubeRef.current.rotation.y += delta
    //groupRef.current.rotation.y += delta
  })
  return (
    <>
      {/* 调用了orbitControls才能用鼠标控制,通过makeDefault实现在orbitControl和transferControl的切换 */}
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.5} position={[1, 2, 3]} />
      <group ref={groupRef}>
        <PivotControls  anchor={[0,0,0]} depthTest={false} fixed>
          <mesh position-x={-2}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={'hotpink'} />
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
          <meshStandardMaterial color={'mediumpurple'} />
        </mesh>
        {/* woc,这个transformControls拖曳控制好强 */}
        <TransformControls object={cubeRef} mode="rotate" />
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={'lightblue'} />
      </mesh>
      <CustomObject />
    </>
  )
}

//the Experience component should be wrapped in a Canvas component
