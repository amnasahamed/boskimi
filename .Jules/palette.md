## 2024-05-13 - Accordion Accessibility Patterns
**Learning:** Expanding/collapsing UI components (like the FAQ accordion) implemented with custom logic (e.g., `framer-motion` + state) often miss critical ARIA attributes out of the box compared to using Radix primitives.
**Action:** Always verify that custom accordions explicitly map trigger buttons to their content wrappers using `aria-expanded`, `aria-controls` on the trigger, and `role="region"`, `aria-labelledby`, and matching `id`s on the content wrapper to ensure screen reader compatibility.
