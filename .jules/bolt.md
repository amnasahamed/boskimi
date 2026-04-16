## 2024-05-18 - Canvas Resize Optimization
**Learning:** In React components that render large arrays of objects to a canvas on `window.resize` events, debouncing the entire resize handler causes visual distortion (stretching) during the resize because the canvas dimensions don't update until the debounce completes.
**Action:** When debouncing canvas resizes, update `canvas.width` and `canvas.height` immediately in the resize handler to keep the canvas responsive, and debounce only the computationally expensive operations (like re-initializing the array of objects).
