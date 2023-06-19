import React, { useState, useRef, useMemo, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations, OutlineEffect } from '@react-three/drei'
import { useLoader, useFrame, useThree } from '@react-three/fiber'

const Dna = (props) => {

    const groupRef = useRef()
    const group = useRef()

    const {scene, nodes, materials, animations} = useLoader(GLTFLoader, '/models/scene_1.glb')

    useFrame((state, delta) => {
        // waterMaterial.uniforms.uTime.value += delta
        // groupRef.current.rotation.y -= 0.0005
    })

    return (
        <mesh>
            <primitive object={scene} />
        </mesh>

        // <group
        //     {...props}
        //     dispose={null}
        //     ref={groupRef}
        //     position={[0, -2.5, 0]}
        //     rotation={[0, 0, 0]}
        //     scale={1}
        // >

        //     <mesh geometry={nodes.floor.geometry} material={materials.light_grey} />

        //     <mesh geometry={nodes.wall.geometry} material={materials.dark_grey} scale={0.99} />

        //     <group position={[0, 0.05, 0]} scale={3.35}>
        //         <mesh geometry={nodes.platform_big_1.geometry} material={materials.dark_grey} />
        //         <mesh geometry={nodes.platform_big_2.geometry} material={materials.glass} />
        //     </group>

        //     <mesh geometry={nodes.header.geometry} material={materials.text} position={[0.23, 1.56, -0.3]} rotation={[0, 0.4, 0]} />
        //     <mesh geometry={nodes.subheader.geometry} material={materials.text} position={[0.41, 0.52, 0.36]} rotation={[0, 0.18, 0]} />
        //     <group position={[-0.87, 0.17, 1.52]} rotation={[0, 0.76, 0]}>
        //         <mesh geometry={nodes.quote_1.geometry} material={materials['button.001']} />
        //         <mesh geometry={nodes.quote_2.geometry} material={materials['text.001']} />
        //     </group>

        //     <mesh geometry={nodes.Cube005.geometry} material={materials.magneta} position={[0.52, -0.15, 0.38]} />
        //     <mesh geometry={nodes.Cube006.geometry} material={materials.indigo} position={[-0.1, -0.15, 0.99]} />
        //     <mesh geometry={nodes.Cube007.geometry} material={materials.magneta} position={[-0.23, 0.18, 0.17]} />
        //     <mesh geometry={nodes.Cube008.geometry} material={materials.magneta} position={[-0.6, 0.18, -0.43]} />
        //     <mesh geometry={nodes.Cube009.geometry} material={materials.indigo} position={[0.39, 0.18, 0.04]} />
        //     <mesh geometry={nodes.Cube010.geometry} material={materials.magneta} position={[-0.17, 0.18, 0.09]} />
        //     <group position={[-5.64, 0, 1.79]}>
        //         <mesh geometry={nodes.platform_small_1.geometry} material={materials.dark_grey} />
        //         <mesh geometry={nodes.platform_small_2.geometry} material={materials.glass} />
        //         <mesh geometry={nodes.platform_small_3.geometry} material={materials.light_grey} />
        //     </group>

        //     <group position={[2.4, 4.86, -7.4]} rotation={[0, -Math.PI / 2, 0]} scale={1.27}>
        //         <mesh geometry={nodes.work_1_1.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.work_1_2.geometry} material={materials.glass} />
        //     </group>
        //     <group position={[5.4, 4.86, -7.4]} rotation={[0, -Math.PI / 2, 0]} scale={1.27}>
        //         <mesh geometry={nodes.work_2_1.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.work_2_2.geometry} material={materials.glass} />
        //     </group>
        //     <group position={[3.9, 2.96, -7.4]} rotation={[0, -Math.PI / 2, 0]} scale={1.27}>
        //         <mesh geometry={nodes.work_3_1.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.work_3_2.geometry} material={materials.glass} />
        //     </group>

        //     <group position={[6.44, 0, 2.22]}>
        //         <mesh geometry={nodes.desk_1.geometry} material={materials.medium_grey} />
        //         <mesh geometry={nodes.desk_2.geometry} material={materials.glass} />
        //         <mesh geometry={nodes.desk_3.geometry} material={materials.light_grey} />
        //     </group>

        //     <mesh geometry={nodes.frame.geometry} material={materials.light_grey} scale={0.99} />
        //     <mesh geometry={nodes.sofa.geometry} material={materials.dark_grey} scale={0.99} />
        //     <mesh geometry={nodes.cushion_big.geometry} material={materials.dark_grey} position={[2.86, 1.55, -6.91]} />
        //     <mesh geometry={nodes.cushion_small.geometry} material={materials.light_grey} position={[2.91, 1.51, -6.56]} />
        //     <mesh geometry={nodes.legs.geometry} material={materials.glass} position={[1.71, -0.1, -4.99]} />
        //     <group position={[2.25, 0, -3.27]}>
        //         <mesh
        //             geometry={nodes.coffee_table_1.geometry}
        //             material={materials.light_grey}
        //             />
        //         <mesh
        //             geometry={nodes.coffee_table_2.geometry}
        //             material={materials.dark_grey}
        //             />
        //         <mesh
        //             geometry={nodes.coffee_table_3.geometry}
        //             material={materials.glass}
        //             />
        //     </group>
        //     <group position={[3.4, 0.98, -2.78]} scale={[-0.17, -0.12, -0.12]}>
        //         <mesh geometry={nodes.Plane001.geometry} material={materials.temporary} />
        //         <mesh geometry={nodes.Plane001_1.geometry} material={materials.dark_grey} />
        //     </group>

        //     <group position={[-7.39, 4.05, -1.04]}>
        //         <mesh geometry={nodes.poster_1_1.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.poster_1_2.geometry} material={materials.glass} />
        //     </group>
        //     <group position={[-7.39, 3.55, -3.54]}>
        //         <mesh geometry={nodes.poster_2_1.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.poster_2_2.geometry} material={materials.glass} />
        //     </group>
        //     <group position={[-7.39, 4.05, -6.04]}>
        //         <mesh geometry={nodes.poster_3_1.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.poster_3_2.geometry} material={materials.glass} />
        //     </group>
        //     <group position={[-6.07, 3.55, -7.4]} rotation={[0, -Math.PI / 2, 0]}>
        //         <mesh geometry={nodes.poster_4_1.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.poster_4_2.geometry} material={materials.glass} />
        //     </group>

        //     <group position={[-7.05, 3.48, 4.44]}>
        //         <mesh geometry={nodes.shelf_1_1.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.shelf_1_2.geometry} material={materials.glass} />
        //     </group>
        //     <group position={[-7.05, 4.69, 4.44]}>
        //         <mesh geometry={nodes.shelf_2001.geometry} material={materials.light_grey} />
        //         <mesh geometry={nodes.shelf_2001_1.geometry} material={materials.glass} />
        //     </group>

        //     <mesh geometry={nodes.blog.geometry} material={materials.indigo} />

        //     <mesh geometry={nodes.pillar.geometry} material={materials.dark_grey} />
        // </group>
    )
}

export default Dna