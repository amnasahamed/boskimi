"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  Database, 
  FileText, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const inputSources = [
  { icon: Mail, label: "Emails", color: "#FF4B1F" },
  { icon: Database, label: "Database", color: "#FFD700" },
  { icon: FileText, label: "Forms", color: "#22c55e" },
  { icon: MessageSquare, label: "Chat", color: "#f59e0b" },
];

const outputActions = [
  { icon: Calendar, label: "Scheduled", color: "#06b6d4" },
  { icon: BarChart3, label: "Reports", color: "#ec4899" },
  { icon: Zap, label: "Triggered", color: "#f97316" },
  { icon: ArrowRight, label: "Routed", color: "#10b981" },
];

// Diagram geometry (SVG viewBox units)
const VB_W = 1200;
const VB_H = 440;
const ROWS = [70, 170, 270, 370];
const IN_X = 250; // where input lines start
const OUT_X = 950; // where output lines end
const CORE_SIZE = 200;
const CORE_Y = 220;
const CORE_L = VB_W / 2 - CORE_SIZE / 2;
const CORE_R = VB_W / 2 + CORE_SIZE / 2;
// y of the chip pins: CORE_Y - CORE_SIZE/2 + CORE_SIZE * (0.33 + i * 0.1) + pin half-height
const PORTS = [0, 1, 2, 3].map((i) => CORE_Y - CORE_SIZE / 2 + CORE_SIZE * (0.33 + i * 0.1) + 3);

const flows = [
  ...inputSources.map((s, i) => ({
    label: `in-${s.label}`,
    color: s.color,
    dir: "in" as const,
    d: `M ${IN_X + 12} ${ROWS[i]} C ${IN_X + 160} ${ROWS[i]}, ${CORE_L - 130} ${PORTS[i]}, ${CORE_L} ${PORTS[i]}`,
    dur: 2.6 + i * 0.25,
    delay: i * 0.55,
  })),
  ...outputActions.map((s, i) => ({
    label: `out-${s.label}`,
    color: s.color,
    dir: "out" as const,
    d: `M ${CORE_R} ${PORTS[i]} C ${CORE_R + 130} ${PORTS[i]}, ${OUT_X - 160} ${ROWS[i]}, ${OUT_X - 12} ${ROWS[i]}`,
    dur: 2.6 + i * 0.25,
    delay: 1.3 + i * 0.55,
  })),
];

function NodeIcon({ icon: Icon, color }: { icon: LucideIcon; color: string }) {
  return (
    <div
      className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-card shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
      style={{ boxShadow: `0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -10px ${color}55` }}
    >
      <Icon className="h-5 w-5" style={{ color }} />
    </div>
  );
}

function MobileNode({ icon: Icon, color, label }: { icon: LucideIcon; color: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-card"
        style={{ boxShadow: `0 8px 20px -10px ${color}66` }}
      >
        <Icon className="h-5 w-5" style={{ color }} />
      </div>
      <span className="font-mono text-[11px] text-muted-foreground">{label}</span>
    </div>
  );
}

function MobileFlow() {
  return (
    <div className="relative h-10 w-px overflow-hidden bg-border">
      <span className="sc-drop absolute left-1/2 top-0 h-3 w-[3px] -translate-x-1/2 rounded-full bg-primary" />
    </div>
  );
}

function CoreChip() {
  return (
    <div className="relative aspect-square w-full">
      {/* pulse rings */}
      <span className="sc-ring absolute inset-[8%] rounded-[28%] border border-primary/40" />
      <span className="sc-ring absolute inset-[8%] rounded-[28%] border border-primary/30" style={{ animationDelay: "1.2s" }} />
      {/* pins */}
      <div className="absolute inset-0">
        {[0, 1, 2, 3].map((i) => (
          <span key={`l${i}`} className="absolute left-[2%] h-[3%] w-[10%] rounded-full bg-foreground/80" style={{ top: `${33 + i * 10}%` }} />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <span key={`r${i}`} className="absolute right-[2%] h-[3%] w-[10%] rounded-full bg-foreground/80" style={{ top: `${33 + i * 10}%` }} />
        ))}
        {[0, 1, 2].map((i) => (
          <span key={`t${i}`} className="absolute top-[2%] h-[10%] w-[3%] rounded-full bg-foreground/80" style={{ left: `${38 + i * 11}%` }} />
        ))}
        {[0, 1, 2].map((i) => (
          <span key={`b${i}`} className="absolute bottom-[2%] h-[10%] w-[3%] rounded-full bg-foreground/80" style={{ left: `${38 + i * 11}%` }} />
        ))}
      </div>
      {/* body */}
      <div className="absolute inset-[12%] overflow-hidden rounded-[24%] bg-[#141414] shadow-[0_24px_60px_-20px_rgba(255,75,31,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="sc-sweep absolute inset-0" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "12% 12%",
          }}
        />
        <div className="relative flex h-full flex-col items-center justify-center gap-1.5">
          <span className="sc-core-dot h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-sm font-medium tracking-[0.3em] text-white">CORE</span>
        </div>
      </div>
    </div>
  );
}

