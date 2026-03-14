import { useRef } from "react";
import dynamic from "next/dynamic";
import { TransitionLink } from "./TransitionLink";

const ContactCanvas = dynamic(() => import("./Canvas/ContactCanvas"), { ssr: false });

export function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <footer id="contact" ref={containerRef} className="section-padding" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
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
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "3rem" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.9rem" }}>
                        <TransitionLink href="/contact" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>Email</TransitionLink>
                        <a href="#" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>LinkedIn</a>
                        <a href="https://www.instagram.com/twodots.dev?igsh=eHVtNWFnZW5uOTBq" target="_blank" rel="noopener noreferrer" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>Instagram</a>
                        <a href="https://wa.me/918129336728?text=Hi%20Two%20Dots!%20I%E2%80%99m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20project.%20Could%20you%20help%20me%3F" target="_blank" rel="noopener noreferrer" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>WhatsApp</a>
                        <a href="tel:+918129336728" style={{ padding: "0.5rem 1rem", border: "1px solid var(--grid-color)", borderRadius: "9999px", textDecoration: "none", color: "var(--foreground)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon-lime)"; e.currentTarget.style.color = "var(--neon-lime)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grid-color)"; e.currentTarget.style.color = "var(--foreground)"; }}>Phone</a>
                    </div>
                    
                    <div style={{ display: "flex" }}>
                        <TransitionLink href="/contact" style={{ padding: "0.8rem 2rem", border: "1px solid var(--neon-lime)", borderRadius: "9999px", textDecoration: "none", color: "var(--neon-lime)", background: "rgba(163,230,53,0.05)", fontWeight: 600, letterSpacing: "0.05em", fontSize: "1rem", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--neon-lime)"; e.currentTarget.style.color = "#000"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(163,230,53,0.05)"; e.currentTarget.style.color = "var(--neon-lime)"; }}>[ GET QUOTE NOW ]</TransitionLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
