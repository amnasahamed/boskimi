"use client";

import { motion } from "framer-motion";
import React from "react";

export function FloatingElement({
    children,
    delay = 0,
    duration = 3,
    yOffset = 10,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
}) {
    return (
        <motion.div
            animate={{
                y: [0, -yOffset, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
