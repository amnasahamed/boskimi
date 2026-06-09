"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Lightbulb, Shield, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Strategic Planning",
    description: "Technology roadmaps and digital transformation strategies aligned with your business goals."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Comprehensive security audits, risk assessments, and compliance guidance for your infrastructure."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "System analysis and recommendations to improve efficiency, reduce costs, and boost performance."
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Expert consultants who integrate seamlessly with your team to drive projects forward."
  }
];

const benefits = [
  "Technology assessment & audits",
  "Cloud migration strategy",
  "DevOps & infrastructure setup",
  "Self-hosting solutions & deployment",
  "Open-source application setup",
  "Scalability planning",
  "Cost optimization",
  "Best practices implementation"
];

const services = [
  {
    title: "Digital Transformation",
    description: "Guide your organization through modernization with strategic technology adoption and process optimization."
  },
  {
    title: "Self-Hosting & Open Source Solutions",
    description: "Professional deployment and management of free and open-source applications, giving you full control of your infrastructure at competitive rates."
  },
  {
    title: "Architecture Review",
    description: "Expert analysis of your systems, identifying bottlenecks, security issues, and areas for improvement."
  },
  {
    title: "Technology Selection",
    description: "Data-driven recommendations on platforms, tools, and frameworks that best fit your needs."
  },
  {
    title: "Process Optimization",
    description: "Streamline workflows, implement automation, and establish best practices for development and operations."
  }
];

const industries = [
  "E-commerce & Retail",
  "Healthcare",
  "Finance & Banking",
  "Education",
  "Manufacturing",
  "Hospitality",
  "Real Estate",
  "Startups & Scale-ups"
];

export default function ITConsultingPage() {
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
              Expert Guidance
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance">
              IT Consulting
              <br />
              <span className="italic text-muted-foreground">For Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Strategic technology consulting that aligns IT infrastructure with business objectives, driving efficiency and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
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
                Our Approach
              </Badge>
              <h2 className="text-4xl md:text-6xl font-serif text-balance">
                Technology That Empowers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide actionable insights and hands-on expertise to help your organization leverage technology as a competitive advantage.
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

      {/* Services Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Consulting Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              How We Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all space-y-4"
              >
                <h3 className="text-2xl font-serif">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Industries Served
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Cross-Industry Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've helped businesses across multiple sectors achieve their technology goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-card/30 backdrop-blur-sm border border-border/30 text-center"
              >
                <span className="text-sm font-mono text-foreground">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Why Us
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-balance">
              Proven Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "125+", label: "Projects Delivered", desc: "Across multiple industries" },
              { stat: "15+", label: "Years Experience", desc: "In technology consulting" },
              { stat: "100%", label: "Client Satisfaction", desc: "Committed to excellence" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-card/30 backdrop-blur-sm border border-border/30 space-y-4"
              >
                <div className="text-5xl font-serif text-primary">{item.stat}</div>
                <h3 className="text-xl font-serif">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Let's discuss how strategic technology consulting can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CosmicFooter />
    </main>
  );
}
