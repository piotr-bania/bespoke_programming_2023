import React, { Suspense } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import Icon_Maintenance from './Icon_Maintenance'

const Canvas_Maintenance = () => {
    return (
        <AnimatePresence>
            <m.div className='canvas_icons'
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <Canvas>
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                        <ambientLight />
                        <Environment files='./environment/photo_studio_loft_hall_1k.hdr' />
                        <Icon_Maintenance />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Canvas_Maintenance