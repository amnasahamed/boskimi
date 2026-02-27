"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web applications built with modern frameworks like Next.js, React, and Node.js for optimal performance."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that prioritize user experience and drive engagement with your brand."
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Lightning-fast load times, optimized code, and best practices for exceptional user experiences."
  },
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Pixel-perfect designs that work flawlessly across all devices, from mobile to desktop."
  }
];

const benefits = [
  "Custom web applications",
  "Progressive Web Apps (PWA)",
  "Single Page Applications (SPA)",
  "API development & integration",
  "Database design & optimization",
  "SEO & accessibility standards"
];

const technologies = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "AWS"] },
  { category: "CMS", items: ["Headless CMS", "Sanity", "Contentful", "Strapi"] }
];

const process = [
  {
    step: "01",
    title: "Planning",
    description: "Define scope, architecture, and technical requirements for your project"
  },
  {
    step: "02",
    title: "Design",
    description: "Create wireframes, prototypes, and visual designs that bring your vision to life"
  },
  {
    step: "03",
    title: "Development",
    description: "Build with clean, maintainable code following industry best practices"
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy, test, and optimize for peak performance and user experience"
  }
];

export default function WebDevelopmentPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ConstellationNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <Badge variant="outline" className="border-primary/50 text-primary">
              Digital Craftsmanship
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance">
              Web Development
              <br />
              <span className="italic text-muted-foreground">Done Right</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              We build fast, scalable, and beautiful web applications using cutting-edge technologies and industry best practices.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge variant="outline" className="border-primary/50 text-primary">
                Our Expertise
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif text-balance">
                Modern Web Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From simple landing pages to complex web applications, we deliver solutions that are scalable, secure, and built to last.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm border border-border/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Tech Stack
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Modern Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use the latest and most reliable tools to build your web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card/30 backdrop-blur-sm border border-border/30 space-y-4"
              >
                <h3 className="text-xl font-serif text-primary">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground font-mono">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              How We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures quality, efficiency, and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-card/30 backdrop-blur-sm border border-border/30 space-y-4"
              >
                <div className="text-6xl font-serif text-primary/20">{item.step}</div>
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Let's create a web application that exceeds your expectations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Discuss Your Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CosmicFooter />
    </main>
  );
}
