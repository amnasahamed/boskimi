import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "AI Solutions",
  description:
    "End-to-end AI systems designed, built, and integrated for your business workflows and growth goals.",
  path: "/services/ai-solutions",
  image: "og-ai-solutions.png",
})

export default function AISolutionsLayout({ children }: { children: ReactNode }) {
  return children
}
