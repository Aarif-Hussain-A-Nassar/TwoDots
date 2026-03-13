"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function TransitionLink({ children, href, ...props }: TransitionLinkProps) {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Only prevent default if it's a standard internal click
        if (e.ctrlKey || e.metaKey || e.button !== 0) return;

        e.preventDefault();

        // Add the transitioning class to body to trigger exit animations
        document.body.classList.add("is-transitioning");

        // Wait for the exit animation duration (matching CSS)
        await sleep(750);

        // Proceed to navigation
        router.push(href.toString());
    };

    return (
        <Link href={href} onClick={handleTransition} {...props}>
            {children}
        </Link>
    );
}
