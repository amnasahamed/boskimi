import type { ReactNode } from "react"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Workflow Automation",
  description:
    "Connect your tools, automate repetitive work, and build reliable end-to-end business workflows.",
  path: "/services/workflows",
  image: "og-workflows.png",
})

export default function WorkflowsLayout({ children }: { children: ReactNode }) {
  return children
}
