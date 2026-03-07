"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    { title: "Elva", category: "Branding", year: "2024" },
    { title: "Howey", category: "Web & App Design", year: "2023" },
    { title: "Sun Flower Tech", category: "Front-end Dev", year: "2023" },
    { title: "Join the Grid", category: "Strategy", year: "2022" },
];

export function Projects() {
    return (
        <section className="section-padding" style={{ paddingBottom: "20vh" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                <div style={{ marginBottom: "6rem", borderBottom: "1px solid var(--accent)", paddingBottom: "2rem" }}>
                    <h2 className="stencil-text">04 — Selected Works</h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "2rem 0",
                                borderBottom: "1px solid var(--accent)",
                                cursor: "pointer"
                            }}
                            whileHover={{ x: 20 }}
                        >
                            <h3 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", margin: 0, fontWeight: 400, fontFamily: "var(--font-serif), serif", fontStyle: "italic" }}>{project.title}</h3>

                            <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>
                                <span className="stencil-text" style={{ display: "none" }}>{project.category}</span>
                                <span className="stencil-text" style={{ opacity: 0.8 }}>{project.year}</span>
                                <ArrowUpRight strokeWidth={1} size={32} opacity={0.5} />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
