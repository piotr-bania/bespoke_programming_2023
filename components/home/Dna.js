import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from '@react-three/fiber'
import { Float, useAnimations } from '@react-three/drei'

const Dna = () => {

    const groupRef = useRef()
    // const {scene, nodes} = useLoader(GLTFLoader, '/models/dna.glb')

    return (
        <group ref={groupRef} scale={1} >
            <mesh>
                {/* <primitive object={scene} /> */}
                <boxGeometry />
                <meshBasicMaterial />
            </mesh>
        </group>
    )
}

export default Dna