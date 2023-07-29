import React, { useRef } from 'react'
import { Float, Text } from '@react-three/drei'

const Process_Number = ({number}) => {

    return (
        <Float distance={0.5} speed={5} factor={0.5} >
            <Text
                font='./fonts/Contralto/contraltobig-bold-webfont.woff'
                fontSize={10}
                position={[0, 1, 0]}
                color={'#6526D1'}
            >
                {number}
            </Text>
        </Float>
    )
}

export default Process_Number