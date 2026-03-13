import { useRef } from "react";
import dynamic from "next/dynamic";
import { TransitionLink } from "./TransitionLink";

const ContactCanvas = dynamic(() => import("./Canvas/ContactCanvas"), { ssr: false });

export function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <footer ref={containerRef} className="section-padding" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
            {/* 3D Canvas Background */}
            <ContactCanvas />

            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(163,230,53,0.3) 50%, transparent 100%)", zIndex: 1 }}></div>

            <div style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <div className="sysReadyDot" style={{ width: "8px", height: "8px" }}></div>
                    <h2 className="stencil-text" style={{ margin: 0, letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--neon-lime)" }}>
                        05 — CONTACT
                    </h2>
                </div>
                <h2 style={{ fontSize: "clamp(3rem, 10vw, 8rem)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>
                    Let's build <br /> <span style={{ color: "var(--muted)", fontWeight: 400 }}>the future.</span>
                </h2>
                <div style={{ display: "flex", gap: "1.5rem", marginTop: "3rem", fontSize: "0.9rem" }}>
                    <TransitionLink href="/contact" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>Email</TransitionLink>
                    <a href="#" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>LinkedIn</a>
                    <a href="#" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>Instagram</a>
                    <a href="#" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>Phone</a>
                </div>
            </div>
        </footer>
    );
}
