import React,{useRef} from 'react'
import { Canvas,useFrame,extend,useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
//console.log(OrbitControls)
//convert the OrbitControls(threejs component) to a React component
extend({OrbitControls})

export default function Experience() {
  //小心，任意的参数改动都会引起重新渲染
  //每一帧都会调用
  const {camera,gl} = useThree()
  const cubeRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  useFrame((state,delta)=>{
   //console.log(delta)
    cubeRef.current.rotation.y += delta
    groupRef.current.rotation.y += delta
  })
  return (
    <>
      <orbitControls args={[camera,gl.domElement]}/>
    <group ref={groupRef}>
      <mesh position-x={-2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={'hotpink'}/>
      </mesh>
      <mesh ref={cubeRef} scale={1.5} position={[2, 0, 0]} rotation-y={Math.PI*0.25}>
        <boxGeometry  />
        {/* careful about this args has {[{}]} */}
        {/* <meshBasicMaterial args={[{color:'red',wireframe:true}]}/> */}
        <meshBasicMaterial color={'mediumpurple'} wireframe />
      </mesh>
      </group>
      <mesh position-y={-3} rotation-x={ -Math.PI*0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color={'lightblue'}  />
    </mesh>
    </>
  )
}

//the Experience component should be wrapped in a Canvas component
