import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Process_Number from './Process_Number'

const Process_4 = () => {
    return (
        <Canvas>
            <Process_Number number={4} />
        </Canvas>
    )
}

export default Process_4