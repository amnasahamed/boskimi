"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Moon,
  CheckCheck,
  Sheet,
  Contact,
  Flame,
  Snowflake,
  Sun,
  Zap,
  Puzzle,
  Wand2,
  CircleCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Mini live demos — one per card, each loops while on screen          */
/* ------------------------------------------------------------------ */

function useTick(active: boolean, ms: number) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setT((n) => n + 1), ms);
    return () => clearInterval(id);
  }, [active, ms]);
  return t;
}

function Demo({ children, tint }: { children: ReactNode; tint: string }) {
  return (
    <div
      className="relative h-44 overflow-hidden rounded-2xl border border-black/5"
      style={{ background: `linear-gradient(180deg, ${tint}12, ${tint}05)` }}
    >
      {children}
    </div>
  );
}

const nightChats = [
  { q: "Is the blue kurta back in stock?", a: "Yes! Size M and L are available. Want me to reserve one?", time: "2:14 AM" },
  { q: "Can I change my delivery slot?", a: "Done. Moved to Saturday, 10 AM to 1 PM.", time: "3:02 AM" },
  { q: "Do you deliver to Kozhikode?", a: "We do, free above ₹999. Usually in 2 days.", time: "1:47 AM" },
];

function SupportDemo({ active }: { active: boolean }) {
  const t = useTick(active, 3600);
  const c = nightChats[t % nightChats.length];
  return (
    <Demo tint="#22c55e">
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-medium text-white">
        <Moon className="h-3 w-3" /> {c.time}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={t}
          className="absolute inset-x-3 bottom-3 flex flex-col gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[80%] self-start rounded-2xl rounded-bl-md bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm"
          >
            {c.q}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-[#22c55e] px-3 py-1.5 text-xs text-white shadow-sm"
          >
            {c.a}
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-1 self-end text-[10px] text-slate-500"
          >
            answered while you slept <CheckCheck className="h-3 w-3 text-sky-500" />
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </Demo>
  );
}

const rows = ["Order #1042 · Asha", "Order #1043 · Rahul", "Order #1044 · Meera", "Order #1045 · Imran"];

function SyncDemo({ active }: { active: boolean }) {
  const t = useTick(active, 1400);
  const synced = Math.min(t % (rows.length + 2), rows.length);
  return (
    <Demo tint="#FF4B1F">
      <div className="absolute inset-3 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1.5 sm:gap-2">
        <div className="h-full rounded-xl border border-black/5 bg-white p-2">
          <div className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
            <Sheet className="h-3 w-3" /> Orders sheet
          </div>
          {rows.map((r) => (
            <div key={r} className="mb-1 truncate rounded bg-emerald-50 px-1.5 py-1 text-[10px] text-slate-600">
              {r}
            </div>
          ))}
        </div>
        <div className="relative flex h-full w-5 items-center justify-center sm:w-8">
          <div className="h-px w-full bg-primary/30" />
          <motion.span
            key={t}
            className="absolute h-2 w-2 rounded-full bg-primary"
            initial={{ left: 0, opacity: 0 }}
            animate={{ left: "calc(100% - 8px)", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        <div className="h-full rounded-xl border border-black/5 bg-white p-2">
          <div className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold text-primary">
            <Contact className="h-3 w-3" /> CRM
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r}
              className="mb-1 truncate rounded px-1.5 py-1 text-[10px]"
              animate={{
                backgroundColor: i < synced ? "rgba(255,75,31,0.08)" : "rgba(0,0,0,0.03)",
                color: i < synced ? "#334155" : "rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.3 }}
            >
              {r}
            </motion.div>
          ))}
        </div>
      </div>
    </Demo>
  );
}

const leads = [
  { name: "Wants 200 units by Friday", tag: "Hot", icon: Flame, color: "#ef4444" },
  { name: "Asked for a price list", tag: "Warm", icon: Sun, color: "#f59e0b" },
  { name: "Just browsing", tag: "Nurture", icon: Snowflake, color: "#0ea5e9" },
];

function LeadsDemo({ active }: { active: boolean }) {
  const t = useTick(active, 900);
  const step = t % (leads.length + 3);
  return (
    <Demo tint="#f59e0b">
      <div className="absolute inset-3 flex flex-col gap-1.5">
        {leads.map((l, i) => {
          const tagged = i < step;
          return (
            <motion.div
              key={l.name}
              className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-3 py-2"
              animate={{ x: tagged && l.tag === "Hot" ? 6 : 0 }}
            >
              <span className="truncate text-xs text-slate-700">{l.name}</span>
              <AnimatePresence>
                {tagged && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-2 flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{ backgroundColor: `${l.color}1a`, color: l.color }}
                  >
                    <l.icon className="h-3 w-3" /> {l.tag}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        <AnimatePresence>
          {step > leads.length && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-auto flex items-center gap-1.5 self-start rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-medium text-white"
            >
              <Zap className="h-3 w-3 text-amber-400" /> Hot lead sent to sales
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Demo>
  );
}

const blocks = [
  { label: "Your weird trigger", icon: Puzzle },
  { label: "Your exact rules", icon: Wand2 },
  { label: "Done, every time", icon: CircleCheck },
];

function CustomDemo({ active }: { active: boolean }) {
  const t = useTick(active, 1000);
  const placed = t % (blocks.length + 2);
  return (
    <Demo tint="#ec4899">
      <div className="absolute inset-3 flex items-center justify-center gap-1 sm:gap-2">
        {blocks.map((b, i) => (
          <div key={b.label} className="flex items-center gap-1 sm:gap-2">
            <motion.div
              className="flex w-[68px] flex-col items-center gap-1.5 rounded-xl border bg-white px-1.5 py-3 text-center sm:w-24 sm:px-2"
              animate={{
                y: i < placed ? 0 : -14,
                opacity: i < placed ? 1 : 0.35,
                borderColor: i < placed ? "rgba(236,72,153,0.35)" : "rgba(0,0,0,0.06)",
                rotate: i < placed ? 0 : i % 2 ? 4 : -4,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <b.icon className="h-4 w-4 text-pink-500" />
              <span className="text-[10px] leading-tight text-slate-600">{b.label}</span>
            </motion.div>
            {i < blocks.length - 1 && (
              <motion.span
                className="h-px w-2 bg-pink-400 sm:w-4"
                animate={{ opacity: i + 1 < placed ? 1 : 0.15 }}
              />
            )}
          </div>
        ))}
      </div>
    </Demo>
  );
}

/* ------------------------------------------------------------------ */

const services = [
  {
    id: "support",
    title: "Customer Support That Never Sleeps",
    description:
      "Your customers get instant answers at 2 AM. Your team wakes up to the complex stuff already filtered.",
    tags: ["WhatsApp & web chat", "Smart escalation", "Multi-language"],
    href: "/services/whatsapp",
    color: "#22c55e",
    Demo: SupportDemo,
  },
  {
    id: "workflow",
    title: "Stop Copy-Pasting Between Apps",
    description:
      "We connect your tools and automate the boring data shuffling. Spreadsheets update themselves. Reports write themselves.",
    tags: ["Sheets, CRM, accounting", "Smart triggers", "No more re-typing"],
    href: "/services/workflows",
    color: "#FF4B1F",
    Demo: SyncDemo,
  },
  {
    id: "leads",
    title: "Qualify Leads While You Sleep",
    description:
      "Every enquiry gets an instant, helpful reply. Hot leads go straight to your sales team. The rest get nurtured automatically.",
    tags: ["Instant qualification", "Auto follow-up", "CRM sync"],
    href: "/services/ai-agents",
    color: "#f59e0b",
    Demo: LeadsDemo,
  },
  {
    id: "custom",
    title: "Something Weird & Specific?",
    description:
      "Got a process that drives you nuts? We've probably seen something like it. Tell us the pain, we'll build the fix.",
    tags: ["Custom logic", "Odd integrations", "Bespoke builds"],
    href: "#connect",
    color: "#ec4899",
    Demo: CustomDemo,
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const { Demo: CardDemo } = service;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={service.href}
        className="group relative flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] sm:p-6"
      >
        <CardDemo active={inView} />

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl leading-tight text-foreground">{service.title}</h3>
          <span
            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45"
            style={{ backgroundColor: `${service.color}18`, color: service.color }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="-mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <span
          className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{ backgroundColor: service.color }}
        />
      </Link>
    </motion.div>
  );
}

export function ServicesUniverse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} id="services" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              What We Actually Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl leading-tight text-foreground md:text-5xl"
            >
              We Build Systems That
              <br />
              <span className="italic text-primary">Make Work Less Annoying</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Every business has repetitive tasks that drain time and energy. We find them and make them disappear.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-muted-foreground">
            Not sure which fits your situation? That&apos;s normal. Let&apos;s talk it through.
          </p>
          <Link
            href="#connect"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Book a free 30-min chat <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
