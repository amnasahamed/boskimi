import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "WhatsApp Automation",
  description:
    "Answer customers instantly on WhatsApp with AI-powered messaging, routing, and follow-up.",
  path: "/services/whatsapp",
  image: "og-whatsapp.png",
})

export default function WhatsAppLayout({ children }: { children: ReactNode }) {
  return children
}
