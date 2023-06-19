import React, { Suspense, useEffect, useRef } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import Dna from './Dna'
import Controls from '../controls/Controls'

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
                            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
                            <Environment files='./environment/brown_photostudio_01_1k.hdr' />
                            <Dna />
                            <Controls />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default DnaCanvas