## 2024-03-29 - [Debounce Canvas Resize]
**Learning:** When using `<canvas>` for background animations, `window.resize` event listeners can cause excessive array re-initialization and CPU spikes, especially if they recreate the entire particle/star array on every resize event.
**Action:** Always debounce `window.resize` event listeners (e.g., using a 200ms `setTimeout`) for canvas-based background animations that involve array recreation to prevent performance degradation and layout thrashing.
