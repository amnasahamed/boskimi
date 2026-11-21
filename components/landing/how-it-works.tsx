"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Coffee, FileText, Hammer, Rocket, ArrowRight, Check } from "lucide-react";

/* Days on the 30-day track where each step starts and ends. */
const steps = [
  {
    icon: Coffee,
    title: "We have a conversation",
    when: "Day 1 · 30 minutes",
    start: 0,
    end: 1,
    description:
      "You tell us what's driving you crazy: the repetitive tasks, the bottlenecks, the stuff that makes you want to throw your laptop. We listen and ask questions.",
    details: ["No sales pitch", "Honest discussion", "We'll say so if we can't help"],
  },
  {
    icon: FileText,
    title: "We design a solution",
    when: "Days 2–5",
    start: 1,
    end: 5,
    description:
      "Our engineers map out exactly what we'd build, how long it takes and what it costs. No jargon, just a plan you can actually understand.",
    details: ["Clear proposal", "Timeline and milestones", "Fixed-price quote"],
  },
  {
    icon: Hammer,
    title: "We build it (you chill)",
    when: "Weeks 1–4",
    start: 5,
    end: 28,
    description:
      "While you run your business, we build and test your system. Weekly check-ins with progress you can see. No surprises.",
    details: ["Weekly updates", "Testing and refinement", "Your feedback built in"],
  },
  {
    icon: Rocket,
    title: "It goes live (and works)",
    when: "Day 30 + 90 days support",
    start: 28,
    end: 30,
    description:
      "We deploy, train your team and stay for 90 days to make sure everything runs smoothly. If something breaks, we fix it.",
    details: ["Team training", "Documentation", "90 days of support"],
  },
];

const DAYS = 30;

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [active, setActive] = useState(0);
  const s = steps[active];

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            How This Actually Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl text-foreground md:text-5xl lg:text-6xl"
          >
            From Frustrated to <span className="italic text-primary">Automated</span> in 30 Days
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            No 6-month enterprise projects. No endless meetings. A straightforward process that ends with you having
            more time.
          </motion.p>
        </div>

        {/* 30-day track (desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="relative mb-6 hidden md:block"
        >
          <div className="relative h-2 rounded-full bg-secondary">
            {steps.map((st, i) => (
              <motion.button
                key={st.title}
                type="button"
                aria-label={st.title}
                onClick={() => setActive(i)}
                className="absolute top-0 h-2 rounded-full"
                style={{ left: `${(st.start / DAYS) * 100}%`, width: `${((st.end - st.start) / DAYS) * 100}%` }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1, backgroundColor: i <= active ? "#FF4B1F" : "rgba(255,75,31,0.18)" } : {}}
                transition={{ scaleX: { delay: 0.4 + i * 0.25, duration: 0.6 }, backgroundColor: { duration: 0.3 } }}
              />
            ))}
            {[0, 7, 14, 21, 30].map((d) => (
              <span
                key={d}
                className={`absolute top-4 whitespace-nowrap font-mono text-[10px] text-muted-foreground ${d === 0 ? "" : d === DAYS ? "-translate-x-full" : "-translate-x-1/2"}`}
                style={{ left: `${(d / DAYS) * 100}%` }}
              >
                {d === 0 ? "Day 1" : `Day ${d}`}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Step cards */}
        <div className="mt-12 grid gap-3 md:grid-cols-4" role="tablist" aria-label="Process steps">
          {steps.map((st, i) => {
            const on = i === active;
            return (
              <motion.button
                key={st.title}
                role="tab"
                type="button"
                aria-selected={on}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 md:flex-col md:items-start ${
                  on ? "border-primary/40 bg-card shadow-[0_18px_40px_-24px_rgba(255,75,31,0.6)]" : "border-border/60 bg-card/40 hover:bg-card"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                    on ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}
                >
                  <st.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Step {i + 1} · {st.when}
                  </span>
                  <span className="mt-0.5 block font-serif text-lg leading-snug text-foreground">{st.title}</span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Detail */}
        <div className="mt-4 overflow-hidden rounded-3xl border border-border/60 bg-card">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{s.when}</p>
                <h3 className="mt-2 font-serif text-3xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
              <ul className="space-y-2.5 rounded-2xl bg-secondary/50 p-5">
                {s.details.map((d, i) => (
                  <motion.li
                    key={d}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {d}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#connect"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start with step 1: a free chat
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">30 minutes. No commitment. Just coffee and conversation.</p>
        </motion.div>
      </div>
    </section>
  );
}
