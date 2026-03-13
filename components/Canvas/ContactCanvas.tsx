"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

function ParticleSphere() {
    const pointsRef = useRef<THREE.Points>(null);
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const count = 2500;
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        const color1 = new THREE.Color("#4285F4"); // Blue
        const color2 = new THREE.Color("#A3E635"); // Neon Lime
        const color3 = new THREE.Color("#9C27B0"); // Purple/Pink
        const color4 = new THREE.Color(isDark ? "#ffffff" : "#111111");

        for (let i = 0; i < count; i++) {
            // Generate points on a sphere surface (or slightly thick shell)
            const theta = Math.random() * Math.PI * 2;
            const u = Math.random() * 2 - 1; // from -1 to 1
            const phi = Math.acos(u);
            // Increased depth/variance for an "exploded" look
            const r = 5 + Math.random() * 7; // Radius

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            // Mix colors randomly
            const mix = Math.random();
            let c;
            if (mix < 0.2) c = color1;
            else if (mix < 0.4) c = color2;
            else if (mix < 0.6) c = color3;
            else c = color4;

            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        return [positions, colors];
    }, [count, isDark]);

    const mouse = useRef(new THREE.Vector2(0, 0));
    
    useFrame((state) => {
        if (!pointsRef.current) return;
        
        // easing mouse pointer
        mouse.current.lerp(state.pointer, 0.05);

        // Constant slow rotation + mouse interaction
        const elapsedTime = state.clock.getElapsedTime();
        
        // Give it a nice tilt like a globe
        const baseTiltX = 0.2;
        const baseTiltY = elapsedTime * 0.1;

        // Subtle rotation reaction
        pointsRef.current.rotation.y = baseTiltY + mouse.current.x * 0.4;
        pointsRef.current.rotation.x = baseTiltX - mouse.current.y * 0.4;

        // Make the entire sphere follow the cursor
        pointsRef.current.position.x = mouse.current.x * 5;
        pointsRef.current.position.y = mouse.current.y * 3;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={isDark ? 0.05 : 0.06}
                vertexColors
                transparent
                opacity={isDark ? 0.8 : 0.4}
                sizeAttenuation={true}
                depthWrite={false}
                blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
            />
        </points>
    );
}

export default function ContactCanvas() {
    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "auto", opacity: 0.8 }}>
            <Canvas camera={{ position: [0, 0, 14], fov: 60 }} style={{ pointerEvents: "auto" }}>
                <ParticleSphere />
            </Canvas>
        </div>
    );
}
