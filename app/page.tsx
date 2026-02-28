"use client";

import { HeroSection } from "@/components/landing/hero-section";
import { ConstellationNav } from "@/components/landing/constellation-nav";
import { WhoWeAre } from "@/components/landing/who-we-are";
import { ServicesUniverse } from "@/components/landing/services-universe";
import { AIInAction } from "@/components/landing/ai-in-action";
import { WorkflowMagic } from "@/components/landing/workflow-magic";
import { ConnectionPortal } from "@/components/landing/connection-portal";
import { CosmicFooter } from "@/components/landing/cosmic-footer";
import { ResultsShowcase } from "@/components/landing/results-showcase";
import { StarfieldBackground } from "@/components/ui/starfield-background";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TechStackMarquee } from "@/components/ui/tech-stack-marquee";
import { ClientLogosGrid } from "@/components/landing/client-logos-grid";
import { HowItWorks } from "@/components/landing/how-it-works";
import { BeforeAfter } from "@/components/landing/before-after";
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";
import { GuaranteeSection } from "@/components/landing/guarantee-section";
import { FAQSection } from "@/components/landing/faq-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      <ScrollProgress />
      <StarfieldBackground />
      <GradientMesh />

      <ConstellationNav />
      <HeroSection />
      <WhoWeAre />
      <ServicesUniverse />
      <AIInAction />
      <WorkflowMagic />
      <TechStackMarquee />
      <ResultsShowcase />
      <ClientLogosGrid />
      <HowItWorks />
      <BeforeAfter />
      <TestimonialsCarousel />
      <GuaranteeSection />
      <FAQSection />
      <ConnectionPortal />
      <CosmicFooter />
    </main>
  );
}
