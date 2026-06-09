import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "ClapsBoard Case Study",
  description:
    "A digital whiteboard platform combining canvas tools, voice, and classroom collaboration.",
  path: "/case-studies/clapsboard",
  image: "og-clapsboard.png",
})

export default function ClapsBoardLayout({ children }: { children: ReactNode }) {
  return children
}
