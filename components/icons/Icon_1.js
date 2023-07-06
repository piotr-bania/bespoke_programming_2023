import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from '@react-three/fiber'
import { Float, useAnimations } from '@react-three/drei'

const Icon_1 = () => {

    const groupRef = useRef()
    const {scene, nodes} = useLoader(GLTFLoader, '/models/logo.glb')

    useFrame(() => {
        groupRef.current.rotation.y -= 0.005
    })

    return (
        <mesh ref={groupRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='#6526D1' />
        </mesh>
    )
}

export default Icon_1