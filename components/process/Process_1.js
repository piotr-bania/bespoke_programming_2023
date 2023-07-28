import React, { useRef } from 'react'
import { Float, Center, Text } from '@react-three/drei'

const Process_1 = () => {

    return (
        <Float distance={0.5} speed={5} factor={0.5} >
            <Text
                font='./fonts/Contralto/contraltobig-bold-webfont.woff'
                fontSize={10}
                color={'#6526D1'}
            >
                1
            </Text>
        </Float>
    )
}

export default Process_1