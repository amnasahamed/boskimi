"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Brain, MessageSquare, Workflow, LineChart, ArrowRight, CheckCircle2, 
  Clock, Users, Zap, Sparkles, TrendingUp, Shield, Play
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent AI Agents",
    description: "AI agents that handle customer support, sales inquiries, and internal operations. They learn from every interaction and get smarter over time.",
    stat: "80%",
    statLabel: "Queries Automated",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Eliminate repetitive tasks. We automate data entry, document processing, approvals, and complex multi-step workflows.",
    stat: "300%",
    statLabel: "Efficiency Gain",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: MessageSquare,
    title: "Smart Communication",
    description: "AI-powered WhatsApp, email, and chat solutions that provide instant, personalized responses to your customers 24/7.",
    stat: "2s",
    statLabel: "Response Time",
    color: "from-violet-500 to-purple-400"
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description: "Turn your data into actionable insights. Predictive analytics, automated reporting, and dashboards that drive decisions.",
    stat: "70%",
    statLabel: "Cost Reduction",
    color: "from-amber-500 to-orange-400"
  }
];

const benefits = [
  "Reduce operational costs by up to 70%",
  "24/7 availability without hiring more staff",
  "Instant response to customer inquiries",
  "Eliminate human error in data processing",
  "Scale without proportional headcount increase",
  "Free your team to focus on high-value work"
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your business processes to identify where AI can deliver the biggest impact and ROI."
  },
  {
    step: "02",
    title: "Strategy",
    description: "We design a tailored AI solution that fits your workflow and integrates with your existing tools."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We build and deploy your AI solution, training it on your data and ensuring seamless integration."
  },
  {
    step: "04",
    title: "Optimize",
    description: "We monitor performance, gather feedback, and continuously improve the system for better results."
  }
];

const useCases = [
  {
    icon: Users,
    title: "Customer Support",
    description: "AI agents that handle FAQs, troubleshoot issues, and escalate complex cases to your team.",
    metric: "80%"
  },
  {
    icon: Clock,
    title: "Lead Qualification",
    description: "Automatically engage, qualify, and nurture leads through intelligent conversations.",
    metric: "3x"
  },
  {
    icon: Zap,
    title: "Data Processing",
    description: "Extract, categorize, and process information from documents, emails, and forms automatically.",
    metric: "10x"
  }
];

const testimonials = [
  {
    quote: "The AI agent handles 80% of our customer inquiries. Our team finally focuses on strategic work.",
    author: "Marcus Thompson",
    role: "Operations Director",
    company: "TechWear"
  },
  {
    quote: "They reimagined our processes entirely. Our efficiency increased by 300% in just 3 months.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Artisan Goods Co."
  }
];

export default function AISolutionsPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ConstellationNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-accent/20 to-primary/10 blur-[100px]"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
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
                AI Solutions
              </Badge>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight">
              We Use AI to
              <br />
              <span className="italic bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Solve Problems
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From intelligent automation to AI agents that handle your operations—
              we build systems that work smarter, so you can focus on growth.
            </p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <Play className="mr-2 w-4 h-4" /> See How It Works
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Use Cases
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif">
              What Can AI Do for <span className="italic text-primary">You</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 text-center hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  <div className="relative">
                    <div className="text-5xl font-serif text-primary italic mb-4">{useCase.metric}</div>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Our Solutions
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif">
              How We <span className="italic text-primary">Help</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative flex gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-3xl font-serif text-primary italic">{feature.stat}</div>
                          <div className="text-[10px] font-mono uppercase text-muted-foreground">{feature.statLabel}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Badge variant="outline" className="border-primary/30 text-primary">
                The Results
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Real Impact for Your <span className="italic text-primary">Business</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI solutions don&apos;t just automate—they transform. We measure success 
                by the hours saved, the costs reduced, and the growth enabled.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-serif text-primary italic">70%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-primary italic">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-primary italic">&lt;2s</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">
              How We <span className="italic text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven approach that delivers AI solutions tailored to your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-7xl font-serif text-primary/10 absolute top-4 right-4">{item.step}</div>
                  <div className="relative">
                    <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Client Success
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif">
              Trusted by <span className="italic text-primary">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/50"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl font-serif italic leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-serif">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                Ready to Put AI to Work?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Let&apos;s discuss how AI can solve your specific business challenges and drive real results
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-10 text-primary">
                  Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 border-white/30 text-white hover:bg-white/10">
                  View Case Studies
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
