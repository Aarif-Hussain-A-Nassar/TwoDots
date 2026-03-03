"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="min-h-screen flex-center flex-column" style={{ padding: "0 5vw" }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: "100%", maxWidth: "1200px" }}
            >
                <span className="stencil-text" style={{ marginBottom: "2rem", display: "block" }}>
                    moro.
                </span>
                <h1 style={{
                    fontSize: "clamp(3rem, 8vw, 8rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: "2rem"
                }}>
                    design & strategy <br />
                    with staying power.
                </h1>

                <div style={{ display: "flex", gap: "4rem", marginTop: "4rem" }}>
                    <div>
                        <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>5+</h3>
                        <p className="stencil-text">Years in the game.</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>120+</h3>
                        <p className="stencil-text">Happy clients.</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>$50M+</h3>
                        <p className="stencil-text">Raised for clients.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
