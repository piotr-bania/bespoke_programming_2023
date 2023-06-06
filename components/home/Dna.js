import React, { useState, useRef, useMemo, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations } from '@react-three/drei'
import { useLoader, useFrame, useThree } from '@react-three/fiber'

const Dna = () => {

    const groupRef = useRef()

    const {scene, nodes, animations} = useLoader(GLTFLoader, '/models/dna_2.glb')

    useFrame((state, delta) => {
        // waterMaterial.uniforms.uTime.value += delta
        groupRef.current.rotation.y -= 0.0005
    })

    return (
        <group ref={groupRef} position={[0, -2, 1]} scale={1} >
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