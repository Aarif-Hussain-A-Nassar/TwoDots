"use client";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import ImageObject from "./ImageObject";

export default function Scene() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ImageObject />

          {/* Adds studio lighting environment for reflections */}
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
