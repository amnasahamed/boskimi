## 2024-04-20 - React Forms & ID Generation for A11y
**Learning:** When building custom React forms that bypass standard design system wrappers or higher-order components, standard `id` string literals can cause SSR hydration warnings and collision issues if the component is reused.
**Action:** Always use React's `useId()` hook to generate unique IDs for binding `<label htmlFor>` and `<input id>` attributes to guarantee clean hydration and perfect screen reader accessibility.
