"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Users, Zap } from "lucide-react";

const activities = [
  { icon: MapPin, text: "New inquiry from Dubai", time: "2 min ago" },
  { icon: Clock, text: "Client saved 12 hours this week", time: "5 min ago" },
  { icon: Users, text: "New AI agent deployed for SaaS company", time: "8 min ago" },
  { icon: Zap, text: "Workflow automation live in London", time: "12 min ago" },
  { icon: MapPin, text: "Lead qualified automatically in NYC", time: "15 min ago" },
  { icon: Clock, text: "Support ticket resolved in 45 seconds", time: "18 min ago" },
];

export function LiveActivity() {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activity = activities[currentActivity];

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:block">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentActivity}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 px-4 py-3 bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <activity.icon className="w-4 h-4 text-primary" />
            <div>
              <p className="text-sm text-foreground">{activity.text}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
