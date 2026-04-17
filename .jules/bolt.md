## 2024-05-18 - Playwright QuerySelector Escaping with Tailwind
**Learning:** When using `page.evaluate()` in Playwright to run `document.querySelector` on elements styled with Tailwind arbitrary values (e.g., `z-[-1]`), the backslashes required to escape the brackets in JavaScript string literals can become convoluted when passed through Python.
**Action:** Avoid complex class selectors with brackets. Instead, use generic tag names (like `canvas`), data attributes, or simple classes, and filter the resulting NodeList array if necessary.
