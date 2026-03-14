"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Instagram } from "lucide-react";
import { TransitionLink } from "./TransitionLink";

const PROJECTS = [
    { title: "Netzone", category: "Web Development", url: "https://www.netzonethecompletesolutions.com/", type: "website", slug: "netzone" },
    { title: "Cooking Grandma", category: "Web Design", url: "https://cooking-grandma.vercel.app/", type: "website", slug: "cooking-grandma" },
    { title: "Mass Developers", category: "Video Production", url: "https://instagram.com/your-reel-link", type: "social", slug: "mass-developers" },
];

export function Projects() {
    return (
        <section id="projects" className="section-padding" style={{ paddingBottom: "20vh" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                <div style={{ marginBottom: "4rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div className="sysReadyDot" style={{ width: "8px", height: "8px" }}></div>
                    <h2 className="stencil-text" style={{ margin: 0, letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--neon-lime)" }}>
                        03 — SELECTED WORKS
                    </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {PROJECTS.map((project, index) => (
                        <TransitionLink key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
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

                                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            window.open(project.url, "_blank", "noopener,noreferrer");
                                        }}
                                        style={{
                                            padding: "0.5rem 1.2rem",
                                            background: "rgba(255,255,255,0.03)",
                                            border: "1px solid var(--grid-color)",
                                            borderRadius: "9999px",
                                            color: "var(--foreground)",
                                            fontFamily: "var(--font-inter)",
                                            fontSize: "0.85rem",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            letterSpacing: "0.05em"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "var(--neon-lime)";
                                            e.currentTarget.style.color = "var(--neon-lime)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "var(--grid-color)";
                                            e.currentTarget.style.color = "var(--foreground)";
                                        }}
                                    >
                                        {project.type === "social" ? <Instagram size={18} /> : <Globe size={18} />}
                                    </button>
                                    <ArrowUpRight className="project-arrow" strokeWidth={1.5} size={32} opacity={0.3} style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", color: "var(--foreground)" }} />
                                </div>
                            </motion.div>
                        </TransitionLink>
                    ))}
                </div>

            </div>
        </section>
    );
}
