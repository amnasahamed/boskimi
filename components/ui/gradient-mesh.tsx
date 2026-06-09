"use client";

import React from "react";

export function GradientMesh() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-2] opacity-30 pointer-events-none overflow-hidden bg-background">
            <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-500/30 rounded-full blur-[120px] mix-blend-screen animate-blob" />
            <div className="absolute top-[-10%] right-[-20%] w-[60vw] h-[60vw] bg-blue-500/30 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] bg-indigo-500/30 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
            <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-teal-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-6000" />
        </div>
    );
}
