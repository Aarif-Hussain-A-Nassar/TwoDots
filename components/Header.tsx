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

    // Derive theme-dependent values only after mounting to prevent
    // SSR ↔ client hydration mismatches (all unresolved theme → neutral defaults)
    const isDark = mounted && theme === "dark";

    return (
        <header
            className={styles.headerContainer}
            style={{
                borderBottom: mounted
                    ? isDark
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : "1px solid rgba(0, 0, 0, 0.1)"
                    : "1px solid transparent",          // neutral SSR default
                background: mounted
                    ? isDark ? "#000000" : "#ffffff"
                    : "transparent",
            }}
        >
            <div className={styles.innerFlex}>
                {/* ── Logo Group ─────────────────────────────── */}
                <div className={styles.logoGroup}>
                    {/* Light Mode Logo — hidden in dark mode via CSS (.dark class on <html>) */}
                    <div className={`${styles.logo} ${styles.logoLight}`} style={{ position: "relative" }}>
                        <Image
                            src="/logo black 1.svg"
                            alt="Logo Light"
                            fill
                            style={{ objectFit: "contain", objectPosition: "left center" }}
                            priority
                        />
                    </div>

                    {/* Dark Mode Logo — shown in dark mode via CSS */}
                    <div className={`${styles.logo} ${styles.logoDark}`} style={{ position: "relative" }}>
                        <Image
                            src="/logo dark mode 1.svg"
                            alt="Logo Dark"
                            fill
                            style={{ objectFit: "contain", objectPosition: "left center" }}
                            priority
                        />
                    </div>

                    {/* SYS.READY micro status — hidden on mobile via CSS */}
                    <div className={styles.sysStatus}>
                        <div
                            style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: mounted
                                    ? isDark ? "#a3e635" : "#16a34a"
                                    : "#16a34a",          // neutral SSR default
                                boxShadow: isDark ? "0 0 8px #a3e635" : "none",
                                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                            }}
                        />
                        SYS.READY
                    </div>
                </div>

                {/* ── Toggle Group ───────────────────────────── */}
                <div className={styles.toggleGroup}>
                    <button
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        className={styles.themeToggle}
                        style={{
                            border: mounted
                                ? isDark
                                    ? "1px solid rgba(255, 255, 255, 0.2)"
                                    : "1px solid rgba(0, 0, 0, 0.15)"
                                : "1px solid rgba(0, 0, 0, 0.15)", // neutral SSR default
                            background: mounted
                                ? isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"
                                : "transparent",
                        }}
                        aria-label="Toggle theme"
                    >
                        <div
                            className={styles.toggleKnob}
                            style={{
                                // knob slides right in dark mode; stays left on SSR (no flash)
                                left: isDark ? "calc(100% - var(--knob-offset, 25px))" : "3px",
                                background: mounted
                                    ? isDark ? "#ffffff" : "#111111"
                                    : "#111111",          // neutral SSR default
                                boxShadow: isDark
                                    ? "0 0 10px rgba(255, 255, 255, 0.3)"
                                    : "0 2px 5px rgba(0,0,0,0.2)",
                            }}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
