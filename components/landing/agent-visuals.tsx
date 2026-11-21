"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Globe,
  Inbox,
  Sparkles,
  ShoppingBag,
  Users,
  Database,
  LifeBuoy,
  Check,
  CheckCheck,
  UserRound,
  AlertTriangle,
} from "lucide-react";

/*
 * Step visuals for the "How your AI agent actually works" stage.
 * Each scene mounts when its step becomes active and plays once (about 4s),
 * then rests on its final frame. Nodes are positioned in % and wires are drawn
 * in a 0–100 SVG space with non-scaling strokes, so they line up at any size.
 */

const ease = [0.22, 1, 0.36, 1] as const;

function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduce;
}

function Scene({ tint, children }: { tint: string; children: ReactNode }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 80% 70% at 50% 45%, ${tint}14, transparent 70%), #fff`,
      }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,0.07) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {children}
    </div>
  );
}

/** Absolutely positioned element centred on (x%, y%). */
function At({
  x,
  y,
  delay = 0,
  className = "",
  children,
}: {
  x: number;
  y: number;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0.85, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease }}
    >
      {children}
    </motion.div>
  );
}

type P = (x: number, y: number) => string;
const WireSpace = createContext<P | null>(null);

/**
 * SVG overlay sized to the scene in real pixels. Wires describe their path in
 * % via `p(x, y)`, so they match the %-positioned nodes exactly, without the
 * distortion of a stretched viewBox.
 */
function Wires({ children }: { children: ReactNode }) {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const p: P | null = size ? (x, y) => `${(x * size.w) / 100} ${(y * size.h) / 100}` : null;
  return (
    <svg ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      {p && <WireSpace.Provider value={p}>{children}</WireSpace.Provider>}
    </svg>
  );
}

/** A wire between %-points: draws in, then optionally sends a pulse along it. */
function Wire({
  path,
  color,
  delay = 0,
  pulseDelay,
  reverse = false,
  base = true,
}: {
  path: (p: P) => string;
  color: string;
  delay?: number;
  pulseDelay?: number;
  reverse?: boolean;
  base?: boolean;
}) {
  const p = useContext(WireSpace);
  if (!p) return null;
  const d = path(p);
  return (
    <>
      {base && (
        <motion.path
          d={d}
          fill="none"
          stroke={color}
          strokeOpacity={0.3}
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay, duration: 0.6, ease }}
        />
      )}
      {pulseDelay !== undefined && (
        <path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="14 120"
          className={reverse ? "av-pulse-rev" : "av-pulse"}
          style={{ animationDelay: `${pulseDelay}s` }}
        />
      )}
    </>
  );
}

