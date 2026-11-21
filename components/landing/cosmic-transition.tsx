"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { websites } from "@/lib/portfolio";

/*
 * "Every star in the constellation is a system we've built" — rendered literally:
 * each star is a client site from the portfolio, grouped into industry
 * constellations. The case studies are the bright, named stars.
 */

const W = 1000;
const H = 520;

const groups = [
  { name: "Services & Trades", cx: 210, cy: 160, cats: ["Services", "Design", "Construction", "Contracting", "Printing", "Packaging"] },
  { name: "Corporate & Trading", cx: 520, cy: 150, cats: ["Corporate", "Trading", "Marketplace", "Jewelry"] },
  { name: "Industry & Tech", cx: 810, cy: 175, cats: ["Technology", "Manufacturing", "Energy", "Automotive", "Automation"] },
  { name: "Food, Retail & Travel", cx: 250, cy: 390, cats: ["Restaurant", "Retail", "Catering", "Hospitality", "Travel", "Events"] },
  { name: "Logistics", cx: 540, cy: 330, cats: ["Transport", "Logistics"] },
  { name: "Education & Health", cx: 790, cy: 400, cats: ["Education", "Healthcare", "Sports", "Fitness", "Media"] },
];

const featured = [
  { name: "Navakeralam", href: "/case-studies/navakeralam", group: 1, dx: -40, dy: 30 },
  { name: "Badria Sweets", href: "/case-studies/badria-sweets", group: 3, dx: 70, dy: -40 },
  { name: "Clapsboard", href: "/case-studies/clapsboard", group: 2, dx: -60, dy: 55 },
  { name: "ClapsLearn AI", href: "/case-studies/clapslearn-ai", group: 5, dx: -80, dy: -55 },
];

const stats = [
  { value: 118, suffix: "", label: "Websites delivered" },
  { value: 100, suffix: "+", label: "Businesses served" },
  { value: 8, suffix: "", label: "Countries" },
  { value: 28, suffix: "", label: "Industries" },
];

// Small deterministic PRNG so the sky is identical on server and client.
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

type Star = { x: number; y: number; r: number; label: string; cat: string; g: number; delay: number };

function buildSky() {
  const rand = rng(42);
  const sites = websites.filter((w) => !w.isInternal);
  const byGroup: Star[][] = groups.map(() => []);

  sites.forEach((site) => {
    let g = groups.findIndex((gr) => gr.cats.includes(site.category));
    if (g < 0) g = 0;
    const n = byGroup[g].length;
    // golden-angle scatter around the group centre, with a little jitter
    const angle = n * 2.39996 + rand() * 0.6;
    const radius = 18 + Math.sqrt(n) * 21 + rand() * 10;
    byGroup[g].push({
      x: Math.round((groups[g].cx + Math.cos(angle) * radius * 1.35) * 10) / 10,
      y: Math.round((groups[g].cy + Math.sin(angle) * radius * 0.8) * 10) / 10,
      r: Math.round((1.4 + rand() * 1.6) * 10) / 10,
      label: site.url,
      cat: site.category,
      g,
      delay: Math.round(rand() * 40) / 10,
    });
  });

  // Constellation lines: link each star to its nearest earlier star in the group.
  const lines: { x1: number; y1: number; x2: number; y2: number; g: number; i: number }[] = [];
  byGroup.forEach((stars, g) => {
    stars.forEach((s, i) => {
      if (i === 0) return;
      let best = 0;
      let bd = Infinity;
      for (let j = 0; j < i; j++) {
        const d = (stars[j].x - s.x) ** 2 + (stars[j].y - s.y) ** 2;
        if (d < bd) {
          bd = d;
          best = j;
        }
      }
      lines.push({ x1: stars[best].x, y1: stars[best].y, x2: s.x, y2: s.y, g, i });
    });
  });

  // Case studies sit on a real star: the one nearest their intended spot.
  const feats = featured.map((f) => {
    const tx = groups[f.group].cx + f.dx;
    const ty = groups[f.group].cy + f.dy;
    const pool = byGroup[f.group];
    const near = pool.reduce((a, b) => ((b.x - tx) ** 2 + (b.y - ty) ** 2 < (a.x - tx) ** 2 + (a.y - ty) ** 2 ? b : a), pool[0]);
    return { ...f, x: near.x, y: near.y };
  });

  return { stars: byGroup.flat(), lines, feats };
}

