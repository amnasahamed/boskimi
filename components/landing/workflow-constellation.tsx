"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  CheckCircle2, 
  Clock, 
  TrendingDown, 
  Users, 
  MessageSquare,
  Database,
  FileText,
  ArrowRight,
  Play,
  RotateCcw,
  Brain,
  Sparkles,
  Target,
  Cloud,
  FileEdit
} from "lucide-react";

const workflowSteps = [
  {
    id: "trigger",
    icon: MessageSquare,
    label: "Customer Inquiry",
    description: "AI receives question via WhatsApp, email, or chat",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "analyze",
    icon: Zap,
    label: "AI Analyzes",
    description: "Understands intent, checks knowledge base & history",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "process",
    icon: Database,
    label: "Fetch Data",
    description: "Pulls real-time info from your systems (CRM, orders, inventory)",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "respond",
    icon: FileText,
    label: "Smart Response",
    description: "Generates personalized, accurate reply in seconds",
    color: "from-violet-400 to-purple-500",
  },
  {
    id: "escalate",
    icon: Users,
    label: "Auto-Escalate",
    description: "Complex issues routed to right team member with full context",
    color: "from-pink-400 to-rose-500",
  },
];

const metrics = [
  { label: "Response Time", before: "4 hours", after: "< 2 seconds", icon: Clock },
  { label: "Cost Per Query", before: "$8.50", after: "$0.40", icon: TrendingDown },
  { label: "Resolution Rate", before: "65%", after: "94%", icon: CheckCircle2 },
];

export function WorkflowConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [activeStep, setActiveStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    if (!isInView || isPlaying) return;

    const timeout = setTimeout(() => {
      setIsPlaying(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, [isInView, isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= workflowSteps.length - 1) {
          setCompletedCycles(c => c + 1);
          setShowMetrics(true);
          return -1;
        }
        return prev + 1;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleReplay = () => {
    setActiveStep(-1);
    setShowMetrics(false);
    setCompletedCycles(0);
    setTimeout(() => setIsPlaying(true), 100);
  };

  return (
    <section
      ref={containerRef}
      id="workflows"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, var(--accent) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.span 
            className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ delay: 0.2 }}
          >
            How It Works
          </motion.span>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.9]">
            From Chaos to
            <br />
            <span className="italic text-accent">Flow</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground mt-6 leading-relaxed max-w-2xl mx-auto">
            Watch how our AI transforms your customer support workflow. 
            What used to take hours now happens in seconds—automatically.
          </p>
        </motion.div>

        {/* Main Workflow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Workflow Container */}
          <div className="relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Progress Bar Background */}
            <div className="absolute top-24 left-12 right-12 h-1 bg-border/50 rounded-full hidden md:block" />
            
            {/* Active Progress Line */}
            <motion.div 
              className="absolute top-24 left-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full hidden md:block"
              initial={{ width: "0%" }}
              animate={{ 
                width: activeStep >= 0 ? `${(activeStep + 1) * 20}%` : "0%" 
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Flowing Particles */}
            <AnimatePresence>
              {isPlaying && activeStep >= 0 && (
                <motion.div
                  className="absolute top-24 left-12 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 hidden md:block"
                  initial={{ x: 0 }}
                  animate={{ 
                    x: activeStep * 220,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.4, 0, 0.2, 1],
                    repeat: 0
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              {workflowSteps.map((step, index) => {
                const isActive = activeStep >= index;
                const isCurrent = activeStep === index;
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <motion.div
                      className={`relative p-5 rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? "bg-card border-accent/50 shadow-lg shadow-accent/10"
                          : "bg-card/30 border-border/50"
                      }`}
                      animate={{
                        scale: isCurrent ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Icon Container */}
                      <motion.div
                        className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                          isActive
                            ? `bg-gradient-to-br ${step.color} shadow-lg`
                            : "bg-secondary"
                        }`}
                      >
                        <Icon className={`w-6 h-6 transition-colors duration-300 ${
                          isActive ? "text-white" : "text-muted-foreground"
                        }`} />
                        
                        {/* Pulse effect for current step */}
                        {isCurrent && (
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-accent"
                            initial={{ scale: 1, opacity: 0.4 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </motion.div>

                      {/* Step Number */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`font-mono text-xs font-bold transition-colors ${
                          isActive ? "text-accent" : "text-muted-foreground"
                        }`}>
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center"
                          >
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </div>

                      {/* Label */}
                      <h3 className={`font-serif text-lg font-medium mb-1 transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {step.label}
                      </h3>

                      {/* Description */}
                      <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Arrow connector (hidden on mobile) */}
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-16 -right-3 z-10">
                        <motion.div
                          animate={{ 
                            x: isActive ? [0, 5, 0] : 0,
                            opacity: isActive ? 1 : 0.3
                          }}
                          transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
                        >
                          <ArrowRight className="w-5 h-5 text-accent" />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50">
              <div className="flex items-center gap-4">
                {/* Status Indicator */}
                <div className="flex items-center gap-2">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      isPlaying ? "bg-green-500" : "bg-muted-foreground"
                    }`}
                    animate={isPlaying ? { 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1] 
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    {isPlaying 
                      ? activeStep >= 0 
                        ? `Processing: ${workflowSteps[activeStep]?.label}`
                        : "Initializing..."
                      : "Ready to start"
                    }
                  </span>
                </div>

                {/* Cycle Counter */}
                {completedCycles > 0 && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded-full"
                  >
                    {completedCycles} workflows completed
                  </motion.span>
                )}
              </div>

              {/* Replay Button */}
              <button
                onClick={handleReplay}
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
              >
                <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                Replay Demo
              </button>
            </div>
          </div>

          {/* Metrics Section */}
          <AnimatePresence>
            {showMetrics && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <div className="bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 border border-accent/20 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl text-foreground mb-2">
                      Real Results for Real Businesses
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      Before AI → After AI
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center p-4 bg-card/50 rounded-xl"
                        >
                          <div className="flex justify-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-accent" />
                            </div>
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                            {metric.label}
                          </div>
                          <div className="flex items-center justify-center gap-3">
                            <span className="font-serif text-lg text-muted-foreground line-through">
                              {metric.before}
                            </span>
                            <motion.span 
                              className="font-serif text-2xl text-accent font-bold"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                            >
                              {metric.after}
                            </motion.span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                  >
                    <a
                      href="#connect"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-serif text-lg hover:scale-105 transition-transform shadow-lg shadow-accent/25"
                    >
                      <Play className="w-5 h-5" />
                      See What AI Can Do for You
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Integration logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Seamlessly connects with your existing tools
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: "OpenAI", Icon: Brain, color: "text-emerald-500" },
              { name: "Claude", Icon: Sparkles, color: "text-violet-500" },
              { name: "Slack", Icon: MessageSquare, color: "text-amber-500" },
              { name: "HubSpot", Icon: Target, color: "text-orange-500" },
              { name: "Salesforce", Icon: Cloud, color: "text-blue-500" },
              { name: "Notion", Icon: FileEdit, color: "text-slate-500" },
              { name: "Zapier", Icon: Zap, color: "text-red-500" },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default group"
              >
                <tool.Icon className={`w-5 h-5 group-hover:scale-110 transition-transform ${tool.color}`} />
                <span className="font-serif text-lg italic">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
