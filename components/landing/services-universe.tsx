"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Clock, DollarSign, TrendingUp } from "lucide-react";

const services = [
  {
    id: "support",
    title: "Customer Support That Never Sleeps",
    description: "Your customers get instant answers at 2 AM. Your team wakes up to the complex stuff already filtered. Everyone's happier.",
    result: "80% of tickets resolved automatically",
    tags: ["24/7 Response", "Smart Escalation", "Multi-language"],
    metrics: [
      { icon: Clock, value: "<2s", label: "Response time" },
      { icon: DollarSign, value: "$3K+/mo", label: "Cost savings" },
    ],
    color: "#25D366",
  },
  {
    id: "workflow",
    title: "Stop Copy-Pasting Between Apps",
    description: "We connect your tools and automate the boring data shuffling. Your spreadsheets update themselves. Your reports generate automatically.",
    result: "25+ hours saved per week",
    tags: ["Zero-Error Data Entry", "Smart Triggers", "100+ Integrations"],
    metrics: [
      { icon: Clock, value: "25+ hrs", label: "Weekly saved" },
      { icon: TrendingUp, value: "99.9%", label: "Accuracy" },
    ],
    color: "#6366f1",
  },
  {
    id: "leads",
    title: "Qualify Leads While You Sleep",
    description: "Every inquiry gets an instant, helpful response. Hot leads get flagged and routed to your sales team. Cold ones get nurtured automatically.",
    result: "4x more qualified conversations",
    tags: ["Instant Qualification", "Auto-Follow Up", "CRM Integration"],
    metrics: [
      { icon: TrendingUp, value: "4x", label: "Conversion boost" },
      { icon: DollarSign, value: "$5K+/mo", label: "Revenue added" },
    ],
    color: "#f59e0b",
  },
  {
    id: "custom",
    title: "Something Weird & Specific?",
    description: "Got a unique process that drives you nuts? We've probably seen it (or something like it). Tell us the pain, we'll build the fix.",
    result: "If it repeats, we can automate it",
    tags: ["Custom Logic", "Weird Integrations", "Bespoke Builds"],
    metrics: [
      { icon: Clock, value: "∞", label: "Possibilities" },
      { icon: TrendingUp, value: "100%", label: "Custom fit" },
    ],
    color: "#ec4899",
  },
];

// Card with magnetic hover effect
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out',
      }}
      className="group relative"
    >
      {/* Glow effect on hover - subtle 10% */}
      <motion.div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ backgroundColor: `${service.color}1A` }}
      />
      
      <div className="relative h-full p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/80">
        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
          style={{ backgroundColor: service.color }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
        />

        <div className="flex items-start justify-between mb-6">
          <motion.h3 
            className="font-serif text-2xl text-foreground transition-colors group-hover:text-primary"
          >
            {service.title}
          </motion.h3>
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
          >
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </motion.div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Result highlight */}
        <motion.div 
          className="p-4 rounded-xl mb-6"
          style={{ backgroundColor: `${service.color}10` }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm text-muted-foreground">Typical result: </span>
          <span className="font-medium" style={{ color: service.color }}>
            {service.result}
          </span>
        </motion.div>

        {/* Metrics with stagger */}
        <div className="flex gap-3 mb-6">
          {service.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-xl"
            >
              <metric.icon className="w-4 h-4 text-primary" />
              <div>
                <div className="font-serif text-lg text-foreground leading-none">{metric.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
              className="px-3 py-1.5 rounded-full bg-secondary/50 text-sm text-muted-foreground transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesUniverse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with text reveal */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            What We Actually Do
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground leading-tight"
          >
            We Build Systems That
            <br />
            <motion.span 
              className="italic text-primary"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Make Work Less Annoying
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Every business has repetitive tasks that drain time and energy. 
            We find them and make them disappear.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which fits your situation? That&apos;s normal. Let&apos;s talk it through.
          </p>
          <motion.a
            href="#connect"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            <span>Book a free 30-min chat</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
