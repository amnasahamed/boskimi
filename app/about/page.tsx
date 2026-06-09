"use client";

import Link from "next/link";
import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { ConnectionPortal } from "@/components/landing/connection-portal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Rocket, Users, Globe, Award, Linkedin, Code2, Database, Cloud, Sparkles, 
  MessageSquare, Workflow, Smartphone, Palette, GitBranch, ArrowRight, Quote,
  MapPin, Coffee, Heart, Lightbulb, HandHeart, ShieldCheck
} from "lucide-react";
import { useRef } from "react";

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

const stats = [
  { value: "147+", label: "Projects Delivered", suffix: "" },
  { value: "50", label: "Happy Clients", suffix: "+" },
  { value: "4", label: "Core Team", suffix: "" },
  { value: "30", label: "Day Avg Delivery", suffix: "" }
];

const founders = [
  {
    name: "Amnas Ahamed",
    role: "Founder",
    bio: "EdTech, Consulting & Creative Ops | Building Smooth Systems & Scalable Workflows",
    linkedin: "https://www.linkedin.com/in/amnasahamed/",
    expertise: ["EdTech", "System Design", "Workflow Automation"],
    emoji: "👨‍💻"
  },
  {
    name: "Rashid Abdulla",
    role: "Co-Founder",
    bio: "Building AI Salesperson for eCommerce stores. Better conversion rates, better customer experience.",
    linkedin: "https://www.linkedin.com/in/rashid-abdulla-121367a9/",
    expertise: ["Generative AI", "AI Sales Agents", "eCommerce"],
    emoji: "🧑‍💻"
  }
];

const technologies = [
  { category: "AI & Machine Learning", icon: Sparkles, tools: ["OpenAI GPT-4", "Claude", "Vercel AI SDK", "LangChain"] },
  { category: "Frontend & Frameworks", icon: Code2, tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend & Database", icon: Database, tools: ["Node.js", "Supabase", "PostgreSQL", "Prisma"] },
  { category: "Cloud & Infrastructure", icon: Cloud, tools: ["Vercel", "AWS", "Docker"] },
  { category: "Communication & APIs", icon: MessageSquare, tools: ["WhatsApp API", "Twilio", "REST APIs", "GraphQL"] },
  { category: "Automation & Workflow", icon: Workflow, tools: ["Zapier", "Make.com", "n8n"] }
];

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <span className="font-serif text-5xl md:text-7xl italic">
      {value}{suffix}
    </span>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ConstellationNav />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] pt-32 pb-24 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ y, opacity }}
        >
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-accent/10 to-primary/5 blur-[100px]" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="px-6 py-2 text-sm border-primary/30 text-primary bg-primary/5 backdrop-blur-sm">
                About Us
              </Badge>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
              Engineers Who Got
              <br />
              <span className="italic text-primary">Tired of Waste</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              We&apos;ve worked at big tech companies, startups, and everything in between. 
              And everywhere we went, we saw the same thing: smart people wasting hours on 
              work that software could handle.
            </p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90" asChild>
                <Link href="#founders">Meet the Team</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link href="#connect">Work With Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 border-y border-border/30 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="text-5xl md:text-7xl font-serif text-primary italic">
                    {stat.value}{stat.suffix}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Rocket className="w-16 h-16 text-primary" />
                    </div>
                  </motion.div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-card border border-border/50 rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Based in India</div>
                    <div className="text-xs text-muted-foreground">Working worldwide</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge variant="outline" className="border-primary/30 text-primary">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Fixing What Frustrated Us
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  So we started Base of Stars to fix that. Not by selling you some platform 
                  you have to learn, but by building exactly what you need and making sure 
                  it actually works.
                </p>
                <p className="text-foreground font-medium">
                  We&apos;re a small team. We take on limited projects. And we care deeply 
                  about every one of them.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Coffee className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Fueled by coffee and curiosity</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="relative py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary">
              The Team
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif">
              Who We <span className="italic text-primary">Are</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {founder.emoji}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-serif">{founder.name}</h3>
                          <p className="text-primary font-medium">{founder.role}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-full" asChild>
                          <Link href={founder.linkedin} target="_blank">
                            <Linkedin className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                        {founder.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {founder.expertise.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              How We Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif">
              Our Non-Negotiables
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${value.color}10` }}
                />
                <div className="relative p-6 md:p-8 bg-card/50 border border-border/50 rounded-2xl backdrop-blur-sm h-full">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <value.icon className="w-6 h-6" style={{ color: value.color }} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Tools We Use
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif">
              Technology <span className="italic text-primary">Stack</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full bg-secondary/50 text-xs text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
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
                Ready to Automate the Boring Stuff?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Let&apos;s talk about what&apos;s driving you crazy. We&apos;ll tell you if we can fix it.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-full px-10 text-primary"
                asChild
              >
                <Link href="#connect">
                  Start the Conversation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ConnectionPortal />
      <CosmicFooter />
    </main>
  );
}
