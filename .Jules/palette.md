## 2024-05-24 - Form Input Label Association
**Learning:** React custom components and forms in this project occasionally omit `htmlFor` attributes on visual `<label>` elements despite being semantically present. This breaks the expected interaction behavior where clicking a label focuses the associated input element, which is a key accessibility standard.
**Action:** Always proactively search for `<label>` tags and ensure they are explicitly linked to an `<input>` or `<textarea>` via matching `id` and `htmlFor` props when touching or reviewing form components.
