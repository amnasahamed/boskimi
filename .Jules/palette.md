## 2024-05-18 - Missing ARIA attributes on custom mobile toggles
**Learning:** Custom interactive UI elements built directly in standard components (like the mobile menu toggle in ConstellationNav) often lack critical ARIA attributes (aria-expanded, aria-controls), unlike when built via established headless UI primitives.
**Action:** When inspecting manual toggle interactions not wrapped in Headless UI (like Radix), always check for correct ARIA bindings linking the trigger to its controlled view.
