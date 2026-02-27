"use client"

import { PageTransition } from "./page-transition"
import { SmoothScrollProvider, useSmoothScroll } from "./smooth-scroll"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </PageTransition>
  )
}

export { useSmoothScroll }
