"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles, Bot, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Automation",
    description: "Deploy AI agents that understand context, learn from interactions, and automate complex decision-making processes."
  },
  {
    icon: Bot,
    title: "Custom AI Solutions",
    description: "Tailored AI agents built for your specific use case, from customer service to data analysis and beyond."
  },
  {
    icon: Cpu,
    title: "Multi-Model Integration",
    description: "Leverage the latest AI models from OpenAI, Anthropic, Google, and more for optimal performance."
  },
  {
    icon: Sparkles,
    title: "Real-Time Learning",
    description: "AI agents that continuously improve through interaction, adapting to your business needs dynamically."
  }
];

const benefits = [
  "24/7 automated customer support",
  "Intelligent data processing & analysis",
  "Natural language understanding",
  "Multi-channel deployment",
  "Custom training on your data",
  "Seamless system integration"
];

const useCases = [
  {
    title: "Customer Support",
    description: "AI agents that handle inquiries, resolve issues, and escalate complex cases intelligently."
  },
  {
    title: "Sales Assistance",
    description: "Qualify leads, answer product questions, and guide customers through purchasing decisions."
  },
  {
    title: "Data Analysis",
    description: "Process large datasets, extract insights, and generate reports automatically."
  },
  {
    title: "Content Generation",
    description: "Create marketing copy, product descriptions, and personalized communications at scale."
  }
];

export default function AIAgentsPage() {
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
              Next-Gen Intelligence
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance">
              AI Agents
              <br />
              <span className="italic text-muted-foreground">That Work for You</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Harness the power of artificial intelligence with custom AI agents that automate tasks, enhance decision-making, and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Build Your AI Agent <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                See Examples
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
                Capabilities
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif text-balance">
                Intelligent Solutions for Modern Business
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI agents combine cutting-edge language models with custom logic to deliver intelligent automation that truly understands your business context.
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

      {/* Use Cases Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Use Cases
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Where AI Agents Excel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From customer engagement to data processing, AI agents transform how businesses operate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all space-y-4"
              >
                <h3 className="text-2xl font-serif">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Powered By
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Leading AI Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Custom Models", "LangChain", "Vector Databases", "RAG Systems", "Fine-tuning"].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm border border-border/30 text-center"
              >
                <span className="text-sm font-mono text-foreground">{tech}</span>
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
              Ready to Deploy AI Agents?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Let's build intelligent automation that transforms your business operations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Start Your AI Project <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CosmicFooter />
    </main>
  );
}
