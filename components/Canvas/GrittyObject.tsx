"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial, Color } from "three";
import { useScroll } from "framer-motion";
import { useTheme } from "next-themes";

export default function GrittyObject() {
    const pointsRef = useRef<any>(null);
    const materialRef = useRef<any>(null);
    const { scrollYProgress } = useScroll(); // tracks 0 to 1
    const { theme, resolvedTheme } = useTheme();

    // Determine the effective theme. Default to 'dark' for the first tick if unsure.
    const activeTheme = resolvedTheme || theme;
    const targetColor = new Color(activeTheme === "light" ? "#111111" : "#ffffff");

    useFrame((state, delta) => {
        if (!pointsRef.current) return;

        // Base rotation
        pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;

        // Scroll-based rotation and scaling
        const scrollVal = scrollYProgress.get();

        // Morph/Rotate aggressively on scroll
        pointsRef.current.rotation.z = scrollVal * Math.PI * 2;
        pointsRef.current.position.y = -scrollVal * 2; // Moves down slightly as we scroll

        // Scale breathes slightly based on scroll
        const targetScale = 1 + scrollVal * 0.5;
        pointsRef.current.scale.setScalar(targetScale);

        if (materialRef.current) {
            // Smoothly interpolate the color
            materialRef.current.color.lerp(targetColor, delta * 5);
        }
    });

    return (
        <Float>
            <points ref={pointsRef}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <pointsMaterial ref={materialRef} color="#111111" size={0.015} sizeAttenuation={true} transparent={true} opacity={0.8} />
            </points>
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
