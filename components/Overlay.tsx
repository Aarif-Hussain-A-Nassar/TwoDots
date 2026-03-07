"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    // By passing container to useScroll, framer-motion knows to track *this* element's scroll
    // since this element is our absolute positioned scroll container over the fixed canvas
    useScroll({ container: containerRef });

    return (
        <div
            ref={containerRef}
            className="scroll-container"
            style={{ pointerEvents: "none" }} // Let clicks pass through if needed
        >
            <div style={{ minHeight: "200vh", pointerEvents: "auto" }}>
                <Hero />
                <About />
                <Projects />

                {/* Footer placeholder */}
                <footer className="section-padding flex-column" style={{ minHeight: "60vh", borderTop: "1px solid var(--accent)", justifyContent: "center", alignItems: "flex-start", gap: "2rem" }}>
                    <span className="stencil-text">10 — CONTACT</span>
                    <h2 style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 400, textTransform: "uppercase", lineHeight: 0.9 }}>
                        Let's <br /> <i style={{ opacity: 0.8 }}>collaborate.</i>
                    </h2>
                    <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
                        <a href="#" style={{ borderBottom: "1px solid var(--foreground)", paddingBottom: "4px", textDecoration: "none", color: "var(--foreground)" }}>Email</a>
                        <a href="#" style={{ borderBottom: "1px solid var(--foreground)", paddingBottom: "4px", textDecoration: "none", color: "var(--foreground)" }}>LinkedIn</a>
                        <a href="#" style={{ borderBottom: "1px solid var(--foreground)", paddingBottom: "4px", textDecoration: "none", color: "var(--foreground)" }}>Twitter</a>
                        <a href="#" style={{ borderBottom: "1px solid var(--foreground)", paddingBottom: "4px", textDecoration: "none", color: "var(--foreground)" }}>GitHub</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
