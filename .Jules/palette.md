## 2025-04-07 - [Missing Label Associations in ConnectionPortal]
**Learning:** Found that custom forms built without relying on Radix/Shadcn's `Form` and `FormControl` primitives (like `ConnectionPortal`) were missing critical accessibility markup, specifically `htmlFor` and `id` linking between labels and inputs.
**Action:** Always scan custom form components specifically to ensure they implement standard ARIA and semantic form markup when they eschew the project's default accessible component wrappers.
