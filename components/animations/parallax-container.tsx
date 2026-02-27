"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  offset?: number
}

export function ParallaxContainer({
  children,
  className = "",
  offset = 100,
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

interface ParallaxLayerProps {
  children: React.ReactNode
  className?: string
  speed?: number // Negative = slower (behind), Positive = faster (in front)
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const getTransform = () => {
    const distance = 100 * speed
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], [distance, -distance])
      case "down":
        return useTransform(scrollYProgress, [0, 1], [-distance, distance])
      case "left":
        return useTransform(scrollYProgress, [0, 1], [distance, -distance])
      case "right":
        return useTransform(scrollYProgress, [0, 1], [-distance, distance])
      default:
        return useTransform(scrollYProgress, [0, 1], [distance, -distance])
    }
  }

  const transform = getTransform()

  const style =
    direction === "left" || direction === "right"
      ? { x: transform }
      : { y: transform }

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  )
}

// Advanced parallax with multiple layers
interface MultiLayerParallaxProps {
  layers: {
    children: React.ReactNode
    speed: number
    direction?: "up" | "down" | "left" | "right"
    className?: string
  }[]
  className?: string
}

export function MultiLayerParallax({
  layers,
  className = "",
}: MultiLayerParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={ref} className={`relative ${className}`}>
      {layers.map((layer, index) => {
        const distance = 100 * layer.speed
        const direction = layer.direction || "up"

        let transform
        switch (direction) {
          case "up":
            transform = useTransform(scrollYProgress, [0, 1], [distance, -distance])
            break
          case "down":
            transform = useTransform(scrollYProgress, [0, 1], [-distance, distance])
            break
          case "left":
            transform = useTransform(scrollYProgress, [0, 1], [distance, -distance])
            break
          case "right":
            transform = useTransform(scrollYProgress, [0, 1], [-distance, distance])
            break
        }

        const style =
          direction === "left" || direction === "right"
            ? { x: transform }
            : { y: transform }

        return (
          <motion.div
            key={index}
            style={style}
            className={`${layer.className || ""} ${index === 0 ? "" : "absolute inset-0"}`}
          >
            {layer.children}
          </motion.div>
        )
      })}
    </div>
  )
}
