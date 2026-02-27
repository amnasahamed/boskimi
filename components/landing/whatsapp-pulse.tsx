"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, CheckCheck, Clock } from "lucide-react";

interface Message {
  id: number;
  type: "user" | "agent";
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  isVoice?: boolean;
  voiceDuration?: string;
  hasAttachment?: boolean;
  attachmentType?: "image" | "document";
}

const conversation: Message[] = [
  { 
    id: 1,
    type: "user", 
    text: "Hi! I'm looking to automate our customer support. We get about 500 inquiries daily.", 
    time: "9:41 AM",
    status: "read"
  },
  { 
    id: 2,
    type: "agent", 
    text: "Hi there! I'd be happy to help with that. 500 daily inquiries sounds like a perfect case for AI automation.", 
    time: "9:41 AM",
    status: "read"
  },
  { 
    id: 3,
    type: "agent", 
    text: "Quick question: What percentage of those are repetitive questions like pricing, order status, or returns?", 
    time: "9:42 AM",
    status: "read"
  },
  { 
    id: 4,
    type: "user", 
    text: "I'd say around 70-80% are the same questions over and over.", 
    time: "9:43 AM",
    status: "read"
  },
  { 
    id: 5,
    type: "agent", 
    text: "Perfect! That's exactly what our AI agents excel at. Here's what we typically see:", 
    time: "9:43 AM",
    status: "read"
  },
  { 
    id: 6,
    type: "agent", 
    text: "80% automated responses\n< 2 second reply time\n60-70% cost reduction\n24/7 availability", 
    time: "9:44 AM",
    status: "read",
    hasAttachment: true,
    attachmentType: "document"
  },
  { 
    id: 7,
    type: "user", 
    text: "That sounds amazing! Can it integrate with our existing Shopify and Zendesk?", 
    time: "9:45 AM",
    status: "read"
  },
  { 
    id: 8,
    type: "agent", 
    text: "Absolutely! We integrate seamlessly with both. The AI can pull order data from Shopify and create tickets in Zendesk when human escalation is needed.", 
    time: "9:45 AM",
    status: "read"
  },
  { 
    id: 9,
    type: "agent", 
    text: "Want me to set up a 15-min call to discuss your specific workflow? I can show you a live demo.", 
    time: "9:46 AM",
    status: "read"
  },
  { 
    id: 10,
    type: "user", 
    text: "Yes please! How's tomorrow at 2 PM?", 
    time: "9:47 AM",
    status: "delivered"
  },
];

const quickReplies = ["Book a call", "See pricing", "View demo"];

