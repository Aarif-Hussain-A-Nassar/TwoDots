"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <header style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            boxSizing: "border-box",
            padding: "2rem 5vw",
            zIndex: 50,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none"
        }}>
            <div style={{ pointerEvents: "auto", display: "flex", alignItems: "center", gap: "2rem", width: "100%", justifyContent: "space-between" }}>
                <div>
                    {/* Light Mode Logo */}
                    <Image
                        src="/logo black 1.svg"
                        alt="Logo Light"
                        width={180}
                        height={48}
                        className="logo-light"
                        priority
                    />
                    {/* Dark Mode Logo */}
                    <Image
                        src="/logo dark mode 1.svg"
                        alt="Logo Dark"
                        width={180}
                        height={48}
                        className="logo-dark"
                        priority
                    />
                </div>

                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    style={{
                        position: "relative",
                        width: "56px",
                        height: "28px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(150, 150, 150, 0.2)",
                        background: mounted
                            ? theme === "dark"
                                ? "linear-gradient(to right, #374151 50%, #a3e635 50%)"
                                : "linear-gradient(to right, #a3e635 50%, #e5e7eb 50%)"
                            : "#e5e7eb", // Fallback color
                        cursor: "pointer",
                        outline: "none",
                        transition: "background 0.3s ease",
                        flexShrink: 0
                    }}
                    aria-label="Toggle theme"
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "2px",
                            left: mounted && theme === "dark" ? "30px" : "2px",
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: "#ffffff",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            transition: "left 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                    />
                </button>
            </div>
        </header>
    );
}
