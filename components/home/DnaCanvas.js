import React, { Suspense, useEffect, useRef } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import Dna from './Dna'

const CameraController = () => {
    const { camera } = useThree()
    const scrollY = useRef(window.scrollY)
    const target = useRef({ y: 1, rotation: 0 })
    const lerpSpeed = 0.1  // Controls how quickly the camera moves towards the target position and rotation

    // Update the target position and rotation when the user scrolls
    useEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY
            target.current.y = scrollY.current * 0.002  // Multiply by a small value to reduce the effect of scrolling
            target.current.rotation = scrollY.current * 0.00025  // Rotate the camera as the user scrolls
        };
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Update the camera position and rotation on each frame
    useFrame(() => {
        camera.position.y += (target.current.y - camera.position.y) * lerpSpeed  // Lerp the y position
        camera.rotation.y += (target.current.rotation - camera.rotation.y) * lerpSpeed  // Lerp the rotation
        camera.updateProjectionMatrix()  // Update the camera's projection matrix after changing its position or rotation
    })

    return null
}

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
                            <pointLight color={'#FFFFFF'} intensity={1} />
                            <Dna />
                            <CameraController />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default DnaCanvas