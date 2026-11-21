"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MousePointerClick,
  Mail,
  Sheet,
  Search,
  Contact,
  Send,
  Clock,
  Zap,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  ShoppingBag,
  CreditCard,
  CalendarDays,
  Hash,
  FileSpreadsheet,
  Receipt,
  Workflow,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* 1 · The Before: one order, done by hand                            */
/* ------------------------------------------------------------------ */

const manualSteps = [
  { icon: Mail, app: "Gmail", task: "Open the order email", min: 1 },
  { icon: Sheet, app: "Sheets", task: "Copy details into the sheet", min: 3 },
  { icon: Search, app: "Store", task: "Check stock and price", min: 2 },
  { icon: Contact, app: "CRM", task: "Update the customer record", min: 3 },
  { icon: Receipt, app: "Accounts", task: "Raise the invoice", min: 2 },
  { icon: Send, app: "WhatsApp", task: "Message the customer", min: 1 },
];

function BeforeVisual() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const ids = manualSteps.map((_, i) => setTimeout(() => setN(i + 1), 350 + i * 550));
    return () => ids.forEach(clearTimeout);
  }, []);
  const minutes = manualSteps.slice(0, n).reduce((s, x) => s + x.min, 0);

  return (
    <div className="flex h-full flex-col p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-red-500">One order, by hand</span>
        <span className="flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 font-mono text-xs text-red-600 tabular-nums">
          <Clock className="h-3.5 w-3.5" /> {minutes} min
        </span>
      </div>
      <ol className="flex flex-1 flex-col justify-center gap-1.5">
        {manualSteps.map((s, i) => {
          const on = i < n;
          return (
            <motion.li
              key={s.task}
              className="flex items-center gap-3 rounded-xl border px-3 py-2"
              animate={{
                borderColor: on ? "rgba(239,68,68,0.25)" : "rgba(0,0,0,0.06)",
                backgroundColor: on ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)",
                opacity: on ? 1 : 0.45,
                x: on ? 0 : -6,
              }}
              transition={{ duration: 0.35, ease }}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                <s.icon className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0 flex-1 truncate text-sm text-slate-700">{s.task}</span>
              <span className="hidden shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500 sm:inline">
                {s.app}
              </span>
              <span className="w-10 shrink-0 text-right font-mono text-[11px] text-red-500">{s.min}m</span>
            </motion.li>
          );
        })}
      </ol>
      <p className="mt-3 text-xs text-slate-500">6 apps · 6 tabs · a lot of copy and paste</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · The Magic: the same order, automated                           */
/* ------------------------------------------------------------------ */

const flowNodes = [
  { icon: Mail, label: "Order arrives" },
  { icon: Zap, label: "Trigger" },
  { icon: Sparkles, label: "AI reads it" },
  { icon: Workflow, label: "Sheet, CRM, invoice" },
  { icon: CheckCircle2, label: "Customer notified" },
];

