"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    pulseOffset: number;
}

export function ConstellationNetwork({ className = "" }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const size = 600;
        canvas.width = size * 2;
        canvas.height = size * 2;
        ctx.scale(2, 2);

        // Initialize nodes
        const nodeCount = 40;
        nodesRef.current = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * size,
            y: Math.random() * size,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 1,
            pulseOffset: Math.random() * Math.PI * 2,
        }));

        // Add some larger "hub" nodes
        for (let i = 0; i < 5; i++) {
            nodesRef.current[i].size = Math.random() * 3 + 3;
        }

        let time = 0;

        const animate = () => {
            time += 0.02;

            // Clear canvas with background
            ctx.fillStyle = "rgba(10, 10, 20, 0.1)";
            ctx.fillRect(0, 0, size, size);

            const nodes = nodesRef.current;

            // Update node positions
            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges with padding
                const padding = 50;
                if (node.x < padding || node.x > size - padding) node.vx *= -1;
                if (node.y < padding || node.y > size - padding) node.vy *= -1;

                // Keep in bounds
                node.x = Math.max(padding, Math.min(size - padding, node.x));
                node.y = Math.max(padding, Math.min(size - padding, node.y));
            });

            // Draw connections
            const maxDistance = 120;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.5;
                        const gradient = ctx.createLinearGradient(
                            nodes[i].x, nodes[i].y,
                            nodes[j].x, nodes[j].y
                        );
                        gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`); // Purple
                        gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`); // Blue

                        ctx.beginPath();
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes with glow
            nodes.forEach((node) => {
                const pulse = Math.sin(time * 2 + node.pulseOffset) * 0.3 + 0.7;
                const glowSize = node.size * 3 * pulse;

                // Outer glow
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, glowSize
                );
                gradient.addColorStop(0, `rgba(139, 92, 246, ${0.4 * pulse})`);
                gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.2 * pulse})`);
                gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + pulse * 0.2})`;
                ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw occasional sparkle effect
            if (Math.random() < 0.02) {
                const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
                const sparkleGradient = ctx.createRadialGradient(
                    randomNode.x, randomNode.y, 0,
                    randomNode.x, randomNode.y, 30
                );
                sparkleGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
                sparkleGradient.addColorStop(0.2, "rgba(139, 92, 246, 0.4)");
                sparkleGradient.addColorStop(1, "rgba(139, 92, 246, 0)");

                ctx.beginPath();
                ctx.fillStyle = sparkleGradient;
                ctx.arc(randomNode.x, randomNode.y, 30, 0, Math.PI * 2);
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        // Initial clear
        ctx.fillStyle = "rgb(10, 10, 20)";
        ctx.fillRect(0, 0, size, size);

        animate();

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={`relative flex items-center justify-center w-full max-w-[600px] aspect-square mx-auto ${className}`}
        >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 blur-3xl" />

            {/* Canvas container with circular mask */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-primary/20">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    style={{
                        width: "100%",
                        height: "100%",
                        maxWidth: "600px",
                        aspectRatio: 1,
                        borderRadius: "50%"
                    }}
                />
            </div>

            {/* Subtle ring border */}
            <div className="absolute inset-0 rounded-full border border-primary/20" />
        </motion.div>
    );
}
