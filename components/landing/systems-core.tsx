"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { 
  Mail, 
  Database, 
  FileText, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Zap,
  ArrowRight
} from "lucide-react";

const inputSources = [
  { icon: Mail, label: "Emails", color: "#3b82f6" },
  { icon: Database, label: "Database", color: "#8b5cf6" },
  { icon: FileText, label: "Forms", color: "#22c55e" },
  { icon: MessageSquare, label: "Chat", color: "#f59e0b" },
];

const outputActions = [
  { icon: Calendar, label: "Scheduled", color: "#06b6d4" },
  { icon: BarChart3, label: "Reports", color: "#ec4899" },
  { icon: Zap, label: "Triggered", color: "#f97316" },
  { icon: ArrowRight, label: "Routed", color: "#10b981" },
];

export function SystemsCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6"
          >
            <Zap className="w-4 h-4" />
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
          >
            Your Operations,
            <br />
            <span className="italic text-primary">Automated Core</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Data flows in from every direction. Our systems process, route, and 
            act — turning chaos into orchestrated workflows.
          </motion.p>
        </div>

        {/* CPU Visualization - Grid Layout */}
        <div className="relative hidden lg:block">
          {/* Connection Lines Overlay */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
            preserveAspectRatio="none"
            viewBox="0 0 1200 400"
          >
            <defs>
              {/* Glow filter for animated lines */}
              <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              {/* Gradient definitions */}
              <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
              </linearGradient>
              
              {/* Right side gradients (reversed) */}
              <linearGradient id="grad-cyan" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad-pink" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad-orange2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad-emerald" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Base static lines from Left to Center */}
            <g strokeWidth="1" fill="none" opacity="0.3">
              {/* Top-left to upper chip */}
              <path d="M 80 80 Q 300 80 520 170" stroke="url(#grad-blue)" />
              {/* Upper-mid to upper-mid chip */}
              <path d="M 80 150 Q 300 150 520 190" stroke="url(#grad-purple)" />
              {/* Lower-mid to lower-mid chip */}
              <path d="M 80 220 Q 300 220 520 210" stroke="url(#grad-green)" />
              {/* Bottom-left to lower chip */}
              <path d="M 80 290 Q 300 290 520 230" stroke="url(#grad-orange)" />
            </g>
            
            {/* Base static lines from Center to Right */}
            <g strokeWidth="1" fill="none" opacity="0.3">
              {/* Upper chip to top-right */}
              <path d="M 680 170 Q 900 80 1120 80" stroke="url(#grad-cyan)" />
              {/* Upper-mid chip to upper-mid right */}
              <path d="M 680 190 Q 900 150 1120 150" stroke="url(#grad-pink)" />
              {/* Lower-mid chip to lower-mid right */}
              <path d="M 680 210 Q 900 220 1120 220" stroke="url(#grad-orange2)" />
              {/* Lower chip to bottom-right */}
              <path d="M 680 230 Q 900 290 1120 290" stroke="url(#grad-emerald)" />
            </g>

            {/* Animated flowing lines - Left to Center */}
            <g strokeWidth="2.5" fill="none" filter="url(#line-glow)">
              {/* Blue - Emails */}
              <path stroke="#3b82f6" strokeDasharray="30 150" opacity="0.9">
                <animate attributeName="d" values="M 80 80 Q 300 80 520 170; M 80 80 Q 300 80 520 170" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="180;0" dur="2s" repeatCount="indefinite" begin="0s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2s" repeatCount="indefinite" begin="0s" />
              </path>
              
              {/* Purple - Database */}
              <path stroke="#8b5cf6" strokeDasharray="30 150" opacity="0.9">
                <animate attributeName="d" values="M 80 150 Q 300 150 520 190; M 80 150 Q 300 150 520 190" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="180;0" dur="2.3s" repeatCount="indefinite" begin="0.4s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.3s" repeatCount="indefinite" begin="0.4s" />
              </path>
              
              {/* Green - Forms */}
              <path stroke="#22c55e" strokeDasharray="30 150" opacity="0.9">
                <animate attributeName="d" values="M 80 220 Q 300 220 520 210; M 80 220 Q 300 220 520 210" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="180;0" dur="2.6s" repeatCount="indefinite" begin="0.8s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.6s" repeatCount="indefinite" begin="0.8s" />
              </path>
              
              {/* Orange - Chat */}
              <path stroke="#f59e0b" strokeDasharray="30 150" opacity="0.9">
                <animate attributeName="d" values="M 80 290 Q 300 290 520 230; M 80 290 Q 300 290 520 230" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="180;0" dur="2.2s" repeatCount="indefinite" begin="1.2s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.2s" repeatCount="indefinite" begin="1.2s" />
              </path>
            </g>

            {/* Animated flowing lines - Center to Right */}
            <g strokeWidth="2.5" fill="none" filter="url(#line-glow)">
              {/* Cyan - Scheduled */}
              <path stroke="#06b6d4" strokeDasharray="30 150" opacity="0.9">
                <animate attributeName="d" values="M 680 170 Q 900 80 1120 80; M 680 170 Q 900 80 1120 80" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="0;180" dur="2.1s" repeatCount="indefinite" begin="0.2s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.1s" repeatCount="indefinite" begin="0.2s" />
              </path>
              
              {/* Pink - Reports */}
              <path stroke="#ec4899" strokeDasharray="30 150" opacity="0.9">
                <animate attributeName="d" values="M 680 190 Q 900 150 1120 150; M 680 190 Q 900 150 1120 150" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="0;180" dur="2.4s" repeatCount="indefinite" begin="0.6s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.4s" repeatCount="indefinite" begin="0.6s" />
              </path>
              
              {/* Orange - Triggered */}
              <path stroke="#f97316" strokeDasharray="30 150" opacity="0.9">
                <animate attributeName="d" values="M 680 210 Q 900 220 1120 220; M 680 210 Q 900 220 1120 220" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="0;180" dur="2.7s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.7s" repeatCount="indefinite" begin="1s" />
              </path>
              
              {/* Emerald - Routed */}
              <path stroke="#10b981" strokeDasharray="30 150" opacity="0.9">
                <animate attributeName="d" values="M 680 230 Q 900 290 1120 290; M 680 230 Q 900 290 1120 290" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="0;180" dur="2.3s" repeatCount="indefinite" begin="1.4s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.3s" repeatCount="indefinite" begin="1.4s" />
              </path>
            </g>

            {/* Small particles at connection points */}
            <g>
              {/* Left side particles */}
              <circle r="3" fill="#3b82f6">
                <animateMotion path="M 80 80 Q 300 80 520 170" dur="2s" repeatCount="indefinite" begin="0s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" repeatCount="indefinite" begin="0s" />
              </circle>
              <circle r="3" fill="#8b5cf6">
                <animateMotion path="M 80 150 Q 300 150 520 190" dur="2.3s" repeatCount="indefinite" begin="0.4s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.3s" repeatCount="indefinite" begin="0.4s" />
              </circle>
              <circle r="3" fill="#22c55e">
                <animateMotion path="M 80 220 Q 300 220 520 210" dur="2.6s" repeatCount="indefinite" begin="0.8s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.6s" repeatCount="indefinite" begin="0.8s" />
              </circle>
              <circle r="3" fill="#f59e0b">
                <animateMotion path="M 80 290 Q 300 290 520 230" dur="2.2s" repeatCount="indefinite" begin="1.2s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.2s" repeatCount="indefinite" begin="1.2s" />
              </circle>

              {/* Right side particles */}
              <circle r="3" fill="#06b6d4">
                <animateMotion path="M 680 170 Q 900 80 1120 80" dur="2.1s" repeatCount="indefinite" begin="0.2s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.1s" repeatCount="indefinite" begin="0.2s" />
              </circle>
              <circle r="3" fill="#ec4899">
                <animateMotion path="M 680 190 Q 900 150 1120 150" dur="2.4s" repeatCount="indefinite" begin="0.6s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.4s" repeatCount="indefinite" begin="0.6s" />
              </circle>
              <circle r="3" fill="#f97316">
                <animateMotion path="M 680 210 Q 900 220 1120 220" dur="2.7s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.7s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle r="3" fill="#10b981">
                <animateMotion path="M 680 230 Q 900 290 1120 290" dur="2.3s" repeatCount="indefinite" begin="1.4s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.3s" repeatCount="indefinite" begin="1.4s" />
              </circle>
            </g>
          </svg>

          {/* Main Content Grid */}
          <div className="grid grid-cols-[120px_1fr_120px] gap-8 items-center" style={{ minHeight: '400px' }}>
            {/* Input Sources - Left Side */}
            <div className="flex flex-col gap-8 z-10">
              {inputSources.map((source, i) => (
                <motion.div
                  key={source.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-border/50 bg-card/80 backdrop-blur-sm transition-all group-hover:scale-110"
                    style={{ boxShadow: `0 0 20px ${source.color}20` }}
                  >
                    <source.icon className="w-5 h-5" style={{ color: source.color }} />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{source.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CPU Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-10"
            >
              {/* Glow effect behind CPU */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl scale-150" />
              
              <div className="relative bg-card/30 border border-border/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                <CpuArchitecture 
                  width="100%"
                  height="auto"
                  text="CORE"
                  className="w-full h-auto max-h-[400px]"
                />
              </div>
            </motion.div>

            {/* Output Actions - Right Side */}
            <div className="flex flex-col gap-8 z-10">
              {outputActions.map((action, i) => (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 group justify-end"
                >
                  <span className="text-sm text-muted-foreground font-mono">{action.label}</span>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-border/50 bg-card/80 backdrop-blur-sm transition-all group-hover:scale-110"
                    style={{ boxShadow: `0 0 20px ${action.color}20` }}
                  >
                    <action.icon className="w-5 h-5" style={{ color: action.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="relative bg-card/30 border border-border/30 rounded-3xl p-8 backdrop-blur-sm">
              <CpuArchitecture 
                width="100%"
                height="auto"
                text="CORE"
                className="w-full h-auto max-h-[300px]"
              />
              
              {/* Mobile input/output labels */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Inputs</p>
                  <div className="flex flex-wrap gap-2">
                    {inputSources.map(s => (
                      <div key={s.label} className="w-8 h-8 rounded-lg bg-card border border-border/50 flex items-center justify-center">
                        <s.icon className="w-4 h-4" style={{ color: s.color }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Outputs</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {outputActions.map(s => (
                      <div key={s.label} className="w-8 h-8 rounded-lg bg-card border border-border/50 flex items-center justify-center">
                        <s.icon className="w-4 h-4" style={{ color: s.color }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Grid */}
        <div className="mt-16 md:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Input Processing", desc: "Emails, forms, APIs ingested" },
            { label: "AI Analysis", desc: "Smart classification & routing" },
            { label: "Action Execution", desc: "Automated responses & tasks" },
            { label: "Output Delivery", desc: "To your tools & team" },
          ].map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="relative group p-6 bg-card/30 border border-border/30 rounded-2xl hover:bg-card/50 transition-colors"
            >
              <div className="absolute -top-3 -left-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-mono text-primary">
                {i + 1}
              </div>
              <h4 className="font-medium text-foreground mb-1">{step.label}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
