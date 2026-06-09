"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Bot, Sparkles, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Business API",
    description: "Full integration with WhatsApp Business Platform for seamless customer communications at scale."
  },
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description: "Intelligent automation that handles inquiries, bookings, support tickets, and more—24/7."
  },
  {
    icon: Sparkles,
    title: "Custom Workflows",
    description: "Automated messaging flows tailored to your business needs, from lead nurturing to order updates."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track message delivery, engagement rates, and customer interactions with detailed reporting."
  }
];

const useCases = [
  "Customer support automation",
  "Order notifications & tracking",
  "Appointment scheduling",
  "Lead generation & qualification",
  "Product catalog integration",
  "Payment collection via WhatsApp"
];

const stats = [
  { value: "2B+", label: "Active Users Worldwide" },
  { value: "98%", label: "Message Open Rate" },
  { value: "60%", label: "Higher Engagement vs Email" },
  { value: "24/7", label: "Automated Support" }
];

export default function WhatsAppServicePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ConstellationNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <Badge variant="outline" className="border-accent/50 text-accent">
              WhatsApp Business Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance">
              WhatsApp Integration
              <br />
              <span className="italic text-muted-foreground">That Engages</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Connect with your customers where they are. Automate conversations, boost engagement, and drive sales through WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                Start Integration <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                See Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl md:text-6xl font-serif text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-accent/50 text-accent">
              Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Everything You Need
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
                className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-500" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
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

      {/* Use Cases Section */}
      <section className="relative py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge variant="outline" className="border-accent/50 text-accent">
                Use Cases
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif text-balance">
                Endless Possibilities
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From customer support to sales automation, WhatsApp integration transforms how you communicate with your audience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm border border-border/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{useCase}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-accent/50 text-accent">
              Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Setup & Integration",
                description: "We configure your WhatsApp Business account and integrate it with your existing systems"
              },
              {
                step: "02",
                title: "Customize Workflows",
                description: "Build automated conversation flows tailored to your business needs and customer journey"
              },
              {
                step: "03",
                title: "Launch & Optimize",
                description: "Go live with monitoring and continuous optimization based on performance data"
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
                <div className="text-6xl font-serif text-accent/20">{item.step}</div>
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
              Ready to Transform Customer Communication?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Let's integrate WhatsApp into your business and unlock new levels of engagement
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CosmicFooter />
    </main>
  );
}
