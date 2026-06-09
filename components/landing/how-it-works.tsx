"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Coffee, FileText, Hammer, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Coffee,
    title: "We Have a Conversation",
    description: "You tell us what's driving you crazy. The repetitive tasks, the bottlenecks, the stuff that makes you want to throw your laptop. We listen and ask questions.",
    time: "30 minutes",
    details: ["No sales pitch", "Just honest discussion", "We'll tell you if we can't help"],
  },
  {
    icon: FileText,
    title: "We Design a Solution",
    description: "Our engineers map out exactly what we'd build, how long it would take, and what it would cost. No jargon, just a clear plan you can actually understand.",
    time: "3-5 days",
    details: ["Detailed proposal", "Timeline & milestones", "Fixed-price quote"],
  },
  {
    icon: Hammer,
    title: "We Build It (You Chill)",
    description: "While you focus on running your business, we build and test your system. We check in weekly with progress updates. No surprises.",
    time: "2-4 weeks",
    details: ["Weekly updates", "Testing & refinement", "Your feedback incorporated"],
  },
  {
    icon: Rocket,
    title: "It Goes Live (And Works)",
    description: "We deploy, train your team, and stick around for 90 days to make sure everything runs smoothly. If something breaks, we fix it. Simple.",
    time: "Launch + 90 days support",
    details: ["Team training included", "Documentation provided", "90-day warranty"],
  },
];

// Step card with expandable details
function StepCard({ step, index, isActive, onClick }: { 
  step: typeof steps[0]; 
  index: number; 
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <motion.div 
        className={`relative flex gap-6 p-6 md:p-8 rounded-3xl border transition-all duration-300 ${
          isActive 
            ? "border-primary/50 bg-primary/5" 
            : "border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50"
        }`}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.2 }}
      >
        {/* Step Number / Icon */}
        <div className="flex flex-col items-center">
          <motion.div 
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
              isActive ? "bg-primary" : "bg-primary/10 group-hover:bg-primary/20"
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <step.icon className={`w-7 h-7 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
          </motion.div>
          
          {/* Connector line */}
          {index < steps.length - 1 && (
            <motion.div 
              className="w-px flex-1 bg-border/50 my-4"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              style={{ originY: 0 }}
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
              {step.title}
            </h3>
            <motion.span 
              className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              {step.time}
            </motion.span>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Expandable details */}
          <motion.div
            initial={false}
            animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border/30">
              <div className="flex flex-wrap gap-2">
                {step.details.map((detail, i) => (
                  <motion.div
                    key={detail}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-background/50 rounded-full text-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    {detail}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Click hint */}
          <motion.div
            className="mt-3 text-xs text-muted-foreground"
            animate={{ opacity: isActive ? 0 : [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {isActive ? "" : "Click to see details"}
          </motion.div>
        </div>

        {/* Active indicator */}
        <motion.div
          className="absolute right-6 top-6 w-2 h-2 rounded-full bg-primary"
          initial={{ scale: 0 }}
          animate={{ scale: isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            How This Actually Works
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground"
          >
            From Frustrated to
            <br />
            <motion.span 
              className="italic text-primary"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Automated
            </motion.span>{" "}
            in 30 Days
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            No 6-month enterprise projects. No endless meetings. Just a straightforward 
            process that ends with you having more time.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={step}
              index={index}
              isActive={activeStep === index}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            />
          ))}
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 h-1 bg-secondary rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#connect"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all group"
          >
            <span>Start with Step 1 — Free Chat</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
          <p className="mt-4 text-sm text-muted-foreground">
            Takes 30 minutes. No commitment. Just coffee and conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
