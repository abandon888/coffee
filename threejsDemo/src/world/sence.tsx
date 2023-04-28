import React, { Suspense, useRef } from 'react'
import { AxesHelper } from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, Stats } from '@react-three/drei'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function MyMesh () {
    const src = '../assets//dam_on_the_river//scene.gltf'
    const object = useLoader(GLTFLoader, src)
    console.log(object)
    return (
        <primitive object={object} />
    )
}

export default function Demo () {
    const statRef = useRef(null)
    return (
        <div ref={statRef}>
            <Stats showPanel={0} parent={statRef} style={{ top: 'auto', bottom: 0 }} />
            <ErrorBoundary>
                <Canvas style={{ height: 800 }} camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 2] }}>
                    <Suspense fallback={null}>
                        <directionalLight color={'#fff'} intensity={1} position={[-3, 5, 5]} />
                        <primitive object={new AxesHelper(100)} />
                        <MyMesh />
                        <OrbitControls makeDefault />
                        <color attach='background' args={['#aaa']} />
                        {/* <Environment
                            background={false} preset={null} scene={undefined}
                            path={'/img/three/env/'}
                            files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
                        /> */}
                    </Suspense>
                </Canvas>
            </ErrorBoundary>
        </div>
    )
}
