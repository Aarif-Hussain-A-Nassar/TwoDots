"use client";

import { TransitionLink } from "../../components/TransitionLink";
import { ArrowLeft, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="section-padding scroll-container" style={{ paddingTop: "clamp(12vh, 15vw, 20vh)" }}>
            <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
                <TransitionLink href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)", textDecoration: "none", marginBottom: "clamp(1.5rem, 4vw, 3rem)", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--neon-lime)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}>
                    <ArrowLeft size={20} />
                    <span className="stencil-text">BACK TO HOME</span>
                </TransitionLink>

                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <div className="sysReadyDot" style={{ width: "10px", height: "10px" }}></div>
                        <span className="stencil-text" style={{ color: "var(--neon-lime)" }}>GET IN TOUCH</span>
                    </div>

                    <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "clamp(1.5rem, 4vw, 2rem)", wordBreak: "break-word" }}>
                        Start a Project
                    </h1>
                    
                    <form className="glass-card" style={{ padding: "clamp(1.5rem, 5vw, 3rem)", marginTop: "clamp(1.5rem, 5vw, 3rem)", display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <label htmlFor="name" style={{ color: "var(--muted)", fontSize: "0.9rem", letterSpacing: "0.05em" }}>NAME</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="What's your name?"
                                style={{ 
                                    width: "100%", 
                                    boxSizing: "border-box",
                                    padding: "1rem", 
                                    background: "rgba(255, 255, 255, 0.03)", 
                                    border: "1px solid var(--grid-color)", 
                                    borderRadius: "8px", 
                                    color: "var(--foreground)", 
                                    fontFamily: "var(--font-inter)", 
                                    fontSize: "1.1rem",
                                    outline: "none",
                                    transition: "border-color 0.3s"
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = "var(--neon-lime)"}
                                onBlur={(e) => e.currentTarget.style.borderColor = "var(--grid-color)"}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <label htmlFor="email" style={{ color: "var(--muted)", fontSize: "0.9rem", letterSpacing: "0.05em" }}>EMAIL</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="How can we reach you?"
                                style={{ 
                                    width: "100%", 
                                    boxSizing: "border-box",
                                    padding: "1rem", 
                                    background: "rgba(255, 255, 255, 0.03)", 
                                    border: "1px solid var(--grid-color)", 
                                    borderRadius: "8px", 
                                    color: "var(--foreground)", 
                                    fontFamily: "var(--font-inter)", 
                                    fontSize: "1.1rem",
                                    outline: "none",
                                    transition: "border-color 0.3s"
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = "var(--neon-lime)"}
                                onBlur={(e) => e.currentTarget.style.borderColor = "var(--grid-color)"}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <label htmlFor="message" style={{ color: "var(--muted)", fontSize: "0.9rem", letterSpacing: "0.05em" }}>MESSAGE</label>
                            <textarea 
                                id="message" 
                                placeholder="Tell us about your project or inquiry..."
                                rows={6}
                                style={{ 
                                    width: "100%", 
                                    boxSizing: "border-box",
                                    padding: "1rem", 
                                    background: "rgba(255, 255, 255, 0.03)", 
                                    border: "1px solid var(--grid-color)", 
                                    borderRadius: "8px", 
                                    color: "var(--foreground)", 
                                    fontFamily: "var(--font-inter)", 
                                    fontSize: "1.1rem",
                                    outline: "none",
                                    resize: "vertical",
                                    transition: "border-color 0.3s"
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = "var(--neon-lime)"}
                                onBlur={(e) => e.currentTarget.style.borderColor = "var(--grid-color)"}
                            />
                        </div>

                        <button 
                            type="button" 
                            className="hero-btn" 
                            style={{ 
                                display: "inline-flex", 
                                alignItems: "center", 
                                gap: "0.5rem", 
                                alignSelf: "flex-start",
                                marginTop: "1rem",
                                padding: "1rem 2.5rem",
                                fontSize: "1rem"
                            }}
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );    
}
