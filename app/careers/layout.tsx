import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Explore open roles at Base of Stars and help build AI systems that solve real business problems.",
  path: "/careers",
  image: "og-careers.png",
})

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children
}
