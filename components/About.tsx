"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="section-padding min-h-screen flex-center" style={{ position: "relative", zIndex: 10 }}>
            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", justifyContent: "space-between", alignItems: "stretch", flexWrap: "wrap", gap: "2rem" }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card"
                    style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                    <div className="sysReadyDot" style={{ width: "12px", height: "12px", marginBottom: "2rem" }}></div>
                    <h2 className="stencil-text" style={{ marginBottom: "0", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--neon-lime)" }}>
                        01 — PROFILE
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="glass-card"
                    style={{ flex: "2 1 600px", maxWidth: "800px" }}
                >
                    <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.25, fontWeight: 500, marginBottom: "2.5rem", letterSpacing: "-0.03em", color: "var(--foreground)" }}>
                        Architecting digital infrastructure from early protocols to enterprise platforms. <br /> <span style={{ color: "var(--muted)", fontWeight: 400 }}>Engineered for scale.</span>
                    </h3>
                    <p style={{ fontSize: "1rem", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "0", lineHeight: 1.7, color: "var(--muted)" }}>
                        We design and develop high-performance software tailored for growing startups and established enterprises.
                        Our methodology strips away the superficial, focusing entirely on speed, conversion, and undeniable product quality.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
