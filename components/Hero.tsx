"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";


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
                        WEB / TWODOTS
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
                        background: "linear-gradient(90deg, var(--foreground) 0%, var(--neon-lime) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block"
                    }}>Modern Web...</span>
                </h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2rem", pointerEvents: "auto" }}>
                    <Link href="/contact" className="hero-btn">
                        [ GET QUOTE NOW ]
                    </Link>

                    <p style={{
                        maxWidth: "520px",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "1rem",
                        marginTop: "1.5rem",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.7,
                        color: "var(--muted)"
                    }}>
                        From concept to launch, we create fast, modern, and scalable websites tailored for growing businesses
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
