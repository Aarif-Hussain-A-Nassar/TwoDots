"use client";

import { TransitionLink } from "../../components/TransitionLink";
import { ArrowLeft, Send, Phone, Mail, Share2, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import styles from "./contact.module.css";
import Footer from "../../components/Footer";

export default function ContactPage() {
    return (
        <main className="section-padding scroll-container" style={{ paddingTop: "clamp(6rem, 15vh, 12rem)" }}>
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
                        <div className={styles.cardContent}>+91 7000000000</div>
                        <p className={styles.cardDescription}>
                            Give us a call and chat directly with our friendly team. We're always happy to answer any questions.
                        </p>
                    </div>

                    <div className={styles.connectCard}>
                        <div className={styles.cardTitle}>Email</div>
                        <div className={styles.cardContent}>hello@twodots.co</div>
                        <p className={styles.cardDescription}>
                            Send us a detailed message. We'll get back to you as soon as possible to discuss your creative project further.
                        </p>
                    </div>

                    <div className={styles.connectCard}>
                        <div className={styles.cardTitle}>Social Media</div>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="GitHub"><Github size={20} /></a>
                        </div>
                        <p className={styles.cardDescription}>
                            Follow us on Social Media Platforms for a glimpse into our creative world, industry insights, and projects.
                        </p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h2>Start a Project</h2>
                    <form className="glass-card" style={{ padding: "clamp(1.5rem, 5vw, 3rem)", display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <label htmlFor="name" style={{ color: "var(--muted)", fontSize: "0.8rem", letterSpacing: "0.1em", fontWeight: 600 }}>NAME</label>
                                <input 
                                    type="text" 
                                    id="name" 
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

                        <button 
                            type="button" 
                            className="hero-btn" 
                            style={{ 
                                display: "inline-flex", 
                                alignItems: "center", 
                                gap: "0.75rem", 
                                alignSelf: "flex-start",
                                padding: "1rem 2.5rem",
                                fontSize: "1rem"
                            }}
                        >
                            <span>SEND MESSAGE</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );    
}
