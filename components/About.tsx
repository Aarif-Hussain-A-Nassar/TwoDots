"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AboutScene = dynamic(() => import("./Canvas/AboutScene"), { ssr: false });

export function About() {
    return (
        <section id="about" className="section-padding min-h-screen flex-center" style={{ position: "relative", zIndex: 10, overflow: "hidden" }}>
            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "4rem" }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card"
                    style={{ flex: "1 1 500px", maxWidth: "650px", display: "flex", flexDirection: "column", gap: "2.5rem", zIndex: 2 }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div className="sysReadyDot" style={{ width: "10px", height: "10px" }}></div>
                        <h2 className="stencil-text" style={{ margin: 0, letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--neon-lime)" }}>
                            01 — PROFILE
                        </h2>
                    </div>

                    <div>
                        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.25, fontWeight: 500, marginBottom: "2rem", letterSpacing: "-0.03em", color: "var(--foreground)" }}>
                            Engineering ideas into modern web experiences. <br /> <span style={{ color: "var(--muted)", fontWeight: 400 }}>Built for performance. Designed for impact.</span>
                        </h3>
                        <p style={{ fontSize: "1rem", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "0", lineHeight: 1.7, color: "var(--muted)" }}>
                            Twodots creates digital solutions that transform ideas into powerful online platforms.
                            Through web development, creative design, social media management, video production, and strategic advertising, we help brands grow and stand out in the digital world. </p>
                    </div>
                </motion.div>

                {/* Animated Genuine Two Dots Logo 3D Scene */}
                <motion.div
                    className="desktop-only"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    style={{ flex: "1 1 400px", height: "500px", position: "relative", zIndex: 1 }}
                >
                    <AboutScene />
                </motion.div>

            </div>
        </section>
    );
}
