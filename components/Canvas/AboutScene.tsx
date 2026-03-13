"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AboutObject from "./AboutObject";

export default function AboutScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ width: "100%", height: "100%", position: "absolute", inset: 0, pointerEvents: "none" }}
            gl={{ antialias: true, alpha: true }}
        >
            <Suspense fallback={null}>
                <AboutObject />
            </Suspense>
        </Canvas>
    );
}
