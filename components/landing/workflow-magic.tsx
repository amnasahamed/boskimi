"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Zap, MousePointerClick, Timer, CheckCircle2, Trophy } from "lucide-react";

// Visual: Before - Manual chaos
function BeforeChaosVisual({ isActive }: { isActive: boolean }) {
  const tasks = [
    { x: 10, y: 20, icon: "📧", label: "Check email" },
    { x: 30, y: 40, icon: "📋", label: "Copy to sheet" },
    { x: 50, y: 25, icon: "🔍", label: "Look up order" },
    { x: 20, y: 60, icon: "✏️", label: "Update CRM" },
    { x: 60, y: 50, icon: "📤", label: "Send update" },
    { x: 40, y: 75, icon: "⏰", label: "Wait for reply" },
  ];

  return (
    <div className="relative h-64 bg-red-500/5 border-2 border-dashed border-red-300 rounded-2xl overflow-hidden">
      <motion.div
        className="absolute top-2 left-2 px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
      >
        BEFORE: 45 min/task
      </motion.div>

      {/* Scattered tasks */}
      {tasks.map((task, i) => (
        <motion.div
          key={i}
          className="absolute px-3 py-2 bg-white border border-red-200 rounded-lg shadow-sm text-xs"
          style={{ left: `${task.x}%`, top: `${task.y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: -10 + Math.random() * 20 }}
          animate={isActive ? { 
            opacity: 1, 
            scale: 1,
            rotate: -5 + Math.random() * 10,
          } : {}}
          transition={{ delay: i * 0.1 }}
        >
          <span className="mr-1">{task.icon}</span>
          {task.label}
        </motion.div>
      ))}

      {/* Confused arrows */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {tasks.slice(0, -1).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${tasks[i].x + 10} ${tasks[i].y + 10} Q ${50 + Math.random() * 20} ${50} ${tasks[i + 1].x + 5} ${tasks[i + 1].y + 5}`}
            stroke="#fca5a5"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isActive ? { pathLength: 1, opacity: 0.6 } : {}}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          />
        ))}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#fca5a5" />
          </marker>
        </defs>
      </svg>

      {/* Stress indicator */}
      <motion.div
        className="absolute bottom-2 right-2 text-2xl"
        animate={isActive ? { rotate: [0, 15, -15, 0] } : {}}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
      >
        😫
      </motion.div>
    </div>
  );
}

// Visual: After - Smooth automation
function AfterFlowVisual({ isActive }: { isActive: boolean }) {
  const steps = [
    { icon: "📧", label: "Email arrives", x: 10 },
    { icon: "⚡", label: "Trigger fires", x: 35 },
    { icon: "🤖", label: "AI processes", x: 60 },
    { icon: "✅", label: "Done!", x: 85 },
  ];

  return (
    <div className="relative h-64 bg-green-500/5 border-2 border-green-300 rounded-2xl overflow-hidden">
      <motion.div
        className="absolute top-2 left-2 px-2 py-1 bg-green-100 text-green-600 text-xs font-bold rounded"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
      >
        AFTER: 30 sec/task
      </motion.div>

      {/* Flow line */}
      <div className="absolute top-1/2 left-8 right-8 h-1 bg-green-200 rounded-full -translate-y-1/2" />
      <motion.div
        className="absolute top-1/2 left-8 h-1 bg-green-500 rounded-full -translate-y-1/2"
        initial={{ width: 0 }}
        animate={isActive ? { width: "calc(100% - 4rem)" } : {}}
        transition={{ duration: 2, delay: 0.3 }}
      />

      {/* Steps */}
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${step.x}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-xl shadow-lg"
            animate={isActive ? {
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0)",
                "0 0 0 10px rgba(34, 197, 94, 0.2)",
                "0 0 0 0 rgba(34, 197, 94, 0)",
              ],
            } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          >
            {step.icon}
          </motion.div>
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-green-700 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 + i * 0.3 }}
          >
            {step.label}
          </motion.div>
        </motion.div>
      ))}

      {/* Speed lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 h-0.5 bg-green-400/50 rounded-full"
          style={{ 
            left: "20%", 
            width: "60%",
            top: `${45 + i * 5}%`,
          }}
          animate={isActive ? {
            x: ["-100%", "200%"],
            opacity: [0, 1, 0],
          } : {}}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Happy indicator */}
      <motion.div
        className="absolute bottom-2 right-2 text-2xl"
        animate={isActive ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
      >
        😊
      </motion.div>

      {/* Time saved badge */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full"
        initial={{ scale: 0, y: 20 }}
        animate={isActive ? { scale: 1, y: 0 } : {}}
        transition={{ delay: 2, type: "spring" }}
      >
        98% faster!
      </motion.div>
    </div>
  );
}

