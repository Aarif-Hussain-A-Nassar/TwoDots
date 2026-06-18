"use client";

import { TransitionLink } from "../../../components/TransitionLink";
import { ArrowLeft, ExternalLink, Globe, Shield, Activity, Truck } from "lucide-react";

export default function AbmMarinePage() {
    return (
        <main className="section-padding scroll-container" style={{ paddingTop: "clamp(12vh, 15vw, 20vh)", position: "relative" }}>
            {/* Large Watermark Background */}
            <div className="page-watermark" style={{ opacity: 0.04 }}>
                <img
                    src="/abm-logo.jpeg"
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
                />
            </div>

            <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                
                {/* Back to Home Button */}
                <TransitionLink href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)", textDecoration: "none", marginBottom: "clamp(1.5rem, 4vw, 3rem)", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--neon-lime)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}>
                    <ArrowLeft size={20} />
                    <span className="stencil-text">BACK TO HOME</span>
                </TransitionLink>

                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <div className="sysReadyDot" style={{ width: "10px", height: "10px" }}></div>
                        <span className="stencil-text" style={{ color: "var(--neon-lime)" }}>CASE STUDY — 04</span>
                    </div>

                    <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "0.5rem", wordBreak: "break-word" }}>
                        ABM Marine
                    </h1>
                    <p style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)", color: "var(--neon-lime)", marginBottom: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500 }}>
                        Web Design & Development
                    </p>

                    {/* Premium Browser Mockup showing ABM Marine Hero */}
                    <div style={{
                        width: "100%",
                        background: "rgba(0, 0, 0, 0.4)",
                        borderRadius: "16px",
                        border: "1px solid var(--neon-lime-border)",
                        overflow: "hidden",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(163, 230, 53, 0.05)",
                        marginBottom: "clamp(2rem, 6vw, 5rem)",
                    }}>
                        {/* Browser Header Bar */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0.8rem 1.2rem",
                            background: "rgba(255, 255, 255, 0.03)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                        }}>
                            {/* Window controls */}
                            <div style={{ display: "flex", gap: "6px" }}>
                                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }}></span>
                                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#eab308" }}></span>
                                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }}></span>
                            </div>
                            {/* URL Bar */}
                            <div style={{
                                flex: "0 1 400px",
                                background: "rgba(0, 0, 0, 0.3)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                borderRadius: "6px",
                                fontSize: "0.75rem",
                                color: "var(--muted)",
                                padding: "0.25rem 0",
                                textAlign: "center",
                                fontFamily: "monospace",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.3rem"
                            }}>
                                <Globe size={12} />
                                <span>abmmarine.com</span>
                            </div>
                            {/* Empty space to balance layout */}
                            <div style={{ width: "42px" }}></div>
                        </div>

                        {/* Screenshot / Visual content */}
                        <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden", background: "#050f1e" }}>
                            <img
                                src="/abm-hero.png"
                                alt="ABM Marine Website Preview"
                                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease" }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                        
                        {/* Overview Glass Card */}
                        <div className="glass-card" style={{ padding: "clamp(1.5rem, 5vw, 3rem)" }}>
                            <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", marginBottom: "1rem", color: "var(--foreground)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>Project Overview</span>
                            </h3>
                            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                                ABM Marine Products is a premier Indian seafood exporter based in Kochi, Kerala, supplying premium 
                                Individually Quick Frozen (IQF) & Block Frozen shrimp, cuttlefish, squid, octopus, and fish to global markets 
                                including Europe, the USA, the Far East, and Australia since 2004. 
                            </p>
                            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                As their digital agency, Two Dots designed and developed a high-performance web experience reflecting their 
                                20-year legacy of quality, sustainability, and international standards. The website serves as a premium digital portal 
                                for global buyers, distributors, and quality compliance inspectors.
                            </p>
                            <button
                                onClick={() => window.open("https://abmmarine.com/", "_blank", "noopener,noreferrer")}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.8rem 2rem",
                                    background: "rgba(163, 230, 53, 0.1)",
                                    border: "1px solid var(--neon-lime-border)",
                                    color: "var(--neon-lime)",
                                    borderRadius: "9999px",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    transition: "all 0.3s"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "var(--neon-lime)";
                                    e.currentTarget.style.color = "#000";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(163, 230, 53, 0.1)";
                                    e.currentTarget.style.color = "var(--neon-lime)";
                                }}
                            >
                                <span>Visit Live Website</span>
                                <ExternalLink size={16} />
                            </button>
                        </div>

                        {/* Grid of Key Features */}
                        <div>
                            <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", marginBottom: "1.5rem", color: "var(--foreground)", fontWeight: 500 }}>
                                Key Website Features
                            </h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                                
                                <div className="glass-card" style={{ padding: "1.8rem", height: "100%" }}>
                                    <div style={{ color: "var(--neon-lime)", marginBottom: "1rem" }}>
                                        <Activity size={24} />
                                    </div>
                                    <h4 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", color: "var(--foreground)", fontWeight: 500 }}>
                                        Dynamic Ocean Theme
                                    </h4>
                                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>
                                        Custom modern typography (Inter & Playfair Display) paired with a deep marine theme (`#050f1e` background) and dynamic SVG rotating rays animating in the hero background.
                                    </p>
                                </div>

                                <div className="glass-card" style={{ padding: "1.8rem", height: "100%" }}>
                                    <div style={{ color: "var(--neon-lime)", marginBottom: "1rem" }}>
                                        <Shield size={24} />
                                    </div>
                                    <h4 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", color: "var(--foreground)", fontWeight: 500 }}>
                                        Compliance & Credentials
                                    </h4>
                                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>
                                        Highlights and visualizes ABM Marine's international credentials: BRCGS, USFDA registration, HACCP compliance, BAP, FSSAI, and Export Inspection Council of India certification.
                                    </p>
                                </div>

                                <div className="glass-card" style={{ padding: "1.8rem", height: "100%" }}>
                                    <div style={{ color: "var(--neon-lime)", marginBottom: "1rem" }}>
                                        <Truck size={24} />
                                    </div>
                                    <h4 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", color: "var(--foreground)", fontWeight: 500 }}>
                                        Global Reach & Logistics
                                    </h4>
                                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>
                                        Interactive lists of exported products customized by region: Europe (Cuttlefish, Squid, Octopus), US (Shrimp, Reef Cod), Far East, and Australia.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Technical Breakdown */}
                        <div className="glass-card" style={{ padding: "clamp(1.5rem, 5vw, 3rem)" }}>
                            <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", marginBottom: "1.2rem", color: "var(--foreground)", fontWeight: 500 }}>
                                Tech Stack & Implementation Details
                            </h3>
                            <ul style={{ 
                                display: "grid", 
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                                gap: "1rem", 
                                padding: 0, 
                                margin: 0, 
                                listStyleType: "none",
                                fontSize: "0.95rem",
                                color: "var(--muted)"
                            }}>
                                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "var(--neon-lime)" }}>✔</span>
                                    <span>Next.js 14 Framework</span>
                                </li>
                                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "var(--neon-lime)" }}>✔</span>
                                    <span>Framer Motion Animations</span>
                                </li>
                                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "var(--neon-lime)" }}>✔</span>
                                    <span>Vanilla CSS & Responsive Flexbox</span>
                                </li>
                                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "var(--neon-lime)" }}>✔</span>
                                    <span>Schema.org JSON-LD Structured Data</span>
                                </li>
                                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "var(--neon-lime)" }}>✔</span>
                                    <span>HACCP/USFDA Traceability Details</span>
                                </li>
                                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <span style={{ color: "var(--neon-lime)" }}>✔</span>
                                    <span>Optimized Image Loading & Formats</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
