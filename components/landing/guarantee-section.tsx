"use client";

import { motion } from "framer-motion";
import { Shield, Clock, HeartHandshake, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const guarantees = [
  {
    icon: Clock,
    title: "We Deliver in 30 Days (Or Work Free)",
    description: "Your solution goes live within 30 days of starting, guaranteed. If we're late, we keep working at no extra cost until it's done.",
  },
  {
    icon: Shield,
    title: "It Actually Works (Or We Fix It)",
    description: "If something isn't working as promised in the first 60 days, we don't disappear. We fix it, tune it, or rebuild it until it does what you need.",
  },
  {
    icon: HeartHandshake,
    title: "We're Here for 90 Days (Free)",
    description: "After launch, we stick around for 3 months to help your team get comfortable, make tweaks, and ensure everything runs smoothly.",
  },
];

const commitments = [
  "Talk directly to engineers (no account managers)",
  "No hidden fees or surprise charges",
  "You own everything we build",
  "Cancel anytime if it's not working out",
  "If we can't help, we'll tell you (and suggest who can)",
];

export function GuaranteeSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            <Shield className="w-4 h-4" />
            Our Promises
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground"
          >
            We&apos;re Not Happy Until
            <br />
            <span className="italic text-primary">You&apos;re</span> Happy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            We know trusting someone with your business systems is a big deal. 
            Here&apos;s how we make sure you feel confident (and stay happy).
          </motion.p>
        </div>

        {/* Guarantee Cards */}
        <div className="space-y-4 mb-16">
          {guarantees.map((guarantee, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-5 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <guarantee.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1">{guarantee.title}</h3>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-primary/5 border border-primary/10 rounded-3xl"
        >
          <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
            How We Work (Our Code)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {commitments.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#connect"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all group"
            >
              <span>Sound Good? Let&apos;s Talk</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
