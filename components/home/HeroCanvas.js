import React, { Suspense, useRef } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import Hero from './Hero'

const HeroCanvas = () => {

    const cameraRef = useRef()

    return (
        <AnimatePresence>
            <m.div className='canvas_hero'
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <Canvas>
                    <Suspense fallback={null}>
                        {/* <Camera /> */}
                        <PerspectiveCamera makeDefault position={[-12, 0, 45]} />
                        <ambientLight />
                        <Environment files='./environment/photo_studio_loft_hall_1k.hdr' />
                        <Hero />
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

export default HeroCanvas