"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ClipboardList, 
  Search, 
  GitBranch, 
  Play, 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const workflowSteps = [
  {
    phase: "DISCOVERY",
    icon: ClipboardList,
    title: "We Map Your Workflow",
    description: "You walk us through your process. We identify every repetitive click, copy-paste, and manual step that's eating your time.",
    painExample: "Sarah spends 2 hours every morning copying data between spreadsheets",
    deliverable: "Process map + time-waste analysis",
    color: "#6366f1",
  },
  {
    phase: "ANALYSIS",
    icon: Search,
    title: "Find the Automation Opportunities",
    description: "Our engineers analyze where automation will have the biggest impact. We prioritize quick wins and high-ROI fixes.",
    painExample: "12 manual steps could become 1 click. 3 hours → 5 minutes.",
    deliverable: "Prioritized automation roadmap",
    color: "#8b5cf6",
  },
  {
    phase: "BUILD",
    icon: GitBranch,
    title: "Connect & Automate",
    description: "We build the bridges between your apps. Data flows automatically. Triggers fire at the right moments. Errors get caught before they cause problems.",
    painExample: "Shopify order → Auto-create shipping label → Update CRM → Send email",
    deliverable: "Working automation + test results",
    color: "#ec4899",
  },
  {
    phase: "DEPLOY",
    icon: Play,
    title: "Go Live (Gradually)",
    description: "We don't flip a switch and hope. We run parallel, test with real data, and gradually transition your team once everything's proven.",
    painExample: "Zero downtime. Zero 'oops, we broke everything' moments.",
    deliverable: "Live system + team training",
    color: "#f59e0b",
  },
  {
    phase: "OPTIMIZE",
    icon: TrendingUp,
    title: "Keep Improving",
    description: "After launch, we monitor, measure, and fine-tune. As your business grows, we adapt the automation to match.",
    painExample: "Monthly check-ins. Quarterly reviews. Continuous improvement.",
    deliverable: "Ongoing optimization + support",
    color: "#10b981",
  },
];

function WorkflowStep({ 
  step, 
  index, 
  isActive, 
  onClick 
}: { 
  step: typeof workflowSteps[0]; 
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="relative cursor-pointer"
    >
      {/* Timeline connector */}
      {index < workflowSteps.length - 1 && (
        <motion.div
          className="absolute left-6 top-16 w-0.5 h-[calc(100%-2rem)] bg-secondary"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          style={{ originY: 0 }}
        />
      )}

      <motion.div
        className="flex gap-5 p-5 rounded-2xl border transition-all duration-300"
        style={{
          borderColor: isActive ? step.color : "hsl(var(--border) / 0.5)",
          backgroundColor: isActive ? `${step.color}08` : "transparent",
        }}
        whileHover={{ x: 8 }}
      >
        {/* Icon / Phase badge */}
        <div className="relative">
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center z-10 relative"
            style={{ backgroundColor: isActive ? step.color : "hsl(var(--secondary))" }}
            animate={{ 
              scale: isActive ? 1.1 : 1,
              rotate: isActive ? [0, -5, 5, 0] : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <step.icon className={`w-6 h-6 ${isActive ? "text-white" : "text-muted-foreground"}`} />
          </motion.div>
          
          {/* Phase label */}
          <motion.span
            className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-mono uppercase rounded-full"
            style={{ 
              backgroundColor: step.color,
              color: "white"
            }}
            initial={{ scale: 0 }}
            animate={{ scale: isActive ? 1 : 0 }}
          >
            {step.phase}
          </motion.span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-serif text-lg text-foreground group-hover:text-primary">
              {step.title}
            </h3>
            <motion.div
              animate={{ rotate: isActive ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {step.description}
          </p>

          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{ 
              height: isActive ? "auto" : 0,
              opacity: isActive ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-3 border-t border-border/30 space-y-3">
              {/* Pain example */}
              <div className="flex items-start gap-2 text-sm">
                <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{step.painExample}</span>
              </div>
              
              {/* Deliverable */}
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{step.deliverable}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WorkflowProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
            >
              <GitBranch className="w-4 h-4" />
              Workflow Automation
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6"
            >
              We Don&apos;t Just Automate.
              <br />
              <span className="italic text-primary">We Optimize.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Every workflow we build goes through our 5-phase process. 
              The result? Automations that actually work, scale with your business, 
              and save you real time (not just look good on paper).
            </motion.p>

            {/* Steps */}
            <div className="space-y-3">
              {workflowSteps.map((step, index) => (
                <WorkflowStep
                  key={step.phase}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-32"
          >
            {/* Workflow visualization */}
            <div className="p-8 bg-card/50 border border-border/50 rounded-3xl backdrop-blur-sm">
              <h3 className="font-serif text-xl text-foreground mb-6">
                What You Get Back
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Manual data entry", before: "3 hrs/day", after: "0 min", icon: "❌" },
                  { label: "Error rate", before: "8%", after: "<0.1%", icon: "✓" },
                  { label: "Report generation", before: "2 hrs", after: "Instant", icon: "⚡" },
                  { label: "Team happiness", before: "😩", after: "😊", icon: "🎉" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-background/50 rounded-xl"
                  >
                    <span className="text-foreground">{item.label}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground line-through">{item.before}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <motion.span 
                        className="text-sm font-medium text-green-500"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        {item.after}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Total time saved */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="mt-6 p-6 bg-primary/5 border border-primary/10 rounded-2xl text-center"
              >
                <div className="text-sm text-muted-foreground mb-1">Average time saved</div>
                <div className="font-serif text-4xl text-primary">25+ hours/week</div>
                <div className="text-sm text-muted-foreground mt-1">
                  That&apos;s 100+ hours a month
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-6 text-center"
            >
              <a
                href="#connect"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                <span>See what we could automate for you</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
