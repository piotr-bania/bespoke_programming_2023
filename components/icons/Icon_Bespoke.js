import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Float, useAnimations, useGLTF } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'

const Icon_Bespoke = (props) => {

    const iconRef = useRef()
    const icon = useGLTF('./models/bespoke.gltf')

    // useFrame(() => {
    //     iconRef.current.rotation.y -= 0.005
    // })

    return (
        <Float distance={0.5} speed={5} factor={0.5}>
            <mesh ref={iconRef} scale={1.25} >
                <primitive object={icon.scene} />
            </mesh>
        </Float>
    )
}

export default Icon_Bespoke