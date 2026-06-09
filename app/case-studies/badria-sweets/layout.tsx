import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Badria Sweets Case Study",
  description:
    "WhatsApp automation that streamlined ordering and customer support for a growing sweets brand.",
  path: "/case-studies/badria-sweets",
  image: "og-badria-sweets.png",
})

export default function BadriaSweetsLayout({ children }: { children: ReactNode }) {
  return children
}
