"use client";

import React from "react"
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, CheckCircle, ArrowRight, Mail, MapPin } from "lucide-react";

export function ConnectionPortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      ref={containerRef}
      id="connect"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            <Calendar className="w-4 h-4" />
            Let&apos;s Chat
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground"
          >
            Tell Us What&apos;s Driving You
            <br />
            <span className="italic text-primary">Completely Crazy</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            30 minutes. No sales pitch. Just a conversation about your business 
            and whether we can actually help. If we can&apos;t, we&apos;ll say so.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.3 }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">Thanks! We&apos;ll Be in Touch</h3>
              <p className="text-muted-foreground">Usually within a few hours. Talk soon!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-background/50 border border-border focus:border-primary outline-none py-3 px-4 rounded-xl text-foreground transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-background/50 border border-border focus:border-primary outline-none py-3 px-4 rounded-xl text-foreground transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Company (optional)</label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full bg-background/50 border border-border focus:border-primary outline-none py-3 px-4 rounded-xl text-foreground transition-all"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  What&apos;s the most annoying repetitive task in your business?
                </label>
                <textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full bg-background/50 border border-border focus:border-primary outline-none py-3 px-4 rounded-xl text-foreground transition-all resize-none"
                  placeholder="I spend 3 hours every day copying data between spreadsheets and our CRM..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all group"
              >
                <span>Request a Call</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>30 min call</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>No spam, ever</span>
                </div>
              </div>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <a href="mailto:hello@baseofstars.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            hello@baseofstars.com
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Based in India, working worldwide
          </div>
        </motion.div>
      </div>
    </section>
  );
}
