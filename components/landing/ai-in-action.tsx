"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MessageCircle, Database, Send, Users, Sparkles } from "lucide-react";

// Visual component for Step 1: Message Coming In
function MessageIncomingVisual({ isActive }: { isActive: boolean }) {
  const channels = [
    { icon: "💬", label: "WhatsApp", color: "#25D366" },
    { icon: "✉️", label: "Email", color: "#EA4335" },
    { icon: "💻", label: "Website", color: "#6366f1" },
  ];

  return (
    <div className="relative h-48 bg-gradient-to-br from-secondary/50 to-background rounded-2xl overflow-hidden">
      {channels.map((channel, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ 
            left: `${20 + i * 30}%`, 
            top: `${30 + (i % 2) * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0, x: -50 }}
          animate={isActive ? { 
            opacity: 1, 
            scale: 1, 
            x: 0,
          } : {}}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
            style={{ backgroundColor: channel.color }}
            animate={isActive ? {
              y: [0, -5, 0],
            } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            {channel.icon}
          </motion.div>
          <motion.div
            className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background"
            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          />
        </motion.div>
      ))}
      
      {/* Central inbox */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        initial={{ scale: 0 }}
        animate={isActive ? { scale: 1 } : {}}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <motion.div
          className="absolute -top-2 -right-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-bold rounded-full"
          initial={{ scale: 0 }}
          animate={isActive ? { scale: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          3
        </motion.div>
      </motion.div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {channels.map((_, i) => (
          <motion.path
            key={i}
            d={`M ${50 + i * 30} ${60 + (i % 2) * 20} Q 50 100 50 140`}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isActive ? { pathLength: 1, opacity: 0.3 } : {}}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
          />
        ))}
      </svg>
    </div>
  );
}

// Visual component for Step 2: AI Understanding
function AIUnderstandingVisual({ isActive }: { isActive: boolean }) {
  const keywords = ["order status", "refund", "shipping", "pricing", "support"];
  
  return (
    <div className="relative h-48 bg-gradient-to-br from-violet-500/10 to-background rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Brain/AI center */}
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={isActive ? { scale: 1 } : {}}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-violet-500 flex items-center justify-center"
          animate={isActive ? {
            boxShadow: [
              "0 0 0 0 rgba(139, 92, 246, 0.4)",
              "0 0 0 20px rgba(139, 92, 246, 0)",
            ],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-10 h-10 text-white" />
        </motion.div>
        
        {/* Orbiting keywords */}
        {keywords.map((keyword, i) => (
          <motion.div
            key={i}
            className="absolute px-3 py-1 bg-background rounded-full text-xs font-medium shadow-lg whitespace-nowrap"
            style={{
              top: "50%",
              left: "50%",
            }}
            initial={{ x: "-50%", y: "-50%", scale: 0 }}
            animate={isActive ? {
              x: `calc(-50% + ${Math.cos((i / keywords.length) * Math.PI * 2) * 70}px)`,
              y: `calc(-50% + ${Math.sin((i / keywords.length) * Math.PI * 2) * 70}px)`,
              scale: 1,
            } : {}}
            transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
          >
            {keyword}
          </motion.div>
        ))}
      </motion.div>

      {/* Understanding indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-violet-500/10 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-violet-500"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-xs text-violet-600 font-medium">Understanding intent...</span>
      </motion.div>
    </div>
  );
}

// Visual component for Step 3: Data Fetching
function DataFetchingVisual({ isActive }: { isActive: boolean }) {
  const systems = [
    { name: "Shopify", icon: "🛒", x: 20, y: 30 },
    { name: "Salesforce", icon: "☁️", x: 70, y: 20 },
    { name: "Zendesk", icon: "🎫", x: 75, y: 60 },
    { name: "Sheets", icon: "📊", x: 15, y: 65 },
  ];

  return (
    <div className="relative h-48 bg-gradient-to-br from-amber-500/10 to-background rounded-2xl overflow-hidden">
      {/* Central database */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={isActive ? { scale: 1 } : {}}
        transition={{ type: "spring" }}
      >
        <div className="w-16 h-16 rounded-xl bg-amber-500 flex items-center justify-center shadow-xl">
          <Database className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      {/* Connected systems */}
      {systems.map((system, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${system.x}%`, top: `${system.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: i * 0.15 }}
        >
          <motion.div
            className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-lg shadow-md"
            animate={isActive ? { 
              boxShadow: [
                "0 0 0 0 rgba(245, 158, 11, 0)",
                "0 0 0 4px rgba(245, 158, 11, 0.2)",
                "0 0 0 0 rgba(245, 158, 11, 0)",
              ],
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          >
            {system.icon}
          </motion.div>
          <div className="text-[10px] text-center mt-1 text-muted-foreground">{system.name}</div>
        </motion.div>
      ))}

      {/* Data flow lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {systems.map((system, i) => (
          <motion.line
            key={i}
            x1={`${system.x + 5}%`}
            y1={`${system.y + 5}%`}
            x2="50%"
            y2="50%"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isActive ? { pathLength: 1, opacity: 0.5 } : {}}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
          />
        ))}
      </svg>

      {/* Data packets */}
      {systems.map((_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 rounded-full bg-amber-500"
          style={{ left: `${systems[i].x + 5}%`, top: `${systems[i].y + 5}%` }}
          animate={isActive ? {
            left: [`${systems[i].x + 5}%`, "50%"],
            top: [`${systems[i].y + 5}%`, "50%"],
            opacity: [1, 0],
          } : {}}
          transition={{ delay: 1 + i * 0.2, duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
    </div>
  );
}

// Visual component for Step 4: Response Generation
function ResponseGenerationVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-48 bg-gradient-to-br from-pink-500/10 to-background rounded-2xl overflow-hidden p-4">
      {/* Message bubble being typed */}
      <motion.div
        className="max-w-[80%] bg-pink-500 text-white rounded-2xl rounded-tl-sm p-4 shadow-lg"
        initial={{ width: 0, opacity: 0 }}
        animate={isActive ? { width: "100%", opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Your order #12345 shipped yesterday! Track it here: bit.ly/track-123 🚚
        </motion.div>
      </motion.div>

      {/* Typing indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-background rounded-full shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-xs text-muted-foreground">Generating response</span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-pink-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speed indicator */}
      <motion.div
        className="absolute top-4 right-4 px-3 py-1.5 bg-green-500/10 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.2, type: "spring" }}
      >
        <span className="text-xs font-bold text-green-600">1.2s</span>
      </motion.div>

      {/* Sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400"
          style={{
            right: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 30}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isActive ? { 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180, 360],
          } : {}}
          transition={{ delay: 1.5 + i * 0.1, duration: 1.5, repeat: Infinity }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}

// Visual component for Step 5: Human Handoff
function HumanHandoffVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-48 bg-gradient-to-br from-purple-500/10 to-background rounded-2xl overflow-hidden">
      {/* AI side */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2"
        initial={{ x: -50, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center shadow-lg">
          <Sparkles className="w-7 h-7 text-white" />
        </div>
        <div className="text-xs text-center mt-2 text-muted-foreground">AI Agent</div>
      </motion.div>

      {/* Human side */}
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2"
        initial={{ x: 50, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
          <Users className="w-7 h-7 text-white" />
        </div>
        <div className="text-xs text-center mt-2 text-muted-foreground">Your Team</div>
      </motion.div>

      {/* Handoff arrow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <motion.div
          className="flex items-center gap-2 px-4 py-2 bg-background border border-purple-200 rounded-full shadow-md"
          animate={isActive ? { x: [0, 10, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        >
          <span className="text-xs font-medium text-purple-600">Context transferred</span>
          <Send className="w-3 h-3 text-purple-500" />
        </motion.div>
      </motion.div>

      {/* Context cards flowing */}
      {["Conversation", "Customer Data", "Suggested Reply"].map((item, i) => (
        <motion.div
          key={i}
          className="absolute left-20 px-3 py-1.5 bg-purple-500/10 rounded-lg text-xs text-purple-700 border border-purple-200"
          style={{ top: `${25 + i * 25}%` }}
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8 + i * 0.15 }}
        >
          {item}
        </motion.div>
      ))}

      {/* Connection line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 70 80 Q 150 80 180 80"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isActive ? { pathLength: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </svg>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Message Comes In",
    description: "Customer reaches out via WhatsApp, email, chat, or your website — any channel, any time",
    visual: MessageIncomingVisual,
    color: "#25D366",
  },
  {
    number: "02",
    title: "AI Understands",
    description: "Analyzes intent, context, and conversation history instantly — not just keyword matching",
    visual: AIUnderstandingVisual,
    color: "#8b5cf6",
  },
  {
    number: "03",
    title: "Fetches Your Data",
    description: "Pulls real-time info from Shopify, Salesforce, your database — whatever systems you use",
    visual: DataFetchingVisual,
    color: "#f59e0b",
  },
  {
    number: "04",
    title: "Replies Instantly",
    description: "Generates accurate, personalized response in under 2 seconds — sounds like your brand",
    visual: ResponseGenerationVisual,
    color: "#ec4899",
  },
  {
    number: "05",
    title: "Escalates When Needed",
    description: "Complex issues routed to the right human with full context — no starting from zero",
    visual: HumanHandoffVisual,
    color: "#6366f1",
  },
];

export function AIInAction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance through steps
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            <Sparkles className="w-4 h-4" />
            See It In Action
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            How Your AI Agent
            <br />
            <span className="italic text-primary">Actually Works</span>
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const VisualComponent = step.visual;
            const isActive = activeStep === index;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative cursor-pointer transition-all duration-300 ${
                  isActive ? "md:col-span-1" : "md:col-span-1 opacity-60 hover:opacity-100"
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step number badge */}
                <motion.div
                  className="absolute -top-3 left-4 px-2 py-1 text-xs font-bold rounded-full z-10"
                  style={{ 
                    backgroundColor: isActive ? step.color : "hsl(var(--muted))",
                    color: isActive ? "white" : "hsl(var(--muted-foreground))"
                  }}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                >
                  {step.number}
                </motion.div>

                {/* Visual */}
                <div className="mb-4">
                  <VisualComponent isActive={isActive} />
                </div>

                {/* Content */}
                <motion.h3
                  className="font-serif text-lg text-foreground mb-2"
                  animate={{ color: isActive ? step.color : "hsl(var(--foreground))" }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>

                {/* Active indicator */}
                <motion.div
                  className="mt-4 h-1 rounded-full"
                  style={{ backgroundColor: step.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="mt-12 flex justify-center gap-2">
          {steps.map((step, i) => (
            <motion.button
              key={i}
              className="w-2 h-2 rounded-full transition-all"
              style={{ 
                backgroundColor: activeStep === i ? step.color : "hsl(var(--muted))",
              }}
              animate={{ scale: activeStep === i ? 1.5 : 1 }}
              onClick={() => setActiveStep(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
