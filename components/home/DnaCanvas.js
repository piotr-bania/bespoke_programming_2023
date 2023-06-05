import React, { Suspense } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import Dna from './Dna'


const DnaCanvas = () => {
    return (
        <AnimatePresence>
            <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <Canvas className='canvas_hero' shadows>
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <ambientLight />
                        <Environment preset='sunset' />
                        <Dna />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default DnaCanvas