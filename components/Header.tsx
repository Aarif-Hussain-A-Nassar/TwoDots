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

    // We only need 'theme' and 'setTheme' from Next-Themes hook.
    // CSS :global(.dark) handles all visual toggling, preventing SSR flash.
    const isDark = mounted && theme === "dark";

    return (
        <header className={styles.headerContainer}>
            <div className={styles.innerFlex}>
                {/* ── Logo Group ─────────────────────────────── */}
                <div className={styles.logoGroup}>
                    {/* Light Mode Logo — hidden in dark mode via CSS (.dark class on <html>) */}
                    <div className={`${styles.logo} ${styles.logoLight}`} style={{ position: "relative" }}>
                        <Image
                            src="/Twodots green light mode.png"
                            alt="Logo Light"
                            fill
                            style={{ objectFit: "contain", objectPosition: "left center" }}
                            priority
                        />
                    </div>

                    {/* Dark Mode Logo — shown in dark mode via CSS */}
                    <div className={`${styles.logo} ${styles.logoDark}`} style={{ position: "relative" }}>
                        <Image
                            src="/Twodots green dark mode.png"
                            alt="Logo Dark"
                            fill
                            style={{ objectFit: "contain", objectPosition: "left center" }}
                            priority
                        />
                    </div>

                    {/* SYS.READY micro status — hidden on mobile via CSS */}
                    <div className={styles.sysStatus}>
                        <div className={styles.sysReadyDot} />
                        SYS.READY
                    </div>
                </div>

                {/* ── Toggle Group ───────────────────────────── */}
                <div className={styles.toggleGroup}>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className={styles.themeToggle}
                        aria-label="Toggle theme"
                    >
                        <div className={styles.toggleKnob} />
                    </button>
                </div>
            </div>
        </header>
    );
}