export function SystemsCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6"
          >
            <Zap className="w-4 h-4" />
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
          >
            Your Operations,
            <br />
            <span className="italic text-primary">Automated Core</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Data flows in from every direction. Our systems process, route, and 
            act — turning chaos into orchestrated workflows.
          </motion.p>
        </div>

        {/* Flow diagram (desktop). Fixed aspect ratio so lines and nodes stay aligned. */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto w-full max-w-6xl" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              aria-hidden="true"
            >
              {flows.map((f, i) => (
                <g key={f.label}>
                  <motion.path
                    d={f.d}
                    fill="none"
                    stroke={f.color}
                    strokeOpacity={0.22}
                    strokeWidth={1.5}
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.1, delay: 0.5 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {isInView && (
                    <>
                      {/* travelling highlight */}
                      <path
                        d={f.d}
                        fill="none"
                        stroke={f.color}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeDasharray="26 400"
                        className="sc-dash"
                        style={{ animationDuration: `${f.dur}s`, animationDelay: `${1.4 + f.delay}s` }}
                      />
                      {/* packet */}
                      <circle r={4} fill={f.color} opacity={0}>
                        <animateMotion
                          path={f.d}
                          dur={`${f.dur}s`}
                          begin={`${1.4 + f.delay}s`}
                          repeatCount="indefinite"
                          keyPoints={f.dir === "in" ? "0;1" : "0;1"}
                          keyTimes="0;1"
                          calcMode="spline"
                          keySplines="0.45 0 0.55 1"
                        />
                        <animate
                          attributeName="opacity"
                          values="0;1;1;0"
                          keyTimes="0;0.12;0.85;1"
                          dur={`${f.dur}s`}
                          begin={`${1.4 + f.delay}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </>
                  )}
                </g>
              ))}
            </svg>

            {/* Input nodes */}
            {inputSources.map((source, i) => (
              <motion.div
                key={source.label}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group absolute flex -translate-y-1/2 items-center gap-3"
                style={{ right: `${100 - (IN_X / VB_W) * 100}%`, top: `${(ROWS[i] / VB_H) * 100}%` }}
              >
                <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {source.label}
                </span>
                <NodeIcon icon={source.icon} color={source.color} />
              </motion.div>
            ))}

            {/* Output nodes */}
            {outputActions.map((action, i) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group absolute flex -translate-y-1/2 items-center gap-3"
                style={{ left: `${(OUT_X / VB_W) * 100}%`, top: `${(ROWS[i] / VB_H) * 100}%` }}
              >
                <NodeIcon icon={action.icon} color={action.color} />
                <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {action.label}
                </span>
              </motion.div>
            ))}

            {/* Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: "50%", top: `${(CORE_Y / VB_H) * 100}%`, width: `${(CORE_SIZE / VB_W) * 100}%` }}
            >
              <CoreChip />
            </motion.div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto flex max-w-md flex-col items-center gap-6"
          >
            <div className="grid w-full grid-cols-4 gap-3">
              {inputSources.map((s) => (
                <MobileNode key={s.label} icon={s.icon} color={s.color} label={s.label} />
              ))}
            </div>
            <MobileFlow />
            <div className="w-40">
              <CoreChip />
            </div>
            <MobileFlow />
            <div className="grid w-full grid-cols-4 gap-3">
              {outputActions.map((s) => (
                <MobileNode key={s.label} icon={s.icon} color={s.color} label={s.label} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Grid */}
        <div className="mt-16 md:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Input Processing", desc: "Emails, forms, APIs ingested" },
            { label: "AI Analysis", desc: "Smart classification & routing" },
            { label: "Action Execution", desc: "Automated responses & tasks" },
            { label: "Output Delivery", desc: "To your tools & team" },
          ].map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="relative group p-6 bg-card/30 border border-border/30 rounded-2xl hover:bg-card/50 transition-colors"
            >
              <div className="absolute -top-3 -left-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-mono text-primary">
                {i + 1}
              </div>
              <h4 className="font-medium text-foreground mb-1">{step.label}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
