"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MessageCircle, Clock, Zap, Globe, Calendar, FileText, ShoppingCart, Languages, ArrowUpRight, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Clock, value: "<2s", label: "Response Time" },
  { icon: Zap, value: "80%", label: "Queries Automated" },
  { icon: Globe, value: "24/7", label: "Always On" },
  { icon: CheckCircle2, value: "3x", label: "Faster Resolution" },
];

const features = [
  { icon: MessageCircle, label: "Lead Qualification" },
  { icon: FileText, label: "Instant Quotes" },
  { icon: Calendar, label: "Appointment Booking" },
  { icon: ShoppingCart, label: "Order Tracking" },
  { icon: Languages, label: "Multi-language" },
  { icon: ArrowUpRight, label: "Smart Escalation" },
];

// Chat messages for the demo
const chatMessages = [
  {
    sender: "user",
    text: "Hi! I'm looking to automate our customer support. We get about 500 inquiries daily.",
    time: "9:41 AM",
  },
  {
    sender: "ai",
    text: "Hi there! I'd be happy to help with that. 500 daily inquiries sounds like a perfect case for AI automation.",
    time: "9:41 AM",
  },
  {
    sender: "ai",
    text: "Quick question: What percentage of those are repetitive questions like pricing, order status, or returns?",
    time: "9:42 AM",
  },
  {
    sender: "user",
    text: "I'd say around 70-80% are the same questions over and over.",
    time: "9:43 AM",
  },
  {
    sender: "ai",
    text: "Perfect! That's exactly what our AI agents excel at. Here's what we typically see:",
    time: "9:43 AM",
  },
  {
    sender: "ai",
    isResults: true,
    time: "9:44 AM",
  },
  {
    sender: "user",
    text: "That sounds amazing! Can it integrate with our existing Shopify and Zendesk?",
    time: "9:45 AM",
  },
  {
    sender: "ai",
    text: "Absolutely! We integrate seamlessly with both. The AI can pull order data from Shopify and create tickets in Zendesk when human escalation is needed.",
    time: "9:45 AM",
  },
  {
    sender: "ai",
    text: "Want me to set up a 15-min call to discuss your specific workflow? I can show you a live demo.",
    time: "9:46 AM",
  },
  {
    sender: "user",
    text: "Yes please! How's tomorrow at 2 PM?",
    time: "9:47 AM",
  },
  {
    sender: "ai",
    text: "Tomorrow at 2 PM works perfectly! I'll send you a calendar invite. Looking forward to it! 🚀",
    time: "9:48 AM",
  },
];

function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= chatMessages.length) {
          clearInterval(interval);
          return prev;
        }
        
        // Show typing indicator before AI messages
        const nextMsg = chatMessages[prev];
        if (nextMsg.sender === "ai" && prev > 0) {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 800);
        }
        
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f0f2f5] rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
      {/* Chat Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 border-b">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <div className="font-medium text-foreground">Base of Stars AI</div>
          <div className="flex items-center gap-1.5 text-xs text-green-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Online
          </div>
        </div>
        <div className="text-xs text-muted-foreground">9:48 AM</div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-3 h-[400px] overflow-hidden">
        <AnimatePresence>
          {chatMessages.slice(0, visibleMessages).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.isResults ? (
                <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Results.pdf</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>80% automated responses</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>&lt; 2 second reply time</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>60-70% cost reduction</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>24/7 availability</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-white text-foreground rounded-tl-sm shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-start"
          >
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
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
          </motion.div>
        )}
      </div>

      {/* Chat Input */}
      <div className="bg-white px-4 py-3 border-t">
        <div className="flex items-center gap-3">
          <div className="flex-1 px-4 py-2.5 bg-[#f0f2f5] rounded-full text-sm text-muted-foreground">
            Type a message...
          </div>
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SmartCommunication() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#25D366]/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#25D366] mb-4"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp & Chat Automation
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Your Best Employee
            <br />
            <span className="italic text-[#25D366]">Never Sleeps</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            While you sleep, your AI agent answers questions, qualifies leads, books appointments, 
            and tracks orders. Your customers get instant responses. You wake up to qualified leads 
            and happy customers.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Stats & Features */}
          <div className="space-y-10">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
                >
                  <stat.icon className="w-6 h-6 text-[#25D366] mb-3" />
                  <div className="font-serif text-3xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-medium text-foreground mb-4">What Your AI Agent Handles:</h3>
              <div className="flex flex-wrap gap-3">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#128C7E] rounded-full text-sm font-medium"
                  >
                    <feature.icon className="w-4 h-4" />
                    {feature.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#connect"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#25D366]/25 transition-all group"
              >
                <span>See a Live Demo</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                15-min walkthrough, no commitment
              </p>
            </motion.div>
          </div>

          {/* Right - Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <ChatDemo />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-4 md:right-8 px-4 py-2 bg-card border border-border/50 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-foreground">Live conversation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
