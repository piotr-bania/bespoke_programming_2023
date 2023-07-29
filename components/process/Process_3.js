import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Process_Number from './Process_Number'

const Process_3 = () => {
    return (
        <Canvas>
            <Process_Number number={3} />
        </Canvas>
    )
}

export default Process_3