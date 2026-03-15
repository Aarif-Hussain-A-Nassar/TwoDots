"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* ── Brand Section ── */}
                <div className={styles.footerBrand}>
                    <div className={styles.footerLogo}>
                        <Image
                            src="/Twodots green dark mode.png"
                            alt="Two Dots Logo"
                            fill
                            style={{ objectFit: "contain", objectPosition: "left" }}
                        />
                    </div>
                    <p className={styles.footerDescription}>
                        Crafting high-end digital experiences. We engineer modern, scalable, and visually stunning web solutions for forward-thinking brands.
                    </p>
                    <div className={styles.footerSocials}>
                        <a href="https://www.instagram.com/twodots.dev?igsh=eHVtNWFnZW5uOTBq" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="https://www.linkedin.com/company/hello-two-dots/about/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* ── Services Section ── */}
                <div>
                    <h3 className={styles.footerSectionTitle}>Services</h3>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/#services" className={styles.footerLink}>Web Development</Link></li>
                        <li><Link href="/#services" className={styles.footerLink}>UI/UX Design</Link></li>
                        <li><Link href="/#services" className={styles.footerLink}>E-commerce</Link></li>
                        <li><Link href="/#services" className={styles.footerLink}>SEO Optimization</Link></li>
                        <li><Link href="/#services" className={styles.footerLink}>Content Strategy</Link></li>
                    </ul>
                </div>

                {/* ── Navigation Section ── */}
                <div>
                    <h3 className={styles.footerSectionTitle}>Explore</h3>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/#about" className={styles.footerLink}>Profile</Link></li>
                        <li><Link href="/#projects" className={styles.footerLink}>Projects</Link></li>
                        <li><Link href="/#team" className={styles.footerLink}>Team</Link></li>
                        <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
                        <li><Link href="/#contact" className={styles.footerLink}>Get Quote</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Two Dots. All rights reserved.</p>
                <div className={styles.bottomLinks}>
                    <Link href="#" className={styles.bottomLink}>Terms of Service</Link>
                    <Link href="#" className={styles.bottomLink}>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
