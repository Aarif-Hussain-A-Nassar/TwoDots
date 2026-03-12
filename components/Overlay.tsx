"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    // By passing container to useScroll, framer-motion knows to track *this* element's scroll
    // since this element is our absolute positioned scroll container over the fixed canvas
    useScroll({ container: containerRef });

    return (
        <div
            ref={containerRef}
            className="scroll-container"
        >
            <div style={{ minHeight: "200vh" }}>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}
