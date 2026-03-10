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
        >
            <div style={{ minHeight: "200vh" }}>
                <Hero />
                <About />
                <Projects />

                {/* Footer placeholder */}
                <footer className="section-padding flex-column" style={{ minHeight: "60vh", justifyContent: "center", alignItems: "flex-start", gap: "2rem", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(163,230,53,0.3) 50%, transparent 100%)" }}></div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <div className="sysReadyDot" style={{ width: "8px", height: "8px" }}></div>
                        <span className="stencil-text" style={{ margin: 0, letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--neon-lime)" }}>
                            10 — CONTACT
                        </span>
                    </div>
                    <h2 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1 }}>
                        Let's build <br /> <span style={{ color: "var(--muted)", fontWeight: 400 }}>the future.</span>
                    </h2>
                    <div style={{ display: "flex", gap: "1.5rem", marginTop: "3rem", fontSize: "0.9rem" }}>
                        <a href="#" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>Email</a>
                        <a href="#" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>LinkedIn</a>
                        <a href="#" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>Twitter</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
