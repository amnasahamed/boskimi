"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  MessageIncomingVisual,
  AIUnderstandingVisual,
  DataFetchingVisual,
  ResponseGenerationVisual,
  HumanHandoffVisual,
} from "./agent-visuals";

const steps = [
  {
    number: "01",
    title: "Message Comes In",
    description: "Customer reaches out via WhatsApp, email, chat, or your website — any channel, any time",
    visual: MessageIncomingVisual,
    color: "#22c55e",
  },
  {
    number: "02",
    title: "AI Understands",
    description: "Analyzes intent, context, and conversation history instantly — not just keyword matching",
    visual: AIUnderstandingVisual,
    color: "#8b5cf6",
  },
  {
    number: "03",
    title: "Fetches Your Data",
    description: "Pulls real-time info from Shopify, Salesforce, your database — whatever systems you use",
    visual: DataFetchingVisual,
    color: "#f59e0b",
  },
  {
    number: "04",
    title: "Replies Instantly",
    description: "Generates accurate, personalized response in under 2 seconds — sounds like your brand",
    visual: ResponseGenerationVisual,
    color: "#ec4899",
  },
  {
    number: "05",
    title: "Escalates When Needed",
    description: "Complex issues routed to the right human with full context — no starting from zero",
    visual: HumanHandoffVisual,
    color: "#6366f1",
  },
];

export function AIInAction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  // Steps advance when the active step's timer bar finishes (see onAnimationEnd),
  // so pausing on hover is just pausing that CSS animation.
  const next = () => setActiveStep((prev) => (prev + 1) % steps.length);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            <Sparkles className="w-4 h-4" />
            See It In Action
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            How Your AI Agent
            <br />
            <span className="italic text-primary">Actually Works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From first message to perfect response — see the magic happen in real-time
          </motion.p>
        </div>

        <div
          className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Step list */}
          <ol className="order-2 lg:order-1 flex flex-col gap-2" role="tablist" aria-label="How the agent works">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveStep(index)}
                    className={`group relative w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 ${
                      isActive
                        ? "border-transparent bg-white shadow-[0_18px_40px_-18px_rgba(0,0,0,0.25)]"
                        : "border-border/50 bg-white/40 hover:bg-white/80"
                    }`}
                  >
                    <div className="flex items-start gap-4 p-4 sm:p-5">
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold transition-colors duration-500"
                        style={{
                          backgroundColor: isActive ? step.color : "hsl(var(--secondary))",
                          color: isActive ? "#fff" : "hsl(var(--muted-foreground))",
                        }}
                      >
                        {step.number}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className="font-serif text-lg leading-snug transition-colors duration-500"
                          style={{ color: isActive ? step.color : undefined }}
                        >
                          {step.title}
                        </h3>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="block pt-1.5">{step.description}</span>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    {/* Timer bar */}
                    {isActive && isInView && (
                      <span
                        key={`bar-${activeStep}`}
                        className="aia-timer absolute bottom-0 left-0 h-[3px] w-full origin-left"
                        style={{
                          backgroundColor: step.color,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                        onAnimationEnd={next}
                      />
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ol>

          {/* Stage */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div
              className="absolute -inset-4 rounded-[2.5rem] blur-2xl transition-colors duration-700"
              style={{ backgroundColor: `${steps[activeStep].color}1f` }}
              aria-hidden="true"
            />
            <div className="relative h-full min-h-[31rem] sm:min-h-[26rem] overflow-hidden rounded-3xl border border-border/40 bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.98, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="aia-stage absolute inset-0"
                >
                  {(() => {
                    const Visual = steps[activeStep].visual;
                    return <Visual />;
                  })()}
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute bottom-4 right-4 hidden sm:block rounded-full bg-white/80 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
                Step {steps[activeStep].number} / 0{steps.length}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
