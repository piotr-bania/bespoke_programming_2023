import React, { useRef } from 'react'
import { useLoader, useThree, extend } from '@react-three/fiber'
import { Center, Float, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import waveVertexShader from '../../shaders/wave_vert.glsl'
import waveFragmentShader from '../../shaders/wave_frag.glsl'

const WaveMaterial = shaderMaterial(
    {
        u_Alpha: 0.9,
        u_Multiplayer: 10,
        u_Color_A: new THREE.Color('#FFFFFF'),
        u_Color_B: new THREE.Color('#000000'),
        u_Time: 0,
        u_Frequency: 10,
        u_Color: new THREE.Color(0.0, 0.0, 0.0),
        u_Texture: new THREE.Texture(),
    },
    waveVertexShader,
    waveFragmentShader
)

extend({WaveMaterial})

const Featured_Project_1 = () => {

    const shaderRef = useRef()
    const { viewport } = useThree()

    const [image] = useLoader(THREE.TextureLoader, ['./images/mara_river.png'])

    return (
        <Float speed={2} floatIntensity={0.5} >
            <Center>
                <mesh position={[0, 0, 0]}>
                    <planeGeometry args={[10, 5, 10, 10]} />
                    <waveMaterial
                        ref={shaderRef}
                        u_Texture={image}
                        side={THREE.DoubleSide}
                        transparent
                    />
                </mesh>
            </Center>
        </Float>
    )
}

export default Featured_Project_1