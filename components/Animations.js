import React, { useRef } from 'react'
import { motion as m, useScroll, useTransform } from 'framer-motion'

const Animations = ({ children, type }) => {
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "start end"],
    })

    let transformValue

    // Setting the animation type based on the passed 'type' prop
    switch (type) {
        case 'translateY':
        transformValue = useTransform(scrollYProgress, [0, 1], [0, 200])
        break
        case 'translateX':
        transformValue = useTransform(scrollYProgress, [0, 2], [0, 100])
        break
        case 'opacity':
        transformValue = useTransform(scrollYProgress, [0, 1], [1, 0])
        break
        default:
        break
    }

    return (
        <div ref={targetRef}>
            <m.div style={{ [type]: transformValue }}>
                {children}
            </m.div>
        </div>
    )
}

export default Animations