function MagicVisual() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const ids = flowNodes.map((_, i) => setTimeout(() => setN(i + 1), 300 + i * 420));
    return () => ids.forEach(clearTimeout);
  }, []);
  const done = n >= flowNodes.length;

  return (
    <div className="flex h-full flex-col p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-600">The same order, automated</span>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 font-mono text-xs text-emerald-700">
          <Zap className="h-3.5 w-3.5" /> {done ? "~30 sec" : "running"}
        </span>
      </div>

      <div className="flex flex-1 items-center">
        <div className="relative w-full">
          {/* rail: through the centre of the 40px circles */}
          <div className="absolute left-5 top-5 bottom-5 w-px -translate-x-1/2 bg-emerald-100 sm:bottom-auto sm:left-12 sm:right-12 sm:h-px sm:w-auto sm:translate-x-0" />
          <motion.div
            className="absolute left-5 top-5 w-px -translate-x-1/2 bg-emerald-500 sm:hidden"
            animate={{ height: `calc((100% - 40px) * ${Math.max(n - 1, 0) / (flowNodes.length - 1)})` }}
            transition={{ duration: 0.4, ease }}
          />
          <motion.div
            className="absolute left-12 top-5 hidden h-px bg-emerald-500 sm:block"
            animate={{ width: `calc((100% - 96px) * ${Math.max(n - 1, 0) / (flowNodes.length - 1)})` }}
            transition={{ duration: 0.4, ease }}
          />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
            {flowNodes.map((f, i) => {
              const on = i < n;
              return (
                <div key={f.label} className="flex items-center gap-3 sm:w-24 sm:flex-col sm:gap-2 sm:text-center">
                  <motion.span
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2"
                    animate={{
                      backgroundColor: on ? "#10b981" : "#ffffff",
                      borderColor: on ? "#10b981" : "#d1fae5",
                      color: on ? "#ffffff" : "#6ee7b7",
                      scale: on && i === n - 1 ? [1, 1.15, 1] : 1,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    <f.icon className="h-4 w-4" />
                  </motion.span>
                  <span className={`text-sm transition-colors sm:text-xs ${on ? "text-slate-800" : "text-slate-400"}`}>{f.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-800"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Nobody opened a single tab. Your team only sees what needs a decision.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · The Connectors                                                  */
/* ------------------------------------------------------------------ */

const apps = [
  { icon: MessageCircle, label: "WhatsApp", color: "#22c55e" },
  { icon: Mail, label: "Gmail", color: "#ef4444" },
  { icon: FileSpreadsheet, label: "Sheets", color: "#16a34a" },
  { icon: ShoppingBag, label: "Shopify", color: "#65a30d" },
  { icon: Receipt, label: "Tally / Zoho", color: "#2563eb" },
  { icon: CreditCard, label: "Razorpay", color: "#0ea5e9" },
  { icon: CalendarDays, label: "Calendar", color: "#f59e0b" },
  { icon: Hash, label: "Slack", color: "#a855f7" },
];

function ConnectorsVisual() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPulse((p) => (p + 1) % apps.length), 650);
    return () => clearInterval(id);
  }, []);
  const R = 38; // % radius

  return (
    <div className="relative h-full min-h-[300px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {apps.map((a, i) => {
          const ang = (i / apps.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(ang) * R;
          const y = 50 + Math.sin(ang) * R;
          return (
            <motion.line
              key={a.label}
              x1={50}
              y1={50}
              x2={x}
              y2={y}
              stroke={a.color}
              strokeWidth={0.4}
              initial={{ pathLength: 0, opacity: 0.25 }}
              animate={{ pathLength: 1, opacity: pulse === i ? 0.9 : 0.25 }}
              transition={{ pathLength: { delay: 0.1 + i * 0.06, duration: 0.5 }, opacity: { duration: 0.3 } }}
            />
          );
        })}
      </svg>
      {/* square box so % positions match the SVG's meet viewBox */}
      <div className="absolute left-1/2 top-1/2 aspect-square h-full max-w-full -translate-x-1/2 -translate-y-1/2">
        {apps.map((a, i) => {
          const ang = (i / apps.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <motion.div
              key={a.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              style={{ left: `${50 + Math.cos(ang) * R}%`, top: `${50 + Math.sin(ang) * R}%` }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: pulse === i ? 1.08 : 1 }}
              transition={{ opacity: { delay: 0.1 + i * 0.06 }, scale: { duration: 0.3 } }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm"
                style={{ color: a.color, borderColor: pulse === i ? `${a.color}66` : "rgba(0,0,0,0.06)" }}
              >
                <a.icon className="h-4 w-4" />
              </span>
              <span className="whitespace-nowrap text-[10px] font-medium text-slate-600">{a.label}</span>
            </motion.div>
          );
        })}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
            <motion.span
              className="absolute inset-0 rounded-2xl bg-blue-500"
              animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <Workflow className="relative h-6 w-6" />
          </span>
          <span className="text-[10px] font-semibold text-slate-700">Your workflow</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4 · The Payoff — an honest calculator, not a claimed average        */
/* ------------------------------------------------------------------ */

const MANUAL_MIN = manualSteps.reduce((s, x) => s + x.min, 0); // 12
const AUTO_MIN = 0.5;

function PayoffVisual() {
  const [orders, setOrders] = useState(40);
  const manualH = (orders * MANUAL_MIN) / 60;
  const autoH = (orders * AUTO_MIN) / 60;
  const saved = manualH - autoH;
  const max = (200 * MANUAL_MIN) / 60;

  return (
    <div className="flex h-full flex-col justify-center gap-5 p-5 sm:p-6">
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <label htmlFor="wm-orders" className="text-sm text-slate-600">
            Orders or requests per week
          </label>
          <span className="font-serif text-2xl tabular-nums text-slate-900">{orders}</span>
        </div>
        <input
          id="wm-orders"
          type="range"
          min={10}
          max={200}
          step={10}
          value={orders}
          onChange={(e) => setOrders(Number(e.target.value))}
          className="w-full accent-amber-500"
        />
      </div>

      <div className="space-y-3">
        {[
          { label: "By hand", h: manualH, color: "#ef4444", note: `${MANUAL_MIN} min each` },
          { label: "Automated", h: autoH, color: "#10b981", note: "~30 sec each" },
        ].map((r) => (
          <div key={r.label}>
            <div className="mb-1 flex justify-between text-xs text-slate-500">
              <span>
                {r.label} <span className="text-slate-400">· {r.note}</span>
              </span>
              <span className="font-mono tabular-nums text-slate-700">{r.h.toFixed(1)} h/week</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: r.color }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.max((r.h / max) * 100, 1.5)}%` }}
                transition={{ duration: 0.5, ease }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between rounded-2xl bg-amber-50 px-4 py-3">
        <span className="text-sm text-amber-900">Time given back</span>
        <span className="font-serif text-3xl tabular-nums text-amber-900">
          {saved.toFixed(1)}
          <span className="text-base"> h/week</span>
        </span>
      </div>
      <p className="-mt-2 text-[11px] text-slate-400">Based on the 6-step example order. We measure your real numbers in the first call.</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */

type Stage = {
  id: string;
  tab: string;
  eyebrow: string;
  title: string;
  body: string;
  chip: string;
  color: string;
  Visual: ComponentType;
};

const stages: Stage[] = [
  {
    id: "before",
    tab: "The Before",
    eyebrow: "Manual madness",
    title: "Six apps for one order",
    body: "Someone opens the email, copies it into a sheet, checks stock, updates the CRM, raises an invoice and messages the customer. Every single time.",
    chip: "About 12 minutes of copy and paste per order",
    color: "#ef4444",
    Visual: BeforeVisual,
  },
  {
    id: "magic",
    tab: "The Magic",
    eyebrow: "Automated flow",
    title: "One trigger does it all",
    body: "We connect your apps and build smart triggers. The order is read, recorded and confirmed on its own. Your team only steps in when a decision is needed.",
    chip: "Seconds per order, nothing re-typed",
    color: "#10b981",
    Visual: MagicVisual,
  },
  {
    id: "connect",
    tab: "The Connectors",
    eyebrow: "All your tools",
    title: "Works with what you already use",
    body: "WhatsApp, Gmail, Sheets, Shopify, Tally, Zoho, Razorpay, Slack. If it has an API (or even just a spreadsheet), we can connect it. No new platform to learn.",
    chip: "Keep your tools. Lose the tab-switching.",
    color: "#3b82f6",
    Visual: ConnectorsVisual,
  },
  {
    id: "payoff",
    tab: "The Payoff",
    eyebrow: "Do the maths",
    title: "See what it gives back",
    body: "Drag the slider to your weekly volume. The difference is time your team spends on customers and growth instead of copy and paste.",
    chip: "Try your own numbers",
    color: "#f59e0b",
    Visual: PayoffVisual,
  },
];

const STAGE_MS = 7000;

export function WorkflowMagic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const stage = stages[active];

  const next = () => setActive((a) => (a + 1) % stages.length);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 text-center md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            <MousePointerClick className="h-4 w-4" />
            Workflow Automation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl text-foreground md:text-5xl lg:text-6xl"
          >
            From Chaos to <span className="italic text-primary">Flow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground"
          >
            Follow one ordinary order through your business: first by hand, then automated.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7, ease }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Tabs with timer */}
          <div role="tablist" aria-label="Workflow stages" className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {stages.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls="wm-panel"
                  onClick={() => setActive(i)}
                  className={`relative overflow-hidden rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                    on ? "border-transparent bg-card shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]" : "border-border/60 bg-card/40 hover:bg-card"
                  }`}
                >
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: on ? s.color : undefined }}>
                    0{i + 1}
                  </span>
                  <span className={`block text-sm font-medium ${on ? "text-foreground" : "text-muted-foreground"}`}>{s.tab}</span>
                  {on && isInView && (
                    <span
                      key={`bar-${active}`}
                      className="wm-timer absolute bottom-0 left-0 h-[3px] w-full origin-left"
                      style={{ backgroundColor: s.color, animationPlayState: paused ? "paused" : "running", animationDuration: `${STAGE_MS}ms` }}
                      onAnimationEnd={next}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panel: visual + copy switch together */}
          <div
            id="wm-panel"
            role="tabpanel"
            className="relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-[0_30px_80px_-45px_rgba(0,0,0,0.35)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
                className="grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
              >
                <div
                  className="min-h-[380px] border-b border-border/40 md:border-b-0 md:border-r"
                  style={{ background: `linear-gradient(160deg, ${stage.color}0d, transparent 60%)` }}
                >
                  <stage.Visual />
                </div>
                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: stage.color }}>
                    {stage.eyebrow}
                  </span>
                  <h3 className="font-serif text-3xl leading-tight text-foreground">{stage.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{stage.body}</p>
                  <span
                    className="inline-flex self-start rounded-full px-3.5 py-1.5 text-sm font-medium"
                    style={{ backgroundColor: `${stage.color}14`, color: stage.color }}
                  >
                    {stage.chip}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
