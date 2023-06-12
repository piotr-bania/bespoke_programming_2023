import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from '@react-three/fiber'
import { Float, useAnimations } from '@react-three/drei'

const Logo = () => {

    const groupRef = useRef()
    const {scene, nodes} = useLoader(GLTFLoader, '/models/logo.glb')

    useFrame(() => {
        groupRef.current.rotation.y -= 0.005
    })

    return (
        <group ref={groupRef} scale={7} >
            <mesh>
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Logo