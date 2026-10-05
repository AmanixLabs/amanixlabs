# amanixlabs.com

Public website for **Amanix Labs**, an independent product studio building
GoalZen, NestMarks, SiteChek and NeelGhuri.

- [`ROADMAP.md`](ROADMAP.md) — the 2026 → 2031 studio plan
- [`CHECKLIST.md`](CHECKLIST.md) — launch checklist for this site
- [`docs/WEBSITE_PROMPT.md`](docs/WEBSITE_PROMPT.md) — reusable prompt for
  iterating on the site with Claude

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Vercel

## Develop

```bash
pnpm install
pnpm dev
```

Content lives in [`lib/products.ts`](lib/products.ts) and
[`app/page.tsx`](app/page.tsx). Design tokens are in
[`app/globals.css`](app/globals.css).

> **Deploying?** Vercel auto-deploy is currently broken for every AmanixLabs-org repo (Hobby plan + private org repo). See `../VERCEL_MANUAL_DEPLOY.md` for the manual deploy command.
