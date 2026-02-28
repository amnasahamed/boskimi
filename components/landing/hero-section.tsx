"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle, Star } from "lucide-react";

// Animated counter that counts up when in view
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Floating animation for decorative elements
function FloatingElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation
function TextReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax on scroll (no fade)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Full-width Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10" />
        
        {/* Floating gradient orbs with mouse parallax */}
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          style={{ x: mouseXSpring, y: mouseYSpring }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl"
          style={{ x: useSpring(mouseX, { damping: 40, stiffness: 150 }), y: useSpring(mouseY, { damping: 40, stiffness: 150 }) }}
        />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Animated decorative circles */}
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary/10 rounded-full" />
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute bottom-40 right-40 w-24 h-24 border border-accent/10 rounded-full" />
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/5 rounded-full" />
        </FloatingElement>

        {/* Animated flowing lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,200 Q400,100 800,200 T1600,200"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,400 Q400,500 800,400 T1600,400"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M200,0 Q300,300 200,600"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M1400,0 Q1300,300 1400,600"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
          />
        </svg>

        {/* Animated dots grid */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
          {[...Array(6)].map((_, row) => (
            <div key={row} className="flex justify-around" style={{ marginTop: row === 0 ? '15%' : '15%' }}>
              {[...Array(8)].map((_, col) => (
                <motion.div
                  key={col}
                  className="w-1 h-1 rounded-full bg-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3], 
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: (row * 8 + col) * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <motion.div 
            className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
            style={{ transform: 'rotate(15deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent"
            style={{ transform: 'rotate(-10deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div style={{ y }} className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 text-center">
          
          {/* Social Proof with stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
          >
            {/* Animated avatar stack */}
            <motion.div 
              className="flex items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0, x: -20 },
                      visible: { opacity: 1, scale: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-[10px] sm:text-xs font-medium text-primary">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="ml-2 sm:ml-3 text-left sm:text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.05 }}
                    >
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground">from founders we&apos;ve helped</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hidden sm:block h-8 w-px bg-border"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 }}
            />

            <motion.div 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-foreground font-medium"><AnimatedCounter value={147} /> projects</span> shipped
            </motion.div>
          </motion.div>

          {/* Headline with character animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6"
          >
            <TextReveal delay={0.2}>Tired of Doing Work</TextReveal>
            <br className="hidden sm:block" />
            <span className="italic text-primary">
              <TextReveal delay={0.4}>Software Should Do?</TextReveal>
            </span>
          </motion.h1>

          {/* Subhead with fade */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0"
          >
            We&apos;re a small team of engineers who build smart systems that handle the 
            repetitive stuff — so you and your team can focus on the work that actually matters.
          </motion.p>

          {/* Pain Points with stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.8,
                },
              },
            }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2 sm:px-0"
          >
            {[
              "Answering the same emails",
              "Copying data between apps", 
              "Chasing unqualified leads",
              "Manual reporting"
            ].map((pain) => (
              <motion.span
                key={pain}
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/50 rounded-full text-xs sm:text-sm text-muted-foreground cursor-default transition-colors"
              >
                {pain}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="#connect"
                data-cursor="Let's Talk"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-primary/25 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Grab a Coffee (Virtually)</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ x: 5 }}>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors text-sm sm:text-base"
              >
                <span>See what we&apos;ve built</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Row with stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.2,
                },
              },
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            {[
              "No sales pitch",
              "Talk to engineers directly",
              "30-day delivery",
            ].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-green-500" />
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Row with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/30 grid grid-cols-3 gap-4 sm:gap-8"
          >
            {[
              { value: 147, suffix: "", label: "Projects shipped" },
              { value: 50, suffix: "+", label: "Founders helped" },
              { value: 30, suffix: "", label: "Day avg delivery" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-default"
              >
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator with bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
