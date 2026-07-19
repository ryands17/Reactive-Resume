# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

This repo is **multi-context**: a pnpm/Turborepo monorepo with two apps (`apps/web`, `apps/server`) and many packages under `packages/*`, each with its own ownership boundary (see `AGENTS.md` for the placement decision tree and `docs/adr/0001-workspace-boundaries.md`).

## Before exploring, read these

- **`CONTEXT-MAP.md`** at the repo root — points at one `CONTEXT.md` per context (app or package). Read each one relevant to the topic.
- **`docs/adr/`** at the repo root — system-wide decisions (e.g. workspace boundaries, cross-cutting architecture).
- **`apps/<name>/docs/adr/`** or **`packages/<name>/docs/adr/`** — context-scoped decisions for that app/package. Read the ones that touch the area you're about to work in.

If any of these files don't exist, **proceed silently**. Don't flag their absence; don't suggest creating them upfront. The `/domain-modeling` skill (reached via `/grill-with-docs` and `/improve-codebase-architecture`) creates them lazily when terms or decisions actually get resolved.

## File structure

```
/
├── CONTEXT-MAP.md                     ← points to each context below
├── docs/adr/                          ← system-wide decisions
│   └── 0001-workspace-boundaries.md
├── apps/
│   ├── web/
│   │   ├── CONTEXT.md
│   │   └── docs/adr/                  ← web-app-specific decisions
│   └── server/
│       ├── CONTEXT.md
│       └── docs/adr/                  ← server-specific decisions
└── packages/
    ├── api/
    │   ├── CONTEXT.md
    │   └── docs/adr/
    ├── pdf/
    │   ├── CONTEXT.md
    │   └── docs/adr/
    └── ... (one context per package, added lazily as needed)
```

Not every app/package needs a `CONTEXT.md` up front — add one lazily, per the domain-modeling skill, when that context's terminology or decisions actually need pinning down.

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in the relevant `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

If the concept you need isn't in the glossary yet, that's a signal — either you're inventing language the project doesn't use (reconsider) or there's a real gap (note it for `/domain-modeling`).

## Flag ADR conflicts

If your output contradicts an existing ADR (system-wide or context-scoped), surface it explicitly rather than silently overriding:

> _Contradicts ADR-0007 (event-sourced orders) — but worth reopening because…_
