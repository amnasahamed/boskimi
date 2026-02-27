"use client";

import Link from "next/link";
import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Brain, Workflow, MessageCircle, Code2, Lightbulb, Smartphone, 
  ArrowRight, Globe, Palette, ShoppingCart, Plug, Database, 
  Search, Gauge, Server, GitBranch, Wrench, Sparkles, CheckCircle2,
  Clock, TrendingUp, Users, Zap
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Customer Support That Never Sleeps",
    description: "Your customers get instant answers at 2 AM. Your team wakes up to the complex stuff already filtered. Everyone's happier.",
    link: "/services/whatsapp",
    features: ["24/7 Response", "Smart Escalation", "Multi-language"],
    color: "#25D366",
    metrics: [
      { value: "<2s", label: "Response" },
      { value: "80%", label: "Automated" },
    ]
  },
  {
    icon: Workflow,
    title: "Stop Copy-Pasting Between Apps",
    description: "We connect your tools and automate the boring data shuffling. Your spreadsheets update themselves. Your reports generate automatically.",
    link: "/services/workflows",
    features: ["Zero-Error Data Entry", "Smart Triggers", "100+ Integrations"],
    color: "#6366f1",
    metrics: [
      { value: "25+", label: "Hrs Saved/Week" },
      { value: "99.9%", label: "Accuracy" },
    ]
  },
  {
    icon: Users,
    title: "Qualify Leads While You Sleep",
    description: "Every inquiry gets an instant, helpful response. Hot leads get flagged and routed to your sales team. Cold ones get nurtured automatically.",
    link: "/services/ai-agents",
    features: ["Instant Qualification", "Auto-Follow Up", "CRM Integration"],
    color: "#f59e0b",
    metrics: [
      { value: "4x", label: "Conversion" },
      { value: "$5K+", label: "Revenue/mo" },
    ]
  },
  {
    icon: Code2,
    title: "Web Development That Works",
    description: "Fast, scalable, and beautiful web applications built with modern frameworks. From marketing sites to complex business platforms.",
    link: "/services/web-development",
    features: ["Next.js", "React", "TypeScript", "Tailwind"],
    color: "#ec4899",
    metrics: [
      { value: "100+", label: "Delivered" },
      { value: "<3s", label: "Load Time" },
    ]
  },
  {
    icon: Lightbulb,
    title: "Strategic IT Consulting",
    description: "We help you figure out where AI and automation can actually help. No buzzwords, just honest advice about what will work for your business.",
    link: "/services/it-consulting",
    features: ["Tech Audits", "Architecture", "Strategy"],
    color: "#8b5cf6",
    metrics: [
      { value: "50+", label: "Clients" },
      { value: "340%", label: "Avg ROI" },
    ]
  },
  {
    icon: Smartphone,
    title: "Custom Apps & Solutions",
    description: "Something weird and specific? We've probably seen it. Tell us the pain, we'll build the fix.",
    link: "/services/app-creation",
    features: ["Custom Logic", "Weird Integrations", "Bespoke Builds"],
    color: "#14b8a6",
    metrics: [
      { value: "∞", label: "Possibilities" },
      { value: "100%", label: "Custom" },
    ]
  },
];

const additionalServices = [
  { name: "Custom Web Dev", icon: Globe },
  { name: "UI/UX Design", icon: Palette },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "API Integration", icon: Plug },
  { name: "Database Design", icon: Database },
  { name: "SEO", icon: Search },
  { name: "Performance", icon: Gauge },
  { name: "Cloud Hosting", icon: Server },
  { name: "DevOps", icon: GitBranch },
  { name: "Maintenance", icon: Wrench }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={service.link} className="group block h-full">
        <div className="relative h-full p-6 md:p-8 rounded-3xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
          {/* Subtle glow on hover - 10% opacity */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
            style={{ backgroundColor: `${service.color}10` }}
          />
          
          <div className="relative">
            {/* Header with icon and metrics */}
            <div className="flex items-start justify-between mb-6">
              <motion.div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${service.color}15` }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Icon className="w-7 h-7" style={{ color: service.color }} />
              </motion.div>
              
              <div className="flex gap-2">
                {service.metrics.map((metric, i) => (
                  <div key={i} className="text-right">
                    <div className="font-serif text-xl" style={{ color: service.color }}>
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-full bg-secondary/50 text-xs text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ConstellationNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-[100px]"
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="px-6 py-2 text-sm border-primary/30 text-primary bg-primary/5">
                <Sparkles className="w-4 h-4 mr-2" />
                What We Do
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
              We Build Systems That
              <br />
              <span className="italic text-primary">Save Time</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every business has repetitive work that drains energy. We find it and make it disappear.
            </p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">No Sales Pitch</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">30-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">Talk to Engineers</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Core Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif">
              How We Can <span className="italic text-primary">Help</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Also Available
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Other Things We <span className="italic text-primary">Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all text-center"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium text-foreground">
                    {service.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              From Chat to <span className="italic text-primary">Live</span> in 30 Days
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "We Talk", desc: "You tell us what's driving you crazy", icon: MessageCircle },
              { step: "02", title: "We Design", desc: "We map out exactly what we'll build", icon: Lightbulb },
              { step: "03", title: "We Build", desc: "Engineers build while you chill", icon: Code2 },
              { step: "04", title: "It Works", desc: "Deployed with 90 days of support", icon: CheckCircle2 },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative text-center"
                >
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
                  )}
                  
                  <motion.div 
                    className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <div className="text-5xl font-serif text-primary/10 absolute top-0 left-1/2 -translate-x-1/2">
                    {item.step}
                  </div>
                  
                  <h3 className="text-lg font-serif mt-8 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Ready to Save Some Time?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Grab a virtual coffee with us. No sales pitch, just a conversation about your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="rounded-full px-10 text-primary"
                  asChild
                >
                  <Link href="/about#connect">
                    Book Free Chat <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-10 border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/case-studies">See Our Work</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CosmicFooter />
    </main>
  );
}
