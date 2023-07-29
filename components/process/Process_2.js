import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Process_Number from './Process_Number'

const Process_2 = () => {
    return (
        <Canvas>
            <Process_Number number={2} />
        </Canvas>
    )
}

export default Process_2