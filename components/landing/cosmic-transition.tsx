"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import { CosmicPaths } from "@/components/ui/cosmic-paths";

export function CosmicTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for the path animations
  const path1 = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const path2 = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const path3 = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const path4 = useTransform(scrollYProgress, [0.3, 0.9], [0, 1]);
  const path5 = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  // Content fade animations
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs - matching site style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Animated cosmic paths */}
      <CosmicPaths 
        pathLengths={[path1, path2, path3, path4, path5]} 
        className="opacity-60"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Label */}
        <motion.div
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary/80 mb-8"
        >
          <Sparkles className="w-4 h-4" />
          The Journey Begins
        </motion.div>

        {/* Quote / Transition Text */}
        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
          <span className="italic text-primary">Every star</span> in the constellation
          <br className="hidden sm:block" />
          <span className="text-muted-foreground">is a system we&apos;ve built</span>
        </blockquote>

        {/* Supporting text */}
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          From scattered ideas to connected solutions — we help businesses 
          find their orbit and shine brighter.
        </p>

        {/* Stats in constellation style */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "147", label: "Systems Shipped" },
            { value: "50+", label: "Businesses Orbiting" },
            { value: "30", label: "Day Average" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-3xl md:text-4xl text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Discover</span>
            <ArrowDown className="w-4 h-4 text-primary/60" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
