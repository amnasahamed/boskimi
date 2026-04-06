## 2024-04-06 - Debounce Canvas Resize Handlers
**Learning:** Running costly array re-initializations inside synchronous `window.resize` event listeners for animated canvas backgrounds (like StarfieldBackground and CosmicDust) can cause noticeable performance spikes and jank.
**Action:** When using `<canvas>` for background animations, always debounce `window.resize` event listeners (e.g., using a 200ms `setTimeout`) to prevent excessive array re-initialization and CPU spikes, while keeping the initial setup execution immediate.
