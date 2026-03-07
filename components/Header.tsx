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
            top: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 4rem)",
            maxWidth: "1000px",
            height: "80px",
            borderRadius: "9999px",
            border: theme === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.05)",
            background: mounted
                ? theme === "dark"
                    ? "rgba(10, 10, 10, 0.4)"
                    : "rgba(255, 255, 255, 0.4)"
                : "transparent",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: theme === "dark"
                ? "0 4px 30px rgba(0, 0, 0, 0.5)"
                : "0 4px 30px rgba(0, 0, 0, 0.05)",
            padding: "0 2rem",
            zIndex: 50,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "auto",
            transition: "all 0.4s ease"
        }}>
            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <div>
                    {/* Light Mode Logo */}
                    <Image
                        src="/logo black 1.svg"
                        alt="Logo Light"
                        width={140}
                        height={36}
                        className="logo-light"
                        priority
                        style={{ display: mounted && theme === 'dark' ? 'none' : 'block' }}
                    />
                    {/* Dark Mode Logo */}
                    <Image
                        src="/logo dark mode 1.svg"
                        alt="Logo Dark"
                        width={140}
                        height={36}
                        className="logo-dark"
                        priority
                        style={{ display: mounted && theme === 'dark' ? 'block' : 'none' }}
                    />
                </div>

                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    style={{
                        position: "relative",
                        width: "56px",
                        height: "28px",
                        borderRadius: "9999px",
                        border: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.15)",
                        background: mounted
                            ? theme === "dark"
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(0,0,0,0.03)"
                            : "transparent",
                        cursor: "pointer",
                        outline: "none",
                        transition: "all 0.4s ease",
                        flexShrink: 0,
                        backdropFilter: "blur(4px)"
                    }}
                    aria-label="Toggle theme"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "2px",
                            left: mounted && theme === "dark" ? "30px" : "2px",
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: theme === "dark" ? "#ffffff" : "#111111",
                            boxShadow: theme === "dark"
                                ? "0 0 10px rgba(255, 255, 255, 0.3)"
                                : "0 2px 5px rgba(0,0,0,0.2)",
                            transition: "left 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, box-shadow 0.4s ease"
                        }}
                    />
                </button>
            </div>
        </header>
    );
}
