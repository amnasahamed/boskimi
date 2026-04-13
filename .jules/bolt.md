## 2024-04-13 - Debouncing Canvas Resizing Properly

**Learning:** When debouncing canvas resizes, it's not enough to simply delay the `resizeCanvas` call, as the browser will visually squish/stretch the `<canvas>` element if its `width`/`height` CSS properties are dynamically adjusted before the internal rendering context's width/height are matching.
**Action:** When debouncing the `resize` event for `<canvas>`, update `canvas.width` and `canvas.height` *immediately* on the event to clear stretching, but wrap the expensive data regeneration (like `initStars` array creation) in the `setTimeout` to prevent UI thread locking.
