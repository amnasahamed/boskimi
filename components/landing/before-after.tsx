"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Headphones, BarChart3, Target, Frown, Smile } from "lucide-react";

const areas = [
  {
    icon: Headphones,
    category: "Customer support",
    pairs: [
      ["Inbox full of the same questions", "Instant answers, even at 2 AM"],
      ["Response times slipping", "Team handles only the complex cases"],
      ["Customers waiting for replies", "Customers helped in seconds"],
      ["Support staff burning out", "Support team enjoys the work again"],
    ],
  },
  {
    icon: BarChart3,
    category: "Data & reporting",
    pairs: [
      ["Copy-pasting between 5 apps", "Data flows between tools on its own"],
      ["Spreadsheet errors creeping in", "One source of truth, no re-typing"],
      ["Reports take a full day", "Reports generate themselves"],
      ["Decisions wait for data", "Decisions made on current numbers"],
    ],
  },
  {
    icon: Target,
    category: "Lead management",
    pairs: [
      ["Chasing leads that go nowhere", "Only qualified leads reach sales"],
      ["Hot leads slip through the cracks", "Every hot lead gets instant attention"],
      ["Slow replies lose deals", "Every enquiry answered right away"],
      ["No system for follow-ups", "Follow-ups happen automatically"],
    ],
  },
];

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [area, setArea] = useState(0);
  const [after, setAfter] = useState(false);
  const [touched, setTouched] = useState(false);

  // Flip to "after" once on first view, so people see the change without clicking.
  useEffect(() => {
    if (!inView || touched) return;
    const t = setTimeout(() => setAfter(true), 1400);
    return () => clearTimeout(t);
  }, [inView, touched, area]);

  const a = areas[area];

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            Real Talk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl text-foreground md:text-5xl lg:text-6xl"
          >
            Life Before vs After<br /><span className="italic text-primary">Working With Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Pick the part of your business that hurts most, then flip the switch.
          </motion.p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex w-full gap-1 overflow-x-auto rounded-full bg-secondary p-1 sm:w-auto" role="tablist">
            {areas.map((ar, i) => (
              <button
                key={ar.category}
                role="tab"
                type="button"
                aria-selected={i === area}
                onClick={() => {
                  setArea(i);
                  setAfter(false);
                }}
                className={`flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all sm:flex-none ${
                  i === area ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ar.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{ar.category}</span>
                <span className="sm:hidden">{ar.category.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={after}
            onClick={() => {
              setTouched(true);
              setAfter((v) => !v);
            }}
            className="flex items-center gap-3 text-sm font-medium"
          >
            <span className={after ? "text-muted-foreground" : "text-red-500"}>Before</span>
            <span className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${after ? "bg-emerald-500" : "bg-red-400"}`}>
              <motion.span
                className="absolute top-1 h-5 w-5 rounded-full bg-white shadow"
                animate={{ left: after ? 24 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </span>
            <span className={after ? "text-emerald-600" : "text-muted-foreground"}>After</span>
          </button>
        </div>

        {/* Board */}
        <motion.div
          className="overflow-hidden rounded-3xl border transition-colors duration-500"
          animate={{
            backgroundColor: after ? "rgba(16,185,129,0.05)" : "rgba(239,68,68,0.04)",
            borderColor: after ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.2)",
          }}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <span className="font-serif text-xl text-foreground">{a.category}</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={after ? "a" : "b"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`flex items-center gap-1.5 text-sm font-medium ${after ? "text-emerald-600" : "text-red-500"}`}
              >
                {after ? <Smile className="h-4 w-4" /> : <Frown className="h-4 w-4" />}
                {after ? "After" : "Before"}
              </motion.span>
            </AnimatePresence>
          </div>
          <ul className="grid gap-px sm:grid-cols-2">
            {a.pairs.map(([b, g], i) => (
              <li key={`${area}-${i}`} className="relative min-h-[60px] overflow-hidden px-6 py-4 sm:min-h-[84px] sm:py-5">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={after ? "after" : "before"}
                    initial={{ opacity: 0, rotateX: -70, y: 10 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    exit={{ opacity: 0, rotateX: 70, y: -10 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                    style={{ transformPerspective: 600 }}
                  >
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${after ? "bg-emerald-500" : "bg-red-400"}`}
                    />
                    <span className={`text-base ${after ? "text-foreground" : "text-muted-foreground"}`}>{after ? g : b}</span>
                  </motion.div>
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">Ready to flip the switch for real?</p>
          <Link
            href="#connect"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s fix your biggest time-waster
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
