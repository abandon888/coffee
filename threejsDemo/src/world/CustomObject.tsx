import * as THREE from 'three'
import {useMemo,useRef,useEffect} from 'react'

export default function CustomObject() {
  const geometryRef = useRef<THREE.BufferGeometry>(null!)
  const verticesOfCount = 10 * 3
   const positions = useMemo(() => {
    const positions = new Float32Array(verticesOfCount * 3)

    for (let i = 0; i < verticesOfCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 4
    }
    return positions
  }, [])

  useEffect(() => {
    geometryRef.current.computeVertexNormals()
    const geometry = geometryRef.current
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  }, [positions])
  return (
    <mesh>
      <bufferGeometry ref={ geometryRef }>
        <bufferAttribute
          attach={'attributes-position'}
          count={verticesOfCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <meshBasicMaterial color={'red'} side={THREE.DoubleSide}/>
    </mesh>
  )
}
