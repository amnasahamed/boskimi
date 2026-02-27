"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "Workflow Automation", href: "/services/workflows" },
      { label: "Smart Communication", href: "/services/whatsapp" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export function CosmicFooter() {
  return (
    <footer className="relative section-compact overflow-hidden border-t border-border/30">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-background to-background" />
      
      <div className="container-wide relative">
        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Left - Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="heading-editorial mb-8">
              Let&apos;s create
              <br />
              <span className="italic text-primary">something extraordinary</span>
            </h2>
            <p className="body-feature text-muted-foreground max-w-md mb-10">
              Ready to transform your business with intelligent automation? 
              We&apos;re here to architect solutions that push boundaries.
            </p>
            
            <Link
              href="/about#connect"
              className="group inline-flex items-center gap-4"
            >
              <span className="relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-sans font-medium overflow-hidden">
                <span className="relative z-10">Start a conversation</span>
                <motion.span
                  className="absolute inset-0 bg-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.span
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Right - Links */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-8">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="mono-label text-muted-foreground mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group font-sans text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-border/30">
          {/* Copyright */}
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg">Base of Stars</span>
            <span className="mono-caption text-muted-foreground">
              © {new Date().getFullYear()}
            </span>
          </div>

          {/* Email */}
          <a 
            href="mailto:hello@baseofstars.com" 
            className="mono-caption text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@baseofstars.com
          </a>

          {/* Status */}
          <motion.div
            className="flex items-center gap-3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="mono-caption text-muted-foreground">
              All systems operational
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
