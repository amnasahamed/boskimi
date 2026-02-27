"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { TextScramble } from "@/components/animations/text-scramble";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";
import { Shield, Clock, Award, Users, Zap, CheckCircle, ArrowRight, Star } from "lucide-react";

// Trust badges data
const trustBadges = [
  { icon: Shield, label: "Enterprise Security", sublabel: "SOC 2 Compliant" },
  { icon: Clock, label: "24/7 Support", sublabel: "Always Available" },
  { icon: Award, label: "99.9% Uptime", sublabel: "SLA Guaranteed" },
  { icon: Users, label: "50+ Clients", sublabel: "Globally Trusted" },
];

// Client logos (using text for now - replace with actual logos)
const clientLogos = [
  "Navakeralam",
  "Clapsboard",
  "Badria Sweets",
  "TechStart",
  "GlobalRetail",
];

// Custom cursor component
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary mix-blend-difference pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isHovering ? 3 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9998] hidden lg:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
        style={{ opacity: isVisible ? 0.5 : 0 }}
      />
    </>
  );
}

// Animated text character by character
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.03, ease: [0.23, 1, 0.32, 1] }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// Counter animation component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

import { useInView } from "framer-motion";

export function CosmicEntrance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <CustomCursor />
      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Multi-layered Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
          
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`,
            }}
          />
          
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                background: i % 2 === 0 
                  ? `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`
                  : `radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)`,
                left: `${15 + i * 15}%`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 30, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{ duration: 15 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
          ))}
          
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
            }}
          />
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
            <svg className="w-full h-full">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <motion.div style={{ y, opacity, scale }} className="relative z-10 container-wide">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-8">
                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                        <Star className="w-3 h-3 text-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Trusted by <span className="text-foreground font-medium">50+ businesses</span> worldwide
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-px w-12 bg-primary" />
                  <TextScramble 
                    text="AI Solutions for Business Growth" 
                    className="mono-label text-primary"
                    trigger="mount"
                  />
                </motion.div>

                <h1 className="display-massive text-foreground">
                  <span className="block">
                    <AnimatedText text="Your Team Is" delay={0.3} />
                  </span>
                  <span className="block italic text-gradient">
                    <AnimatedText text="Drowning In" delay={0.5} />
                  </span>
                  <span className="block">
                    <AnimatedText text="Busywork" delay={0.7} />
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="body-editorial text-muted-foreground max-w-xl"
                >
                  While your competitors use AI to move faster, your team is stuck answering 
                  the same emails, copying data between apps, and chasing unqualified leads. 
                  <span className="text-foreground font-medium"> We fix that in 30 days — guaranteed, or you don't pay.</span>
                </motion.p>

                {/* Single Strong CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
                >
                  <MagneticButton strength={0.2}>
                    <Link
                      href="#connect"
                      data-cursor-hover
                      className="group relative inline-flex items-center gap-3 px-8 py-5 bg-primary text-primary-foreground rounded-full font-sans font-semibold text-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative">Get Free AI Audit</span>
                      <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                </motion.div>

                {/* Trust Badges Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex flex-wrap items-center gap-6 pt-8 border-t border-border/30"
                >
                  {trustBadges.map((badge, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <badge.icon className="w-4 h-4 text-primary" />
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-foreground">{badge.label}</span>
                        <span className="text-[10px] text-muted-foreground">{badge.sublabel}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Social Proof Card */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  {/* Main Stats Card */}
                  <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="mono-label text-primary">Live Results</span>
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-600 font-medium">Active Now</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 147, suffix: "+", label: "Workflows Automated", icon: Zap },
                        { value: 850, suffix: "K+", label: "Hours Saved", icon: Clock },
                        { value: 23, suffix: "", label: "AI Agents Live", icon: Users },
                        { value: 340, suffix: "%", label: "Avg ROI", icon: Award },
                      ].map((stat, i) => (
                        <div key={i} className="p-4 bg-background/50 rounded-2xl">
                          <stat.icon className="w-5 h-5 text-primary mb-2" />
                          <div className="font-serif text-2xl text-foreground italic">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Mini Testimonial */}
                    <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-serif text-primary font-bold">N</span>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground italic">
                            "Base of Stars transformed our customer service. Response time dropped from hours to seconds."
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm font-medium text-foreground">Government of Kerala</span>
                            <span className="text-xs text-muted-foreground">— Official Partner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ⚡ ROI in 30 Days
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Client Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-20 pt-8 border-t border-border/30"
            >
              <p className="text-center text-sm text-muted-foreground mb-6">
                Trusted by innovative teams at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {clientLogos.map((logo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1.8 + i * 0.1 }}
                    whileHover={{ opacity: 1 }}
                    className="text-lg font-serif italic text-foreground transition-opacity"
                  >
                    {logo}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="mono-caption text-muted-foreground">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
