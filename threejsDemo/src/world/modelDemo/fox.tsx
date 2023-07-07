import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useControls } from 'leva'
import { Modal } from 'antd'

export default function Fox() {
  const fox = useGLTF('./Fox/Fox/glTF/Fox.gltf')
  const animations = useAnimations(fox.animations, fox.scene)
  const [modal2Open, setModal2Open] = useState(false)
  //console.log(animations)

  const { animationName } = useControls({
    animationName: { options: animations.names },
  })

  useEffect(() => {
    const action = animations.actions[animationName]
    //console.log(action)
    //平滑过渡
    if (action) {
      action.reset().fadeIn(0.5).play()
    }
    // window.setTimeout(() => {
    //   const walkAction = animations.actions.Walk
    //   if (walkAction) {
    //     walkAction.play()
    //     if (animations.actions.Run) {
    //       walkAction.crossFadeFrom(animations.actions.Run, 1, true)
    //     }
    //   }
    // }, 2000)
    return () => {
      if (action) {
        action.fadeOut(0.5)
      }
      console.log('unmount')
    }
  }, [animationName, animations])
  return (
    <>
      <primitive
        object={fox.scene}
        scale={0.02}
        position={[-2.5, -1, 2.5]}
        onClick={() => setModal2Open(true)}
      />
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}
