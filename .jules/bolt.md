## 2024-05-24 - Canvas Resize Array Re-initialization
**Learning:** In canvas-based background animations (like `StarfieldBackground` and `CosmicDust`), un-debounced `window.resize` listeners cause excessive, redundant array re-initializations (e.g., re-creating thousands of particle objects on every pixel of resize), leading to severe main-thread blocking and CPU spikes.
**Action:** Always wrap `resizeCanvas` and similar initializations in a 200ms debounce, while keeping an immediate, synchronous call on mount to prevent initial blank canvases.
