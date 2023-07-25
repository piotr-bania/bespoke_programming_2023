import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import Featured_Project_1 from './Featured_Project_1'


const Featured_Project_Canvas = () => {
    return (
        <m.div
            className='project_canvas_1'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { delay: 0.1, duration: 2}}}
            >
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, -0.5, 7]} />
                    <Featured_Project_1 />
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Featured_Project_Canvas