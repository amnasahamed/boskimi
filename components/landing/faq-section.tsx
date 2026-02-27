"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How much does this actually cost?",
    answer: "It depends on what you need. A simple automation might be $3-5K. A complex multi-system setup could be $15-30K. During our free call, we'll figure out exactly what you need and give you a real number — no hidden fees, no surprises.",
  },
  {
    question: "Will this replace my employees?",
    answer: "Nope. We build tools that handle the repetitive stuff so your people can do the interesting, creative work humans are good at. Most teams end up hiring more people after we work together because they can scale faster without the admin burden.",
  },
  {
    question: "What if it doesn't work for our specific situation?",
    answer: "We'll know pretty quickly during our first conversation if we can help or not. And if we can't, we'll tell you straight up and try to point you toward someone who can. No point in us taking on projects we can't nail.",
  },
  {
    question: "How long until we see results?",
    answer: "Most projects go live in 2-4 weeks. You'll see immediate results the day it launches. And if something isn't working quite right, we stick around for 90 days after launch to tweak and tune until it's perfect.",
  },
  {
    question: "Do we need to be technical?",
    answer: "Not at all. If you can use email and Slack, you can use what we build. We design everything to be simple, and we train your team until everyone's comfortable. If something breaks, just message us — we fix it.",
  },
  {
    question: "What happens after the 90 days of support?",
    answer: "You're not locked into anything. You own everything we build. Most clients keep us on a simple monthly retainer for ongoing tweaks and improvements, but that's totally optional. You can also hand it off to your internal team.",
  },
  {
    question: "Who are you guys, anyway?",
    answer: "We're a small team of engineers who got tired of seeing businesses waste time on work computers should do. We've shipped 147 projects for companies ranging from startups to government agencies. We're based in India but work with clients worldwide.",
  },
];

export function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative max-w-3xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            Questions?
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground"
          >
            Stuff People Usually Ask
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground"
          >
            Straight answers, no jargon.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="border border-border/50 rounded-2xl bg-card/30 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-card/50 transition-colors"
              >
                <span className="font-serif text-lg text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center p-8 bg-primary/5 border border-primary/10 rounded-3xl"
        >
          <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-serif text-xl text-foreground mb-2">Still wondering about something?</h3>
          <p className="text-muted-foreground mb-6">
            Just ask. We&apos;re real people and we actually respond.
          </p>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all"
          >
            <span>Message Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
