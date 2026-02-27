"use client";

import { cn } from "@/lib/utils";
import React from "react";

const technologies = [
    "OpenAI",
    "Claude",
    "LangChain",
    "Vercel AI SDK",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "AWS",
    "n8n",
    "Make.com",
];

export function TechStackMarquee({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex w-full overflow-hidden bg-background py-10",
                className
            )}
        >
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

            <div className="flex animate-marquee gap-8 whitespace-nowrap">
                {[...technologies, ...technologies].map((tech, i) => (
                    <span
                        key={i}
                        className="text-2xl font-mono uppercase tracking-wider text-muted-foreground/50 hover:text-accent transition-colors cursor-default"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex absolute top-10 animate-marquee2 gap-8 whitespace-nowrap">
                {[...technologies, ...technologies].map((tech, i) => (
                    <span
                        key={i}
                        className="text-2xl font-mono uppercase tracking-wider text-muted-foreground/50 hover:text-accent transition-colors cursor-default"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
