"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { Badge } from "@/components/ui/badge";
import { RippleButton } from "@/components/ui/ripple-button";
import { ArrowLeft, Camera, Cpu, Globe, Layers, Layout, Mic, Smartphone, Wifi, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ClapsBoardCaseStudy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    return (
        <main ref={containerRef} className="relative min-h-screen bg-background overflow-hidden selection:bg-cyan-500/30">
            <ConstellationNav />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        style={{ opacity, scale }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Case Studies
                        </Link>

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300 text-xs font-mono uppercase tracking-widest">
                                iOS Teaching Platform
                            </div>
                            <h1 className="text-5xl md:text-7xl font-serif text-balance text-foreground pb-2 leading-[1.1]">
                                The Ultimate <br />
                                <span className="text-blue-500">Digital Whiteboard</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                                Transforming iPad and iPhone into powerful, interactive classroom hubs.
                                Built for ClapsLearn to empower educators globally.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
                                    <Smartphone className="w-5 h-5" />
                                    Download on App Store
                                </Link>
                                <Link href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted/50 transition-colors">
                                    <Globe className="w-5 h-5" />
                                    Visit ClapsLearn
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">MVVM</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">Architecture</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">100%</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">SwiftUI</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl font-bold text-foreground">Offline</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">First Mode</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-video max-w-md mx-auto">
                            {/* Abstract Glow */}
                            <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full" />

                            {/* Main Hreo Image */}
                            <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                                <Image
                                    src="/images/case-studies/clapsboard/banner.png"
                                    alt="ClapsBoard App Interface"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 z-20 bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl max-w-[200px]"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">Teacher's Choice</div>
                                        <div className="text-xs text-muted-foreground">Award Winning App</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 px-6 bg-muted/20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6 text-center">
                        <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Executive Summary</h2>
                        <h3 className="text-3xl md:text-3xl font-serif leading-snug">
                            ClapsBoard is a native iOS application that transforms an iPad or iPhone into a powerful,
                            interactive whiteboard and classroom management hub, facilitating both remote
                            and in-person learning.
                        </h3>
                    </div>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                        <p>
                            The goal was to create a standalone, high-performance teaching aid that operates seamlessly with or without an internet connection.
                            ClapsBoard integrates a versatile canvas for visual explanation, peer-to-peer voice communication for local classroom interaction,
                            and lesson planning tools to organize an educator&apos;s schedule.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-serif mb-16 text-center">Key Features</h2>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10 space-y-6 hover:border-blue-500/30 transition-colors">
                            <div className="h-12 w-12 rounded-2xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Advanced Digital Whiteboard</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span><strong>Rich Toolset:</strong> Pen, highlighter, eraser with customizable stroke widths.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span><strong>Interactive Elements:</strong> Geographic shapes, text annotations, and emoji stickers.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span><strong>High-Res Export:</strong> Up to 4K export for sharing class notes.</span>
                                </li>
                            </ul>
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 mt-4">
                                <Image
                                    src="/images/case-studies/clapsboard/whiteboard-demo.png"
                                    alt="Whiteboard Engine"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10 space-y-6 hover:border-green-500/30 transition-colors">
                            <div className="h-12 w-12 rounded-2xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                <Mic className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Local Voice Collaboration</h3>
                            <p className="text-muted-foreground">
                                Utilizing Apple&apos;s <strong>Multipeer Connectivity</strong> framework to support classroom environments where internet may be unreliable.
                            </p>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-green-500">•</span>
                                    <span><strong>Peer-to-Peer:</strong> Link student and teacher devices locally.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-500">•</span>
                                    <span><strong>Secure Access:</strong> 4-digit entry codes generated by host.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-500">•</span>
                                    <span><strong>Low Latency:</strong> Real-time audio streamlining for clear communication.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10 space-y-6 hover:border-purple-500/30 transition-colors">
                            <div className="h-12 w-12 rounded-2xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                                <Camera className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Smart Camera Integration</h3>
                            <p className="text-muted-foreground">Enhancing the personal connection in digital learning.</p>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-purple-500">•</span>
                                    <span><strong>Floating Camera View:</strong> Draggable camera overlay.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-500">•</span>
                                    <span><strong>Picture-in-Picture:</strong> Leverages AVKit to keep camera active while multitasking.</span>
                                </li>
                            </ul>
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 mt-4">
                                <Image
                                    src="/images/case-studies/clapsboard/interface-closeup.png"
                                    alt="Interface Closeup"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10 space-y-6 hover:border-orange-500/30 transition-colors">
                            <div className="h-12 w-12 rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                                <Layers className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Classroom Management</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-orange-500">•</span>
                                    <span><strong>Lesson Planner:</strong> Integrated calendar for scheduling.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-orange-500">•</span>
                                    <span><strong>Smart Reminders:</strong> Automated Local Notifications 5 mins before class.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-orange-500">•</span>
                                    <span><strong>Document Hub:</strong> Centralized repository for PDFs and materials.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Architecture */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-serif mb-6">Technical Architecture</h2>
                        <p className="text-lg text-muted-foreground">
                            Built using Swift and following a clean MVVM (Model-View-ViewModel) architecture
                            to ensure scalability and testability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                            <h4 className="font-mono text-blue-500 mb-2">UI Framework</h4>
                            <div className="text-xl font-bold mb-2">SwiftUI</div>
                            <p className="text-sm text-muted-foreground">Used for 100% of the user interface provided a modern, adaptive UI.</p>
                        </div>
                        <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                            <h4 className="font-mono text-green-500 mb-2">Networking</h4>
                            <div className="text-xl font-bold mb-2">Multipeer Connectivity</div>
                            <p className="text-sm text-muted-foreground">Handles discovery and data transport for local voice channels.</p>
                        </div>
                        <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                            <h4 className="font-mono text-purple-500 mb-2">Audio & Video</h4>
                            <div className="text-xl font-bold mb-2">AVFoundation & AVKit</div>
                            <p className="text-sm text-muted-foreground">Powers custom camera capture and Picture-in-Picture functionality.</p>
                        </div>
                        <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                            <h4 className="font-mono text-orange-500 mb-2">Graphics</h4>
                            <div className="text-xl font-bold mb-2">Core Graphics</div>
                            <p className="text-sm text-muted-foreground">Custom drawing engine using UIBezierPath and UIGraphicsImageRenderer.</p>
                        </div>
                    </div>

                    {/* Project Structure Tree */}
                    <div className="bg-card/50 rounded-3xl p-8 lg:p-12 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Cpu className="w-48 h-48" />
                        </div>
                        <h3 className="text-2xl font-serif mb-8">Project Structure</h3>
                        <div className="grid md:grid-cols-2 gap-8 font-mono text-sm">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5">
                                    <div className="w-24 text-blue-500 font-bold">Views</div>
                                    <div className="text-muted-foreground">Modular SwiftUI components (Board, Calendar, VoIP)</div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5">
                                    <div className="w-24 text-green-500 font-bold">ViewModels</div>
                                    <div className="text-muted-foreground">Business logic layers (e.g. CanvasViewModel, CameraManager)</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5">
                                    <div className="w-24 text-purple-500 font-bold">Services</div>
                                    <div className="text-muted-foreground">Singleton managers for background tasks like VoiceChannelManager</div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5">
                                    <div className="w-24 text-orange-500 font-bold">Models</div>
                                    <div className="text-muted-foreground">Codable structs defining data schema for drawings and sessions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-4">
                        <Image src="/images/case-studies/clapsboard/app-icon-large.png" width={64} height={64} alt="Logo" className="rounded-xl shadow-sm" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                        Ready to Teach Without Limits?
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        ClapsBoard successfully delivers a robust, offline-capable teaching platform that meets the modern needs of educators.
                        By leveraging native Apple frameworks, it offers a premium, fluid user experience that rivals desktop-class software.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25">
                            <Smartphone className="w-5 h-5" />
                            Download ClapsBoard
                        </Link>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
            </section>

            <CosmicFooter />
        </main>
    );
}