function Label({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span
      className="absolute left-4 top-4 z-10 rounded-full px-2.5 py-1 text-[11px] font-medium"
      style={{ backgroundColor: `${color}1a`, color }}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* 01 · Message comes in                                               */
/* ------------------------------------------------------------------ */

const channels = [
  { icon: MessageCircle, label: "WhatsApp", color: "#22c55e", y: 26, from: "Asha", text: "Where is my order?" },
  { icon: Mail, label: "Email", color: "#ef4444", y: 50, from: "Rahul", text: "Invoice for March" },
  { icon: Globe, label: "Web chat", color: "#6366f1", y: 74, from: "Visitor", text: "Do you ship to UAE?" },
];

export function MessageIncomingVisual() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timers = channels.map((_, i) => setTimeout(() => setCount(i + 1), 1100 + i * 650));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Scene tint="#22c55e">
      <Label color="#16a34a">Multi-channel</Label>

      <Wires>
        {channels.map((c, i) => (
          <Wire
            key={c.label}
            path={(p) => `M ${p(25, c.y)} C ${p(36, c.y)}, ${p(38, 50)}, ${p(47, 50)}`}
            color={c.color}
            delay={0.25 + i * 0.12}
            pulseDelay={0.6 + i * 0.65}
          />
        ))}
      </Wires>

      {channels.map((c, i) => (
        <At key={c.label} x={15} y={c.y} delay={0.1 + i * 0.12}>
          <div className="relative flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-2.5 py-2 shadow-sm">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: c.color }}
            >
              <c.icon className="h-4 w-4" />
            </span>
            <span className="hidden pr-1 text-xs font-medium text-slate-700 sm:inline">{c.label}</span>
            <motion.span
              className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full border-2 border-white"
              style={{ backgroundColor: c.color }}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1] }}
              transition={{ delay: 0.55 + i * 0.65, duration: 0.4 }}
            />
          </div>
        </At>
      ))}

      {/* Unified inbox */}
      <At x={72} y={50} delay={0.2} className="w-[48%] max-w-[300px]">
        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
              <Inbox className="h-3.5 w-3.5 text-green-600" />
              Unified inbox
            </span>
            <motion.span
              key={count}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              className="rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-bold text-white tabular-nums"
            >
              {count}
            </motion.span>
          </div>
          <div className="min-h-[132px] space-y-1 p-1.5">
            {channels.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -12, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                transition={{ delay: 1.1 + i * 0.65, duration: 0.45, ease }}
                className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-slate-50"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: c.color }}
                >
                  <c.icon className="h-3 w-3" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold leading-tight text-slate-800">{c.from}</span>
                  <span className="block truncate text-[11px] leading-tight text-slate-500">{c.text}</span>
                </span>
                <span className="text-[10px] text-slate-400">now</span>
              </motion.div>
            ))}
          </div>
        </div>
      </At>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 02 · AI understands                                                 */
/* ------------------------------------------------------------------ */

const tags = [
  { k: "Intent", v: "Order status", color: "#8b5cf6" },
  { k: "Order", v: "#4821", color: "#0ea5e9" },
  { k: "Sentiment", v: "Frustrated", color: "#f97316" },
  { k: "Priority", v: "High", color: "#ef4444" },
];

function Hl({ i, children }: { i: number; children: ReactNode }) {
  const t = tags[i];
  return (
    <motion.span
      className="rounded-md px-0.5"
      initial={{ backgroundColor: `${t.color}00`, color: "#334155" }}
      animate={{ backgroundColor: `${t.color}22`, color: t.color }}
      transition={{ delay: 1.1 + i * 0.45, duration: 0.35 }}
    >
      {children}
    </motion.span>
  );
}

