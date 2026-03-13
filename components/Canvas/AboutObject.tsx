"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Float } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

export default function AboutObject() {
    const groupRef = useRef<THREE.Group>(null);
    const { theme, resolvedTheme } = useTheme();
    const activeTheme = resolvedTheme || theme;

    // Theme colors: black dots in light mode, white dots in dark mode
    const dotColor = activeTheme === "light" ? "#000000" : "#ffffff";
    const highlightColor = "#A3E635"; // Neon Lime

    // Create the precise S-curve connecting the two dots
    const tubeGeometry = useMemo(() => {
        // We use a Cubic Bezier Curve to perfectly mimic the logo's curved connection.
        // It starts horizontally flat, curves diagonally, and then ends horizontally flat.
        const startPoint = new THREE.Vector3(-0.9, -0.3, 0); // Edge of lower left dot
        const handle1 = new THREE.Vector3(0.0, -0.3, 0);     // Keep it flat exiting left dot
        const handle2 = new THREE.Vector3(0.0, 0.3, 0);      // Keep it flat entering right dot
        const endPoint = new THREE.Vector3(0.9, 0.3, 0);     // Edge of upper right dot

        const curve = new THREE.CubicBezierCurve3(startPoint, handle1, handle2, endPoint);

        // Sweep a tube along this exact curve
        // params: path, tubularSegments, radius, radialSegments, closed
        return new THREE.TubeGeometry(curve, 64, 0.08, 16, false);
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Faster elegant isometric rotation
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 1.0) * 0.35;
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
        }
    });

    return (
        <Float speed={3.5} rotationIntensity={1} floatIntensity={1.5}>
            <group ref={groupRef}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <directionalLight position={[-5, -5, -5]} intensity={0.5} />

                {/* Dot 1 - Lower Left */}
                <Sphere args={[0.35, 32, 32]} position={[-1.2, -0.3, 0]}>
                    <meshBasicMaterial color={dotColor} toneMapped={false} />
                </Sphere>

                {/* Dot 2 - Upper Right */}
                <Sphere args={[0.35, 32, 32]} position={[1.2, 0.3, 0]}>
                    <meshBasicMaterial color={dotColor} toneMapped={false} />
                </Sphere>

                {/* The Curved neon energy line connecting them */}
                <mesh geometry={tubeGeometry}>
                    <meshStandardMaterial
                        color={highlightColor}
                        emissive={highlightColor}
                        emissiveIntensity={1}
                        transparent
                        opacity={0.9}
                        toneMapped={false}
                    />
                </mesh>
            </group>
        </Float>
    );
}
