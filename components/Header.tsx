"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";


import styles from './header.module.css';

const ContactCanvas = dynamic(() => import("./Canvas/ContactCanvas"), { ssr: false });

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (!mounted) return;
        document.body.classList.toggle('menu-open', isMenuOpen);

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen, mounted]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // We only need 'theme' and 'setTheme' from Next-Themes hook.
    // CSS :global(.dark) handles all visual toggling, preventing SSR flash.
    const isDark = mounted && theme === "dark";

    return (
        <header className={styles.headerContainer}>
            <div className={styles.innerFlex}>
                {/* ── Logo Group ─────────────────────────────── */}
                <Link href="/" className={styles.logoGroup}>
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
                </Link>

                {/* ── Actions Group (Nav + Toggle) ───────────── */}
                <div className={styles.actionsGroup}>
                    <nav className={styles.navGroup}>
                        <a href="#about" className={styles.navLink}>
                            <span className={styles.navNumber}>01</span>
                            PROFILE
                        </a>
                        <a href="#services" className={styles.navLink}>
                            <span className={styles.navNumber}>02</span>
                            SERVICES
                        </a>
                        <a href="#projects" className={styles.navLink}>
                            <span className={styles.navNumber}>03</span>
                            PROJECTS
                        </a>
                        <a href="#team" className={styles.navLink}>
                            <span className={styles.navNumber}>04</span>
                            TEAM
                        </a>
                        <a href="#contact" className={styles.navLink}>
                            <span className={styles.navNumber}>05</span>
                            CONTACT
                        </a>
                    </nav>

                    <div className={styles.toggleGroup}>
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={styles.themeToggle}
                            aria-label="Toggle theme"
                        >
                            <div className={styles.toggleKnob} />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={styles.mobileToggle}
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Menu Overlay ───────────────────────── */}
            <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ''}`}>
                <ContactCanvas />
                <nav className={styles.mobileNav}>
                    <a href="#about" className={styles.mobileNavLink} onClick={closeMenu}>
                        <span className={styles.mobileNavNumber}>01</span>
                        <span className={styles.mobileNavText}>PROFILE</span>
                    </a>
                    <a href="#services" className={styles.mobileNavLink} onClick={closeMenu}>
                        <span className={styles.mobileNavNumber}>02</span>
                        <span className={styles.mobileNavText}>SERVICES</span>
                    </a>
                    <a href="#projects" className={styles.mobileNavLink} onClick={closeMenu}>
                        <span className={styles.mobileNavNumber}>03</span>
                        <span className={styles.mobileNavText}>SELECTED WORK</span>
                    </a>
                    <a href="#team" className={styles.mobileNavLink} onClick={closeMenu}>
                        <span className={styles.mobileNavNumber}>04</span>
                        <span className={styles.mobileNavText}>TEAM</span>
                    </a>
                    <a href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>
                        <span className={styles.mobileNavNumber}>05</span>
                        <span className={styles.mobileNavText}>CONTACT</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
