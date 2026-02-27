"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Frown, Smile, Clock, DollarSign, ArrowRight } from "lucide-react";

const comparisons = [
  {
    category: "Customer Support",
    before: [
      "Inbox full of the same questions",
      "Team stressed, response times slipping",
      "Customers frustrated waiting for answers",
      "Support staff burning out",
    ],
    after: [
      "Instant answers, even at 2 AM",
      "Team handles only complex issues",
      "Customers happy with fast responses",
      "Support team actually enjoys their work",
    ],
    savings: { time: "40 hrs/week", money: "$2,400/mo" },
  },
  {
    category: "Data & Reporting",
    before: [
      "Copy-pasting between 5 different apps",
      "Spreadsheet errors costing hours",
      "Reports take a full day to compile",
      "Decisions delayed waiting for data",
    ],
    after: [
      "Data flows automatically between tools",
      "Reports generate themselves",
      "Real-time dashboards always up to date",
      "Make decisions with current info",
    ],
    savings: { time: "25 hrs/week", money: "$1,500/mo" },
  },
  {
    category: "Lead Management",
    before: [
      "Sales chasing leads that go nowhere",
      "Hot leads slip through cracks",
      "Slow responses = lost opportunities",
      "No system for following up",
    ],
    after: [
      "Only qualified leads reach sales",
      "Every hot lead gets instant attention",
      "AI nurtures cold leads until ready",
      "Follow-ups happen automatically",
    ],
    savings: { time: "15 hrs/week", money: "$3,200/mo" },
  },
];

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            Real Talk
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground"
          >
            Life Before vs After
            <br />
            <span className="italic text-primary">Working With Us</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            We&apos;ve helped enough founders to know the patterns. Here&apos;s what actually changes.
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-8">
          {comparisons.map((comp, index) => (
            <motion.div
              key={comp.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden"
            >
              <div className="px-6 py-4 bg-secondary/30 border-b border-border/30">
                <span className="font-serif text-xl text-foreground">{comp.category}</span>
              </div>

              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/30">
                {/* Before */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Frown className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-muted-foreground">Before</span>
                  </div>
                  <ul className="space-y-3">
                    {comp.before.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="p-6 bg-primary/5">
                  <div className="flex items-center gap-2 mb-4">
                    <Smile className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-foreground">After</span>
                  </div>
                  <ul className="space-y-3">
                    {comp.after.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <Smile className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Win */}
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-4">What You Get Back</span>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-serif text-2xl text-foreground">{comp.savings.time}</div>
                        <div className="text-xs text-muted-foreground">of your time</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-serif text-2xl text-foreground">{comp.savings.money}</div>
                        <div className="text-xs text-muted-foreground">in value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Ready to move from the left column to the right?</p>
          <a
            href="#connect"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all group"
          >
            <span>Let&apos;s Fix Your Biggest Time-Waster</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
