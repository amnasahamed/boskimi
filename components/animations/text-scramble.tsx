"use client";

import { useState, useEffect, useCallback } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: "hover" | "mount";
  duration?: number;
}

export function TextScramble({ 
  text, 
  className = "", 
  trigger = "hover",
  duration = 2000 
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const textLength = text.length;
    const iterations = textLength * 3;
    let frame = 0;
    const interval = duration / iterations;

    const animate = () => {
      frame++;
      const progress = frame / iterations;
      const revealedCount = Math.floor(progress * textLength);

      let newText = "";
      for (let i = 0; i < textLength; i++) {
        if (i < revealedCount) {
          newText += text[i];
        } else if (text[i] === " ") {
          newText += " ";
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(newText);

      if (frame < iterations) {
        setTimeout(animate, interval);
      } else {
        setDisplayText(text);
        setIsAnimating(false);
      }
    };

    animate();
  }, [text, duration, isAnimating]);

  useEffect(() => {
    if (trigger === "mount") {
      scramble();
    }
  }, [trigger, scramble]);

  return (
    <span 
      className={className}
      onMouseEnter={trigger === "hover" ? scramble : undefined}
      style={{ fontFamily: "monospace" }}
    >
      {displayText}
    </span>
  );
}
