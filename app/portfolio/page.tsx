"use client";

import { ConstellationNav } from "@/components/landing/constellation-nav";
import { StellarPortfolio } from "@/components/landing/stellar-portfolio";
import { CosmicFooter } from "@/components/landing/cosmic-footer";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ConstellationNav />
      <div className="pt-24">
        <StellarPortfolio />
      </div>
      <CosmicFooter />
    </main>
  );
}
