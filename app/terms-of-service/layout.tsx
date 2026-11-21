import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern use of the Base of Stars website and services, including our WhatsApp Business Platform solutions.",
  path: "/terms-of-service",
})

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children
}
