"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollContextType {
  lenis: Lenis | null
  scrollTo: (target: string | number | HTMLElement) => void
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
})

export function useSmoothScroll() {
  return useContext(SmoothScrollContext)
}

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Disable smooth scroll on mobile for better performance
    const isMobile = window.matchMedia("(max-width: 1024px)").matches
    if (isMobile) return

    const lenisInstance = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      lerp: 0.08,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenisInstance
    setLenis(lenisInstance)

    // Connect Lenis to GSAP ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update)

    // Use GSAP's ticker for the animation loop
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenisInstance.destroy()
      gsap.ticker.remove(lenisInstance.raf)
    }
  }, [])

  const scrollTo = (target: string | number | HTMLElement) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: 0, duration: 0.8 })
    } else {
      // Fallback for mobile
      if (typeof target === "string") {
        const el = document.querySelector(target)
        el?.scrollIntoView({ behavior: "smooth" })
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" })
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
