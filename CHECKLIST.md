# amanixlabs.com — Launch checklist

Owner key: **Aman** · **Claude** · **both**

Live dashboard: https://claude.ai/artifact/B45NhPtYJJTgwZy4Hg22UC

## Repo & infra
- [x] Scaffold Next.js 16 + Tailwind 4 site — Claude
- [x] Landing page v1 (hero, products, principles, founder, contact) — Claude
- [x] SEO basics: metadata, sitemap, robots — Claude
- [x] Services section: web, mobile, AI, data — Claude
- [ ] Redeploy after the Services section (`vercel --prod --yes`) — Aman
- [x] Create GitHub org `AmanixLabs` — Aman
- [x] Create `AmanixLabs/amanixlabs` and push — both
- [x] Transfer goalzen, neelghuri, site-check, nest-marks, plan repo into the org — Claude
- [x] Create Vercel project `amanixlabs` — Claude
- [x] First production deploy (aliased to amanixlabs.com, waiting on DNS) — Aman
- [ ] Install the Vercel GitHub app on the AmanixLabs org so pushes deploy — Aman
- [ ] Reconnect Git in the Vercel projects for goalzen, neelghuri, site-check after the transfer — both
- [x] Add amanixlabs.com + www redirect to the Vercel project — Claude
- [ ] DNS at Cloudflare: `A @ 76.76.21.21`, `CNAME www cname.vercel-dns.com`, proxy off — Aman

## Content
- [ ] Confirm product taglines/descriptions in `lib/products.ts` — Aman
- [ ] Decide spelling: SiteCheck (repo) or SiteChek — Aman
- [ ] Confirm status badges (GoalZen and NestMarks shown as Beta) — Aman
- [x] Founder paragraph: Aman Ullah — Aman
- [ ] Set up hello@amanixlabs.com mailbox — Aman
- [ ] OG image (1200×630) in `public/og.png` — Claude
- [ ] Favicon + logo SVG in `public/` and `brand/` — Claude

## Legal & trust
- [ ] Privacy policy page — Claude (draft), Aman (review)
- [ ] Legal entity name in footer once registered — Aman
- [ ] Cookie-free analytics (Plausible) — Claude

## Later
- [ ] Per-product pages (`/goalzen`, `/nestmarks`, `/sitecheck`, `/neelghuri`) — Claude
- [ ] Changelog / yearly letters section — both
- [ ] Studio status page link — Claude
