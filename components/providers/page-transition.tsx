"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.div
            initial={{ scale: 0.98, filter: "blur(10px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.02, filter: "blur(10px)" }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative">
        <motion.div
          className="flex items-baseline gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-serif text-4xl tracking-tight">Base</span>
          <span className="font-serif text-4xl tracking-tight text-muted-foreground">of</span>
          <span className="font-serif text-4xl tracking-tight italic">Stars</span>
        </motion.div>

        <div className="mt-8 w-48 h-px bg-border overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>

        <motion.p
          className="mt-4 mono-caption text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <LoadingText text="Initializing experience" />
        </motion.p>
      </div>

      <motion.div
        className="absolute top-8 left-8 mono-caption text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        EST. 2024
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-8 mono-caption text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        AI SOLUTIONS
      </motion.div>
    </motion.div>
  );
}

function LoadingText({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ...
      </motion.span>
    </span>
  );
}
