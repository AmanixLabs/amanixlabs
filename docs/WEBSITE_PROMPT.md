# Prompt: build / iterate on amanixlabs.com

Paste the block below into Claude (Claude Code or claude.ai) whenever you want
it to build or redesign the Amanix Labs site. Edit the bracketed bits first.

---

```
You are building the public website for Amanix Labs (amanixlabs.com), an
independent product studio founded in 2026 by Amanullah, a software engineer
based in Bangladesh.

## What Amanix Labs is
A small, founder-led studio that designs, builds, hosts and supports its own
products. Not an agency. It thinks in decades, ships small and often, and is
deliberately boring where trust matters (clear pricing, no dark patterns,
public status pages). Tone: calm, confident, plain English, no startup hype,
no exclamation marks.

## Products (all currently "in development")
1. GoalZen — global — calm goal & habit tracker, web + mobile. "Goals that
   actually get finished."
2. NestMarks — global — bookmarks, highlights and notes that stay organised
   without a filing system. "A home for everything you meant to read."
3. SiteChek — global — uptime, performance, SEO and accessibility checks in one
   report for indie makers and small teams. "Know your site is healthy before
   your users do."
4. NeelGhuri (neelghuri.com) — Bangladesh — online store for safe, well-made
   toys and learning kits for kids. "Thoughtful toys for curious kids in
   Bangladesh."

## Pages / sections
- Home: hero ("Small studio. Long horizon."), product grid with status
  badges, principles (Finish things / Own the stack / Earn trust slowly /
  Think in decades), founder note, contact (hello@amanixlabs.com), footer.
- /privacy: plain-language privacy policy (no tracking cookies; privacy-first
  analytics only).
- [Optional] /goalzen, /nestmarks, /sitechek, /neelghuri: one page each with
  a waitlist form.
- [Optional] /letters: yearly founder letters, markdown-driven.

## Stack & constraints
- Next.js (App Router, latest), TypeScript, Tailwind CSS v4, deployed on
  Vercel. No CMS; content lives in typed data files (`lib/products.ts`).
- Dark theme by default; design tokens defined in `app/globals.css` as CSS
  variables and mapped via `@theme inline`. Accent: mint #7cf3c4 on ink
  #0b0d12. Fonts: Geist Sans + Geist Mono.
- Must be fast (Lighthouse ≥ 95 all categories), accessible (semantic HTML,
  visible focus states, AA contrast), responsive down to 360px.
- Full SEO metadata, Open Graph image, sitemap.xml, robots.txt, JSON-LD
  Organization schema.
- No fake content: never claim team size, customers, revenue or awards that
  don't exist. Use "in development" / "coming soon" honestly.
- Do not use "Inc", "Ltd" or any legal suffix until told the entity name.

## Design direction
Distinctive, not template-like. Think editorial lab notebook: generous
whitespace, mono-font eyebrows and status labels, subtle grid-line
background, soft per-product accent glows on cards. Avoid stock-SaaS
gradients and 3D illustrations.

## Deliverables
Working code in the existing repo (github.com/amanixlabs/amanixlabs),
committed in small logical commits, `pnpm build` passing, and a short note of
what changed and what still needs a human decision.
```
