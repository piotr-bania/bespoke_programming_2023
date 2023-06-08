import React, { useState, useRef, useMemo, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations } from '@react-three/drei'
import { useLoader, useFrame, useThree } from '@react-three/fiber'

const Dna = () => {

    const groupRef = useRef()

    const {scene, nodes, animations} = useLoader(GLTFLoader, '/models/scene_1.glb')

    useFrame((state, delta) => {
        // waterMaterial.uniforms.uTime.value += delta
        // groupRef.current.rotation.y -= 0.0005
    })

    return (
        <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0, -0.4, 0]} scale={1} >
            <mesh
                // geometry={nodes.model.geometry}
                // material={nodes.model.material}
                >
                <primitive object={scene} dispose={null}/>
            </mesh>
        </group>
    )
}

export default Dna