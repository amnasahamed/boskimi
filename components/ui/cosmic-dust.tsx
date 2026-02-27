"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

export function CosmicDust() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const colors = ["#a8eb12", "#00F0FF", "#ffffff"]; // Neon Lime, Cyan, White

        // Reduce particles on mobile for better performance
        const particleCount = isMobile ? 15 : 50;
        // Lower frame rate on mobile
        let lastTime = 0;
        const targetFPS = isMobile ? 20 : 60;
        const frameInterval = 1000 / targetFPS;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3, // Slower movement
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const animate = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(animate);

            // Throttle frame rate on mobile
            const deltaTime = currentTime - lastTime;
            if (deltaTime < frameInterval) return;
            lastTime = currentTime - (deltaTime % frameInterval);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Basic movement
                p.x += p.vx;
                p.y += p.vy;

                // Mouse interaction - disabled on mobile for performance
                if (!isMobile) {
                    const dx = p.x - mouseRef.current.x;
                    const dy = p.y - mouseRef.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 150;

                    if (distance < maxDist) {
                        const force = (maxDist - distance) / maxDist;
                        const angle = Math.atan2(dy, dx);
                        p.vx += Math.cos(angle) * force * 0.05;
                        p.vy += Math.sin(angle) * force * 0.05;
                    }
                }

                // Friction
                p.vx *= 0.99;
                p.vy *= 0.99;

                // Bounce off walls
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.6;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isMobile) {
                mouseRef.current = { x: e.clientX, y: e.clientY };
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[0]"
        />
    );
}
