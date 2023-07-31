import React from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial } from 'three'

import wave_vert  from '../../public/shaders/wave.vert'
import wave_frag  from '../../public/shaders/wave.frag'

const Featured_Project_1 = () => {

    const [image] = useLoader(THREE.TextureLoader, ['./images/mara_river.png'])

    const waveMaterial = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uFrequency: { value: new THREE.Vector2(1.77, 1) },
            uTransparency: { value: 0.9 },
            uTexture: { value: image },
        },
        vertexShader: wave_vert,
        fragmentShader: wave_frag,
        side: 2,
    })

    useFrame(( state, delta ) => {
        waveMaterial.uniforms.uTime.value += delta
    })

    return (
        <mesh position={[0, 0, 0]}>
            <planeGeometry args={[5, 2.8, 128, 128]} />
            <shaderMaterial args={[waveMaterial]} />
        </mesh>
    )
}

export default Featured_Project_1