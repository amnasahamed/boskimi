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
      <div className="relative p-6 bg-card/50 border border-border/50 rounded-2xl backdrop-blur-sm">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="font-serif text-3xl text-foreground mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
}

// Team member avatar with personality
function TeamAvatar({ emoji, role, delay }: { emoji: string; role: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="flex flex-col items-center"
    >
      <motion.div
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl shadow-lg border border-primary/10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {emoji}
      </motion.div>
      <span className="text-xs text-muted-foreground mt-2">{role}</span>
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
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              Engineers Who Got
              <br />
              <span className="italic text-primary">Tired of Waste</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed text-lg"
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

            {/* Team avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  <TeamAvatar emoji="👨‍💻" role="Engineer" delay={0.4} />
                  <TeamAvatar emoji="👩‍💻" role="Designer" delay={0.5} />
                  <TeamAvatar emoji="🧑‍💻" role="Architect" delay={0.6} />
                  <TeamAvatar emoji="👨‍🎨" role="Builder" delay={0.7} />
                </div>
                <div className="ml-4 text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">4 core team members</span>
                  <br />
                  + specialized contractors
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Visual composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative">
              <motion.div
                className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-[22px] bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center relative overflow-hidden">
                  {/* Abstract team illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 rounded-full bg-primary/30"
                          style={{
                            top: `${50 + 40 * Math.sin((i / 8) * Math.PI * 2)}%`,
                            left: `${50 + 40 * Math.cos((i / 8) * Math.PI * 2)}%`,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                  
                  {/* Center content */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl shadow-2xl mb-4"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0)",
                          "0 0 40px 10px rgba(59, 130, 246, 0.2)",
                          "0 0 0 0 rgba(59, 130, 246, 0)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🚀
                    </motion.div>
                    <div className="font-serif text-2xl text-foreground">Base of Stars</div>
                    <div className="text-sm text-muted-foreground">Est. 2024</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -bottom-6 -left-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="p-4 bg-card border border-border/50 rounded-2xl shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Based in India</div>
                      <div className="text-xs text-muted-foreground">Working worldwide</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <div className="p-4 bg-card border border-border/50 rounded-2xl shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">☕</div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Coffee lovers</div>
                      <div className="text-xs text-muted-foreground">Fuel for code</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
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
            <h3 className="font-serif text-3xl text-foreground mb-2">How We Work</h3>
            <p className="text-muted-foreground">Our non-negotiables</p>
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
                
                <div className="relative p-6 md:p-8 bg-card/50 border border-border/50 rounded-2xl backdrop-blur-sm h-full">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <value.icon 
                      className="w-7 h-7 transition-colors"
                      style={{ color: value.color }}
                    />
                  </div>
                  
                  <h4 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
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
