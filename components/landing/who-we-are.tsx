"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, Heart, Lightbulb, HandHeart, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "We actually listen",
    description: "Before we write a line of code, we understand your business, your pain points, and what success looks like for you.",
    color: "#f59e0b",
  },
  {
    icon: Users,
    title: "We build for humans",
    description: "Technology should serve people, not the other way around. If your team needs a PhD to use it, we failed.",
    color: "#3b82f6",
  },
  {
    icon: HandHeart,
    title: "We stick around",
    description: "Launch day isn't goodbye. We stay for 90 days to make sure everything works and your team is confident.",
    color: "#ec4899",
  },
  {
    icon: ShieldCheck,
    title: "We're honest",
    description: "If we can't help you, we'll say so. If something isn't working, we'll fix it. No ego, just results.",
    color: "#22c55e",
  },
];

// Animated stat counter
function StatCard({ value, label, icon: Icon, delay }: { value: string; label: string; icon: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-4 sm:p-6 bg-card/50 border border-border/50 rounded-xl sm:rounded-2xl backdrop-blur-sm">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <div className="font-serif text-2xl sm:text-3xl text-foreground mb-1">{value}</div>
        <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
}

export function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Left - Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Who We Are
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              Engineers Who Got
              <br className="hidden sm:block" />
              <span className="italic text-primary">Tired of Waste</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              <p>
                We&apos;ve worked at big tech companies, startups, and everything in between. 
                And everywhere we went, we saw the same thing: smart people wasting hours on 
                work that software could handle.
              </p>
              <p>
                So we started Base of Stars to fix that. Not by selling you some platform 
                you have to learn, but by building exactly what you need and making sure 
                it actually works.
              </p>
              <p className="text-foreground font-medium">
                We&apos;re a small team. We take on limited projects. And we care deeply 
                about every one of them.
              </p>
            </motion.div>

          </div>

          {/* Right - Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative order-first lg:order-last"
          >
            <motion.div
              className="aspect-[4/3] sm:aspect-video lg:aspect-square overflow-hidden relative rounded-lg sm:rounded-none"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/who-we-are.mp4" type="video/mp4" />
              </video>
              {/* Edge fade masks - all 4 sides blending into background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-8 sm:h-16 bg-gradient-to-b from-background to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-8 sm:h-16 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 lg:mb-20">
          <StatCard value="147" label="Projects shipped" icon={Heart} delay={0.1} />
          <StatCard value="50+" label="Happy clients" icon={Users} delay={0.2} />
          <StatCard value="4" label="Core team" icon={Sparkles} delay={0.3} />
          <StatCard value="30" label="Day avg delivery" icon={Lightbulb} delay={0.4} />
        </div>

        {/* Values grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">How We Work</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Our non-negotiables</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${value.color}20` }}
                />
                
                <div className="relative p-5 sm:p-6 lg:p-8 bg-card/50 border border-border/50 rounded-xl sm:rounded-2xl backdrop-blur-sm h-full">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-colors"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <value.icon 
                      className="w-6 h-6 sm:w-7 sm:h-7 transition-colors"
                      style={{ color: value.color }}
                    />
                  </div>
                  
                  <h4 className="font-serif text-lg sm:text-xl text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
