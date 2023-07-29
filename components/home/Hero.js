import React, { useState, useRef, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'

const Hero = (props) => {

    const globeRef = useRef()

    const globe = useGLTF('./models/globe.gltf')

    useFrame(() => {
        globeRef.current.rotation.y -= 0.0003
    })

    return (
        <mesh ref={globeRef} scale={3} >
            <primitive object={globe.scene} />
        </mesh>
    )
}

export default Hero