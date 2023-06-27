import React, { useState, useRef, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'

const Hero = (props) => {

    const globeRef = useRef()

    const globe = useGLTF('./models/globe.gltf')
    const animations = useAnimations(globe.animations, globe.scene)

    useEffect(() => {
        const action = animations.actions.Action
        action.play()
        // console.log(action)
    }, [])

    useFrame((state, delta) => {
        // waterMaterial.uniforms.uTime.value += delta
        globeRef.current.rotation.y -= 0.0001
    })

    return (
        <mesh ref={globeRef} >
            <primitive object={globe.scene} />
        </mesh>
    )
}

export default Hero