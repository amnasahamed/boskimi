"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, Users, DollarSign, ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";

const results = [
  {
    client: "Navakeralam",
    industry: "Government Portal",
    challenge: "10,000+ daily citizen inquiries overwhelming staff",
    solution: "AI support agent handling 80% of routine queries",
    metrics: [
      { icon: Clock, value: "2 min", label: "Avg response (was 4 hrs)", improvement: "120x faster" },
      { icon: Users, value: "80%", label: "Queries automated" },
    ],
    quote: "Our team went from drowning in tickets to actually having time for complex cases that need human judgment.",
    author: "Project Director",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    client: "Clapsboard",
    industry: "Media & Entertainment",
    challenge: "Manual lead qualification wasting sales team time",
    solution: "AI lead scoring and instant qualification",
    metrics: [
      { icon: TrendingUp, value: "4x", label: "Conversion rate", improvement: "300% increase" },
      { icon: DollarSign, value: "$50K", label: "Additional revenue/mo" },
    ],
    quote: "The AI qualifies leads better than our best salesperson. Sales only talks to prospects who are actually ready to buy.",
    author: "Head of Sales",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    client: "Badria Sweets",
    industry: "E-commerce",
    challenge: "Order tracking inquiries eating up 6 hours daily",
    solution: "WhatsApp automation for order updates",
    metrics: [
      { icon: Clock, value: "30 hrs", label: "Weekly time saved" },
      { icon: Users, value: "24/7", label: "Customer support" },
    ],
    quote: "Customers get instant order updates at 2 AM. We wake up to happy customers instead of a full inbox.",
    author: "Operations Manager",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export function ResultsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            <TrendingUp className="w-4 h-4" />
            Real Results
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Numbers That
            <br />
            <span className="italic text-primary">Actually Matter</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Every project we take on has one goal: save time and make money. 
            Here&apos;s what that looks like in practice.
          </motion.p>
        </div>

        {/* Results Cards */}
        <div className="space-y-8">
          {results.map((result, index) => (
            <motion.div
              key={result.client}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              className={`group relative p-8 md:p-10 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative grid md:grid-cols-12 gap-8 items-center">
                {/* Left - Client Info */}
                <div className="md:col-span-3">
                  <div className="text-sm text-primary font-medium mb-1">{result.client}</div>
                  <div className="text-sm text-muted-foreground">{result.industry}</div>
                  
                  {/* Metrics */}
                  <div className="mt-6 space-y-4">
                    {result.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2">
                          <metric.icon className="w-4 h-4 text-primary" />
                          <span className="font-serif text-2xl text-foreground">{metric.value}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                        {metric.improvement && (
                          <div className="text-xs text-green-500 mt-0.5">{metric.improvement}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Middle - Challenge & Solution */}
                <div className="md:col-span-4">
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">The Problem</div>
                    <p className="text-foreground">{result.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs text-primary uppercase tracking-wider mb-1">What We Built</div>
                    <p className="text-muted-foreground">{result.solution}</p>
                  </div>
                </div>

                {/* Right - Quote */}
                <div className="md:col-span-5">
                  <div className="relative p-6 bg-background/50 rounded-2xl">
                    <Quote className="absolute -top-3 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-foreground italic leading-relaxed mb-4">
                      &ldquo;{result.quote}&rdquo;
                    </p>
                    <div className="text-sm text-muted-foreground">
                      — {result.author}, {result.client}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-primary/5 border border-primary/10 rounded-3xl">
            <div className="text-left">
              <div className="font-serif text-xl text-foreground">Want results like these?</div>
              <div className="text-sm text-muted-foreground">Let&apos;s talk about your specific situation</div>
            </div>
            <Link
              href="#connect"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all group whitespace-nowrap"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Aggregate Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-20 pt-12 border-t border-border/30 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "147", label: "Projects Shipped" },
            { value: "$2.4M", label: "Client Revenue Added" },
            { value: "40K+", label: "Hours Saved" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-4xl text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
