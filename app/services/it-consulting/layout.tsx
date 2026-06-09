import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "IT Consulting",
  description:
    "Strategic technology guidance, architecture reviews, and hands-on consulting from Base of Stars.",
  path: "/services/it-consulting",
  image: "og-it-consulting.png",
})

export default function ITConsultingLayout({ children }: { children: ReactNode }) {
  return children
}
