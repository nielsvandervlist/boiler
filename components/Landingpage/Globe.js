// import React, { useRef } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls, Text, Center } from '@react-three/drei'
// import * as THREE from 'three'
//
// function Globe() {
//     const groupRef = useRef(null)
//
//     useFrame((state) => {
//         const t = state.clock.getElapsedTime()
//         groupRef.current.rotation.y = t * 0.1
//     })
//
//     return (
//         <Center>
//             <group ref={groupRef}>
//                 <points>
//                     <sphereGeometry args={[1.5, 64, 64]} />
//                     <pointsMaterial color="#ffffff" size={0.015} sizeAttenuation=""/>
//                 </points>
//                 <Text
//                     color="white"
//                     fontSize={0.2}
//                     maxWidth={2}
//                     lineHeight={1}
//                     letterSpacing={0.02}
//                     textAlign="center"
//                     font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
//                     anchorX="center"
//                     anchorY="middle"
//                     position={[0, 1.7, 0]}
//                 >
//                     Interactive Globe
//                 </Text>
//             </group>
//         </Center>
//     )
// }
//
// export default function GlobeComponent() {
//     return (
//         <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//                 <ambientLight intensity={0.5} />
//                 <pointLight position={[10, 10, 10]} />
//                 <Globe />
//                 <OrbitControls enableZoom={false} />
//             </Canvas>
//         </div>
//     )
// }