# Graftwork app template

A starting point for Graftwork apps. Create a new repository from this template on GitHub, then replace the sample page with your app's first screen.

## What's set up

- **Next.js** (App Router) with strict TypeScript.
- **Components:** `@graftwork/ui`, with its stylesheet and Geist, imported in `app/globals.css`.
- **Theme toggle:** in the header. Light, dark and high contrast follow the operating system until the user chooses.
- **Sample page:** `app/page.tsx`, which uses every component. Its `ComponentShowcase` comes from `@graftwork/ui/showcase`, so new components appear when the package updates.
- **Checks on every pull request:** lint (including `jsx-a11y` and the design-system rules), build, type-check, Playwright journeys with axe, and visual snapshots at 320, 768 and 1280px in every theme.
- **Renovate:** extends the shared preset from the design system. Design-system releases arrive as one pull request, and minor and patch updates merge themselves when checks pass. On that pull request, a workflow refreshes the visual snapshots, because design-system visual changes are reviewed in the design-system repo. The refreshed images are attached to the run for anyone who wants to look.
- **Blocks:** whole page layouts (log-in pages, sidebars and so on) in `app/blocks/`, rebuilt from shadcn/ui's blocks with `@graftwork/ui`. Browse them at `/blocks`. See `BLOCKS.md`.
- **`CLAUDE.md`:** the rules for building with the design system.

## After creating a repository from this template

1. **Protect `main`:** require pull requests and these checks: `Build and type-check` and `End-to-end, axe and visual snapshots`.
2. **Turn on auto-merge:** Settings → General → **Allow auto-merge**, so Renovate can merge its own pull requests.
3. **Create the label:** add an `update-snapshots` label.

## Working on it

```bash
pnpm install
```

```bash
pnpm dev
```

```bash
pnpm build:test && pnpm test:e2e
```

### The block gallery

`/blocks` is on in development (`pnpm dev`) and in the test build (`pnpm build:test`). A production build (`pnpm build`) returns 404 for `/blocks` and `/blocks/preview/*` unless you set `GRAFTWORK_BLOCKS_GALLERY=enabled` when building. Delete `app/blocks` once your app no longer needs the blocks.