export function AIUnderstandingVisual() {
  return (
    <Scene tint="#8b5cf6">
      <Label color="#7c3aed">Understanding</Label>
      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-5 py-12 sm:px-10">
        {/* Customer message with scan line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="relative w-full max-w-md overflow-hidden rounded-2xl rounded-bl-md border border-black/5 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm"
        >
          <Hl i={0}>Where is my order</Hl> <Hl i={1}>#4821</Hl>? It&apos;s been{" "}
          <Hl i={2}>5 days and no update</Hl>. <Hl i={3}>I need it this week</Hl>.
          <motion.span
            className="pointer-events-none absolute inset-y-0 w-16"
            style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.25), transparent)" }}
            initial={{ left: "-20%" }}
            animate={{ left: "110%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Extracted signals */}
        <div className="grid w-full max-w-md grid-cols-2 gap-2">
          {tags.map((t, i) => (
            <motion.div
              key={t.k}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.45, duration: 0.4, ease }}
              className="flex items-center justify-between rounded-xl border bg-white px-3 py-2"
              style={{ borderColor: `${t.color}33` }}
            >
              <span className="text-[11px] uppercase tracking-wide text-slate-400">{t.k}</span>
              <span className="text-xs font-semibold" style={{ color: t.color }}>
                {t.v}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Confidence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="flex w-full max-w-md items-center gap-3"
        >
          <Sparkles className="h-4 w-4 shrink-0 text-violet-500" />
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-violet-100">
            <motion.div
              className="h-full rounded-full bg-violet-500"
              initial={{ width: "0%" }}
              animate={{ width: "97%" }}
              transition={{ delay: 3.05, duration: 0.8, ease }}
            />
          </div>
          <span className="text-[11px] font-semibold text-violet-600 tabular-nums">97%</span>
        </motion.div>
      </div>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 03 · Fetches your data                                              */
/* ------------------------------------------------------------------ */

const sources = [
  { icon: ShoppingBag, label: "Shopify", x: 16, y: 22 },
  { icon: Users, label: "CRM", x: 84, y: 22 },
  { icon: Database, label: "Database", x: 16, y: 58 },
  { icon: LifeBuoy, label: "Helpdesk", x: 84, y: 58 },
];

const facts = [
  ["Order", "#4821"],
  ["Status", "Shipped"],
  ["Arrives", "Tomorrow, 6 PM"],
];

export function DataFetchingVisual() {
  return (
    <Scene tint="#f59e0b">
      <Label color="#d97706">Real-time lookup</Label>
      <Wires>
        {sources.map((s, i) => (
          <g key={s.label}>
            <Wire path={(p) => `M ${p(50, 40)} L ${p(s.x, s.y)}`} color="#f59e0b" delay={0.3} pulseDelay={0.7 + i * 0.15} />
            <Wire path={(p) => `M ${p(50, 40)} L ${p(s.x, s.y)}`} color="#f59e0b" pulseDelay={1.6 + i * 0.2} reverse base={false} />
          </g>
        ))}
      </Wires>

      {sources.map((s, i) => (
        <At key={s.label} x={s.x} y={s.y} delay={0.15 + i * 0.08}>
          <div className="relative flex flex-col items-center gap-1">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-white text-amber-600 shadow-sm">
              <s.icon className="h-5 w-5" />
            </span>
            <span className="text-[11px] font-medium text-slate-600">{s.label}</span>
            <motion.span
              className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.3 + i * 0.2, type: "spring", stiffness: 400, damping: 18 }}
            >
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </motion.span>
          </div>
        </At>
      ))}

      {/* Agent */}
      <At x={50} y={40}>
        <div className="relative">
          <motion.span
            className="absolute inset-0 rounded-2xl bg-amber-400"
            animate={{ scale: [1, 1.6], opacity: [0.35, 0] }}
            transition={{ duration: 1.4, repeat: 2, delay: 0.6 }}
          />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
            <Sparkles className="h-6 w-6" />
          </span>
        </div>
      </At>

      {/* Result */}
      <At x={50} y={84} delay={2.4} className="w-[78%] max-w-[340px]">
        <div className="flex divide-x divide-amber-100 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-[0_14px_30px_-18px_rgba(245,158,11,0.6)]">
          {facts.map(([k, v], i) => (
            <motion.div
              key={k}
              className="flex-1 px-3 py-2 text-center"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 + i * 0.2, duration: 0.35 }}
            >
              <span className="block text-[10px] uppercase tracking-wide text-slate-400">{k}</span>
              <span className="block truncate text-xs font-semibold text-slate-800">{v}</span>
            </motion.div>
          ))}
        </div>
      </At>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 04 · Replies instantly                                              */
/* ------------------------------------------------------------------ */

const replyText =
  "Hi Asha! Order #4821 shipped yesterday and arrives tomorrow by 6 PM. Here's your tracking link: bos.link/4821";

export function ResponseGenerationVisual() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<"wait" | "typing" | "writing" | "sent">("wait");

  useEffect(() => {
    if (reduce) {
      setTyped(replyText.length);
      setPhase("sent");
      return;
    }
    const t1 = setTimeout(() => setPhase("typing"), 700);
    const t2 = setTimeout(() => setPhase("writing"), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduce]);

  useEffect(() => {
    if (phase !== "writing") return;
    const id = setInterval(() => {
      setTyped((n) => {
        if (n >= replyText.length) {
          clearInterval(id);
          setPhase("sent");
          return n;
        }
        return n + 2;
      });
    }, 24);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <Scene tint="#ec4899">
      <Label color="#db2777">Instant reply</Label>
      <div className="flex h-full items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-black/5 bg-[#f6f5f3] shadow-[0_24px_50px_-28px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2.5 bg-white px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">
              YB
            </span>
            <span className="leading-tight">
              <span className="block text-xs font-semibold text-slate-800">Your Brand</span>
              <span className="block text-[10px] text-emerald-600">online</span>
            </span>
          </div>
          <div className="flex min-h-[170px] flex-col gap-2 p-3">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="max-w-[80%] self-start rounded-2xl rounded-tl-md bg-white px-3 py-2 text-xs text-slate-700 shadow-sm"
            >
              Where is my order #4821?
            </motion.div>

            {phase === "typing" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex gap-1 self-end rounded-2xl rounded-tr-md bg-pink-500 px-3 py-2.5"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-white"
                    animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
                  />
                ))}
              </motion.div>
            )}

            {(phase === "writing" || phase === "sent") && (
              <div className="max-w-[85%] self-end rounded-2xl rounded-tr-md bg-pink-500 px-3 py-2 text-xs leading-relaxed text-white shadow-sm">
                {replyText.slice(0, typed)}
                {phase === "writing" && <span className="ml-0.5 inline-block h-3 w-px animate-pulse bg-white align-middle" />}
              </div>
            )}

            {phase === "sent" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1 self-end text-[10px] text-slate-500"
              >
                Replied in <span className="font-semibold text-pink-600">1.8s</span>
                <CheckCheck className="h-3.5 w-3.5 text-sky-500" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Scene>
  );
}

