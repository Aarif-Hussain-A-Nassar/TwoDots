"use client";

import { motion } from "framer-motion";

export function Services() {
    const webServices = [
        "3D Websites",
        "Portfolio Websites",
        "Single Page Websites",
        "Multipage Websites",
        "Landing Websites"
    ];

    const otherServices = [
        "Creative Design",
        "Social Media Management",
        "Content Editing & Reels",

    ];

    return (
        <section id="services" className="section-padding min-h-screen flex-column" style={{ position: "relative", zIndex: 10, justifyContent: "center", gap: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div className="sysReadyDot" style={{ width: "10px", height: "10px" }}></div>
                <h2 className="stencil-text" style={{ margin: 0, letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--neon-lime)" }}>
                    02 — SERVICES
                </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                {/* Main Services (Web Development) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card"
                    style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 500, color: "var(--foreground)", borderBottom: "1px solid var(--grid-color)", paddingBottom: "1rem" }}>
                        Web Development <span style={{ color: "var(--muted)", fontSize: "1rem", fontWeight: 400, marginLeft: "0.5rem" }}>(Main)</span>
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                        {webServices.map((service, index) => (
                            <li key={index} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)" }}>
                                <span style={{ color: "var(--neon-lime)" }}>▹</span> {service}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Additional Services */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="glass-card"
                    style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 500, color: "var(--foreground)", borderBottom: "1px solid var(--grid-color)", paddingBottom: "1rem" }}>
                        Digital & Creative
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                        {otherServices.map((service, index) => (
                            <li key={index} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)" }}>
                                <span style={{ color: "var(--neon-lime)" }}>▹</span> {service}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
