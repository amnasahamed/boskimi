"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, FolderOpen } from "lucide-react";

/*
 * Case studies, summarised from the case-study pages themselves.
 * No invented metrics or quotes: what we built, for whom, and what changed.
 */
const cases = [
  {
    client: "Badria Sweets",
    meta: "Pastry brand · Saudi Arabia",
    kind: "WhatsApp AI",
    problem: "Seasonal floods of WhatsApp enquiries, and agents at risk of quoting the wrong prices.",
    built: "An Arabic-only, brand-safe AI agent on WhatsApp, orchestrated with n8n, with the team kept in the loop.",
    outcomes: ["Instant replies to product and price questions", "Zero pricing mistakes via image-based sharing"],
    stack: ["WATI", "n8n", "AI agent"],
    image: "/images/case-studies/badria-sweets/badria-whatsapp-user-view.png",
    href: "/case-studies/badria-sweets",
    accent: "#22c55e",
    fit: "contain" as const,
  },
  {
    client: "Navakeralam",
    meta: "Government of Kerala · India",
    kind: "Citizen platform",
    problem: "A state-wide drive to hear every citizen, with volunteers visiting homes across Kerala.",
    built: "A bilingual, mobile-first public portal integrated with field operations and government standards.",
    outcomes: ["State-wide reach in Malayalam and English", "Real-time collection and analysis of citizen input"],
    stack: ["Bilingual", "Mobile-first", "Accessible"],
    image: "/images/case-studies/navakeralam/banner.png",
    href: "/case-studies/navakeralam",
    accent: "#0ea5e9",
    fit: "cover" as const,
  },
  {
    client: "ClapsLearn AI",
    meta: "EdTech · India",
    kind: "AI receptionist",
    problem: "Admin staff buried under repetitive questions from parents, tutors and visitors.",
    built: "A custom-trained AI front-office on the website, answering course and schedule questions and handing off to staff.",
    outcomes: ["24/7 answers, including off-hours", "Staff freed from the same FAQs"],
    stack: ["Custom KB", "Smart routing", "Human handoff"],
    image: "/images/case-studies/clapslearn-ai/clapslearn-chat-widget.png",
    href: "/case-studies/clapslearn-ai",
    accent: "#8b5cf6",
    fit: "contain" as const,
  },
  {
    client: "ClapsBoard",
    meta: "For ClapsLearn · iOS",
    kind: "Native app",
    problem: "Teachers needed one dependable teaching tool that works even when classroom internet doesn't.",
    built: "A native iPad and iPhone whiteboard and classroom hub with local peer-to-peer voice and offline support.",
    outcomes: ["Works with or without internet", "Teacher and student devices linked locally"],
    stack: ["SwiftUI", "Peer-to-peer", "Offline-first"],
    image: "/images/case-studies/clapsboard/banner.png",
    href: "/case-studies/clapsboard",
    accent: "#FF4B1F",
    fit: "cover" as const,
  },
];

function CaseCard({ c, index, featured }: { c: (typeof cases)[number]; index: number; featured: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={featured ? "md:col-span-2 lg:col-span-3" : ""}
    >
      <Link
        href={c.href}
        className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.28)] ${
          featured ? "lg:grid lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[360px]" : "aspect-[16/10]"}`}
          style={{ background: `linear-gradient(160deg, ${c.accent}1f, ${c.accent}08)` }}
        >
          <Image
            src={c.image}
            alt={`${c.client} project`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`transition-transform duration-700 group-hover:scale-[1.04] ${
              c.fit === "contain" ? "object-contain p-6" : "object-cover"
            }`}
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur">
            {c.kind}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl text-foreground sm:text-3xl">{c.client}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{c.meta}</p>
            </div>
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
              style={{ backgroundColor: `${c.accent}18`, color: c.accent }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <span className="mr-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Problem</span>
              <span className="text-foreground/80">{c.problem}</span>
            </p>
            <p>
              <span className="mr-1.5 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: c.accent }}>
                Built
              </span>
              <span className="text-foreground/80">{c.built}</span>
            </p>
          </div>

          <ul className="space-y-1.5">
            {c.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-sm font-medium text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.accent }} strokeWidth={2.5} />
                {o}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
            {c.stack.map((s) => (
              <span key={s} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                {s}
              </span>
            ))}
            <span className="ml-auto text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
              Read case study
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ResultsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              <FolderOpen className="h-4 w-4" />
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl text-foreground md:text-5xl lg:text-6xl"
            >
              Proof, <span className="italic text-primary">Not Promises</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              A government platform, a WhatsApp AI agent, an AI receptionist and a native iOS app. Here&apos;s what
              we actually built.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              All case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <CaseCard key={c.client} c={c} index={i} featured={i === 0} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-foreground px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left"
        >
          <div>
            <p className="font-serif text-2xl text-background">Want a result like these?</p>
            <p className="text-sm text-background/60">Tell us the problem. We&apos;ll tell you honestly if we can fix it.</p>
          </div>
          <Link
            href="#connect"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start your project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
