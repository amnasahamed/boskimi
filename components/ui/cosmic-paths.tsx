"use client";

import { cn } from "@/lib/utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

interface CosmicPathsProps {
  pathLengths: MotionValue[];
  className?: string;
}

// Cosmic color palette matching the website theme
const cosmicColors = [
  "hsl(221 83% 53%)",    // Primary - Deep Royal
  "hsl(189 94% 43%)",    // Accent - Electric Cyan
  "hsl(217 91% 60%)",    // Lighter primary
  "hsl(250 80% 65%)",    // Purple - cosmic feel
  "hsl(280 70% 60%)",    // Violet - cosmic feel
];

const transition = {
  duration: 0,
  ease: "linear" as const,
};

export const CosmicPaths = ({ pathLengths, className }: CosmicPathsProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          {/* Glow filters for cosmic effect */}
          <filter id="cosmicGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradients */}
          <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cosmicColors[0]} stopOpacity="0.2" />
            <stop offset="50%" stopColor={cosmicColors[0]} stopOpacity="0.8" />
            <stop offset="100%" stopColor={cosmicColors[0]} stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cosmicColors[1]} stopOpacity="0.2" />
            <stop offset="50%" stopColor={cosmicColors[1]} stopOpacity="0.8" />
            <stop offset="100%" stopColor={cosmicColors[1]} stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="pathGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cosmicColors[2]} stopOpacity="0.2" />
            <stop offset="50%" stopColor={cosmicColors[2]} stopOpacity="0.8" />
            <stop offset="100%" stopColor={cosmicColors[2]} stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="pathGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cosmicColors[3]} stopOpacity="0.2" />
            <stop offset="50%" stopColor={cosmicColors[3]} stopOpacity="0.8" />
            <stop offset="100%" stopColor={cosmicColors[3]} stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="pathGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cosmicColors[4]} stopOpacity="0.2" />
            <stop offset="50%" stopColor={cosmicColors[4]} stopOpacity="0.8" />
            <stop offset="100%" stopColor={cosmicColors[4]} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Constellation paths - flowing cosmic waves */}
        <motion.path
          d="M0 400C200 380 300 450 500 420C700 390 800 350 1000 380C1200 410 1300 360 1440 380"
          stroke="url(#pathGradient1)"
          strokeWidth="2"
          fill="none"
          filter="url(#cosmicGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          style={{ pathLength: pathLengths[0], opacity: useTransform(pathLengths[0], [0, 0.5], [0, 1]) }}
          transition={transition}
        />
        
        <motion.path
          d="M0 320C150 300 250 360 400 330C550 300 650 280 850 310C1050 340 1250 290 1440 320"
          stroke="url(#pathGradient2)"
          strokeWidth="2"
          fill="none"
          filter="url(#cosmicGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          style={{ pathLength: pathLengths[1], opacity: useTransform(pathLengths[1], [0, 0.5], [0, 1]) }}
          transition={transition}
        />
        
        <motion.path
          d="M0 240C180 220 280 280 450 250C620 220 750 200 950 230C1150 260 1280 210 1440 240"
          stroke="url(#pathGradient3)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#cosmicGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          style={{ pathLength: pathLengths[2], opacity: useTransform(pathLengths[2], [0, 0.5], [0, 1]) }}
          transition={transition}
        />
        
        <motion.path
          d="M0 180C120 160 220 220 380 190C540 160 680 140 880 170C1080 200 1220 150 1440 180"
          stroke="url(#pathGradient4)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#cosmicGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          style={{ pathLength: pathLengths[3], opacity: useTransform(pathLengths[3], [0, 0.5], [0, 1]) }}
          transition={transition}
        />
        
        <motion.path
          d="M0 120C100 100 180 160 320 130C460 100 600 80 800 110C1000 140 1180 90 1440 120"
          stroke="url(#pathGradient5)"
          strokeWidth="1"
          fill="none"
          filter="url(#cosmicGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          style={{ pathLength: pathLengths[4], opacity: useTransform(pathLengths[4], [0, 0.5], [0, 1]) }}
          transition={transition}
        />

        {/* Soft glow background paths */}
        <path
          d="M0 400C200 380 300 450 500 420C700 390 800 350 1000 380C1200 410 1300 360 1440 380"
          stroke={cosmicColors[0]}
          strokeWidth="8"
          fill="none"
          opacity="0.1"
          filter="url(#softGlow)"
        />
        <path
          d="M0 320C150 300 250 360 400 330C550 300 650 280 850 310C1050 340 1250 290 1440 320"
          stroke={cosmicColors[1]}
          strokeWidth="8"
          fill="none"
          opacity="0.1"
          filter="url(#softGlow)"
        />
      </svg>
    </div>
  );
};
