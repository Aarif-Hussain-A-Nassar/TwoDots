"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial, Color } from "three";
import { useScroll } from "framer-motion";

export default function GrittyObject() {
    const meshRef = useRef<Mesh>(null);
    const materialRef = useRef<MeshStandardMaterial>(null);
    const { scrollYProgress } = useScroll(); // tracks 0 to 1

    // Use a primitive geometry for now, e.g., an icosahedron or torus knot for complexity

    useFrame((state) => {
        if (!meshRef.current) return;

        // Base rotation
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;

        // Scroll-based rotation and scaling
        const scrollVal = scrollYProgress.get();

        // Morph/Rotate aggressively on scroll
        meshRef.current.rotation.z = scrollVal * Math.PI * 2;
        meshRef.current.position.y = -scrollVal * 2; // Moves down slightly as we scroll

        // Scale breathes slightly based on scroll
        const targetScale = 1 + scrollVal * 0.5;
        meshRef.current.scale.setScalar(targetScale);

        // Pulse color slightly (dark matte grey to slightly lighter grey)
        if (materialRef.current) {
            materialRef.current.color = new Color().lerpColors(
                new Color("#111111"),
                new Color("#333333"),
                scrollVal
            );
        }
    });

    return (
        <Float>
            <mesh ref={meshRef}>
                {/* A complex geometry that catches light aggressively */}
                <torusKnotGeometry args={[1, 0.3, 128, 64]} />
                <meshStandardMaterial
                    ref={materialRef}
                    color="#111111"
                    roughness={0.7}
                    metalness={0.5}
                    bumpScale={0.02}
                />
            </mesh>
        </Float>
    );
}

// Simple floating wrapper
function Float({ children, speed = 1, rotationIntensity = 1, floatIntensity = 1 }: any) {
    const group = useRef<any>(null)
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (group.current) {
            group.current.rotation.x = (Math.cos((t / 4) * speed) / 8) * rotationIntensity
            group.current.rotation.y = (Math.sin((t / 4) * speed) / 8) * rotationIntensity
            group.current.position.y = (Math.sin((t / 4) * speed) / 10) * floatIntensity
        }
    })
    return <group ref={group}>{children}</group>
}
