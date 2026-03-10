"use client";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import GrittyObject from "./GrittyObject";

export default function Scene() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <GrittyObject />
        </Suspense>
      </Canvas>
    </div>
  );
}
