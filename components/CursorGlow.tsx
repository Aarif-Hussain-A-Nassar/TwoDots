"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    if (!mounted || theme !== "dark") return null;

    // Define the glow color for dark mode
    // Dark mode: a subtle stark white spotlight
    const glowColor = "rgba(255, 255, 255, 0.08)";

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 9999,
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
                transition: "background 0.1s ease",
            }}
        />
    );
}
