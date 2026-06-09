import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Meet the Base of Stars team building AI agents, automation, and digital products for businesses worldwide.",
  path: "/about",
  image: "og-about.png",
})

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
