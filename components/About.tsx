"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="section-padding min-h-screen flex-center" style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255, 255, 255, 0.15)" }}>
            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "4rem" }}>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    style={{ flex: "1 1 300px" }}
                >
                    <h2 className="stencil-text" style={{ marginBottom: "2rem" }}>01 — Profile</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: "2 1 600px", maxWidth: "800px" }}
                >
                    <h3 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.2, fontWeight: 400, marginBottom: "3rem", textTransform: "uppercase" }}>
                        Architecting systems from early protocols to established platforms. <br /> <i style={{ opacity: 0.8 }}>Built for scale.</i>
                    </h3>
                    <p style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono), monospace", textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.8 }}>
                        We re-engineer entire digital architectures from strategy and structure to performance and scale.
                        A methodical, brutalist approach that strips away noise and delivers raw, lasting outcomes.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