export function WhatsAppPulse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let currentDelay = 0;
    
    conversation.forEach((msg, index) => {
      const delay = index === 0 ? 500 : (msg.type === "agent" && conversation[index - 1].type === "user" ? 1500 : 800);
      currentDelay += delay;
      
      setTimeout(() => {
        if (msg.type === "agent") {
          // Simulate typing with text
          setIsTyping(true);
          setTypingText("AI Agent is typing");
          
          // Animate typing dots
          let dots = 0;
          const typingInterval = setInterval(() => {
            dots = (dots + 1) % 4;
            setTypingText("AI Agent is typing" + "".padEnd(dots, "."));
          }, 400);
          
          setTimeout(() => {
            clearInterval(typingInterval);
            setIsTyping(false);
            setVisibleMessages((prev) => [...prev, msg.id]);
            
            // Show quick replies after last message
            if (index === conversation.length - 1) {
              setTimeout(() => setShowQuickReplies(true), 500);
            }
          }, 1200 + Math.random() * 800);
        } else {
          setVisibleMessages((prev) => [...prev, msg.id]);
        }
      }, currentDelay);
    });
  }, [isInView]);

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "sent":
        return <Check className="w-3 h-3 text-muted-foreground" />;
      case "delivered":
        return <CheckCheck className="w-3 h-3 text-muted-foreground" />;
      case "read":
        return <CheckCheck className="w-3 h-3 text-accent" />;
      default:
        return <Clock className="w-3 h-3 text-muted-foreground" />;
    }
  };

  return (
    <section
      ref={containerRef}
      id="whatsapp"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Smart Communication
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mt-4 leading-[0.9]">
              AI That
              <br />
              <span className="italic text-muted-foreground">Talks Like You</span>
            </h2>

            <div className="mt-12 space-y-8">
              <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                Your customers want instant answers. Our AI delivers human-like 
                conversations that understand context, remember history, and 
                handle complex inquiries—right within WhatsApp.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "< 2s", label: "Response Time" },
                  { value: "80%", label: "Queries Automated" },
                  { value: "24/7", label: "Always Available" },
                  { value: "3x", label: "Faster Resolution" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 10,
                    }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="font-serif text-3xl md:text-4xl text-foreground italic">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Lead Qualification",
                  "Instant Quotes",
                  "Appointment Booking",
                  "Order Tracking",
                  "Multi-language",
                  "Smart Escalation",
                ].map((feature, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      scale: isInView ? 1 : 0.9,
                    }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="font-mono text-[10px] uppercase tracking-wider px-4 py-2 border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-[320px] md:w-[360px]">
              {/* Phone body */}
              <div className="relative bg-card border-2 border-border rounded-[2.5rem] p-2 shadow-2xl">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-card rounded-full z-10" />
                
                {/* Screen */}
                <div className="bg-background rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-2 pt-4">
                    <span className="font-mono text-[11px] font-medium text-foreground">
                      9:48
                    </span>
                    <div className="flex items-center gap-1">
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                        <path d="M1 8C1 8 2 9 4 9C6 9 7 8 7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground"/>
                        <path d="M1 5C1 5 3 7 7 7C11 7 13 5 13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground"/>
                        <path d="M1 2C1 2 4 5 10 5C14 5 15 3 15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground"/>
                      </svg>
                      <div className="w-6 h-3 border border-foreground/30 rounded-sm relative">
                        <div className="absolute inset-0.5 w-3/4 bg-foreground rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Chat header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-secondary/30">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                      <span className="font-serif text-primary-foreground text-sm font-bold">AI</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-serif text-sm text-foreground font-medium truncate">
                        Base of Stars AI
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-mono text-[10px] text-green-600">
                          Online
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="h-[420px] overflow-y-auto p-3 space-y-1 bg-gradient-to-b from-secondary/10 to-background">
                    <AnimatePresence>
                      {conversation.map((msg) =>
                        visibleMessages.includes(msg.id) && (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className={`flex ${
                              msg.type === "user"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <div
                              className={`relative max-w-[85%] px-3 py-2 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                                msg.type === "user"
                                  ? "bg-primary text-primary-foreground rounded-br-md"
                                  : "bg-card border border-border/50 text-foreground rounded-bl-md"
                              }`}
                            >
                              {/* Attachment indicator */}
                              {msg.hasAttachment && (
                                <div className="flex items-center gap-2 mb-2 p-2 bg-background/50 rounded-lg">
                                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                      <polyline points="14 2 14 8 20 8"/>
                                    </svg>
                                  </div>
                                  <span className="text-xs font-mono opacity-70">Results.pdf</span>
                                </div>
                              )}
                              
                              <div className="whitespace-pre-line">{msg.text}</div>
                              
                              {/* Time and status */}
                              <div className={`flex items-center justify-end gap-1 mt-1 ${
                                msg.type === "user" ? "text-primary-foreground/60" : "text-muted-foreground"
                              }`}>
                                <span className="font-mono text-[9px]">{msg.time}</span>
                                {msg.type === "user" && getStatusIcon(msg.status)}
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </AnimatePresence>

                    {/* Typing indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-card border border-border/50 px-3 py-2 rounded-2xl rounded-bl-md">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                                  animate={{ 
                                    y: [0, -4, 0],
                                    opacity: [0.4, 1, 0.4]
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                  }}
                                />
                              ))}
                            </div>
                            <span className="font-mono text-[9px] text-muted-foreground">
                              {typingText}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Quick Replies */}
                    <AnimatePresence>
                      {showQuickReplies && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex flex-wrap gap-2 justify-end mt-2"
                        >
                          {quickReplies.map((reply, index) => (
                            <motion.button
                              key={reply}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-[11px] text-accent font-medium hover:bg-accent/20 transition-colors"
                            >
                              {reply}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Input area */}
                  <div className="flex items-center gap-2 px-3 py-3 border-t border-border/50 bg-card/30">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </button>
                    <div className="flex-1 bg-secondary/50 rounded-full px-4 py-2 flex items-center">
                      <span className="text-[13px] text-muted-foreground flex-1">
                        Type a message...
                      </span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="22"/>
                      </svg>
                    </div>
                    <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-accent/10 blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full bg-primary/10 blur-xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
              
              {/* Floating notification badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                transition={{ delay: 2, type: "spring" }}
                className="absolute -top-2 -left-2 bg-accent text-accent-foreground rounded-full px-3 py-1.5 shadow-lg"
              >
                <span className="font-mono text-[10px] font-bold">AI Active</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
