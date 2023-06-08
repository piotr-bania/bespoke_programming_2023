import React, { useRef } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Controls = () => {

    const { camera, gl } = useThree()
    const controlsRef = useRef()

    useFrame(() => {
        controlsRef.current.update()
    })

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            rotateSpeed={0.25}
            enablePan={false}
            minPolarAngle={Math.PI / 20}
            maxPolarAngle={Math.PI / 2.5}
            minAzimuthAngle={-Math.PI / 6.5}
            maxAzimuthAngle={Math.PI / 2.5}
            minDistance={2}
            maxDistance={10}
            enableDamping={true}
            dampingFactor={0.1}
        />
    )
}

export default Controls