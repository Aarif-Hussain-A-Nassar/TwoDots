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
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
                    <div className="sysReadyDot" style={{ width: "8px", height: "8px" }}></div>
                    <span className="stencil-text" style={{ margin: 0, display: "block", letterSpacing: "0.2em", fontSize: "0.65rem", color: "var(--neon-lime)" }}>
                        SYS.READY // TWODOTS
                    </span>
                </div>

                <h1 style={{
                    fontSize: "clamp(3rem, 7vw, 7rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.05em",
                    lineHeight: 1.05,
                    marginBottom: "3rem",
                    pointerEvents: "auto",
                    color: "var(--foreground)"
                }}>
                    Engineering Ideas <br />
                    Into <span style={{
                        background: "linear-gradient(90deg, #FFFFFF 0%, #A3E635 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block"
                    }}>Modern Web...</span>
                </h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2rem", pointerEvents: "auto" }}>
                    <button
                        style={{
                            alignSelf: "flex-start",
                            padding: "0.8rem 2rem",
                            background: "rgba(255, 255, 255, 0.05)",
                            color: "var(--foreground)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "9999px",
                            fontFamily: "var(--font-inter), sans-serif",
                            letterSpacing: "0.05em",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            backdropFilter: "blur(10px)",
                            transition: "all 0.4s ease",
                            pointerEvents: "auto"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(163, 230, 53, 0.1)";
                            e.currentTarget.style.borderColor = "rgba(163, 230, 53, 0.5)";
                            e.currentTarget.style.color = "var(--neon-lime)";
                            e.currentTarget.style.boxShadow = "0 0 20px rgba(163, 230, 53, 0.2)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.color = "var(--foreground)";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        Initiate Sequence →
                    </button>

                    <p style={{
                        maxWidth: "520px",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "1rem",
                        marginTop: "1.5rem",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.7,
                        color: "var(--muted)"
                    }}>
                        From concept to launch, we architect high-performance digital experiences built for scale, speed, and conversion.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
