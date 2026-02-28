"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
    {
        slug: "navakeralam",
        title: "Citizen Response Programme",
        client: "Government of Kerala",
        desc: "A state-wide digital platform enabling direct citizen participation in shaping Kerala's development policies. AI-powered triage routes 10,000+ daily inquiries.",
        tags: ["Government", "AI Agent", "Public Engagement"],
        image: "/images/case-studies/navakeralam/banner.png",
        logo: "/images/case-studies/navakeralam/logo.png",
        results: [
            { label: "Response Time", value: "2 min", was: "4 hrs" },
            { label: "Tickets/Day", value: "10K+", icon: Users },
        ],
        color: "#22c55e",
    },
    {
        slug: "badria-sweets",
        title: "AI-Powered WhatsApp Support",
        client: "Badria Sweets",
        desc: "Scaling customer support with AI to deliver instant, brand-safe Arabic responses. Handles order tracking, FAQs, and complaints 24/7.",
        tags: ["WhatsApp", "AI Agent", "E-commerce"],
        image: "/images/case-studies/badria-sweets/workflow.png",
        logo: "/images/case-studies/badria-sweets/logo.png",
        results: [
            { label: "Time Saved", value: "30 hrs", was: "/week", icon: Clock },
            { label: "Response", value: "<2s", icon: Clock },
        ],
        color: "#f59e0b",
    },
    {
        slug: "clapsboard",
        title: "Interactive Whiteboard Platform",
        client: "ClapsLearn",
        desc: "A custom interactive whiteboard for remote education, featuring real-time collaboration and infinite canvas for teachers and students.",
        tags: ["EdTech", "Web App", "Real-time"],
        image: "/images/case-studies/clapsboard/banner.png",
        logo: "/images/case-studies/clapsboard/logo.png",
        results: [
            { label: "Active Users", value: "5K+", icon: Users },
            { label: "Sessions", value: "50K+", icon: TrendingUp },
        ],
        color: "#3b82f6",
    },
    {
        slug: "clapslearn-ai",
        title: "AI Front-Office Assistant",
        client: "ClapsLearn",
        desc: "An AI front-office assistant that handles inquiries from parents, tutors, and visitors, significantly reducing repetitive staff queries like a virtual receptionist.",
        tags: ["AI Agent", "Education", "Automation"],
        image: "https://clapslearn.com/images/hero-bg.jpg", // placeholder, can be updated later
        logo: "https://cdn.brandfetch.io/idGKjDPWnh/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746853837154",
        results: [
            { label: "Query Resolution", value: "24/7", icon: Clock },
            { label: "Staff Time Saved", value: "High", icon: TrendingUp },
        ],
        color: "#8b5cf6",
        externalLink: "https://clapslearn.com/",
    },
];

type CaseStudy = typeof caseStudies[0];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
    return (
        <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-card/50 border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300"
        >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                {study.image.startsWith("http") ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                        style={{
                            backgroundImage: `radial-gradient(circle at center, rgba(139,92,246,0.1), transparent 50%)`,
                            backgroundColor: '#111'
                        }}
                    />
                ) : (
                    <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                )}

                {/* Client badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                        {study.logo.startsWith("http") ? (
                            <img
                                src={study.logo}
                                alt={study.client}
                                className="object-contain w-8 h-8"
                            />
                        ) : (
                            <Image
                                src={study.logo}
                                alt={study.client}
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        )}
                    </div>
                    <div>
                        <span className="font-medium text-white">{study.client}</span>
                    </div>
                </div>

                {/* Results overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-4">
                    {study.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2 text-white">
                            {result.icon && <result.icon className="w-4 h-4" style={{ color: study.color }} />}
                            <div>
                                <div className="font-serif text-xl" style={{ color: study.color }}>
                                    {result.value}
                                </div>
                                <div className="text-xs text-white/70">{result.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">
                        {study.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                        {study.desc}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary/50 hover:bg-primary/10 transition-colors"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

                {study.externalLink ? (
                    <a
                        href={study.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium group/link"
                        style={{ color: study.color }}
                    >
                        Visit Website
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                ) : (
                    <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium group/link"
                        style={{ color: study.color }}
                    >
                        Read Full Story
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </motion.div>
    );
}

export default function CaseStudiesPage() {
    return (
        <main className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30">
            <ConstellationNav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-mono text-primary">
                                Real Results
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-serif"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Case Studies
                    </motion.h1>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Real businesses, real problems, real solutions. Here&apos;s what happens when we get involved.
                    </motion.p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="relative py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.slug} study={study} index={index} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 bg-card/50 border border-border/50 rounded-3xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif mb-4">
                            Want Results Like These?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Let&apos;s talk about your specific situation. No commitment, just honest advice.
                        </p>
                        <Link
                            href="/about#connect"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all"
                        >
                            Start a Conversation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <CosmicFooter />
        </main>
    );
}
