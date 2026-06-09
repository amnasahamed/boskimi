import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "App Creation",
  description:
    "Design and launch mobile and web apps with polished UX, robust backends, and AI-ready architecture.",
  path: "/services/app-creation",
  image: "og-app-creation.png",
})

export default function AppCreationLayout({ children }: { children: ReactNode }) {
  return children
}
