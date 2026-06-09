import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Services",
  description:
    "AI agents, workflow automation, WhatsApp bots, app development, and IT consulting from Base of Stars.",
  path: "/services",
  image: "og-services.png",
})

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children
}
