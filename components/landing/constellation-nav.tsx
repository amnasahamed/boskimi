"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export function ConstellationNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border/30" 
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Editorial Style */}
            <Link href="/" className="relative group z-50">
              <motion.div
                className="flex items-baseline gap-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-serif text-2xl tracking-tight">
                  Base
                </span>
                <span className="font-serif text-2xl tracking-tight text-muted-foreground">
                  of
                </span>
                <span className="font-serif text-2xl tracking-tight italic">
                  Stars
                </span>
              </motion.div>
              
              {/* Animated dot */}
              <motion.span
                className="absolute -right-3 top-1 w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Link>

            {/* Desktop Nav - Minimal Editorial */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className="relative px-5 py-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                    
                    {/* Hover Background */}
                    <AnimatePresence>
                      {hoveredIndex === i && (
                        <motion.span
                          layoutId="navHover"
                          className="absolute inset-0 bg-secondary/50 rounded-full -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              ))}
              
              {/* CTA - Minimal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="ml-6"
              >
                <Link
                  href="/about#connect"
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <span className="font-sans text-sm">Contact</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Toggle - Artistic */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4">
                <motion.span
                  animate={{ 
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 7 : 0,
                  }}
                  className="absolute top-0 left-0 w-full h-px bg-foreground origin-center"
                />
                <motion.span
                  animate={{ 
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 20 : 0,
                  }}
                  className="absolute top-1/2 left-0 w-full h-px bg-foreground -translate-y-1/2"
                />
                <motion.span
                  animate={{ 
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -7 : 0,
                  }}
                  className="absolute bottom-0 left-0 w-full h-px bg-foreground origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Full Screen Editorial */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Background */}
            <motion.div 
              initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-background"
            />
            
            {/* Menu Content */}
            <nav className="relative h-full flex flex-col justify-center px-8">
              <div className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ 
                      delay: 0.2 + i * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 py-3"
                    >
                      <span className="mono-caption text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="font-serif text-5xl md:text-7xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-8 right-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <Link
                    href="/about#connect"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-sans font-medium"
                  >
                    Start a Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  
                  <div className="flex gap-8">
                    <a href="#" className="mono-caption text-muted-foreground hover:text-foreground transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="mono-caption text-muted-foreground hover:text-foreground transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="mono-caption text-muted-foreground hover:text-foreground transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
