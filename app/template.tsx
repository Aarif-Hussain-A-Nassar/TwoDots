"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // As soon as this new template mounts, we strip away the exit transition class 
        // to allow Framer Motion to handle the fluid entrance.
        document.body.classList.remove("is-transitioning");
    }, []);

    return (
        <motion.div
            id="page-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
            {children}
        </motion.div>
    );
}
