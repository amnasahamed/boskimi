## 2024-03-23 - Added ARIA labels to WhatsAppPulse buttons
**Learning:** Icon-only buttons in complex components like the simulated chat interface (`WhatsAppPulse`) often lack context for screen readers. While visually clear to sighted users, adding `aria-label`s makes these crucial interaction points accessible without compromising the design.
**Action:** When implementing or reviewing chat interfaces or similar complex components, always ensure that all interactive elements, especially icon-only buttons for actions like "send" or "attach", have descriptive `aria-label` attributes.
