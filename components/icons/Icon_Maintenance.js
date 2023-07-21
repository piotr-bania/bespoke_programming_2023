import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'

const Icon_Maintenance = (props) => {

    const iconRef = useRef()
    const icon = useGLTF('./models/maintenance.gltf')

    useFrame(() => {
        iconRef.current.rotation.y -= 0.005
    })

    return (
        <mesh ref={iconRef} scale={5} >
            <primitive object={icon.scene} />
        </mesh>
    )
}

export default Icon_Maintenance