import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Process_Number from './Process_Number'

const Process_1 = () => {
    return (
        <Canvas>
            <Process_Number number={1} />
        </Canvas>
    )
}

export default Process_1