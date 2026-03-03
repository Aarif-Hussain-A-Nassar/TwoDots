"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    // By passing container to useScroll, framer-motion knows to track *this* element's scroll
    // since this element is our absolute positioned scroll container over the fixed canvas
    useScroll({ container: containerRef });

    return (
        <div
            ref={containerRef}
            className="scroll-container"
            style={{ pointerEvents: "none" }} // Let clicks pass through if needed
        >
            <div style={{ minHeight: "200vh", pointerEvents: "auto" }}>
                <Hero />
                <About />
                <Projects />

                {/* Footer placeholder */}
                <footer className="section-padding flex-center" style={{ minHeight: "50vh", borderTop: "1px solid var(--accent)" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 6vw, 5rem)", textAlign: "center" }}>
                        let's build <br /> something great.
                    </h2>
                </footer>
            </div>
        </div>
    );
}
