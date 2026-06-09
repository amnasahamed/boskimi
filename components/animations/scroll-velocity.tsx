"use client"

import { useEffect, useState } from "react"
import { useSmoothScroll } from "@/components/providers/smooth-scroll"

export function useScrollVelocity() {
  const { lenis } = useSmoothScroll()
  const [velocity, setVelocity] = useState(0)

  useEffect(() => {
    if (!lenis) return

    const handleScroll = ({ velocity }: { velocity: number }) => {
      setVelocity(velocity)
    }

    lenis.on("scroll", handleScroll)

    return () => {
      lenis.off("scroll", handleScroll)
    }
  }, [lenis])

  return velocity
}

interface ScrollVelocitySkewProps {
  children: React.ReactNode
  maxSkew?: number
}

export function ScrollVelocitySkew({
  children,
  maxSkew = 2,
}: ScrollVelocitySkewProps) {
  const velocity = useScrollVelocity()
  const skew = Math.max(-maxSkew, Math.min(maxSkew, velocity * 0.1))

  return (
    <div
      style={{
        transform: `skewY(${skew}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}

// Scroll progress component
export function useScrollProgress() {
  const { lenis } = useSmoothScroll()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!lenis) return

    const handleScroll = ({ progress }: { progress: number }) => {
      setProgress(progress)
    }

    lenis.on("scroll", handleScroll)

    return () => {
      lenis.off("scroll", handleScroll)
    }
  }, [lenis])

  return progress
}
