import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from './model'
import { Suspense } from 'react'
import Placeholder from './Placeholder'
import { Bird } from './bird'
import Fox from './fox'

export default function modelExp() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[0, 20, 0]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense
        //模型懒加载
        fallback={
          //并封装传参组件
          <Placeholder position-y={-1} rotation-x={-Math.PI * 0.5} scale={2} />
        }>
        <Model />
        {/* <Bird position-y={5} />
        <Fox /> */}
      </Suspense>
      <Perf position="top-left" />
    </>
  )
}
