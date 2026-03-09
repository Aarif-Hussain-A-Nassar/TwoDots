"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Canvas/Scene"), { ssr: false });

export function Hero() {
    return (
        <section className="min-h-screen flex-center flex-column" style={{ position: "relative", padding: "0 5vw" }}>
            {/* Absolute 3D Scene in the background of just this section */}
            <Scene />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: "100%", maxWidth: "1200px", position: "relative", zIndex: 1, pointerEvents: "none" }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                    <div style={{ width: "8px", height: "8px", background: "#3b82f6", borderRadius: "50%" }}></div>
                    <span className="stencil-text" style={{ margin: 0, display: "block" }}>
                        PORTFOLIO / 2026
                    </span>
                </div>

                <h1 style={{
                    fontSize: "clamp(3.5rem, 10vw, 10rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    lineHeight: 0.9,
                    textTransform: "uppercase",
                    marginBottom: "3rem",
                    pointerEvents: "auto"
                }}>
                    System <br />
                    <i style={{ opacity: 0.8 }}>Architect.</i>
                </h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2rem", pointerEvents: "auto" }}>
                    <button
                        className="brutalist-btn"
                        style={{
                            alignSelf: "flex-start",
                            padding: "1rem 2rem",
                            background: "var(--foreground)",
                            color: "var(--background)",
                            border: "1px solid var(--foreground)",
                            fontFamily: "var(--font-mono), monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            cursor: "pointer",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            transition: "all 0.3s ease",
                            pointerEvents: "auto"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "var(--foreground)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "var(--foreground)";
                            e.currentTarget.style.color = "var(--background)";
                        }}
                    >
                        [ INITIALIZE ]
                    </button>

                    <p style={{
                        maxWidth: "500px",
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "0.85rem",
                        marginTop: "2rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        lineHeight: 1.8
                    }}>
                        Engineering digital infrastructure and hyper-performance web experiences.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
