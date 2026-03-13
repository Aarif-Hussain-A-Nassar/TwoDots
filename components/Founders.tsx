"use client";

import { motion } from "framer-motion";

export function Founders() {
    return (
        <section id="team" className="section-padding min-h-screen flex-column" style={{ position: "relative", zIndex: 10, justifyContent: "center", gap: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div className="sysReadyDot" style={{ width: "10px", height: "10px" }}></div>
                <h2 className="stencil-text" style={{ margin: 0, letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--neon-lime)" }}>
                    04 — MEET THE FOUNDERS
                </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                {/* Founder 1: Aarif */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card"
                    style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                    <div style={{ width: "100%", height: "300px", borderRadius: "8px", background: "var(--glass-bg)", border: "1px solid var(--grid-color)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        {/* Placeholder for image - user can replace with actual Next Image later */}
                        <span style={{ color: "var(--muted)", letterSpacing: "0.1em", fontSize: "0.8rem", textTransform: "uppercase" }}>[Image Placeholder]</span>
                    </div>
                    <div>
                        <h3 style={{ fontSize: "2rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                            Aarif
                        </h3>
                        <p style={{ color: "var(--neon-lime)", fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1rem" }}>Co-Founder & Developer</p>
                        <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            Driving the technical vision and engineering excellence behind our high-performance digital experiences.
                        </p>
                    </div>
                </motion.div>

                {/* Founder 2: Akshai */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="glass-card"
                    style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                    <div style={{ width: "100%", height: "300px", borderRadius: "8px", background: "var(--glass-bg)", border: "1px solid var(--grid-color)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        {/* Placeholder for image - user can replace with actual Next Image later */}
                        <span style={{ color: "var(--muted)", letterSpacing: "0.1em", fontSize: "0.8rem", textTransform: "uppercase" }}>[Image Placeholder]</span>
                    </div>
                    <div>
                        <h3 style={{ fontSize: "2rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                            Akshai
                        </h3>
                        <p style={{ color: "var(--neon-lime)", fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1rem" }}>Co-Founder & Creative Lead</p>
                        <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                            Shaping the brand identity, interactive design, and strategic creative direction for our partners.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
