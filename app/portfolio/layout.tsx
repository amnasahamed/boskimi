import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Explore Base of Stars projects across AI, automation, apps, and digital transformation.",
  path: "/portfolio",
  image: "og-portfolio.png",
})

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children
}
