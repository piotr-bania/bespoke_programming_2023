import React, { Suspense, useRef } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Environment, PresentationControls } from '@react-three/drei'
import Dna from './Dna'
import Controls from '../controls/Controls'

const DnaCanvas = () => {

    const cameraRef = useRef()

    return (
        <AnimatePresence>
            <m.div className='canvas_hero'
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <Canvas className='canvas' shadows>
                    <Suspense fallback={null}>
                        {/* <Camera /> */}
                        <PerspectiveCamera makeDefault position={[0, 1, 10]} ref={cameraRef} />
                        <Environment files='./environment/brown_photostudio_01_1k.hdr' />
                        <Dna />
                        {/* <Controls /> */}
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

const Camera = () => {
    const cameraRef = useRef()

    useFrame((state) => {
    const camera = cameraRef.current
    const time = state.clock.getElapsedTime()

    camera.position.x = -Math.cos(time * 0.3) * 1 + 2
    camera.position.y = Math.sin(time * 0.2) * 1
    camera.position.z = -Math.sin(time * 0.1) * 1 + 8
    camera.lookAt(0, 0, 0)
    })

    return <PerspectiveCamera ref={cameraRef} makeDefault />
}

export default DnaCanvas