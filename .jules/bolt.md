## 2024-05-25 - High-Frequency Canvas State Updates
**Learning:** In components rendering continuous animations (e.g., `global-impact.tsx`), using chained array methods like `.map().filter()` inside rapid `setInterval` loops (e.g., every 50ms) creates significant garbage collection pressure by constantly allocating intermediate arrays.
**Action:** Always prefer single-pass transformations using a standard `for` loop or `reduce` when updating state arrays in high-frequency hot paths to minimize redundant memory allocations.
