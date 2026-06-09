"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MessageCircle, Database, Send, Users, Sparkles, Zap, ArrowRight } from "lucide-react";

// Visual component for Step 1: Message Coming In
function MessageIncomingVisual({ isActive }: { isActive: boolean }) {
  const channels = [
    { icon: "💬", label: "WhatsApp", color: "#25D366", x: 15, y: 25 },
    { icon: "✉️", label: "Email", color: "#EA4335", x: 70, y: 20 },
    { icon: "💻", label: "Chat", color: "#6366f1", x: 75, y: 65 },
  ];

  return (
    <div className="relative h-44 bg-gradient-to-br from-green-50 to-white rounded-2xl overflow-hidden border border-green-100">
      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0"
        animate={isActive ? { x: ["-100%", "100%"] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Channel icons with notification badges */}
      {channels.map((channel, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${channel.x}%`, top: `${channel.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: i * 0.15, type: "spring" }}
        >
          <motion.div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-lg"
            style={{ backgroundColor: channel.color }}
            animate={isActive ? { y: [0, -4, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            {channel.icon}
          </motion.div>
          {/* Notification badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white"
            initial={{ scale: 0 }}
            animate={isActive ? { scale: [0, 1.2, 1] } : { scale: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
          >
            {i + 1}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Central unified inbox */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        initial={{ scale: 0, y: 20 }}
        animate={isActive ? { scale: 1, y: 0 } : { scale: 0, y: 20 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          {/* Incoming pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-green-400"
            animate={isActive ? { scale: [1, 1.4], opacity: [0.5, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <motion.div
          className="absolute -top-2 -right-2 px-2 py-0.5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full"
          initial={{ scale: 0 }}
          animate={isActive ? { scale: 1 } : {}}
          transition={{ delay: 1 }}
        >
          +3
        </motion.div>
      </motion.div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {channels.map((channel, i) => (
          <motion.path
            key={i}
            d={`M ${channel.x + 5} ${channel.y + 5} Q 50 80 50 120`}
            stroke={channel.color}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isActive ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          />
        ))}
      </svg>

      {/* Label */}
      <motion.div
        className="absolute top-3 left-3 text-[10px] font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        Multi-channel
      </motion.div>
    </div>
  );
}

// Visual component for Step 2: AI Understanding
function AIUnderstandingVisual({ isActive }: { isActive: boolean }) {
  const keywords = ["intent", "context", "history", "sentiment", "priority"];
  
  return (
    <div className="relative h-44 bg-gradient-to-br from-violet-50 to-white rounded-2xl overflow-hidden border border-violet-100">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full"
            style={{
              left: `${20 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 40}%`,
            }}
            animate={isActive ? { scale: [1, 2, 1], opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Brain center with pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={isActive ? { scale: 1 } : {}}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg"
          animate={isActive ? {
            boxShadow: [
              "0 0 0 0 rgba(139, 92, 246, 0.4)",
              "0 0 0 15px rgba(139, 92, 246, 0)",
            ],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
        
      {/* Orbiting keywords */}
      {keywords.map((keyword, i) => {
        const angle = (i / keywords.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 55;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2"
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={isActive ? {
              x: x,
              y: y,
              scale: 1,
              opacity: 1,
            } : {}}
            transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
          >
            <div className="px-2.5 py-1 bg-white rounded-full text-[10px] font-medium shadow-md border border-violet-100 whitespace-nowrap -translate-x-1/2 -translate-y-1/2">
              {keyword}
            </div>
          </motion.div>
        );
      })}

      {/* Processing indicator */}
      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-violet-100 rounded-full"
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-violet-500"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-[10px] font-medium text-violet-700">Analyzing...</span>
      </motion.div>

      <motion.div
        className="absolute top-3 right-3 text-[10px] font-medium text-violet-600 bg-violet-100 px-2 py-1 rounded-full"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        NLP Engine
      </motion.div>
    </div>
  );
}

// Visual component for Step 3: Data Fetching
function DataFetchingVisual({ isActive }: { isActive: boolean }) {
  const systems = [
    { name: "Shopify", icon: "🛒", x: 12, y: 25 },
    { name: "Salesforce", icon: "☁️", x: 72, y: 18 },
    { name: "Zendesk", icon: "🎫", x: 78, y: 58 },
    { name: "Database", icon: "🗄️", x: 8, y: 62 },
  ];

  return (
    <div className="relative h-44 bg-gradient-to-br from-amber-50 to-white rounded-2xl overflow-hidden border border-amber-100">
      {/* Central hub */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0 }}
        animate={isActive ? { scale: 1 } : {}}
        transition={{ type: "spring" }}
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-xl">
            <Database className="w-7 h-7 text-white" />
          </div>
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-dashed border-amber-300"
            animate={isActive ? { rotate: 360 } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
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
          transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
        >
          <motion.div
            className="w-10 h-10 rounded-lg bg-white border border-amber-200 flex items-center justify-center text-lg shadow-md"
            animate={isActive ? { 
              boxShadow: [
                "0 0 0 0 rgba(245, 158, 11, 0)",
                "0 0 0 4px rgba(245, 158, 11, 0.15)",
                "0 0 0 0 rgba(245, 158, 11, 0)",
              ],
            } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            {system.icon}
          </motion.div>
          <div className="text-[9px] text-center mt-1 font-medium text-amber-700">{system.name}</div>
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
            strokeWidth="1.5"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isActive ? { pathLength: 1, opacity: 0.4 } : {}}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </svg>

      {/* Animated data packets flowing to center */}
      {systems.map((system, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 z-20"
          style={{ left: `${system.x + 5}%`, top: `${system.y + 5}%` }}
          animate={isActive ? {
            left: [`${system.x + 5}%`, "50%"],
            top: [`${system.y + 5}%`, "50%"],
            opacity: [1, 0],
            scale: [1, 0.5],
          } : {}}
          transition={{ delay: 0.8 + i * 0.15, duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
        />
      ))}

      <motion.div
        className="absolute top-3 left-3 text-[10px] font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        Real-time sync
      </motion.div>
    </div>
  );
}

// Visual component for Step 4: Response Generation
function ResponseGenerationVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-44 bg-gradient-to-br from-pink-50 to-white rounded-2xl overflow-hidden border border-pink-100 p-3">
      {/* Message bubbles */}
      <div className="space-y-2">
        {/* User message */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-[85%] px-3 py-2 bg-gray-100 rounded-2xl rounded-tr-sm text-xs text-gray-700">
            Where&apos;s my order?
          </div>
        </motion.div>

        {/* AI typing / response */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-[90%]">
            {/* Typing indicator then message */}
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.div
                  key="message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.2 }}
                  className="px-3 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl rounded-tl-sm text-xs shadow-lg"
                >
                  Your order #12345 shipped yesterday! 🚚 Track: bit.ly/track-123
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-1 pt-1 border-t border-white/20 flex items-center gap-1 text-[9px] text-white/80"
                  >
                    <Zap className="w-3 h-3" />
                    Fetched from Shopify
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
            
            {/* Typing dots */}
            <motion.div
              className="px-3 py-2 bg-white rounded-2xl rounded-tl-sm shadow-md inline-flex items-center gap-1"
              animate={isActive ? { opacity: [1, 0] } : { opacity: 0 }}
              transition={{ delay: 1.1, duration: 0.1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-pink-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Speed badge */}
      <motion.div
        className="absolute top-3 right-3 px-2 py-1 bg-green-100 rounded-full flex items-center gap-1"
        initial={{ opacity: 0, scale: 0 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.8, type: "spring" }}
      >
        <Zap className="w-3 h-3 text-green-600" />
        <span className="text-[10px] font-bold text-green-700">1.2s</span>
      </motion.div>

      {/* Sparkle effects */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400 text-sm"
          style={{
            right: `${8 + i * 20}%`,
            top: `${15 + (i % 2) * 60}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isActive ? { 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 90, 180],
          } : {}}
          transition={{ delay: 2 + i * 0.1, duration: 1.5, repeat: Infinity }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-3 left-3 text-[10px] font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded-full"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        On-brand voice
      </motion.div>
    </div>
  );
}

// Visual component for Step 5: Human Handoff
function HumanHandoffVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative h-44 bg-gradient-to-br from-indigo-50 to-white rounded-2xl overflow-hidden border border-indigo-100">
      {/* Two sides with handoff arrow */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {/* AI Agent */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ x: -30, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-400 rounded-full flex items-center justify-center"
              animate={isActive ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-[8px] text-white">AI</span>
            </motion.div>
          </div>
          <span className="text-[10px] mt-2 font-medium text-indigo-700">AI Agent</span>
        </motion.div>

        {/* Transfer animation */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center px-2"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {/* Context cards transferring */}
          <div className="relative h-16 w-full">
            {["Context", "History", "Priority"].map((item, i) => (
              <motion.div
                key={i}
                className="absolute left-0 px-2 py-1 bg-white rounded-lg text-[9px] font-medium text-indigo-700 border border-indigo-100 shadow-sm whitespace-nowrap"
                style={{ top: `${i * 18}px` }}
                initial={{ x: 0, opacity: 0 }}
                animate={isActive ? { 
                  x: [0, 60, 60],
                  opacity: [0, 1, 0],
                } : {}}
                transition={{ 
                  delay: 0.8 + i * 0.2, 
                  duration: 1.5, 
                  repeat: Infinity,
                  times: [0, 0.5, 1]
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
          
          {/* Arrow */}
          <motion.div
            className="flex items-center gap-1 mt-1"
            animate={isActive ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="h-0.5 w-8 bg-gradient-to-r from-indigo-400 to-indigo-300 rounded-full" />
            <ArrowRight className="w-4 h-4 text-indigo-500" />
          </motion.div>
          
          <span className="text-[9px] text-indigo-500 mt-1 font-medium">Seamless handoff</span>
        </motion.div>

        {/* Human Team */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ x: 30, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            {/* Notification */}
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white border-2 border-white"
              initial={{ scale: 0 }}
              animate={isActive ? { scale: 1 } : {}}
              transition={{ delay: 1.5, type: "spring" }}
            >
              1
            </motion.div>
          </div>
          <span className="text-[10px] mt-2 font-medium text-blue-700">Your Team</span>
        </motion.div>
      </div>

      {/* Suggested reply preview */}
      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-indigo-100 rounded-lg text-[9px] text-indigo-700 max-w-[90%] truncate"
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8 }}
      >
        <span className="font-medium">Suggested:</span> Offer refund or replacement...
      </motion.div>

      <motion.div
        className="absolute top-3 left-3 text-[10px] font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        Smart escalation
      </motion.div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Message Comes In",
    description: "Customer reaches out via WhatsApp, email, chat, or your website — any channel, any time",
    visual: MessageIncomingVisual,
    color: "#22c55e",
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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/50 to-background" />
      
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From first message to perfect response — see the magic happen in real-time
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const VisualComponent = step.visual;
            const isActive = activeStep === index;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative cursor-pointer transition-all duration-500 ${
                  isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Card container */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden"
                  animate={{ 
                    y: isActive ? -8 : 0,
                    boxShadow: isActive 
                      ? `0 20px 40px -12px ${step.color}30` 
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Step number badge */}
                  <motion.div
                    className="absolute -top-0 left-4 px-3 py-1 text-xs font-bold rounded-b-lg z-20"
                    style={{ 
                      backgroundColor: isActive ? step.color : "#e5e7eb",
                      color: isActive ? "white" : "#6b7280"
                    }}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Visual */}
                  <VisualComponent isActive={isActive} />

                  {/* Content */}
                  <div className="p-4 bg-white border-t border-gray-100">
                    <motion.h3
                      className="font-serif text-base text-foreground mb-1.5 transition-colors duration-300"
                      style={{ color: isActive ? step.color : undefined }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Active indicator bar */}
                <motion.div
                  className="mt-3 h-1 rounded-full mx-4"
                  style={{ backgroundColor: step.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
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
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: activeStep === i ? step.color : "#e5e7eb",
              }}
              animate={{ scale: activeStep === i ? 1.3 : 1 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveStep(i)}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <span className="text-xs text-muted-foreground">
            Auto-playing • Click any step to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
