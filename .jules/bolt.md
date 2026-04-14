## 2024-05-18 - Canvas Resizing Optimization

**Learning:** Un-debounced window `resize` event listeners performing complex canvas math and massive particle object initializations synchronously will immediately throttle the main thread causing significant UI lag on Next.js/React. However, entirely debouncing the `canvas.width` update causes severe image stretching because the canvas maintains its old aspect ratio until the debounce resolves.

**Action:** Always immediately update raw `canvas.width/height` dimensions to keep visuals crisp, but decouple and `setTimeout()` debounce only the heavy object array reallocation loops inside the resize listener.
