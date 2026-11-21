"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

// Gentle waves that sit in the top and bottom bands, away from the text.
const waves = [
  { d: "M-40 52 C 220 18, 420 92, 720 54 S 1220 16, 1480 60", color: "hsl(250 80% 65%)", w: 1.25 },
  { d: "M-40 86 C 260 56, 520 122, 780 86 S 1240 56, 1480 94", color: "hsl(217 91% 60%)", w: 1.5 },
  { d: "M-40 520 C 240 556, 500 486, 760 520 S 1220 556, 1480 512", color: "hsl(189 94% 43%)", w: 1.5 },
  { d: "M-40 556 C 220 590, 480 524, 720 558 S 1200 592, 1480 546", color: "hsl(221 83% 53%)", w: 2 },
];

// A few "stars" along the waves
const stars = [
  { x: 180, y: 40, r: 2.5 },
  { x: 540, y: 78, r: 2 },
  { x: 980, y: 52, r: 3 },
  { x: 1300, y: 84, r: 2 },
  { x: 300, y: 536, r: 2 },
  { x: 760, y: 520, r: 3 },
  { x: 1120, y: 548, r: 2.5 },
];

const stats = [
  { value: 118, suffix: "", label: "Websites Delivered" },
  { value: 100, suffix: "+", label: "Businesses Served" },
  { value: 8, suffix: "", label: "Countries" },
];

function CountUp({ value, suffix, start, delay }: { value: number; suffix: string; start: boolean; delay: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, value, delay]);
  return (
    <span className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function CosmicTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.35 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  // Subtle parallax only — the content never fades out while it is on screen.
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const wavesY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // The waves live in two fixed-height bands pinned to the section's top and
  // bottom edges, so they never cross the text however tall it gets (mobile).
  const renderBand = (band: "top" | "bottom") => (
    <svg
      width="100%"
      height="100%"
      viewBox={band === "top" ? "0 0 1440 140" : "0 460 1440 140"}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0"
    >
          <defs>
            {waves.map((w, i) => (
              <linearGradient key={i} id={`ct-grad-${band}-${i}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={w.color} stopOpacity="0" />
                <stop offset="25%" stopColor={w.color} stopOpacity="0.55" />
                <stop offset="75%" stopColor={w.color} stopOpacity="0.55" />
                <stop offset="100%" stopColor={w.color} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {waves.map((w, i) => (
            <g key={i}>
              {/* the line draws in once, fully */}
              <motion.path
                d={w.d}
                fill="none"
                stroke={`url(#ct-grad-${band}-${i})`}
                strokeWidth={w.w}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2.2, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* then a light pulse keeps flowing along it */}
              {isInView && (
                <path
                  d={w.d}
                  fill="none"
                  stroke={w.color}
                  strokeWidth={w.w + 0.75}
                  strokeLinecap="round"
                  strokeDasharray="90 1600"
                  className="ct-flow"
                  style={{ animationDelay: `${2 + i * 0.9}s`, animationDuration: `${7 + i}s` }}
                />
              )}
            </g>
          ))}

          {stars.map((s, i) => (
            <motion.circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="hsl(14 100% 56%)"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: [0, 0.9, 0.35, 0.9], scale: 1 } : {}}
              transition={{
                opacity: { duration: 3.2, delay: 1 + i * 0.25, repeat: Infinity, repeatType: "mirror" },
                scale: { duration: 0.6, delay: 1 + i * 0.25 },
              }}
              style={{ transformOrigin: `${s.x}px ${s.y}px` }}
            />
          ))}
    </svg>
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-44"
    >
      {/* Soft centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 50%, hsl(14 100% 56% / 0.06), transparent 70%)",
        }}
      />

      {/* Waves */}
      <motion.div style={{ y: wavesY }} className="absolute inset-x-0 top-0 h-28 md:h-40 pointer-events-none" aria-hidden="true">
        {renderBand("top")}
      </motion.div>
      <motion.div style={{ y: wavesY }} className="absolute inset-x-0 bottom-0 h-28 md:h-40 pointer-events-none" aria-hidden="true">
        {renderBand("bottom")}
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary/80 mb-8"
        >
          <Sparkles className="w-4 h-4" />
          The Journey Begins
        </motion.div>

        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="italic text-primary">Every star</span> in the constellation
          </motion.span>
          <br className="hidden sm:block" />{" "}
          <motion.span
            className="inline-block text-muted-foreground"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            is a system we&apos;ve built
          </motion.span>
        </blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          From scattered ideas to connected solutions — we help businesses
          find their orbit and shine brighter.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-0 md:divide-x md:divide-border/60">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:px-12"
            >
              <div className="font-serif text-4xl md:text-5xl text-foreground mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} start={isInView} delay={0.6 + i * 0.1} />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#who-we-are"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 inline-flex flex-col items-center gap-2 group"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">
            Discover
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 group-hover:border-primary/60 transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5 text-primary" />
          </motion.span>
        </motion.a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
