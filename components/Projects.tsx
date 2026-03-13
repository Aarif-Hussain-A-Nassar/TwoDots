"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

const PROJECTS = [
    { title: "Netzone", category: "Web Development", year: "2024", slug: "netzone" },
    { title: "Cooking Grandma", category: "Web Design", year: "2024", slug: "cooking-grandma" },
    { title: "Mass Developers", category: "Branding & Web", year: "2023", slug: "mass-developers" },
];

export function Projects() {
    return (
        <section className="section-padding" style={{ paddingBottom: "20vh" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                <div style={{ marginBottom: "4rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div className="sysReadyDot" style={{ width: "8px", height: "8px" }}></div>
                    <h2 className="stencil-text" style={{ margin: 0, letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--neon-lime)" }}>
                        03 — SELECTED WORKS
                    </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {PROJECTS.map((project, index) => (
                        <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-card"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "2.5rem 2rem",
                                    cursor: "pointer",
                                    position: "relative",
                                    overflow: "hidden",
                                    marginBottom: "1rem"
                                }}
                                onMouseEnter={(e) => {
                                    const arrow = e.currentTarget.querySelector('.project-arrow') as HTMLElement;
                                    if (arrow) {
                                        arrow.style.transform = "translate(5px, -5px) scale(1.1)";
                                        arrow.style.color = "var(--neon-lime)";
                                        arrow.style.opacity = "1";
                                    }
                                    const title = e.currentTarget.querySelector('.project-title') as HTMLElement;
                                    if (title) title.style.transform = "translateX(10px)";
                                }}
                                onMouseLeave={(e) => {
                                    const arrow = e.currentTarget.querySelector('.project-arrow') as HTMLElement;
                                    if (arrow) {
                                        arrow.style.transform = "translate(0px, 0px) scale(1)";
                                        arrow.style.color = "var(--foreground)";
                                        arrow.style.opacity = "0.3";
                                    }
                                    const title = e.currentTarget.querySelector('.project-title') as HTMLElement;
                                    if (title) title.style.transform = "translateX(0px)";
                                }}
                            >
                                <h3 className="project-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", margin: 0, fontWeight: 500, letterSpacing: "-0.03em", transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)", color: "var(--foreground)" }}>
                                    {project.title}
                                </h3>

                                <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
                                    <span className="stencil-text" style={{ opacity: 0.6, fontSize: "0.85rem", letterSpacing: "0.1em" }}>{project.year}</span>
                                    <ArrowUpRight className="project-arrow" strokeWidth={1.5} size={32} opacity={0.3} style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", color: "var(--foreground)" }} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
