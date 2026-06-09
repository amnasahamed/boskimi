import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "AI Agents",
  description:
    "Deploy custom AI agents that qualify leads, support customers, and automate conversations around the clock.",
  path: "/services/ai-agents",
  image: "og-ai-agents.png",
})

export default function AIAgentsLayout({ children }: { children: ReactNode }) {
  return children
}
