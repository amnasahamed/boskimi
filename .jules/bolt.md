
## 2024-04-24 - Memoizing with invariants
**Learning:** In Next.js client components like `stellar-portfolio.tsx`, state-dependent filters can cause `O(N)` repeated string operations (like `.toLowerCase()`) per render if invariants aren't hoisted outside the array callback.
**Action:** Always hoist invariant transformations out of `.map()` or `.filter()` callbacks before memoizing with `useMemo`.
