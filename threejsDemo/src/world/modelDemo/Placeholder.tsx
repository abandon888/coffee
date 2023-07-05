export default function Placeholder(props: any) {
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
