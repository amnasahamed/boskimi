"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Zap, 
  Globe2, 
  Heart, 
  Coffee, 
  Laptop, 
  Users,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
  Rocket,
  Brain,
  MessageSquare,
  Code2,
  Cpu,
  Rocket as RocketIcon,
  Star
} from "lucide-react";

const openPositions = [
  {
    id: 1,
    title: "AI Solutions Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and deploy AI agents that solve real business problems. Work with cutting-edge LLMs and automation tools.",
    requirements: ["3+ years Python/Node.js", "Experience with OpenAI/Claude APIs", "Passion for AI automation"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, high-performance web applications using Next.js, React, and modern tooling.",
    requirements: ["2+ years React/Next.js", "TypeScript proficiency", "Eye for design"],
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Help clients maximize value from our AI solutions. Be the bridge between technology and business outcomes.",
    requirements: ["3+ years in customer success", "Technical aptitude", "Excellent communication"],
  },
  {
    id: 4,
    title: "AI Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design intuitive interfaces for AI-powered products. Make complex technology feel simple and human.",
    requirements: ["Portfolio of product design", "Experience with AI tools", "User research skills"],
  },
];

const benefits = [
  {
    icon: Globe2,
    title: "Remote First",
    description: "Work from anywhere in the world. We believe great talent isn't limited by geography.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description: "Work with the latest AI models, frameworks, and tools. Always be learning.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health coverage, mental health support, and wellness stipends.",
  },
  {
    icon: Coffee,
    title: "Flexible Hours",
    description: "Work when you're most productive. Results matter more than clock-watching.",
  },
  {
    icon: Laptop,
    title: "Home Office Setup",
    description: "Get the equipment you need. $2,000 stipend for your perfect workspace.",
  },
  {
    icon: Users,
    title: "Growth & Learning",
    description: "Annual learning budget, conference tickets, and mentorship programs.",
  },
];

const values = [
  {
    icon: Brain,
    title: "Innovation Obsessed",
    description: "We push boundaries. If it hasn't been done before, that's exactly why we do it.",
  },
  {
    icon: MessageSquare,
    title: "Radical Transparency",
    description: "Open communication, honest feedback, and shared decision-making.",
  },
  {
    icon: Rocket,
    title: "Impact Driven",
    description: "We measure success by the problems we solve for real people.",
  },
  {
    icon: Code2,
    title: "Craft Matters",
    description: "Quality over quantity. We take pride in every line of code and every interaction.",
  },
];

const teamQuotes = [
  {
    quote: "I've never worked somewhere that moves this fast while keeping quality high. Every day is a new challenge.",
    author: "Sarah Chen",
    role: "AI Engineer",
    Icon: Cpu,
    color: "text-emerald-500",
  },
  {
    quote: "The freedom to experiment with new AI tech and actually ship it to customers is incredible.",
    author: "Marcus Johnson",
    role: "Full Stack Developer",
    Icon: RocketIcon,
    color: "text-violet-500",
  },
  {
    quote: "Remote work done right. The team culture is stronger than any office I've been in.",
    author: "Priya Sharma",
    role: "Product Designer",
    Icon: Star,
    color: "text-amber-500",
  },
];

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ConstellationNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-1/4 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              filter: "blur(80px)",
              opacity: 0.15,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
              filter: "blur(100px)",
              opacity: 0.1,
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              We're Hiring
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-8">
              Build the Future
              <br />
              <span className="italic text-muted-foreground">of AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Join a team that's solving real problems with artificial intelligence. 
              Remote-first. Fast-moving. Human-centered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90" asChild>
                <a href="#positions">
                  View Open Roles <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#culture">Our Culture</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-border/30 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Team Members" },
              { value: "6", label: "Countries" },
              { value: "100%", label: "Remote" },
              { value: "$2K", label: "Setup Stipend" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl md:text-4xl text-foreground italic">{stat.value}</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section ref={containerRef} id="culture" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-4">
              Why Join Us
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif">
              Work That <span className="italic text-accent">Matters</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{benefit.title}</h3>
                  <p className="font-serif text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary/50 text-primary mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif">
              How We <span className="italic text-accent">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{value.title}</h3>
                    <p className="font-serif text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Quotes */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary/50 text-primary mb-4">
              Team Voices
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif">
              Life at <span className="italic text-accent">Base of Stars</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamQuotes.map((quote, index) => (
              <motion.div
                key={quote.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl"
              >
                <div className="mb-4">
                  <quote.Icon className={`w-10 h-10 ${quote.color}`} />
                </div>
                <p className="font-serif text-lg text-foreground italic leading-relaxed mb-6">
                  "{quote.quote}"
                </p>
                <div>
                  <div className="font-serif text-foreground">{quote.author}</div>
                  <div className="font-mono text-xs text-muted-foreground">{quote.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 md:py-32 px-6 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-primary/50 text-primary mb-4">
              Open Positions
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif">
              Join Our <span className="italic text-accent">Team</span>
            </h2>
            <p className="font-serif text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
              All positions are remote. We hire based on talent, not location.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedRole === position.id ? "border-primary/50" : "hover:border-primary/30"
                  }`}
                  onClick={() => setSelectedRole(selectedRole === position.id ? null : position.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif text-xl text-foreground">{position.title}</h3>
                        <Badge variant="secondary" className="font-mono text-[10px]">
                          {position.department}
                        </Badge>
                      </div>
                      <p className="font-serif text-sm text-muted-foreground mb-3">
                        {position.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" className="group/btn">
                        View Details
                        <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${
                          selectedRole === position.id ? "rotate-90" : "group-hover/btn:translate-x-1"
                        }`} />
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedRole === position.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-border/50"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-3 pt-4">
                          <Button className="bg-primary hover:bg-primary/90">
                            Apply Now
                          </Button>
                          <Button variant="outline">
                            Share with a Friend
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No perfect fit? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl text-center"
          >
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Don't see a perfect fit?
            </h3>
            <p className="font-serif text-muted-foreground mb-6 max-w-md mx-auto">
              We're always looking for exceptional talent. Send us your resume and tell us what you'd build.
            </p>
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              Send Open Application
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Ready to Build the Future?
            </h2>
            <p className="font-serif text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join a team where your ideas matter, your growth is prioritized, and your work impacts thousands of businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90" asChild>
                <a href="#positions">
                  View All Roles <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:careers@baseofstars.com">Contact Recruiting</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CosmicFooter />
    </main>
  );
}
