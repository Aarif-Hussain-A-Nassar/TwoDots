"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="section-padding min-h-screen flex-center" style={{ position: "relative", zIndex: 10 }}>
            <div style={{ width: "100%", maxWidth: "1200px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "4rem" }}>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    style={{ flex: "1 1 300px" }}
                >
                    <h2 className="stencil-text" style={{ marginBottom: "2rem" }}>Completed projects.</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: "2 1 600px" }}
                >
                    <h3 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.2, fontWeight: 500, marginBottom: "3rem" }}>
                        Trusted by teams from early to established. Built to support every stage.
                    </h3>
                    <p style={{ fontSize: "1.25rem" }}>
                        We redesigned Kyan’s entire e-commerce experience from strategy and structure to design and messaging.
                        A methodical, research driven process that delivers lasting outcomes.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
