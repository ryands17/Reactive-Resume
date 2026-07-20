# Cover letter is a Custom Section, not a sibling document

A cover letter is stored inside the resume's data as a Custom Section of type `cover-letter`, rather than as a separate document with its own persistence, routes, and lifecycle. The document-level split happens only at export time: the Export Target (`resume` | `cover-letter`) filters the layout so each artifact renders as if the other's sections don't exist.

## Considered Options

- **Custom Section + Export Target (chosen)** — the cover letter shares the resume's template, typography, design metadata, versioning, and patch/undo machinery for free; one resume yields two artifacts with zero duplicated infrastructure.
- **Sibling document** — a first-class cover-letter entity. Cleaner conceptually, but duplicates persistence, sharing, styling, and editing surfaces, and breaks the "one resume, one design" pairing users expect.

## Consequences

- Export logic must partition the layout: `resume` exports exclude all cover-letter sections; `cover-letter` exports include only Visible ones (see `packages/resume/src/export-sections.ts`).
- Anything iterating "sections of the resume" (PDF templates, DOCX, importers, MCP tools) must be aware that cover-letter sections are not resume content in the usual sense.
- Deleting a resume deletes its cover letter; they cannot be shared or versioned independently.