function CountUp({ value, suffix, start, delay }: { value: number; suffix: string; start: boolean; delay: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const c = animate(0, value, { duration: 1.6, delay, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [start, value, delay]);
  return (
    <span className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function CosmicTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { stars, lines, feats } = useMemo(buildSky, []);
  const [hover, setHover] = useState<Star | null>(null);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary/80"
          >
            <Sparkles className="h-4 w-4" />
            The Journey Begins
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="italic text-primary">Every star</span> in the constellation
            <br className="hidden sm:block" /> <span className="text-muted-foreground">is a system we&apos;ve built</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Each point of light below is a real client project, grouped by industry. Hover or tap to see who&apos;s up
            there.
          </motion.p>
        </div>

        {/* Sky */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-[#07070c] shadow-[0_40px_100px_-50px_rgba(255,75,31,0.45)]"
        >
          {/* nebula */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 45% 50% at 25% 35%, rgba(255,75,31,0.16), transparent 70%), radial-gradient(ellipse 40% 45% at 80% 70%, rgba(99,102,241,0.18), transparent 70%), radial-gradient(ellipse 30% 35% at 55% 30%, rgba(14,165,233,0.10), transparent 70%)",
            }}
          />

          <div className="relative">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="block h-auto w-full"
              role="img"
              aria-label="Constellation of client projects grouped by industry"
            >
              <defs>
                <radialGradient id="cs-glow">
                  <stop offset="0%" stopColor="#FF4B1F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF4B1F" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* constellation lines */}
              {lines.map((l, k) => (
                <motion.line
                  key={k}
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  stroke="#ffffff"
                  strokeWidth={0.8}
                  initial={{ pathLength: 0, strokeOpacity: 0.14 }}
                  animate={
                    inView
                      ? { pathLength: 1, strokeOpacity: hover && hover.g === l.g ? 0.5 : 0.14 }
                      : {}
                  }
                  transition={{
                    pathLength: { duration: 0.5, delay: 0.6 + l.g * 0.25 + l.i * 0.03, ease: "easeOut" },
                    strokeOpacity: { duration: 0.3 },
                  }}
                />
              ))}

              {/* stars */}
              {stars.map((s, k) => (
                <g key={k} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
                  <circle cx={s.x} cy={s.y} r={10} fill="transparent" />
                  <motion.circle
                    cx={s.x}
                    cy={s.y}
                    fill={hover && hover.g === s.g ? "#ffffff" : "#d9d6e6"}
                    initial={{ r: 0 }}
                    animate={inView ? { r: hover === s ? s.r + 2.5 : s.r } : {}}
                    transition={{ duration: 0.4, delay: hover ? 0 : 0.4 + s.g * 0.25 + (k % 20) * 0.02 }}
                  />
                  <circle cx={s.x} cy={s.y} r={s.r} fill="#fff" className="cs-twinkle" style={{ animationDelay: `${s.delay}s` }} />
                </g>
              ))}

              {/* group labels */}
              {groups.map((g, i) => (
                <motion.text
                  key={g.name}
                  x={g.cx}
                  y={i < 3 ? 34 : H - 22}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.45)"
                  style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}
                  className="font-mono"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 + i * 0.15 }}
                >
                  {g.name}
                </motion.text>
              ))}

              {/* featured case-study stars */}
              {feats.map((f, i) => {
                const { x, y } = f;
                return (
                  <motion.g
                    key={f.name}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.6 + i * 0.2, duration: 0.6 }}
                  >
                    <Link href={f.href} aria-label={`${f.name} case study`}>
                      <circle
                        cx={x}
                        cy={y}
                        r={20}
                        fill="url(#cs-glow)"
                        className="cs-pulse"
                        style={{ animationDelay: `${i * 0.6}s`, transformOrigin: `${x}px ${y}px` }}
                      />
                      <circle cx={x} cy={y} r={4.5} fill="#FF4B1F" />
                      <circle cx={x} cy={y} r={1.8} fill="#fff" />
                      <text x={x + 11} y={y + 4} fill="#fff" style={{ fontSize: 15, fontWeight: 500, paintOrder: "stroke", stroke: "#07070c", strokeWidth: 4 }}>
                        {f.name}
                      </text>
                    </Link>
                  </motion.g>
                );
              })}
            </svg>

            {/* tooltip */}
            {hover && (
              <div
                className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg border border-white/10 bg-black/80 px-2.5 py-1.5 text-center backdrop-blur"
                style={{ left: `${(hover.x / W) * 100}%`, top: `calc(${(hover.y / H) * 100}% - 10px)` }}
              >
                <span className="block whitespace-nowrap text-xs font-medium text-white">{hover.label}</span>
                <span className="block text-[10px] uppercase tracking-wider text-white/50">{hover.cat}</span>
              </div>
            )}
          </div>

          {/* stats strip */}
          <div className="relative grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-5 text-center sm:py-6 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${
                  i >= 2 ? "border-t border-white/10 sm:border-t-0" : ""
                } ${i === 2 ? "sm:border-l" : ""}`}
              >
                <div className="font-serif text-3xl text-white md:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} start={inView} delay={0.8 + i * 0.1} />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            See the full portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
