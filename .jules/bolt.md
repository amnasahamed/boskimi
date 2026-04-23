## 2024-05-14 - Canvas Background Resize Jank
**Learning:** In canvas-based animated components (like `StarfieldBackground` and `CosmicDust`), recalculating and rebuilding the entire particle array on every tick of a `window.resize` event causes massive main-thread blocking and frame drops.
**Action:** Always decouple dimension updates from array re-initialization. Apply `canvas.width`/`height` immediately on resize to prevent stretching/skewing, but debounce the expensive particle array rebuild (e.g., using `setTimeout`) to only run once resizing has settled.
