"use client";

import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Quote, Star, Building2, TrendingUp, Clock, Award } from "lucide-react";

// Enhanced testimonials with metrics for credibility
const testimonials = [
  {
    text: "The AI agent they built handles 80% of our customer inquiries automatically. Our support team now focuses only on complex issues that need human touch.",
    author: "Marcus Thompson",
    role: "Operations Director",
    company: "TechWear Inc.",
    metric: { label: "Support tickets automated", value: "80%" },
    rating: 5,
    industry: "E-commerce",
    result: "Saved 40 hrs/week",
  },
  {
    text: "They didn't just automate our processes—they completely reimagined them. Our team's efficiency increased by 300% in the first quarter alone.",
    author: "Elena Rodriguez",
    role: "Founder & CEO",
    company: "Artisan Goods Co.",
    metric: { label: "Efficiency increase", value: "300%" },
    rating: 5,
    industry: "Retail",
    result: "3x faster operations",
  },
  {
    text: "We had a workflow problem costing us 20 hours every week. Base of Stars solved it with AI in just two weeks. ROI was immediate and substantial.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "DataFlow Systems",
    metric: { label: "Hours saved weekly", value: "20+" },
    rating: 5,
    industry: "SaaS",
    result: "Deployed in 14 days",
  },
  {
    text: "Finally, a team that understands business first and technology second. The AI solution paid for itself in month one. Best investment we've made.",
    author: "James Wilson",
    role: "Chief Executive Officer",
    company: "LuxLife Brands",
    metric: { label: "ROI timeline", value: "30 days" },
    rating: 5,
    industry: "Hospitality",
    result: "ROI in 30 days",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 8;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export function TestimonialsCarousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => (pv === testimonials.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < testimonials.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            <Quote className="w-4 h-4" />
            Client Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground"
          >
            Proven <span className="italic text-primary">Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Real businesses, real metrics, real impact. See how our AI solutions 
            transform operations and drive measurable ROI.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            animate={{ translateX: `-${imgIndex * 100}%` }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="flex cursor-grab items-center active:cursor-grabbing"
          >
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                testimonial={testimonial}
                isActive={imgIndex === idx}
              />
            ))}
          </motion.div>

          <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: Building2, value: "50+", label: "Companies Helped" },
            { icon: TrendingUp, value: "340%", label: "Average ROI" },
            { icon: Clock, value: "30", label: "Day Implementation" },
            { icon: Award, value: "99%", label: "Client Retention" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-serif text-3xl text-foreground italic">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const TestimonialCard = ({
  testimonial,
  isActive,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
}) => {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.4,
      }}
      transition={SPRING_OPTIONS}
      className="w-full min-w-full px-4 md:px-8"
    >
      <div className="mx-auto max-w-4xl bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <Quote className="w-10 h-10 text-primary/20 mb-4" />
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
              &quot;{testimonial.text}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-lg text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-foreground">
                  {testimonial.author}
                </h4>
                <p className="font-mono text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="text-sm text-muted-foreground mb-1">{testimonial.metric.label}</div>
              <div className="font-serif text-3xl text-primary italic">{testimonial.metric.value}</div>
            </div>

            <div className="p-4 bg-secondary/50 rounded-2xl">
              <div className="text-sm text-muted-foreground mb-1">Industry</div>
              <div className="font-medium text-foreground">{testimonial.industry}</div>
            </div>

            <div className="p-4 bg-secondary/50 rounded-2xl">
              <div className="text-sm text-muted-foreground mb-1">Key Result</div>
              <div className="font-medium text-foreground">{testimonial.result}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="mt-8 flex w-full justify-center gap-2">
      {testimonials.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-2 rounded-full transition-all ${
            idx === imgIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
};
