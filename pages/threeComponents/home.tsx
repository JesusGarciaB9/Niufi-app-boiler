'use client';
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Canvas, useThree } from '@react-three/fiber'
import useDeviceSize from 'hooks/useDeviceSize';
import { DoubleSide, BoxGeometry, } from 'three';
import { OrbitControls, Stars, Text } from '@react-three/drei'

function Sphere({ ref }: any) {
    // This reference gives us direct access to the THREE.Mesh object

    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            ref={ref}
            scale={clicked ? 1.5 : 1}
            //onClick={(event) => click(!clicked)}
            //onPointerDown={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial
                opacity={1}
                color="0x0000ff"
                wireframe={true}
                side={DoubleSide}
            />

        </mesh>
    )
}

export default function Three() {
    const { aspect, devicePixelRatio } = useDeviceSize();
    const { ref } = useRef()
    return (
        < >
            <Canvas dpr={devicePixelRatio} camera={{ fov: 50, near: 1, far: 10000, aspect: aspect, position: [1, 1, 3] }} >

                <Stars />
                <Sphere ref={ref} />
                <OrbitControls />
            </Canvas>
        </ >

    )
}
