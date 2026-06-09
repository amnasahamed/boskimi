import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Navakeralam Case Study",
  description:
    "How Base of Stars built a citizen response platform for the Government of Kerala with AI-powered triage.",
  path: "/case-studies/navakeralam",
  image: "og-navakeralam.png",
})

export default function NavakeralamLayout({ children }: { children: ReactNode }) {
  return children
}
