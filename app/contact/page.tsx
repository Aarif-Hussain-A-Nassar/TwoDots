"use client";

import { useState } from "react";

import { TransitionLink } from "../../components/TransitionLink";
import { ArrowLeft, Send, Phone, Mail, Share2, Instagram, Linkedin } from "lucide-react";
import styles from "./contact.module.css";
import Footer from "../../components/Footer";
import dynamic from "next/dynamic";

const ContactCanvas = dynamic(() => import("../../components/Canvas/ContactCanvas"), { ssr: false });

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
            const res = await fetch("https://formspree.io/f/xlgppeqb", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }
    return (
        <main className="section-padding scroll-container" style={{ paddingTop: "clamp(6rem, 15vh, 12rem)", position: "relative" }}>
            {/* 3D Canvas Background */}
            <ContactCanvas />

            <div className={styles.contactContainer}>
                <TransitionLink
                    href="/"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--muted)",
                        textDecoration: "none",
                        marginBottom: "2rem",
                        transition: "color 0.3s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--neon-lime)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
                >
                    <ArrowLeft size={20} />
                    <span className="stencil-text">BACK TO HOME</span>
                </TransitionLink>

                <div className={styles.contactHeader}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <div className="sysReadyDot" style={{ width: "10px", height: "10px" }}></div>
                        <span className="stencil-text" style={{ color: "var(--neon-lime)" }}>GET IN TOUCH</span>
                    </div>
                    <h1>Let's talk!</h1>
                    <p>Here's how you can connect with the team Two Dots:</p>
                </div>

                <div className={styles.connectGrid}>
                    <div className={styles.connectCard}>
                        <div className={styles.cardTitle}>Phone</div>
                        <div className={styles.cardContent}>+91 81293 36728</div>
                        <p className={styles.cardDescription}>
                            Give us a call and chat directly with our friendly team. We're always happy to answer any questions.
                        </p>
                    </div>

                    <div className={styles.connectCard}>
                        <div className={styles.cardTitle}>Email</div>
                        <div className={styles.cardContent}><a href="mailto:twodots.dev.co@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>twodots.dev.co@gmail.com</a></div>
                        <p className={styles.cardDescription}>
                            Send us a detailed message. We'll get back to you as soon as possible to discuss your creative project further.
                        </p>
                    </div>

                    <div className={styles.connectCard}>
                        <div className={styles.cardTitle}>Social Media</div>
                        <div className={styles.socialIcons}>
                            <a href="https://www.instagram.com/twodots.dev?igsh=eHVtNWFnZW5uOTBq" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/company/hello-two-dots/about/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                        <p className={styles.cardDescription}>
                            Follow us on Social Media Platforms for a glimpse into our creative world, industry insights, and projects.
                        </p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h2>Start a Project</h2>
                    <form className="glass-card" onSubmit={handleSubmit} style={{ padding: "clamp(1.5rem, 5vw, 3rem)", display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div className={styles.formGrid}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <label htmlFor="name" style={{ color: "var(--muted)", fontSize: "0.8rem", letterSpacing: "0.1em", fontWeight: 600 }}>NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="What's your name?"
                                    style={{
                                        width: "100%",
                                        boxSizing: "border-box",
                                        padding: "1.2rem",
                                        background: "rgba(255, 255, 255, 0.02)",
                                        border: "1px solid var(--grid-color)",
                                        borderRadius: "12px",
                                        color: "var(--foreground)",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "1rem",
                                        outline: "none",
                                        transition: "all 0.3s"
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = "var(--neon-lime)";
                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = "var(--grid-color)";
                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                                    }}
                                />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <label htmlFor="email" style={{ color: "var(--muted)", fontSize: "0.8rem", letterSpacing: "0.1em", fontWeight: 600 }}>EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="How can we reach you?"
                                    style={{
                                        width: "100%",
                                        boxSizing: "border-box",
                                        padding: "1.2rem",
                                        background: "rgba(255, 255, 255, 0.02)",
                                        border: "1px solid var(--grid-color)",
                                        borderRadius: "12px",
                                        color: "var(--foreground)",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "1rem",
                                        outline: "none",
                                        transition: "all 0.3s"
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = "var(--neon-lime)";
                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = "var(--grid-color)";
                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <label htmlFor="message" style={{ color: "var(--muted)", fontSize: "0.8rem", letterSpacing: "0.1em", fontWeight: 600 }}>MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Tell us about your project or inquiry..."
                                rows={6}
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                    padding: "1.2rem",
                                    background: "rgba(255, 255, 255, 0.02)",
                                    border: "1px solid var(--grid-color)",
                                    borderRadius: "12px",
                                    color: "var(--foreground)",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "1rem",
                                    outline: "none",
                                    resize: "vertical",
                                    transition: "all 0.3s"
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "var(--neon-lime)";
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "var(--grid-color)";
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                                }}
                            />
                        </div>

                        {status === "success" && (
                            <p style={{ color: "var(--neon-lime)", fontWeight: 600, fontSize: "0.95rem" }}>
                                ✓ Message sent! We'll get back to you soon.
                            </p>
                        )}
                        {status === "error" && (
                            <p style={{ color: "#ff6b6b", fontWeight: 600, fontSize: "0.95rem" }}>
                                ✗ Something went wrong. Please try again or email us directly.
                            </p>
                        )}
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="hero-btn"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                alignSelf: "flex-start",
                                padding: "1rem 2.5rem",
                                fontSize: "1rem",
                                opacity: status === "loading" ? 0.7 : 1,
                                cursor: status === "loading" ? "not-allowed" : "pointer"
                            }}
                        >
                            <span>{status === "loading" ? "SENDING..." : "SEND MESSAGE"}</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}
