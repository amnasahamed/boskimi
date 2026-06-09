"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const rafId = useRef<number>();

  useEffect(() => {
    let currentVelocity = 0;
    let targetVelocity = 0;

    const updateVelocity = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime.current;

      if (timeDelta > 0) {
        const scrollDelta = currentScrollY - lastScrollY.current;
        targetVelocity = scrollDelta / timeDelta;

        // Smooth interpolation
        currentVelocity += (targetVelocity - currentVelocity) * 0.1;

        setVelocity(currentVelocity);
        setDirection(scrollDelta > 0 ? "down" : "up");

        lastScrollY.current = currentScrollY;
        lastTime.current = currentTime;
      }

      rafId.current = requestAnimationFrame(updateVelocity);
    };

    rafId.current = requestAnimationFrame(updateVelocity);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return { velocity, direction };
}
