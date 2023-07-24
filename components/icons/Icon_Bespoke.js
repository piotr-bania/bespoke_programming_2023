import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const Icon_Bespoke = ({ opacity, glass }) => {

    const iconRef = useRef()
    const { nodes } = useGLTF('./models/BP_icons.gltf')

    const material = React.useMemo(
        () =>
            new THREE.MeshPhysicalMaterial({
                transmission: 0.25,
                opacity: 0.9,
                clearcoat: 1,
                clearcoatRoughness: 0.1,
                roughness: 0,
                metalness: 0,
                envMapIntensity: 1,
                transparent: true,
                depthWrite: false,
                depthTest: true,
                map: glass,
            }),
        [opacity, glass]
    )

    return (
        <Float distance={0.5} speed={5} factor={0.5} >
            <group scale={1}>
                <mesh
                    geometry={nodes['base_1'].geometry}
                    position={nodes['base_1'].position}>
                    <meshPhysicalMaterial {...material} color={'#FFFFFF'} />
                </mesh>
                <mesh
                    geometry={nodes['base_2'].geometry}
                    position={nodes['base_2'].position}>
                    <meshPhysicalMaterial {...material} color={'#6526D1'} />
                </mesh>
                <mesh
                    geometry={nodes['dots'].geometry}
                    position={nodes['dots'].position}>
                    <meshPhysicalMaterial {...material} color={'#D02670'} />
                </mesh>
                <mesh
                    geometry={nodes['upper'].geometry}
                    position={nodes['upper'].position}>
                    <meshPhysicalMaterial {...material} color={'#A3A3A3'} />
                </mesh>
                <mesh
                    geometry={nodes['left'].geometry}
                    position={nodes['left'].position}>
                    <meshPhysicalMaterial {...material} color={'#6526D1'} />
                </mesh>
                <mesh
                    geometry={nodes['right'].geometry}
                    position={nodes['right'].position}>
                    <meshPhysicalMaterial {...material} color={'#A3A3A3'} />
                </mesh>
            </group>
        </Float>
    )
}

export default Icon_Bespoke