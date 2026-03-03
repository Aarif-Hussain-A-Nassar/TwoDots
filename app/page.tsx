"use client";

import dynamic from "next/dynamic";

// Trigger refresh
import Overlay from "../components/Overlay";

// Ensure the ThreeJS canvas is strictly client-side to prevent Next.js React hydration mismatches
const Scene = dynamic(() => import("../components/Canvas/Scene"), { ssr: false });

export default function Home() {
  return (
    <main style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      {/* The 3D background */}
      <Scene />

      {/* The HTML Foreground that scrolls over top */}
      <Overlay />
    </main>
  );
}
