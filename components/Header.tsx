"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import styles from './header.module.css';

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header
            className={styles.headerContainer}
            style={{
                borderBottom: theme === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.15)"
                    : "1px solid rgba(0, 0, 0, 0.15)",
                background: mounted
                    ? theme === "dark"
                        ? "#000000" // Pitch black to hide the logo's black background box
                        : "rgba(255, 255, 255, 0.8)"
                    : "transparent",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
            }}
        >
            <div className={styles.innerFlex}>
                <div className={styles.logoGroup}>
                    {/* Light Mode Logo */}
                    <div className={styles.logo} style={{ position: "relative", display: mounted && theme === 'dark' ? 'none' : 'block' }}>
                        <Image
                            src="/logo black 1.svg"
                            alt="Logo Light"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                    {/* Dark Mode Logo */}
                    <div className={styles.logo} style={{ position: "relative", display: mounted && theme === 'dark' ? 'block' : 'none' }}>
                        <Image
                            src="/logo dark mode 1.svg"
                            alt="Logo Dark"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>

                    {/* Technical Micro Text */}
                    <div className={styles.sysStatus}>
                        <div style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: theme === "dark" ? "#a3e635" : "#16a34a",
                            boxShadow: theme === "dark" ? "0 0 8px #a3e635" : "none",
                            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" // Will define this in global CSS
                        }} />
                        SYS.READY
                    </div>
                </div>

                <div className={styles.toggleGroup}>
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
            </div>
        </header>
    );
}
