import React, { Suspense } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import Dna from './Dna'

const DnaCanvas = () => {
    return (
        <AnimatePresence>
            <m.div className='canvas_hero'
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <Canvas className='canvas' shadows>
                    <Suspense fallback={null}>
                            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                            <ambientLight intensity={0.05} color={'#FFFFFF'} />
                            <Environment files='./environment/dikhololo_night_1k.hdr' />
                            <pointLight color={'#FFFFFF'} />
                            <Dna />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default DnaCanvas