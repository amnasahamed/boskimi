"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, Lightbulb, HandHeart, ShieldCheck, Sparkles, Check, ClipboardList, Rocket, Globe2 } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "We actually listen",
    description: "Before we write a line of code, we understand your business, your pain points, and what success looks like for you.",
    color: "#f59e0b",
  },
  {
    icon: Users,
    title: "We build for humans",
    description: "Technology should serve people, not the other way around. If your team needs a PhD to use it, we failed.",
    color: "#FF4B1F",
  },
  {
    icon: HandHeart,
    title: "We stick around",
    description: "Launch day isn't goodbye. We stay for 90 days to make sure everything works and your team is confident.",
    color: "#ec4899",
  },
  {
    icon: ShieldCheck,
    title: "We're honest",
    description: "If we can't help you, we'll say so. If something isn't working, we'll fix it. No ego, just results.",
    color: "#22c55e",
  },
];

const wasteList = [
  { task: "Copying orders from WhatsApp into Excel", hours: 6 },
  { task: "Answering \u201cwhere is my order?\u201d by hand", hours: 8 },
  { task: "Chasing leads who never reply", hours: 5 },
  { task: "Building the weekly report from 4 tools", hours: 4 },
  { task: "Re-typing invoices into accounting", hours: 3 },
];

/** A to-do list of busywork that gets struck off, one task at a time. */
function WasteList({ start }: { start: boolean }) {
  const [done, setDone] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(wasteList.length);
      return;
    }
    const timers = wasteList.map((_, i) => setTimeout(() => setDone(i + 1), 900 + i * 700));
    return () => timers.forEach(clearTimeout);
  }, [start]);

  const saved = wasteList.slice(0, done).reduce((sum, w) => sum + w.hours, 0);
  const total = wasteList.reduce((sum, w) => sum + w.hours, 0);

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/5 blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
        {/* header */}
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4 sm:px-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">A typical week</p>
            <p className="font-serif text-xl text-foreground">Things software should do</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ClipboardList className="h-4 w-4" />
          </span>
        </div>

        {/* list */}
        <ul className="divide-y divide-border/50">
          {wasteList.map((w, i) => {
            const isDone = i < done;
            return (
              <li key={w.task} className="flex items-center gap-3 px-5 py-3.5 sm:px-6">
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-300 ${
                    isDone ? "border-emerald-500 bg-emerald-500 text-white" : "border-border bg-background"
                  }`}
                >
                  {isDone && (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 20 }}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </motion.span>
                  )}
                </span>
                <span className="relative min-w-0 flex-1 text-sm text-foreground">
                  <span className={`transition-colors duration-500 ${isDone ? "text-muted-foreground" : ""}`}>{w.task}</span>
                  <motion.span
                    className="absolute left-0 top-1/2 h-px bg-muted-foreground"
                    initial={{ width: 0 }}
                    animate={{ width: isDone ? "100%" : 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[11px] transition-colors duration-300 ${
                    isDone ? "bg-emerald-50 text-emerald-600" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {isDone ? "automated" : `${w.hours} h/wk`}
                </span>
              </li>
            );
          })}
        </ul>

        {/* total */}
        <div className="flex items-end justify-between gap-4 bg-secondary/40 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs text-muted-foreground">Hours given back, every week</p>
            <div className="mt-2 h-1.5 w-40 overflow-hidden rounded-full bg-border sm:w-56">
              <motion.div
                className="h-full rounded-full bg-primary"
                animate={{ width: `${(saved / total) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
          <motion.span key={saved} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-serif text-4xl tabular-nums text-foreground">
            {saved}
            <span className="text-lg text-muted-foreground"> h</span>
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="who-we-are" ref={containerRef} className="scroll-mt-24 relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Left - Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Who We Are
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              Engineers Who Got
              <br className="hidden sm:block" />
              <span className="italic text-primary">Tired of Waste</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              <p>
                We&apos;ve worked at big tech companies, startups, and everything in between. 
                And everywhere we went, we saw the same thing: smart people wasting hours on 
                work that software could handle.
              </p>
              <p>
                So we started Base of Stars to fix that. Not by selling you some platform 
                you have to learn, but by building exactly what you need and making sure 
                it actually works.
              </p>
              <p className="text-foreground font-medium">
                We&apos;re a small team. We take on limited projects. And we care deeply 
                about every one of them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Kozhikode, Kerala
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5">
                <Rocket className="h-3.5 w-3.5 text-primary" /> KSUM-recognised startup
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5">
                <Globe2 className="h-3.5 w-3.5 text-primary" /> Clients in 8 countries
              </span>
            </motion.div>
          </div>

          {/* Right - the waste list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <WasteList start={isInView} />
          </motion.div>
        </div>

        {/* Values grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">How We Work</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Our non-negotiables</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${value.color}20` }}
                />
                
                <div className="relative p-5 sm:p-6 lg:p-8 bg-card/50 border border-border/50 rounded-xl sm:rounded-2xl backdrop-blur-sm h-full">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-colors"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <value.icon 
                      className="w-6 h-6 sm:w-7 sm:h-7 transition-colors"
                      style={{ color: value.color }}
                    />
                  </div>
                  
                  <h4 className="font-serif text-lg sm:text-xl text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
