"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, MessageCircle, BarChart3, Database, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function BadriaSweetsCaseStudy() {
    return (
        <main className="relative min-h-screen bg-background overflow-hidden selection:bg-pink-500/30">
            <ConstellationNav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-700" />
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center p-4 shadow-xl shadow-pink-500/20">
                                <Image
                                    src="/images/case-studies/badria-sweets/logo.png"
                                    alt="Badria Sweets Logo"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>

                        <Badge variant="outline" className="border-pink-500/50 text-pink-400">
                            Case Study: Food & Retail Automation
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-balance">
                            AI-Powered WhatsApp Automation
                            <br />
                            <span className="italic text-muted-foreground text-3xl md:text-5xl block mt-2">
                                for Badria Sweets
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                            Scaling customer support with WATI, n8n, and AI to deliver instant, brand-safe Arabic responses.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="gap-2 bg-pink-600 hover:bg-pink-700" asChild>
                                <a href="https://badriasweets.com/" target="_blank" rel="noopener noreferrer">
                                    Visit Website <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview & Challenge */}
            <section className="relative py-16 px-6 bg-secondary/30">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Badria Sweets, a Saudi brand specializing in pastry products, faces high volumes of WhatsApp inquiries, particularly during seasons.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "High volume of repetitive questions (prices, shipping, offers)",
                                "Risk of agents sharing incorrect prices",
                                "Need for strict Arabic-only, brand-safe communication",
                                "Requirement to keep operations team in the loop"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                                    <span className="text-pink-500 mt-1">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implemented a hybrid AI-assisted workflow using WATI for WhatsApp connectivity, n8n for orchestration, and an AI agent for intelligent response generation.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "WATI", desc: "WhatsApp API" },
                                { label: "n8n", desc: "Automation" },
                                { label: "AI Agent", desc: "Smart Replies" },
                                { label: "Team Inbox", desc: "Human Oversight" }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-card/50 border border-border/50 rounded-lg">
                                    <div className="font-semibold text-foreground">{item.label}</div>
                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </section>

            {/* User Experience */}
            <section className="relative py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 order-2 md:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif">Seamless User Experience</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Customers get instant gratification. Whether they ask for a price or a menu, the AI agent understands the intent and replies immediately with the correct information and visual assets.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Natural language understanding (Arabic)",
                                "Instant image delivery for menus",
                                "Direct links to ordering portal",
                                "24/7 availability"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="w-5 h-5 text-pink-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2 flex justify-center"
                    >
                        <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 overflow-hidden shadow-2xl shadow-pink-500/20">
                            <Image
                                src="/images/case-studies/badria-sweets/badria-whatsapp-user-view.png"
                                alt="User Chat Experience"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Architecture & Workflow */}
            <section className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="border-pink-500/50 text-pink-400">
                            Architecture
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-serif">How It Works</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-card/50 border border-border/50 rounded-xl overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 via-transparent to-orange-500/5" />
                        <div className="p-4 md:p-8">
                            <Image
                                src="/images/case-studies/badria-sweets/workflow.png"
                                alt="n8n Workflow Diagram"
                                width={1920}
                                height={1080}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Workflow Steps */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MessageCircle,
                                title: "1. Message Handling",
                                desc: "Detects message type (text vs audio). Gracefully rejects unsupported formats while maintaining a polite tone."
                            },
                            {
                                icon: Bot,
                                title: "2. AI Processing",
                                desc: "AI responds based on strict business rules in simplified Arabic. Never invents prices—redirects to website for orders."
                            },
                            {
                                icon: Database,
                                title: "3. Conditional Logic",
                                desc: "When pricing is requested, the workflow detects triggers and sends pre-approved images instead of raw text."
                            }
                        ].map((step, i) => (
                            <div key={i} className="p-6 bg-card/30 border border-border/30 rounded-lg space-y-4 hover:border-pink-500/30 transition-colors">
                                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center">
                                    <step.icon className="w-6 h-6 text-pink-500" />
                                </div>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Impact */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-serif">Business Impact</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {[
                            "Instant replies to product & pricing queries",
                            "Zero pricing mistakes via image-based sharing",
                            "Consistent promotion messaging",
                            "Reduction in repetitive manual work",
                            "Brand-consistent Arabic communication",
                            "Seamless AI-to-human handover"
                        ].map((impact, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-background border border-border/50 rounded-lg shadow-sm"
                            >
                                <div className="mt-1 bg-green-500/10 p-1 rounded-full">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                </div>
                                <span className="text-foreground">{impact}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-12 p-8 bg-card/50 border border-border/50 rounded-2xl max-w-3xl mx-auto">
                        <h3 className="text-2xl font-serif mb-4">Why This Matters</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            "This workflow proves that WhatsApp automation doesn’t have to replace humans. Instead, AI handles repetition while humans handle relationships."
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif">Want a Similar Setup?</h2>
                    <p className="text-xl text-muted-foreground">
                        If you’re looking to implement a WhatsApp AI workflow with full team visibility, we can adapt this architecture to your business.
                    </p>
                    <div className="flex justify-center pt-4">
                        <Button size="lg" className="gap-2 bg-pink-600 hover:bg-pink-700">
                            Get Your Automation <BarChart3 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            <CosmicFooter />
        </main >
    );
}
