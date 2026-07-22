# Context Map

## Contexts

- [Resume Core](./packages/schema/CONTEXT.md) — the resume content model and its vocabulary; defined in `packages/schema`, shared with `packages/resume`

Other contexts (PDF rendering, web builder, API, auth) get a `CONTEXT.md` lazily when their terminology needs pinning down.

## Relationships

- **Resume Core → everything**: `packages/pdf`, `packages/docx`, `packages/api`, `packages/mcp`, and `apps/web` all consume Resume Core's types and vocabulary. Use its terms verbatim in those contexts.
- **Resume Core ↔ PDF**: the Visible/Hidden distinction is enforced by shared PDF filtering; PDF templates must not redefine visibility.
