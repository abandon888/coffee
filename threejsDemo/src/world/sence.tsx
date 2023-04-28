import React, { Suspense } from 'react'
import { BoxGeometry, MeshStandardMaterial } from 'three'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'

const ball = new BoxGeometry()
const mtl1 = new MeshStandardMaterial({ color: '#f00' })

export default function Demo () {
  //终于知道为什么报错了，因为这里的Canvas和App.tsx里的Canvas不是一个东西，所以报错了
    return (
        <Canvas style={{ height: 800 }} camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 2] }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.1} />
                <directionalLight color={'#fff'} intensity={1} position={[-3, 5, 5]} />
                <mesh geometry={ball} material={mtl1} />
                <OrbitControls makeDefault />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -1.4, 0]} opacity={0.75} width={10} height={10} blur={2.6} far={2} />
                <color attach='background' args={['#aaa']} />
            </Suspense>
        </Canvas>
    )
}
