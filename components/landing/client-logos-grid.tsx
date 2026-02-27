"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const clients = [
    { name: "TechCorp", logo: "/placeholder.svg" },
    { name: "InnovateLabs", logo: "/placeholder.svg" },
    { name: "FutureSystem", logo: "/placeholder.svg" },
    { name: "AlphaWave", logo: "/placeholder.svg" },
    { name: "NebulaSoft", logo: "/placeholder.svg" },
    { name: "QuantumBits", logo: "/placeholder.svg" },
    { name: "StellarNet", logo: "/placeholder.svg" },
    { name: "CosmosData", logo: "/placeholder.svg" },
];

export function ClientLogosGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    return (
        <section ref={containerRef} className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
                    className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12"
                >
                    Trusted by Industry Leaders
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: isInView ? 1 : 0.2, scale: isInView ? 1 : 0.9 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group relative h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                        >
                            {/* This would be an Image in production, using text for now */}
                            <div className="text-xl md:text-2xl font-serif font-bold text-foreground/80 group-hover:text-accent transition-colors">
                                {client.name}
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
