"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, ShaderMaterial } from "three";
import { useScroll } from "framer-motion";
import { useTheme } from "next-themes";

export default function GrittyObject() {
    const pointsRef = useRef<any>(null);
    const materialRef = useRef<ShaderMaterial>(null);
    const { theme, resolvedTheme } = useTheme();

    // Determine the effective theme.
    const activeTheme = resolvedTheme || theme;

    // Core interaction color (when mouse is near)
    const targetColor = new Color(activeTheme === "light" ? "#000000" : "#ffffff");
    // Deep background base (almost invisible)
    const baseColor = new Color(activeTheme === "light" ? "#e5e5e5" : "#1a1a1a");

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.uBaseColor.value = baseColor;
            materialRef.current.uniforms.uHighlightColor.value = targetColor;
        }
    }, [activeTheme, baseColor, targetColor]);

    useFrame((state) => {
        if (!pointsRef.current || !materialRef.current) return;

        const elapsedTime = state.clock.getElapsedTime();

        // Very slow, ambient rotation of the entire plane
        pointsRef.current.rotation.z = elapsedTime * 0.05;

        // Feed uniforms to the shader
        materialRef.current.uniforms.uTime.value = elapsedTime;
    });

    const shaderArgs = {
        uniforms: {
            uTime: { value: 0 },
            uBaseColor: { value: baseColor },
            uHighlightColor: { value: targetColor },
        },
        vertexShader: `
            uniform float uTime;
            varying float vElevation;

            void main() {
                vec3 pos = position;

                // 1. Ambient Topographical Waves
                // Complex undulating floor effect combining multiple sine waves
                float wave1 = sin(pos.x * 0.5 + uTime * 0.5) * 0.5;
                float wave2 = cos(pos.y * 0.5 + uTime * 0.3) * 0.5;
                float ambientZ = wave1 + wave2;

                // We normalize the ambientZ a bit so we can use it to color the peaks
                // ambientZ varies roughly from -1.0 to 1.0, so we map it to 0.0 -> 1.0
                vElevation = (ambientZ + 1.0) / 2.0;

                // 2. Apply Transformations
                // Elevate points based purely on the ambient waves
                pos.z += ambientZ * 2.0;

                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                
                // Dynamic sizing: higher peaks are slightly larger (increased base size to compensate for fewer points)
                gl_PointSize = (3.5 + vElevation * 3.0) * (20.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform vec3 uBaseColor;
            uniform vec3 uHighlightColor;
            varying float vElevation;

            void main() {
                // Soft circle shape
                float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                if (distanceToCenter > 0.5) discard;
                
                float alpha = (0.5 - distanceToCenter) * 2.0;

                // 1. Color Mixing based on Elevation (peaks are brighter)
                vec3 finalColor = mix(uBaseColor, uHighlightColor, vElevation);

                // 2. Opacity
                // Troughs are dim (0.2), peaks are brighter (0.7)
                float finalAlpha = mix(0.2, 0.7, vElevation) * alpha;

                gl_FragColor = vec4(finalColor, finalAlpha);
            }
        `,
        transparent: true,
        depthWrite: false,
    };

    return (
        <Float floatIntensity={0.5} rotationIntensity={0.2} speed={1}>
            <points
                ref={pointsRef}
                rotation={[-Math.PI / 2.5, 0, 0]} // Tilt it back
                position={[0, -8, -10]}           // Drop it low to the bottom center and deep
            >
                {/* A wide, dense plane grid of points (optimized to 64x64 for performance) */}
                <planeGeometry args={[35, 25, 64, 64]} />
                <shaderMaterial ref={materialRef} args={[shaderArgs]} />
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
