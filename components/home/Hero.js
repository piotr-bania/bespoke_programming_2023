import React, { useState, useRef, useMemo, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations, OutlineEffect } from '@react-three/drei'
import { useLoader, useFrame, useThree } from '@react-three/fiber'

const Hero = (props) => {

    const globeRef = useRef()

    const {scene, nodes, materials, animations} = useLoader(GLTFLoader, '/models/globe.glb')

    useFrame((state, delta) => {
        // waterMaterial.uniforms.uTime.value += delta
        globeRef.current.rotation.y -= 0.00025
    })

    return (
        <mesh ref={globeRef} >
            <primitive object={scene} />
        </mesh>
    )
}

export default Hero