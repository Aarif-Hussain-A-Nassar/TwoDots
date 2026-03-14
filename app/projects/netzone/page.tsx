"use client";

import { TransitionLink } from "../../../components/TransitionLink";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function NetzonePage() {
    return (
        <main className="section-padding scroll-container" style={{ paddingTop: "clamp(12vh, 15vw, 20vh)", position: "relative" }}>
            {/* Large Watermark Background */}
            <div className="page-watermark" style={{ opacity: 0.05 }}>
                <img
                    src="/logo-light.png"
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply" }}
                    className="light-logo-only"
                />
                <img
                    src="/logo-dark.png"
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "screen" }}
                    className="dark-logo-only"
                />
            </div>

            <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
                            A complete digital platform developed for NetZone to showcase their security and automation solutions.
                            The website highlights their services including CCTV systems, biometric access control, networking,
                            gate automation, and smart home technologies. Built with a modern, high-performance architecture,
                            the platform ensures fast loading speeds, intuitive navigation, and a professional interface that
                            helps customers easily explore services, view completed projects, and connect with the NetZone team.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
