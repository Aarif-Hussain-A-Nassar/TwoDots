"use client";

import dynamic from "next/dynamic";

// Trigger refresh
import Overlay from "../components/Overlay";

import Header from "../components/Header";

// Ensure the ThreeJS canvas is strictly client-side to prevent Next.js React hydration mismatches

export default function Home() {
  return (
    <main style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Header />

      {/* The HTML Foreground that scrolls over top */}
      <Overlay />
    </main>
  );
}
