"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function InteractiveGlobe({ className = "" }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.1, 0.2], // Dark background
            markerColor: [0.1, 0.8, 1], // Cyan markers
            glowColor: [0.5, 0.5, 1], // Blue glow
            markers: [
                // Example markers
                { location: [25.2048, 55.2708], size: 0.1 }, // Dubai
                { location: [40.7128, -74.006], size: 0.05 }, // NY
                { location: [51.5074, -0.1278], size: 0.05 }, // London
                { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
                { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.005;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div
            className={`relative flex items-center justify-center w-full max-w-[600px] aspect-square mx-auto ${className}`}
        >
            <canvas
                ref={canvasRef}
                style={{ width: "100%", height: "100%", maxWidth: "600px", aspectRatio: 1 }}
            />
        </div>
    );
}
