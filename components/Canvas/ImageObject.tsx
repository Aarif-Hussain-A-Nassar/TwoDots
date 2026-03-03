"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Mesh, DoubleSide } from "three";
import { useScroll } from "framer-motion";

export default function ImageObject() {
    const meshRef = useRef<Mesh>(null);
    const { scrollYProgress } = useScroll(); // tracks 0 to 1

    // We assume the user has placed their image at public/3d-element.jpg
    const texture = useTexture("/3d-element.jpg");

    useFrame((state) => {
        if (!meshRef.current) return;

        // Scroll-based rotation and scaling
        const scrollVal = scrollYProgress.get();

        // Add some parallax and tilt based on scroll
        // As we scroll down, the image tilts back and rotates slightly
        meshRef.current.rotation.x = -scrollVal * 1.5; // Tilts backwards
        meshRef.current.rotation.y = Math.sin(scrollVal * Math.PI) * 0.5; // Twists side to side
        meshRef.current.position.y = -scrollVal * 3; // Moves up slightly relative to camera

        // Subtle continuous floating
        const t = state.clock.getElapsedTime();
        meshRef.current.position.x = Math.sin(t * 0.5) * 0.1;
        meshRef.current.rotation.z = Math.sin(t * 0.2) * 0.05;
    });

    // The image is roughly 16:9, so we scale the plane accordingly
    return (
        <mesh ref={meshRef} scale={[6, 6 * (9 / 16), 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <meshBasicMaterial
                map={texture}
                transparent={true}
                side={DoubleSide}
                // Using additive blending can make the black background of the image disappear 
                // and blend perfectly with the dark theme of the website!
                blending={2} // THREE.AdditiveBlending is 2
                depthWrite={false}
            />
        </mesh>
    );
}
