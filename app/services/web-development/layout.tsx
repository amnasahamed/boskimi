import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Web Development",
  description:
    "Modern, high-performance websites and web applications built with Next.js, React, and scalable architecture.",
  path: "/services/web-development",
  image: "og-web-development.png",
})

export default function WebDevelopmentLayout({ children }: { children: ReactNode }) {
  return children
}
