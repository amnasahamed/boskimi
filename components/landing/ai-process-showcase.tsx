"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  MessageCircle, 
  Brain, 
  Database, 
  Send, 
  Users,
  ArrowRight,
  Clock,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Customer Reaches Out",
    description: "Via WhatsApp, email, chat, or your website — whenever they need help",
    detail: "Works 24/7 across all channels your customers already use",
    color: "#25D366",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Understands",
    description: "Analyzes intent, context, and conversation history instantly",
    detail: "Not just keyword matching — actually understands what they need",
    color: "#6366f1",
  },
  {
    number: "03",
    icon: Database,
    title: "Fetches Your Data",
    description: "Pulls real-time info from your CRM, orders, inventory, docs",
    detail: "Connected to Shopify, Salesforce, Zendesk, Google Sheets, and 100+ more",
    color: "#f59e0b",
  },
  {
    number: "04",
    icon: Send,
    title: "Replies Instantly",
    description: "Generates accurate, personalized response in under 2 seconds",
    detail: "Sounds like your brand, knows your policies, never makes up answers",
    color: "#ec4899",
  },
  {
    number: "05",
    icon: Users,
    title: "Escalates When Needed",
    description: "Complex issues routed to the right human with full context",
    detail: "Your team gets the conversation history and suggested solutions",
    color: "#8b5cf6",
  },
];

// Animated connector line between steps
function Connector({ isActive, delay }: { isActive: boolean; delay: number }) {
  return (
    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-secondary overflow-hidden">
      <motion.div
        className="w-full bg-gradient-to-b from-primary to-accent"
        initial={{ height: "0%" }}
        animate={{ height: isActive ? "100%" : "0%" }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

// Individual step card with animation
function StepCard({ 
  step, 
  index, 
  isActive, 
  onActivate 
}: { 
  step: typeof steps[0]; 
  index: number; 
  isActive: boolean;
  onActivate: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !isActive) {
      const timer = setTimeout(() => onActivate(), index * 400);
      return () => clearTimeout(timer);
    }
  }, [isInView, index, onActivate, isActive]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -30 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        x: isInView ? 0 : -30,
      }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative pl-20"
    >
      {/* Connector line (except for last item) */}
      {index < steps.length - 1 && (
        <Connector isActive={isActive} delay={0.3} />
      )}

      {/* Step number / icon */}
      <motion.div
        className="absolute left-0 top-0 w-16 h-16 rounded-2xl flex items-center justify-center z-10"
        style={{ backgroundColor: isActive ? step.color : "hsl(var(--secondary))" }}
        animate={{ 
          scale: isActive ? 1.1 : 1,
          boxShadow: isActive ? `0 0 30px ${step.color}40` : "none"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: isActive ? 1 : 0, 
            rotate: isActive ? 0 : -180 
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <step.icon className="w-7 h-7 text-white" />
        </motion.div>
        <motion.span
          className="absolute font-serif text-xl font-bold"
          style={{ color: isActive ? "transparent" : "hsl(var(--muted-foreground))" }}
          animate={{ opacity: isActive ? 0 : 1 }}
        >
          {step.number}
        </motion.span>
      </motion.div>

      {/* Content card */}
      <motion.div
        className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
        animate={{ 
          borderColor: isActive ? `${step.color}40` : "hsl(var(--border) / 0.5)",
          backgroundColor: isActive ? `${step.color}08` : "hsl(var(--card) / 0.5)"
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ x: 10, transition: { duration: 0.2 } }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span 
            className="text-xs font-mono uppercase tracking-wider"
            style={{ color: step.color }}
          >
            Step {step.number}
          </span>
          {isActive && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1 text-xs text-green-500"
            >
              <Clock className="w-3 h-3" />
              Active
            </motion.span>
          )}
        </div>

        <h3 className="font-serif text-xl text-foreground mb-2">
          {step.title}
        </h3>
        
        <p className="text-muted-foreground mb-3">
          {step.description}
        </p>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isActive ? "auto" : 0, 
            opacity: isActive ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-border/30">
            <p className="text-sm text-muted-foreground flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              {step.detail}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Mini demo visualization
function ProcessDemo() {
  const [demoStep, setDemoStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const demoMessages = [
    { from: "user", text: "Where's my order #12345?" },
    { from: "ai", text: "Checking your order status...", thinking: true },
    { from: "ai", text: "Your order shipped yesterday! Tracking: #ABC123", hasData: true },
    { from: "user", text: "Thanks! When will it arrive?" },
    { from: "ai", text: "Expected delivery: Tomorrow by 6 PM 🚚", emoji: true },
  ];

  return (
    <div className="bg-[#f0f2f5] rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 border-b">
        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="font-medium text-foreground">Your AI Agent</div>
          <div className="flex items-center gap-1.5 text-xs text-green-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Online — Handling inquiries
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 h-[320px] overflow-hidden">
        {demoMessages.slice(0, demoStep + 1).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "ai" ? (
              <div className="flex gap-2 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  {msg.thinking ? (
                    <div className="px-4 py-3 bg-white rounded-2xl rounded-tl-sm shadow-sm">
                      <div className="flex gap-1">
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-muted-foreground"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-muted-foreground"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 rounded-full bg-muted-foreground"
                        />
                      </div>
                    </div>
                  ) : (
                    <motion.div 
                      className="px-4 py-3 bg-white rounded-2xl rounded-tl-sm shadow-sm text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {msg.text}
                      {msg.hasData && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 pt-2 border-t border-gray-100"
                        >
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Database className="w-3 h-3" />
                            Fetched from Shopify
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            ) : (
              <div className="max-w-[80%] px-4 py-2.5 bg-[#25D366] text-white rounded-2xl rounded-tr-sm text-sm">
                {msg.text}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white px-4 py-3 border-t">
        <div className="flex items-center gap-3">
          <div className="flex-1 px-4 py-2.5 bg-[#f0f2f5] rounded-full text-sm text-muted-foreground">
            Type a message...
          </div>
          <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Step indicator */}
      <div className="bg-white px-4 py-2 border-t flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Live process demo</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              animate={{ 
                backgroundColor: i === demoStep ? "#25D366" : "#e5e7eb",
                scale: i === demoStep ? 1.2 : 1
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AIProcessShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-[#25D366]/5 to-background"
        style={{ y: backgroundY }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#25D366] mb-4"
          >
            <Brain className="w-4 h-4" />
            How It Works
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            From Question to
            <br />
            <span className="italic text-[#25D366]">Answer in Seconds</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Here&apos;s exactly what happens when your customer sends a message — 
            and why it feels like magic (but it&apos;s just really good engineering).
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isActive={activeStep === index}
                onActivate={() => setActiveStep(index)}
              />
            ))}
          </div>

          {/* Right - Live Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <ProcessDemo />
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { value: "<2s", label: "Avg response" },
                { value: "80%", label: "Auto-resolved" },
                { value: "24/7", label: "Available" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-card/50 rounded-2xl border border-border/50">
                  <div className="font-serif text-2xl text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#connect"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#25D366]/25 transition-all group"
          >
            <span>See This Live in Action</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            15-minute demo, no commitment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