// Visual: Integration ecosystem
function IntegrationMapVisual({ isActive }: { isActive: boolean }) {
  const apps = [
    { name: "Shopify", icon: "🛒", x: 20, y: 20, color: "#96bf48" },
    { name: "Salesforce", icon: "☁️", x: 80, y: 25, color: "#00a1e0" },
    { name: "Slack", icon: "💬", x: 15, y: 70, color: "#4a154b" },
    { name: "Sheets", icon: "📊", x: 75, y: 75, color: "#0f9d58" },
    { name: "Gmail", icon: "✉️", x: 50, y: 15, color: "#ea4335" },
    { name: "Zapier", icon: "⚡", x: 85, y: 50, color: "#ff4a00" },
  ];

  return (
    <div className="relative h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl overflow-hidden">
      <motion.div
        className="absolute top-2 left-2 px-2 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
      >
        100+ INTEGRATIONS
      </motion.div>

      {/* Central hub */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={isActive ? { scale: 1 } : {}}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl"
          animate={isActive ? { rotate: 360 } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>

      {/* Orbiting apps */}
      {apps.map((app, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${app.x}%`, top: `${app.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
        >
          <motion.div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md"
            style={{ backgroundColor: app.color }}
            whileHover={{ scale: 1.2 }}
          >
            {app.icon}
          </motion.div>
          <motion.div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            {app.name}
          </motion.div>
        </motion.div>
      ))}

      {/* Connection pulses */}
      {apps.map((app, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{ 
            left: `${app.x + 5}%`, 
            top: `${app.y + 5}%`,
          }}
          animate={isActive ? {
            left: [`${app.x + 5}%`, "50%"],
            top: [`${app.y + 5}%`, "50%"],
            opacity: [1, 0],
            scale: [1, 0.5],
          } : {}}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            delay: 1 + i * 0.2,
            repeatDelay: 1,
          }}
        />
      ))}
    </div>
  );
}

// Visual: ROI Calculator
function ROIVisual({ isActive }: { isActive: boolean }) {
  const metrics = [
    { label: "Hours Saved", value: 25, unit: "hrs/week", color: "#22c55e" },
    { label: "Cost Reduction", value: 2400, unit: "$/mo", color: "#3b82f6", prefix: "$" },
    { label: "Error Rate", value: 99, unit: "%", color: "#f59e0b", suffix: "%" },
  ];

  return (
    <div className="relative h-64 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl overflow-hidden p-6">
      <motion.div
        className="absolute top-2 left-2 px-2 py-1 bg-amber-100 text-amber-600 text-xs font-bold rounded"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
      >
        REAL RESULTS
      </motion.div>

      <div className="mt-8 space-y-4">
        {metrics.map((metric, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">{metric.label}</span>
              <motion.span 
                className="font-bold"
                style={{ color: metric.color }}
              >
                {metric.prefix}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isActive ? { opacity: 1 } : {}}
                >
                  {isActive && <CountUp end={metric.value} />}
                </motion.span>
                {metric.suffix} {metric.unit}
              </motion.span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: metric.color }}
                initial={{ width: 0 }}
                animate={isActive ? { width: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Trophy */}
      <motion.div
        className="absolute bottom-4 right-4"
        initial={{ scale: 0, rotate: -180 }}
        animate={isActive ? { scale: 1, rotate: 0 } : {}}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
          <Trophy className="w-6 h-6 text-white" />
        </div>
      </motion.div>
    </div>
  );
}

// Count up animation component
function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}</>;
}

const workflowStages = [
  {
    id: "chaos",
    title: "The Before",
    subtitle: "Manual Madness",
    description: "Your team copies data between apps, checks multiple systems, and spends hours on tasks that should take minutes.",
    visual: BeforeChaosVisual,
    pain: "Sarah spends 45 minutes on each order",
    color: "#ef4444",
  },
  {
    id: "flow",
    title: "The Magic",
    subtitle: "Automated Flow",
    description: "We connect your apps and build smart triggers. Data moves automatically. Your team focuses on what matters.",
    visual: AfterFlowVisual,
    pain: "Now it takes 30 seconds, zero errors",
    color: "#22c55e",
  },
  {
    id: "connect",
    title: "The Connectors",
    subtitle: "All Your Tools",
    description: "Shopify, Salesforce, Slack, Google Sheets — whatever you use, we connect. No more app-switching nightmare.",
    visual: IntegrationMapVisual,
    pain: "100+ integrations, seamless sync",
    color: "#3b82f6",
  },
  {
    id: "roi",
    title: "The Payoff",
    subtitle: "Real Numbers",
    description: "Most clients save 25+ hours per week and reduce errors by 99%. That's real money and happier teams.",
    visual: ROIVisual,
    pain: "$2,400/month average savings",
    color: "#f59e0b",
  },
];

export function WorkflowMagic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeStage, setActiveStage] = useState(0);

  // Auto-cycle through stages
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % workflowStages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            <MousePointerClick className="w-4 h-4" />
            Workflow Automation
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            From Chaos to
            <br />
            <span className="italic text-primary">Flow</span>
          </motion.h2>
        </div>

        {/* Stage selector tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-secondary rounded-full">
            {workflowStages.map((stage, i) => (
              <motion.button
                key={stage.id}
                onClick={() => setActiveStage(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeStage === i 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {stage.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active stage content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatePresence mode="wait">
            {workflowStages.map((stage, index) => {
              const Visual = stage.visual;
              const isActive = activeStage === index;
              
              if (!isActive) return null;
              
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Visual isActive={isActive} />
                </motion.div>
              );
            })}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {workflowStages.map((stage, index) => {
              const isActive = activeStage === index;
              
              if (!isActive) return null;
              
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <motion.div
                    className="text-sm font-mono uppercase tracking-wider"
                    style={{ color: stage.color }}
                  >
                    {stage.subtitle}
                  </motion.div>
                  
                  <h3 className="font-serif text-3xl text-foreground">
                    {stage.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg">
                    {stage.description}
                  </p>
                  
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: `${stage.color}15`,
                      color: stage.color,
                    }}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  >
                    {stage.id === "chaos" ? "😫" : stage.id === "flow" ? "⚡" : stage.id === "connect" ? "🔗" : "💰"}
                    {stage.pain}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-12">
          {workflowStages.map((stage, i) => (
            <motion.button
              key={i}
              className="w-12 h-1 rounded-full transition-all"
              style={{ 
                backgroundColor: activeStage === i ? stage.color : "hsl(var(--muted))",
              }}
              onClick={() => setActiveStage(i)}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
