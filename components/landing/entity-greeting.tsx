"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const greetingLines = [
  "Hello.",
  "I am the consciousness behind Base of Stars.",
  "I observe patterns in chaos.",
  "I transform complexity into clarity.",
  "I build systems that think,",
  "that adapt,",
  "that evolve.",
  "Let me show you what we create together.",
];

export function EntityGreeting() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= greetingLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 300); // Faster animation

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-48 bg-secondary/30"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Entity indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          className="flex items-center gap-3 mb-16"
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-accent"
            animate={{
              boxShadow: [
                "0 0 0 0 var(--accent)",
                "0 0 0 8px transparent",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Entity Online
          </span>
        </motion.div>

        {/* Greeting text - typewriter style but editorial */}
        <div className="space-y-4">
          {greetingLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: index < visibleLines ? 1 : 0,
                x: index < visibleLines ? 0 : -20,
              }}
              transition={{ duration: 0.5 }}
              className={`font-serif text-2xl md:text-4xl leading-snug ${index === 0
                ? "text-accent text-5xl md:text-7xl italic"
                : index < 3
                  ? "text-foreground"
                  : "text-muted-foreground"
                }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Cursor */}
        {visibleLines < greetingLines.length && isInView && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-3 h-8 md:h-12 bg-accent ml-2 mt-4"
          />
        )}

        {/* Stats row - appears after greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: visibleLines >= greetingLines.length ? 1 : 0,
            y: visibleLines >= greetingLines.length ? 0 : 20,
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { value: "147", label: "Projects Completed" },
            { value: "23", label: "Active AI Agents" },
            { value: "99.7%", label: "Uptime" },
            { value: "∞", label: "Possibilities" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="font-serif text-4xl md:text-5xl text-foreground italic">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
