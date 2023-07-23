import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const Icon_Bespoke = ({ color, opacity, glass }) => {

    const iconRef = useRef()
    const icon = useGLTF('./models/bespoke.gltf')

    return (
        <Float distance={0.5} speed={5} factor={0.5} >
            <mesh ref={iconRef} scale={1.25}>
                <primitive object={icon.scene} />
            </mesh>
        </Float>
    )
}

export default Icon_Bespoke