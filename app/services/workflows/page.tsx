"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Workflow, Zap, Clock, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Custom Automation",
    description: "Build tailored workflows that connect your apps, automate repetitive tasks, and streamline operations."
  },
  {
    icon: Zap,
    title: "Real-Time Integration",
    description: "Connect your entire tech stack—CRM, marketing tools, databases, APIs—in real-time synchronization."
  },
  {
    icon: Clock,
    title: "Time-Saving Solutions",
    description: "Reduce manual work by up to 80%. Focus on strategy while automation handles the repetitive tasks."
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Workflows that grow with your business. Handle increased volume without adding headcount."
  }
];

const automations = [
  "Lead capture & nurturing automation",
  "Data synchronization across platforms",
  "Automated reporting & analytics",
  "Email & notification workflows",
  "Document generation & processing",
  "Social media scheduling & publishing"
];

const platforms = [
  "Zapier", "Make (Integromat)", "n8n", "Custom APIs",
  "Webhooks", "Database Triggers", "Slack", "Google Workspace",
  "Microsoft 365", "Airtable", "Notion", "HubSpot"
];

export default function WorkflowServicePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ConstellationNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
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
              Business Process Automation
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance">
              Workflow Automation
              <br />
              <span className="italic text-muted-foreground">That Scales</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Eliminate manual tasks, connect your systems, and unlock exponential productivity with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Automate Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                See Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Capabilities
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Automation Superpowers
            </h2>
          </div>

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

      {/* Automation Types Section */}
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
                What We Automate
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif text-balance">
                End-to-End Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From simple task automation to complex multi-system integrations, we build workflows that transform how you work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {automations.map((automation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm border border-border/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{automation}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Integrations
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Connect Everything
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with all major automation platforms and can integrate with any API
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-card/30 backdrop-blur-sm border border-border/30 text-center hover:border-primary/30 transition-all"
              >
                <span className="text-sm font-mono text-muted-foreground">
                  {platform}
                </span>
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
              Our Approach
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              How We Automate
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Audit",
                description: "Map your current processes and identify automation opportunities"
              },
              {
                step: "02",
                title: "Design",
                description: "Create workflow blueprints optimized for efficiency and reliability"
              },
              {
                step: "03",
                title: "Build",
                description: "Develop and test automated workflows with error handling"
              },
              {
                step: "04",
                title: "Monitor",
                description: "Ongoing optimization and performance tracking"
              }
            ].map((item, index) => (
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Let's build workflows that save time, reduce errors, and scale your operations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Start Automating <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CosmicFooter />
    </main>
  );
}
