import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Base of Stars collects, uses, shares and protects personal data, including data processed through the WhatsApp Business Platform.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return children
}
