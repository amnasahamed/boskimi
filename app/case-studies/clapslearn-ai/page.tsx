"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, MessageCircle, BarChart3, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ClapsLearnAICaseStudy() {
    return (
        <main className="relative min-h-screen bg-background overflow-hidden selection:bg-violet-500/30">
            <ConstellationNav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-700" />
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center p-4 shadow-xl shadow-violet-500/20">
                                <img
                                    src="https://cdn.brandfetch.io/idGKjDPWnh/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746853837154"
                                    alt="ClapsLearn Logo"
                                    className="object-contain p-4 w-full h-full"
                                />
                            </div>
                        </div>

                        <Badge variant="outline" className="border-violet-500/50 text-violet-400">
                            Case Study: Educational Automation
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-balance">
                            AI Front-Office Assistant
                            <br />
                            <span className="italic text-muted-foreground text-3xl md:text-5xl block mt-2">
                                for ClapsLearn
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                            Deploying an intelligent AI bot to act as a virtual receptionist, dramatically reducing repetitive queries from parents, tutors, and visitors.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="gap-2 bg-violet-600 hover:bg-violet-700" asChild>
                                <a href="https://clapslearn.com/" target="_blank" rel="noopener noreferrer">
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
                            ClapsLearn's administrative staff was constantly overwhelmed by a high volume of repetitive, general queries. Handling questions about courses, schedules, and general business information was taking valuable time away from actual student support.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Inundated with repetitive FAQs from parents and tutors",
                                "Delayed response times during off-hours",
                                "Staff burnout from answering the same questions",
                                "Need for a professional, front-office persona"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                                    <span className="text-violet-500 mt-1">•</span> {item}
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
                            We integrated a custom-trained AI Bot directly into the ClapsLearn website. This intelligent agent is programmed to act as the primary front-office staff, resolving doubts instantly.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "24/7 Uptime", desc: "Always available" },
                                { label: "Smart Routing", desc: "Handles complex doubts" },
                                { label: "Custom KB", desc: "Trained on business data" },
                                { label: "Seamless UI", desc: "Integrated chat widget" }
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
                            Parents and students get an interactive front-office experience online. The AI chat widget handles multiple queries fluently, making it simple to ask about courses, tutors, and general organization details directly from the website.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Natural language understanding",
                                "Instant automated responses",
                                "Always-on accessibility",
                                "Polite and brand-aligned persona"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
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
                        <div className="relative w-full aspect-[4/3] sm:aspect-video bg-black rounded-xl border border-border/50 overflow-hidden shadow-2xl shadow-violet-500/20">
                            <Image
                                src="/images/case-studies/clapslearn-ai/clapslearn-chat-widget.png"
                                alt="ClapsLearn AI User Experience"
                                fill
                                className="object-cover object-left"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Architecture & Workflow */}
            <section className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="border-violet-500/50 text-violet-400">
                            Workflow
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-serif">How It Works</h2>
                    </div>

                    {/* Workflow Steps */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MessageCircle,
                                title: "1. Instant Engagement",
                                desc: "The AI widget greets visitors proactively, offering help matching the tone of a welcoming educational institution."
                            },
                            {
                                icon: Bot,
                                title: "2. Query Resolution",
                                desc: "Understands natural language questions from parents or tutors, referencing the ClapsLearn knowledge base to give precise answers."
                            },
                            {
                                icon: Users,
                                title: "3. Human Handoff",
                                desc: "If a query is too specific or requires human intervention, the AI smoothly transitions the conversation to support staff."
                            }
                        ].map((step, i) => (
                            <div key={i} className="p-6 bg-card/30 border border-border/30 rounded-lg space-y-4 hover:border-violet-500/30 transition-colors">
                                <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center">
                                    <step.icon className="w-6 h-6 text-violet-500" />
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
                            "Zero wait time for parents & tutors",
                            "Massive reduction in support tickets",
                            "Staff can focus on critical tasks",
                            "Consistent and polite brand voice",
                            "24/7 handling of general queries",
                            "Valuable analytics on common questions"
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
                        <h3 className="text-2xl font-serif mb-4">The Verdict</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            "By treating the AI not just as a chatbot, but as a digital front-office receptionist, ClapsLearn successfully cleared up their support pipeline while enhancing the onboarding experience for new visitors."
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif">Need an AI Receptionist?</h2>
                    <p className="text-xl text-muted-foreground">
                        Let us build a custom AI agent tailored to your business, trained on your knowledge base to handle repetitive queries effortlessly.
                    </p>
                    <div className="flex justify-center pt-4">
                        <Button size="lg" className="gap-2 bg-violet-600 hover:bg-violet-700">
                            Build Your Agent <Bot className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            <CosmicFooter />
        </main>
    );
}
