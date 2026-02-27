"use client";

import Link from "next/link";
import Image from "next/image";
import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Smartphone, Zap, Layout, Cloud, ArrowRight, CheckCircle2, ExternalLink, Apple, Play } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Native & Cross-Platform",
    description: "Build apps for iOS, Android, or both with a single codebase using React Native, Flutter, or native development."
  },
  {
    icon: Layout,
    title: "Intuitive UI/UX",
    description: "User-centered design that prioritizes engagement, accessibility, and seamless user experiences."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized code, efficient data handling, and smooth animations for lightning-fast app experiences."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless backend integration with real-time sync, push notifications, and cloud storage solutions."
  }
];

const benefits = [
  "iOS & Android development",
  "Cross-platform solutions",
  "API & backend integration",
  "Real-time data synchronization",
  "Push notifications",
  "App Store deployment"
];

const appTypes = [
  {
    title: "Business Apps",
    description: "Internal tools, CRM systems, and productivity apps that streamline operations and boost efficiency."
  },
  {
    title: "E-commerce Apps",
    description: "Mobile shopping experiences with secure payments, inventory management, and order tracking."
  },
  {
    title: "Social & Community",
    description: "Engaging platforms for user interaction, content sharing, and community building."
  },
  {
    title: "On-Demand Services",
    description: "Booking platforms, delivery apps, and service marketplaces with real-time tracking."
  }
];

const technologies = [
  { name: "React Native", desc: "Cross-platform" },
  { name: "Flutter", desc: "Cross-platform" },
  { name: "Swift", desc: "iOS Native" },
  { name: "Kotlin", desc: "Android Native" },
  { name: "Firebase", desc: "Backend" },
  { name: "AWS", desc: "Cloud Services" },
  { name: "GraphQL", desc: "API Layer" },
  { name: "Redux", desc: "State Management" }
];

const process = [
  {
    step: "01",
    title: "Ideation",
    description: "Define features, user flows, and technical requirements for your mobile app"
  },
  {
    step: "02",
    title: "Design",
    description: "Create wireframes, prototypes, and pixel-perfect designs optimized for mobile"
  },
  {
    step: "03",
    title: "Development",
    description: "Build with clean code, robust architecture, and thorough testing"
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy to app stores and provide ongoing updates and support"
  }
];

export default function AppCreationPage() {
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
              Mobile Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance">
              App Creation
              <br />
              <span className="italic text-muted-foreground">That Delights</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Transform your ideas into powerful mobile applications that users love. Beautiful design, seamless performance, cross-platform capability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Start Your App <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                See Our Apps
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured App - ClapsBoard */}
      <section className="relative py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge variant="outline" className="border-primary/50 text-primary">
                Featured App
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif text-balance">
                ClapsBoard
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The all-in-one digital whiteboard transforming education. Features infinite canvas, natural drawing, camera mode, document import, and class scheduling.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Key Features:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Professional Whiteboard",
                    "Picture-in-Picture Camera",
                    "PDF & Document Import",
                    "Class Planner & Schedule",
                    "Easy Sharing & Export",
                    "Native iOS/Android Design"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="gap-2 bg-foreground hover:bg-foreground/90 text-background">
                  <Link href="https://apps.apple.com/us/app/clapsboard/id6757760416?platform=ipad" target="_blank" rel="noopener noreferrer">
                    <Apple className="w-4 h-4" />
                    App Store
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="https://play.google.com/store/apps/details?id=com.clapsboard.app" target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4" />
                    Google Play
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground italic">
                Perfect for teachers, tutors, students, and creative professionals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-12 flex items-center justify-center">
                  <Image
                    src="/clapsboard-icon.png"
                    alt="ClapsBoard App Icon"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="mt-8 space-y-4 text-center">
                <div className="flex items-center justify-center gap-6">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-foreground">4.8</div>
                    <div className="text-xs text-muted-foreground">App Store Rating</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-foreground">10K+</div>
                    <div className="text-xs text-muted-foreground">Downloads</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-foreground">SwiftUI</div>
                    <div className="text-xs text-muted-foreground">Built With</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
                What We Deliver
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif text-balance">
                Apps That Stand Out
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From concept to app store, we handle every aspect of mobile app development with precision and creativity.
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

      {/* App Types Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              App Types
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom mobile applications tailored to your industry and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all space-y-4"
              >
                <h3 className="text-2xl font-serif">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Tech Stack
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Modern Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use industry-leading frameworks and tools for mobile app development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm border border-border/30 text-center space-y-2"
              >
                <div className="font-mono text-foreground">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              From Idea to App Store
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven development process that delivers quality apps on time
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
              Ready to Build Your App?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Let's turn your mobile app vision into reality
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Discuss Your Idea
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CosmicFooter />
    </main>
  );
}
