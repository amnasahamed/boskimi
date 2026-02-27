"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

interface ParallaxScrollProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
}

export function ParallaxScroll({
    children,
    offset = 50,
    className = "",
}: ParallaxScrollProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    );
}
