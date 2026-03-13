"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  text = "CPU",
  showCpuConnections = true,
  lineMarkerSize = 18,
  animateText = true,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {
  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="0 0 200 100"
    >
      {/* Base paths (static) */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.3"
      >
        <path d="M 10 20 h 79.5 q 5 0 5 5 v 30" />
        <path d="M 180 10 h -69.7 q -5 0 -5 5 v 30" />
        <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
        <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
        <path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" />
        <path d="M 94.8 95 v -36" />
        <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
        <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
      </g>

      {/* Path drawing animations */}
      {animateLines && (
        <g stroke="currentColor" fill="none" strokeWidth="0.3" opacity="0.6">
          <path d="M 10 20 h 79.5 q 5 0 5 5 v 30" strokeDasharray="120" strokeDashoffset="120">
            <animate attributeName="stroke-dashoffset" from="120" to="0" dur="1s" fill="freeze" />
          </path>
          <path d="M 180 10 h -69.7 q -5 0 -5 5 v 30" strokeDasharray="120" strokeDashoffset="120">
            <animate attributeName="stroke-dashoffset" from="120" to="0" dur="1s" begin="0.2s" fill="freeze" />
          </path>
          <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" strokeDasharray="50" strokeDashoffset="50">
            <animate attributeName="stroke-dashoffset" from="50" to="0" dur="0.8s" begin="0.4s" fill="freeze" />
          </path>
          <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" strokeDasharray="60" strokeDashoffset="60">
            <animate attributeName="stroke-dashoffset" from="60" to="0" dur="0.8s" begin="0.6s" fill="freeze" />
          </path>
          <path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" strokeDasharray="100" strokeDashoffset="100">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" begin="0.8s" fill="freeze" />
          </path>
          <path d="M 94.8 95 v -36" strokeDasharray="40" strokeDashoffset="40">
            <animate attributeName="stroke-dashoffset" from="40" to="0" dur="0.6s" begin="1s" fill="freeze" />
          </path>
          <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" strokeDasharray="60" strokeDashoffset="60">
            <animate attributeName="stroke-dashoffset" from="60" to="0" dur="0.9s" begin="1.2s" fill="freeze" />
          </path>
          <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" strokeDasharray="70" strokeDashoffset="70">
            <animate attributeName="stroke-dashoffset" from="70" to="0" dur="0.9s" begin="1.4s" fill="freeze" />
          </path>
        </g>
      )}

      {/* Animated line trails */}
      <g strokeWidth="0.8" fill="none" opacity="0.7">
        {/* 1. Blue Trail */}
        <path stroke="#00E8ED" strokeDasharray="20 100" strokeDashoffset="100">
          <animateMotion
            path="M 10 20 h 79.5 q 5 0 5 5 v 30"
            dur="3s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate attributeName="stroke-dashoffset" values="100;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </path>

        {/* 2. Yellow Trail */}
        <path stroke="#FFD800" strokeDasharray="20 100" strokeDashoffset="100">
          <animateMotion
            path="M 180 10 h -69.7 q -5 0 -5 5 v 40"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animate attributeName="stroke-dashoffset" values="100;0" dur="2.5s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.5s" repeatCount="indefinite" begin="1s" />
        </path>

        {/* 3. Pink Trail */}
        <path stroke="#FF008B" strokeDasharray="15 80" strokeDashoffset="80">
          <animateMotion
            path="M 130 20 v 21.8 q 0 5 -5 5 h -25"
            dur="3.5s"
            repeatCount="indefinite"
            begin="1.5s"
          />
          <animate attributeName="stroke-dashoffset" values="80;0" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
        </path>

        {/* 4. White Trail */}
        <path stroke="white" strokeDasharray="15 80" strokeDashoffset="80">
          <animateMotion
            path="M 170 80 v -21.8 q 0 -5 -5 -5 h -65"
            dur="3s"
            repeatCount="indefinite"
            begin="2s"
          />
          <animate attributeName="stroke-dashoffset" values="80;0" dur="3s" repeatCount="indefinite" begin="2s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="2s" />
        </path>

        {/* 5. Green Trail */}
        <path stroke="#22c55e" strokeDasharray="20 100" strokeDashoffset="100">
          <animateMotion
            path="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -35"
            dur="4s"
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate attributeName="stroke-dashoffset" values="100;0" dur="4s" repeatCount="indefinite" begin="0.8s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4s" repeatCount="indefinite" begin="0.8s" />
        </path>

        {/* 6. Orange Trail */}
        <path stroke="#f97316" strokeDasharray="15 70" strokeDashoffset="70">
          <animateMotion
            path="M 94.8 95 v -46"
            dur="2.5s"
            repeatCount="indefinite"
            begin="2.5s"
          />
          <animate attributeName="stroke-dashoffset" values="70;0" dur="2.5s" repeatCount="indefinite" begin="2.5s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.5s" repeatCount="indefinite" begin="2.5s" />
        </path>

        {/* 7. Cyan Trail */}
        <path stroke="#06b6d4" strokeDasharray="20 90" strokeDashoffset="90">
          <animateMotion
            path="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 28"
            dur="3s"
            repeatCount="indefinite"
            begin="3s"
          />
          <animate attributeName="stroke-dashoffset" values="90;0" dur="3s" repeatCount="indefinite" begin="3s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="3s" />
        </path>

        {/* 8. Rose Trail */}
        <path stroke="#f43f5e" strokeDasharray="20 90" strokeDashoffset="90">
          <animateMotion
            path="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 35"
            dur="3s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate attributeName="stroke-dashoffset" values="90;0" dur="3s" repeatCount="indefinite" begin="1.2s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="1.2s" />
        </path>
      </g>

      {/* CPU Box */}
      <g>
        {showCpuConnections && (
          <g fill="url(#cpu-connection-gradient)">
            <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="116.3" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
            <rect x="122.8" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
            <rect x="104" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
            <rect x="114.5" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
            <rect x="80" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
            <rect x="87" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
          </g>
        )}
        <rect x="85" y="40" width="30" height="20" rx="2" fill="#181818" filter="url(#cpu-light-shadow)" />
        <text x="92" y="52.5" fontSize="7" fill={animateText ? "url(#cpu-text-gradient)" : "white"} fontWeight="600" letterSpacing="0.05em">
          {text}
        </text>
      </g>

      {/* Definitions */}
      <defs>
        <filter id="cpu-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="cpu-light-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.1" />
        </filter>

        <linearGradient id="cpu-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>

        <linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate attributeName="offset" values="-2; -1; 0" dur="5s" repeatCount="indefinite" />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate attributeName="offset" values="-1; 0; 1" dur="5s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate attributeName="offset" values="0; 1; 2" dur="5s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export { CpuArchitecture };
