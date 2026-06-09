import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Case Studies",
  description:
    "See how Base of Stars delivers measurable results with AI agents, workflows, and custom platforms.",
  path: "/case-studies",
  image: "og-case-studies.png",
})

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return children
}
