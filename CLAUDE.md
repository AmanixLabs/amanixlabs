@AGENTS.md

# Project notes

- This is the studio website for Amanix Labs (amanixlabs.com). Product data is
  in `lib/products.ts`; the whole landing page is `app/page.tsx`.
- Design tokens live in `app/globals.css` (`:root` vars mapped via
  `@theme inline`). Don't hardcode colours in components beyond per-product
  `accent` values.
- Honesty rule: never add claims about team size, customers, revenue or legal
  entity status that aren't confirmed by Aman.
- Long-term plan: `ROADMAP.md`. Site tasks: `CHECKLIST.md` (owner per item).
- Package manager: pnpm. Run `pnpm build` before committing.
