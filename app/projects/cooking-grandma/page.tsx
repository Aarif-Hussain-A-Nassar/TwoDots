"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function CookingGrandmaPage() {
    return (
        <main className="section-padding min-h-screen" style={{ paddingTop: "20vh", position: "relative", zIndex: 10 }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--muted)", textDecoration: "none", marginBottom: "3rem", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--neon-lime)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}>
                    <ArrowLeft size={20} />
                    <span className="stencil-text">BACK TO HOME</span>
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <div className="sysReadyDot" style={{ width: "10px", height: "10px" }}></div>
                        <span className="stencil-text" style={{ color: "var(--neon-lime)" }}>CASE STUDY</span>
                    </div>

                    <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "2rem" }}>
                        Cooking Grandma
                    </h1>
                    
                    <div className="glass-card" style={{ padding: "3rem", marginTop: "3rem" }}>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--foreground)" }}>Overview</h3>
                        <p style={{ fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8 }}>
                            Bringing traditional recipes to the modern web. We designed and developed an intuitive, beautifully crafted web application for Cooking Grandma, enabling users to effortlessly explore, save, and share generations of culinary secrets.
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );    
}
