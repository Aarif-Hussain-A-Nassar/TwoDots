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
    // Bright core color
    const targetColor = new Color(activeTheme === "light" ? "#111111" : "#ffffff");
    // Deep trail base color (dimmed)
    const baseColor = new Color(activeTheme === "light" ? "#aaaaaa" : "#333333");

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.uBaseColor.value = baseColor;
            materialRef.current.uniforms.uHighlightColor.value = targetColor;
        }
    }, [activeTheme, baseColor, targetColor]);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const elapsedTime = state.clock.getElapsedTime();

        // Smooth base rotation of the entire object
        pointsRef.current.rotation.x = elapsedTime * 0.1;
        pointsRef.current.rotation.y = elapsedTime * 0.15;
        pointsRef.current.rotation.z = elapsedTime * 0.05;

        // Keep it large but constant for a premium visual
        pointsRef.current.scale.setScalar(0.85);

        // Feed elapsed time into the shader for the shooting trail
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = elapsedTime;
        }
    });

    // Custom shader configuration for the firecracker trailing effect
    const shaderArgs = {
        uniforms: {
            uTime: { value: 0 },
            uBaseColor: { value: baseColor },
            uHighlightColor: { value: targetColor },
        },
        vertexShader: `
            uniform float uTime;
            varying float vGlow;

            void main() {
                // Calculate position of the point
                vec3 pos = position;

                // Create a traveling "wave" or "spark" that moves based on time and the y coordinate
                // We use sine to create bands of light that travel upwards/downwards
                float wave = sin(pos.y * 3.0 + uTime * 2.0);
                
                // Add a secondary wave for more complex, chaotic "firecracker" trailing
                float secondaryWave = sin(pos.x * 2.0 - uTime * 3.0 + pos.z * 1.5);
                
                // Combine waves. Only values near the peak get highlighted.
                float combined = wave * 0.6 + secondaryWave * 0.4;
                
                // vGlow becomes 1.0 (bright) at the peak, fading to 0.0 (dim trail) behind it
                vGlow = smoothstep(0.4, 0.9, combined);
                
                // Very slightly push bright points outward for an energetic spark feel
                pos += normal * vGlow * 0.05;

                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                
                // Dynamic sizing: brighter points are physically slightly larger
                gl_PointSize = (1.5 + vGlow * 2.0) * (20.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform vec3 uBaseColor;
            uniform vec3 uHighlightColor;
            varying float vGlow;

            void main() {
                // Determine point shape (soft circle)
                float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                if (distanceToCenter > 0.5) discard;
                
                // Soft edge fading for the point itself
                float alpha = (0.5 - distanceToCenter) * 2.0;

                // Mix the base dim color with the bright highlight color based on the vGlow wave
                vec3 finalColor = mix(uBaseColor, uHighlightColor, vGlow);

                // Overall alpha. Non-glowing base points are mostly transparent (0.2), peak glows are solid (1.0 * alpha)
                float finalAlpha = mix(0.15, 0.9, vGlow) * alpha;

                gl_FragColor = vec4(finalColor, finalAlpha);
            }
        `,
        transparent: true,
        depthWrite: false, // Prevents points from incorrectly sorting their transparency z-index against each other
    };

    useFrame((state, delta) => {
        if (!pointsRef.current) return;

        // Smooth base rotation
        pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;

        // Keep it large but constant for a premium visual
        pointsRef.current.scale.setScalar(0.85);
    });

    return (
        <Float>
            <points ref={pointsRef}>
                <sphereGeometry args={[1.5, 64, 64]} />
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
