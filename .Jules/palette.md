## 2024-04-10 - Form Label Associations
**Learning:** Form inputs without explicitly associated labels (using `id` and `htmlFor`) are a recurring accessibility issue, particularly in mock forms or connection portals. Visual proximity is not enough for screen readers.
**Action:** Always ensure form accessibility by explicitly associating `<label>` elements with their respective `<input>` or `<textarea>` elements using matching `htmlFor` and `id` attributes.
