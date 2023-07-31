import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import Featured_Project_2 from './Featured_Project_2'


const Featured_Project_Canvas = () => {
    return (
        <m.div
            className='project_canvas'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: { delay: 0.1, duration: 2}}}
            >
            <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 3.75]} />
                <Suspense fallback={null}>
                    <Featured_Project_2 />
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Featured_Project_Canvas