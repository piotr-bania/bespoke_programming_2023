import React, { Suspense } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import Icon_SPA from './Icon_SPA'

const Canvas_SPA = () => {
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
                        <Environment files='./environment/christmas_photo_studio_06_1k.hdr' />
                        <Icon_SPA />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Canvas_SPA