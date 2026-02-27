"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Globe, Users, MessageSquare, BarChart3, CheckCircle2, Calendar, MapPin, Landmark, Languages, Shield, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavakeralamCaseStudy() {
    return (
        <main className="relative min-h-screen bg-background overflow-hidden selection:bg-emerald-500/30">
            <ConstellationNav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-400 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Case Studies
                        </Link>

                        <div className="flex justify-center mb-6">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center p-4 shadow-xl shadow-emerald-500/20">
                                <Image
                                    src="/images/case-studies/navakeralam/logo.png"
                                    alt="Navakeralam Logo"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>

                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                            Government of Kerala • Web Portal
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-balance">
                            Navakeralam
                            <br />
                            <span className="italic text-muted-foreground text-2xl md:text-4xl block mt-2">
                                Citizen Response Programme
                            </span>
                        </h1>

                        <p className="text-xl text-emerald-600 dark:text-emerald-400 max-w-3xl mx-auto font-medium">
                            ജനകീയ സർക്കാർ, ജനങ്ങളെ കേൾക്കാൻ, ജനങ്ങളിലേക്ക്
                        </p>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                            A historic digital initiative enabling direct citizen participation in shaping Kerala&apos;s development policies.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700" asChild>
                                <a href="https://citizenresponseprogramme.kerala.gov.in/" target="_blank" rel="noopener noreferrer">
                                    Visit Website <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto border-t border-border/50">
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">State-wide</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">Coverage</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">2 Months</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">Programme Duration</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">Bilingual</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">Malayalam & English</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="relative px-6 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto relative bg-card/50 border border-border/50 rounded-xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-blue-500/5" />
                    <Image
                        src="/images/case-studies/navakeralam/banner.png"
                        alt="Navakeralam Portal Interface"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                    />
                </motion.div>
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
                        <h2 className="text-3xl md:text-4xl font-serif">The Vision</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For the first time in history, a state government is reaching out directly to citizens&apos; homes to collect their opinions and suggestions for shaping the future development roadmap.
                        </p>
                        <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-muted-foreground">
                            &quot;Kerala&apos;s future development guidelines will be prepared after hearing and understanding the opinions of each and every one of you.&quot;
                            <footer className="mt-2 text-sm font-medium text-foreground not-italic">
                                — Shri. Pinarayi Vijayan, Chief Minister of Kerala
                            </footer>
                        </blockquote>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Building a digital platform to support a massive citizen engagement initiative spanning the entire state of Kerala, with volunteers visiting every household.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "State-wide accessibility with bilingual support",
                                "Real-time data collection and analysis",
                                "Seamless integration with field operations",
                                "Government compliance and accessibility standards"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                                    <span className="text-emerald-500 mt-1">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Programme Details */}
            <section className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                            Programme Overview
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-serif">About Navakeralam</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 bg-card/30 border border-border/30 rounded-xl space-y-4 hover:border-emerald-500/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-semibold">Programme Timeline</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Running from January 1 to February 28, 2026, the initiative brings government volunteers directly to citizens&apos; doorsteps across all 14 districts.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 bg-card/30 border border-border/30 rounded-xl space-y-4 hover:border-blue-500/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold">Navakerala Karma Sena</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                A dedicated volunteer force visiting homes statewide to collect opinions, ideas, and suggestions from every citizen who wishes to participate.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 bg-card/30 border border-border/30 rounded-xl space-y-4 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-semibold">Digital Participation</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Citizens can also submit feedback online through the portal, ensuring everyone has the opportunity to contribute to Kerala&apos;s development vision.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif">Portal Features</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A comprehensive digital platform designed for accessibility, transparency, and citizen engagement.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Languages,
                                title: "Bilingual Interface",
                                desc: "Complete Malayalam and English language support ensuring accessibility for all citizens.",
                                color: "emerald"
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile-First Design",
                                desc: "Fully responsive design optimized for mobile devices common in rural areas.",
                                color: "blue"
                            },
                            {
                                icon: Globe,
                                title: "Public Portal",
                                desc: "Transparent access to programme information, news, media gallery, and governing body details.",
                                color: "purple"
                            },
                            {
                                icon: Landmark,
                                title: "Government Integration",
                                desc: "Seamless integration with kerala.gov.in and official government systems.",
                                color: "orange"
                            },
                            {
                                icon: Shield,
                                title: "Accessibility Standards",
                                desc: "Designed following government accessibility guidelines for inclusive access.",
                                color: "pink"
                            },
                            {
                                icon: MapPin,
                                title: "District Coverage",
                                desc: "Comprehensive coverage across all 14 districts with local news and updates.",
                                color: "cyan"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-5 bg-background border border-border/50 rounded-lg shadow-sm hover:border-emerald-500/30 transition-colors"
                            >
                                <div className={`p-2.5 rounded-lg bg-${feature.color}-500/10 shrink-0`}>
                                    <feature.icon className={`w-5 h-5 text-${feature.color}-500`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section className="relative py-24 px-6">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-serif">Historic Significance</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {[
                            "First-ever direct citizen consultation at doorstep",
                            "Scientific analysis of public opinions",
                            "Development policies shaped by citizen input",
                            "Transparent and inclusive governance",
                            "State-wide digital infrastructure",
                            "Model for participatory democracy"
                        ].map((impact, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-background border border-border/50 rounded-lg shadow-sm"
                            >
                                <div className="mt-1 bg-emerald-500/10 p-1 rounded-full">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                </div>
                                <span className="text-foreground">{impact}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-12 p-8 bg-card/50 border border-border/50 rounded-2xl max-w-3xl mx-auto">
                        <h3 className="text-2xl font-serif mb-4">A Milestone in Governance</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            &quot;The Navakeralam Citizen Response Programme represents a landmark shift in governance—transforming citizens from passive recipients to active architects of their state&apos;s future.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-background to-emerald-500/5">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif">Have Your Voice Heard</h2>
                    <p className="text-xl text-muted-foreground">
                        Share your opinions, ideas, and suggestions to help shape Kerala&apos;s development future.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700" asChild>
                            <a href="https://citizenresponseprogramme.kerala.gov.in/" target="_blank" rel="noopener noreferrer">
                                Participate Now <ArrowRight className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2" asChild>
                            <a href="https://kerala.gov.in" target="_blank" rel="noopener noreferrer">
                                <Globe className="w-4 h-4" /> Visit kerala.gov.in
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            <CosmicFooter />
        </main>
    );
}
