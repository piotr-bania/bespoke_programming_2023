import React, { useState, useRef, useMemo, useEffect } from 'react'
import { MeshDistortMaterial, useAnimations } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial, TextureLoader } from 'three'

const Logo = () => {

    const groupRef = useRef()
    const {nodes} = useLoader(GLTFLoader, '/models/logo.glb')

    useFrame((state, delta) => {
        groupRef.current.rotation.y -= 0.005
    })

    return (
        <group ref={groupRef} scale={10}>

            <mesh geometry={nodes.base.geometry} position={nodes.base.position}>
                <meshPhysicalMaterial
                    color="#6526D1"
                    transparent
                    transmission={0.5}
                />
            </mesh>

            <mesh geometry={nodes.top.geometry} position={nodes.top.position}>
                <meshPhysicalMaterial
                    color="#9B26A1"
                    transparent
                    transmission={0.5}
                />
            </mesh>

            <mesh geometry={nodes.bottom.geometry} position={nodes.bottom.position}>
                <meshPhysicalMaterial
                    color="#D02670"
                    transparent
                    transmission={0.5}
                />
            </mesh>

        </group>
    )
}

export default Logo