/* ------------------------------------------------------------------ */
/* 05 · Escalates when needed                                          */
/* ------------------------------------------------------------------ */

const context = ["Order #4821", "Photo of damaged item", "Refund requested", "New delivery address"];

export function HumanHandoffVisual() {
  return (
    <Scene tint="#6366f1">
      <Label color="#4f46e5">Human handoff</Label>
      <div className="relative grid h-full grid-cols-1 content-center items-center gap-3 px-4 pb-6 pt-14 sm:gap-4 sm:py-12 sm:grid-cols-[1fr_auto_1fr] sm:px-8">
        {/* Conversation */}
        <div className="flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl rounded-tl-md border border-black/5 bg-white px-3 py-2 text-xs leading-relaxed text-slate-700 shadow-sm"
          >
            The item arrived damaged. Can I get a partial refund and change the address for the replacement?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="flex items-center gap-1.5 self-start rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700"
          >
            <AlertTriangle className="h-3 w-3" />
            Needs a human: refund approval
          </motion.div>
        </div>

        {/* Handoff link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative hidden h-px w-16 bg-indigo-200 sm:block"
        >
          <motion.span
            className="absolute -top-1 h-2 w-2 rounded-full bg-indigo-500"
            initial={{ left: "0%" }}
            animate={{ left: ["0%", "100%"] }}
            transition={{ delay: 1.3, duration: 0.7, repeat: 1, repeatDelay: 0.2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Agent card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.5, ease }}
          className="rounded-2xl border border-indigo-100 bg-white p-3 shadow-[0_18px_40px_-22px_rgba(99,102,241,0.55)]"
        >
          <div className="mb-2.5 flex items-center gap-2">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <UserRound className="h-4 w-4" />
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
            </span>
            <span className="leading-tight">
              <span className="block text-xs font-semibold text-slate-800">Support team</span>
              <span className="block text-[10px] text-slate-500">Assigned just now</span>
            </span>
          </div>
          <ul className="space-y-1.5">
            {context.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + i * 0.3, duration: 0.3 }}
                className="flex items-center gap-1.5 text-[11px] text-slate-600"
              >
                <Check className="h-3 w-3 text-indigo-500" strokeWidth={3} />
                {c}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3 }}
            className="mt-2.5 rounded-full bg-indigo-50 px-2.5 py-1 text-center text-[10px] font-semibold text-indigo-600"
          >
            Joined with full context
          </motion.div>
        </motion.div>
      </div>
    </Scene>
  );
}
