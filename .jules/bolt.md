## 2024-05-18 - [Optimizing Array Filtering in React Renders]
**Learning:** Found an `O(N)` repeated operation (`searchQuery.toLowerCase()`) running unnecessarily within an `Array.filter()` callback during component renders.
**Action:** Always hoist invariant string transformations or object lookups out of array mapping/filtering loops when memoizing derived state with `useMemo`.
