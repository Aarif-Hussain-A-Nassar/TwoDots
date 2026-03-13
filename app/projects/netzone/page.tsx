"use client";

import { TransitionLink } from "../../../components/TransitionLink";
import { ArrowLeft } from "lucide-react";

export default function NetzonePage() {
    return (
        <main className="section-padding min-h-screen" style={{ paddingTop: "clamp(12vh, 15vw, 20vh)", position: "relative", zIndex: 10 }}>
            <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
                <TransitionLink href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)", textDecoration: "none", marginBottom: "clamp(1.5rem, 4vw, 3rem)", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--neon-lime)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}>
                    <ArrowLeft size={20} />
                    <span className="stencil-text">BACK TO HOME</span>
                </TransitionLink>

                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <div className="sysReadyDot" style={{ width: "10px", height: "10px" }}></div>
                        <span className="stencil-text" style={{ color: "var(--neon-lime)" }}>CASE STUDY</span>
                    </div>

                    <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "clamp(1.5rem, 4vw, 2rem)", wordBreak: "break-word" }}>
                        Netzone
                    </h1>
                    
                    <div className="glass-card" style={{ padding: "clamp(1.5rem, 5vw, 3rem)", marginTop: "clamp(1.5rem, 5vw, 3rem)" }}>
                        <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", marginBottom: "1rem", color: "var(--foreground)" }}>Overview</h3>
                        <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--muted)", lineHeight: 1.8 }}>
                            A complete web development transformation for Netzone. We built a high-performance digital platform tailored to elevate their online presence, focusing on ultra-fast load times, seamless user experience, and a stunning modern design aesthetic.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );    
}
