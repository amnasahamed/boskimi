"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Workflow, MessageSquare, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Agents",
    description: "AI agents that handle customer support, sales, and operations 24/7. They learn from every interaction.",
    stat: "80%",
    statLabel: "Queries Automated",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Eliminate repetitive tasks. We automate workflows end-to-end, from data entry to complex decisions.",
    stat: "300%",
    statLabel: "Efficiency Gain",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: MessageSquare,
    title: "Smart Communication",
    description: "AI-powered conversations on WhatsApp, email, and chat. Instant responses, personalized engagement.",
    stat: "2s",
    statLabel: "Response Time",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description: "Turn data into decisions. Predictive analytics, automated reporting, and insights that drive growth.",
    stat: "70%",
    statLabel: "Cost Reduction",
    color: "from-amber-500 to-orange-400",
  },
];

const testimonials = [
  {
    quote: "The AI agent handles 80% of our customer inquiries. Our team finally focuses on strategic work.",
    author: "Marcus T.",
    role: "Operations Director",
    company: "TechWear",
  },
  {
    quote: "They reimagined our processes entirely. Our efficiency increased by 300% in just 3 months.",
    author: "Elena R.",
    role: "Founder",
    company: "Artisan Goods Co.",
  },
];

export function AISolutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section
      ref={containerRef}
      id="solutions"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            Our Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95]"
          >
            AI That
            <br />
            <span className="italic text-primary">Delivers Results</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Icon & Stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-3xl text-primary">{feature.stat}</div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ delay: 0.6 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Quote */}
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-8">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-serif text-lg">
                  {testimonials[activeTestimonial].author[0]}
                </div>
                <div>
                  <div className="font-serif text-foreground">{testimonials[activeTestimonial].author}</div>
                  <div className="font-mono text-xs text-muted-foreground">
                    {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation & CTA */}
            <div className="flex flex-col items-start md:items-end gap-6">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-12 h-1 rounded-full transition-all ${
                      activeTestimonial === index ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <a
                href="#connect"
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-serif text-lg hover:shadow-xl hover:shadow-primary/25 transition-all hover:scale-105"
              >
                Get Similar Results
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
