"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search } from "lucide-react";
import { websites } from "@/lib/portfolio";



const categories = [
  "All",
  ...Array.from(new Set(websites.map((w) => w.category))).sort(),
];

export function StellarPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWebsites = websites.filter((website) => {
    const matchesCategory =
      selectedCategory === "All" || website.category === selectedCategory;
    const matchesSearch = (website.title || website.url)
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-primary">
              Our Digital Universe
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-balance">
            Stellar Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our constellation of {websites.length} websites spanning multiple
            industries and galaxies
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search websites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-card/50 backdrop-blur-sm border-border/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-sm font-mono text-muted-foreground">
            Showing{" "}
            <span className="text-foreground font-semibold">
              {filteredWebsites.length}
            </span>{" "}
            of{" "}
            <span className="text-foreground font-semibold">
              {websites.length}
            </span>{" "}
            stellar projects
          </p>
        </div>

        {/* Featured Work Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-serif">Featured Work</h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Navakeralam Card */}
            <a
              href="/case-studies/navakeralam"
              className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-border/50 bg-card/50 transition-all hover:border-emerald-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('/images/case-studies/navakeralam/banner.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-3">
                <Badge variant="outline" className="border-emerald-500 text-emerald-400 bg-emerald-500/10 backdrop-blur-sm">
                  Government Portal
                </Badge>
                <h4 className="text-3xl font-serif text-white">Navakeralam</h4>
                <p className="text-gray-300 line-clamp-2">
                  Kerala Government's citizen engagement platform for shaping development policies.
                </p>
              </div>
            </a>

            {/* ClapsLearn AI Card */}
            <a
              href="/case-studies/clapslearn-ai"
              className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-border/50 bg-card/50 transition-all hover:border-violet-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

              <div className="absolute inset-0 bg-[url('/images/case-studies/clapslearn-ai/clapslearn-chat-widget.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl group-hover:bg-violet-500/30 transition-colors" />

              <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg z-20">
                <img
                  src="https://cdn.brandfetch.io/idGKjDPWnh/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746853837154"
                  alt="ClapsLearn"
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-3">
                <Badge variant="outline" className="border-violet-500 text-violet-400 bg-violet-500/10 backdrop-blur-sm">
                  AI Assistant
                </Badge>
                <h4 className="text-3xl font-serif text-white">ClapsLearn</h4>
                <p className="text-gray-300 line-clamp-2">
                  An AI front-office assistant that handles inquiries from parents, tutors, and visitors, significantly reducing repetitive staff queries.
                </p>
              </div>
            </a>

            {/* Badria Sweets Card */}
            <a
              href="/case-studies/badria-sweets"
              className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-border/50 bg-card/50 transition-all hover:border-pink-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              {/* Note: In a real app, use the actual image path here */}
              <div className="absolute inset-0 bg-[url('/images/case-studies/badria-sweets/workflow.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-3">
                <Badge variant="outline" className="border-pink-500 text-pink-500 bg-pink-500/10 backdrop-blur-sm">
                  Automation & AI
                </Badge>
                <h4 className="text-3xl font-serif text-white">Badria Sweets</h4>
                <p className="text-gray-300 line-clamp-2">
                  Transforming customer support with AI agents and intelligent WhatsApp automation.
                </p>
              </div>
            </a>

            {/* ClapsBoard Card */}
            <a
              href="/case-studies/clapsboard"
              className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-border/50 bg-card/50 transition-all hover:border-cyan-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              {/* Note: In a real app, use the actual image path here */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_50%)] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors" />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 space-y-3">
                <Badge variant="outline" className="border-cyan-500 text-cyan-400 bg-cyan-500/10 backdrop-blur-sm">
                  EdTech App
                </Badge>
                <h4 className="text-3xl font-serif text-white">ClapsBoard</h4>
                <p className="text-gray-300 line-clamp-2">
                  Interactive whiteboard learning platform built for ClapsLearn.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Website Archive Header */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-3xl font-serif">Website Archive</h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Website Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWebsites.filter(w => !w.isInternal).map((website, index) => (
            <a
              key={website.url}
              href={`https://${website.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-500" />

              <div className="relative space-y-4">
                {/* Category Badge */}
                <div className="flex items-start justify-between gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs font-mono bg-secondary/50"
                  >
                    {website.category}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* URL */}
                <div>
                  <h3 className="text-lg font-mono text-foreground group-hover:text-primary transition-colors break-all">
                    {website.title || website.url}
                  </h3>
                </div>

                {/* Decorative star */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-accent rounded-full animate-pulse delay-100" />
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse delay-200" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredWebsites.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <div className="text-6xl opacity-20">🔍</div>
            <h3 className="text-xl font-serif">No websites found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center space-y-6">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl" />
            <div className="relative px-8 py-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full">
              <p className="text-sm font-mono text-muted-foreground">
                More stellar projects launching soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
