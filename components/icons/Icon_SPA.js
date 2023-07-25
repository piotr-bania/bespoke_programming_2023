import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Float, useAnimations, useGLTF } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'

const Icon_SPA = (props) => {

    const iconRef = useRef()
    const icon = useGLTF('./models/spa.gltf')

    return (
        <Float distance={0.5} speed={5} factor={0.5} >
            <mesh ref={iconRef} scale={5} >
                <primitive object={icon.scene} />
            </mesh>
        </Float>
    )
}

export default Icon_SPA