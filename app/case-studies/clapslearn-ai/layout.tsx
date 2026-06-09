import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "ClapsLearn Case Study",
  description:
    "An AI tutoring platform that personalizes learning paths and scales student support automatically.",
  path: "/case-studies/clapslearn-ai",
  image: "og-clapslearn.png",
})

export default function ClapsLearnLayout({ children }: { children: ReactNode }) {
  return children
}
