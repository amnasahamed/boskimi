"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Globe2, Users, Clock, Sparkles, ArrowUpRight, MapPin, Server, Activity } from "lucide-react";

const stats = [
  { 
    value: 147, 
    label: "AI Workflows Deployed", 
    suffix: "+",
    icon: Sparkles,
    description: "Automating tasks across industries"
  },
  { 
    value: 23, 
    label: "AI Agents Active", 
    suffix: "",
    icon: Users,
    description: "Handling customer conversations 24/7"
  },
  { 
    value: 15, 
    label: "Countries Served", 
    suffix: "+",
    icon: Globe2,
    description: "From startups to enterprises"
  },
  { 
    value: 99, 
    label: "Uptime Guarantee", 
    suffix: "%",
    icon: Clock,
    description: "Reliable, always-on automation"
  },
];

const networkNodes = [
  { id: 1, name: "Dubai", x: 60, y: 45, status: "active", requests: 1247 },
  { id: 2, name: "London", x: 45, y: 30, status: "active", requests: 2156 },
  { id: 3, name: "New York", x: 25, y: 35, status: "active", requests: 3421 },
  { id: 4, name: "Singapore", x: 75, y: 55, status: "active", requests: 1892 },
  { id: 5, name: "Sydney", x: 85, y: 75, status: "active", requests: 876 },
  { id: 6, name: "São Paulo", x: 32, y: 70, status: "active", requests: 654 },
  { id: 7, name: "Tokyo", x: 82, y: 38, status: "active", requests: 2134 },
];

const connections = [
  { from: 3, to: 2 }, { from: 2, to: 1 }, { from: 1, to: 4 },
  { from: 4, to: 7 }, { from: 3, to: 6 }, { from: 7, to: 5 },
  { from: 2, to: 7 }, { from: 4, to: 5 }, { from: 1, to: 6 },
];

export function GlobalImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [dataPackets, setDataPackets] = useState<Array<{id: number, connection: number, progress: number}>>([]);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounters(stats.map(stat => Math.floor(stat.value * easeOut)));

      if (step >= steps) {
        clearInterval(timer);
        setCounters(stats.map(stat => stat.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  // Animate data packets flowing through connections
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      const randomConnection = Math.floor(Math.random() * connections.length);
      const newPacket = {
        id: Date.now(),
        connection: randomConnection,
        progress: 0
      };
      setDataPackets(prev => [...prev.slice(-10), newPacket]);
    }, 800);

    return () => clearInterval(interval);
  }, [isInView]);

  // Update packet positions
  useEffect(() => {
    if (dataPackets.length === 0) return;

    const interval = setInterval(() => {
      setDataPackets(prev => 
        prev.map(p => ({ ...p, progress: p.progress + 0.05 }))
            .filter(p => p.progress < 1)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [dataPackets.length]);

  return (
    <section
      ref={containerRef}
      id="impact"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-0 w-[800px] h-[800px] -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 60%)",
            filter: "blur(120px)",
            opacity: 0.06,
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ delay: 0.2 }}
          >
            <Globe2 className="w-4 h-4" />
            Global Impact
          </motion.span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9]">
            AI Without
            <br />
            <span className="italic text-accent">Borders</span>
          </h2>
          <p className="font-serif text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl mx-auto">
            Our AI agents work around the clock, seamlessly handling requests 
            across continents with the same precision and care.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Stats Cards - Left Side */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`group relative p-6 md:p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-accent/30 transition-all duration-500 ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-accent" />
                    </motion.div>

                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
                        {counters[index]}
                      </span>
                      <span className="font-serif text-3xl md:text-4xl text-accent">
                        {stat.suffix}
                      </span>
                    </div>

                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-2">
                      {stat.label}
                    </div>

                    <p className="font-serif text-sm text-muted-foreground mt-3 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[400px] p-6 md:p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-xl text-foreground">Live Network</h3>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    Real-time AI agent activity
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-green-600">LIVE</span>
                </div>
              </div>

              {/* Network Map */}
              <div className="relative w-full aspect-square max-w-[320px] mx-auto">
                {/* Background circles */}
                <div className="absolute inset-0 rounded-full border border-border/20" />
                <div className="absolute inset-4 rounded-full border border-border/10" />
                <div className="absolute inset-8 rounded-full border border-border/10" />

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {connections.map((conn, idx) => {
                    const from = networkNodes.find(n => n.id === conn.from);
                    const to = networkNodes.find(n => n.id === conn.to);
                    if (!from || !to) return null;

                    return (
                      <motion.line
                        key={idx}
                        x1={`${from.x}%`}
                        y1={`${from.y}%`}
                        x2={`${to.x}%`}
                        y2={`${to.y}%`}
                        stroke="var(--accent)"
                        strokeWidth="1"
                        strokeOpacity="0.2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                      />
                    );
                  })}

                  {/* Data Packets */}
                  {dataPackets.map(packet => {
                    const conn = connections[packet.connection];
                    if (!conn) return null;
                    const from = networkNodes.find(n => n.id === conn.from);
                    const to = networkNodes.find(n => n.id === conn.to);
                    if (!from || !to) return null;

                    const x = from.x + (to.x - from.x) * packet.progress;
                    const y = from.y + (to.y - from.y) * packet.progress;

                    return (
                      <motion.circle
                        key={packet.id}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="3"
                        fill="var(--accent)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                      />
                    );
                  })}
                </svg>

                {/* Nodes */}
                {networkNodes.map((node, index) => (
                  <motion.div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent/30"
                      style={{ margin: "-50%" }}
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Node */}
                    <div className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                      activeNode === node.id 
                        ? "bg-accent scale-150" 
                        : "bg-accent/80"
                    }`}>
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-full bg-accent blur-md" />
                    </div>

                    {/* Label */}
                    <motion.div
                      className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeNode === node.id ? 1 : 0.6 }}
                    >
                      <span className="font-mono text-[9px] text-muted-foreground">
                        {node.name}
                      </span>
                    </motion.div>

                    {/* Request count tooltip */}
                    <AnimatePresence>
                      {activeNode === node.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border/50 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap z-10"
                        >
                          <div className="flex items-center gap-2">
                            <Activity className="w-3 h-3 text-accent" />
                            <span className="font-mono text-xs text-foreground">
                              {node.requests.toLocaleString()} requests/hr
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Center hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/25">
                    <Server className="w-5 h-5 text-accent-foreground" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-accent"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      Total Requests (24h)
                    </div>
                    <div className="font-serif text-2xl text-foreground">
                      {networkNodes.reduce((acc, n) => acc + n.requests, 0).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      Avg Response
                    </div>
                    <div className="font-serif text-2xl text-accent">
                      1.2s
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#connect"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-xl text-accent font-mono text-xs uppercase tracking-wider transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Network
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-serif text-muted-foreground text-center md:text-left">
              Trusted by businesses across <span className="text-foreground">5 continents</span>
            </p>
            <div className="flex items-center gap-8">
              {["E-commerce", "Healthcare", "Finance", "Education", "SaaS"].map((industry, index) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="font-mono text-xs text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors cursor-default"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
