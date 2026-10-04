# Amanix Labs — Roadmap 2026 → 2031

Amanix Labs is an independent product studio. Three global software products
(GoalZen, NestMarks, SiteChek) and one local commerce business (NeelGhuri,
Bangladesh). This document is the long view; the per-project checklists hold
the week-to-week work.

Dates are targets, not promises. Revisit every quarter; rewrite every year.

---

## North star

By 2031 Amanix Labs is a profitable, founder-controlled studio with:

- at least two products each earning enough to fund a small dedicated team,
- a reputation for products that are calm, honest and long-lived,
- NeelGhuri as a trusted household name for children's goods in Bangladesh,
- the option (never the obligation) to raise money, sell a product, or stay
  exactly as it is.

Guardrails: no outside equity in the studio itself before 2028; no product
launched that the founder would not personally use; every product has a
public status page and a human-answered inbox from day one.

---

## Phase 0 — Foundation (Q4 2026)

**Goal: a legal entity, a brand, and one public face.**

- [ ] Register the studio as a legal entity in Bangladesh (Private Limited via
      RJSC is the default; confirm with a CA — trade licence, TIN, BIN/VAT as
      required). Owner: Aman
- [ ] Open a company bank account; set up a merchant-of-record
      (Paddle or Lemon Squeezy) for global payments so VAT/sales tax is
      handled for us. Owner: Aman
- [ ] Trademark search for "Amanix Labs", "GoalZen", "NestMarks",
      "SiteChek", "NeelGhuri" in BD + USPTO/EUIPO watchlist. Owner: Aman
- [x] Buy amanixlabs.com. Owner: Aman
- [ ] Ship amanixlabs.com v1 (this repo) on Vercel. Owner: Claude
- [ ] Set up Google Workspace on amanixlabs.com (hello@, founder@, billing@,
      support@ as aliases). Owner: Aman
- [ ] GitHub organisation `amanixlabs`; transfer goalzen, neelghuri,
      site-check, amanixlabs. Owner: both
- [ ] Shared design tokens + logo files in a `brand/` folder of this repo.
      Owner: Claude
- [ ] One status page for all products (Better Stack or similar). Owner: Claude
- [ ] Studio-wide analytics (Plausible or PostHog, privacy-first) and error
      tracking (Sentry) accounts. Owner: Claude

**Exit criteria:** entity exists, money can be received globally and locally,
amanixlabs.com is live and lists all four products.

---

## Phase 1 — First launches (2027 H1)

**Goal: every product has real users; one of them has paying users.**

### NeelGhuri (local, launches first — needs the entity for liability)
- [ ] Storefront live with 50–100 SKUs, bKash/Nagad/card checkout, Dhaka
      delivery. Owner: Claude (build), Aman (sourcing, ops)
- [ ] Product-safety and returns policy published. Owner: Aman
- [ ] First 100 orders; collect NPS on every delivery. Owner: Aman

### SiteChek (fastest to revenue — B2B, clear pain)
- [ ] Public beta: uptime + Lighthouse + SEO + accessibility report. Owner: Claude
- [ ] Free tier + one paid plan; launch on Product Hunt, Hacker News,
      indie communities. Owner: both
- [ ] Target: 20 paying customers by June 2027.

### GoalZen (web + mobile)
- [ ] Web beta with waitlist; iOS/Android via Expo behind it. Owner: Claude
- [ ] App Store / Play Store org accounts under the entity (D-U-N-S for
      Apple). Owner: Aman
- [ ] Target: 1,000 free users, learn before pricing.

### NestMarks
- [ ] Browser extension + web app MVP. Owner: Claude
- [ ] Decide positioning: personal read-later vs. team knowledge. Owner: Aman

**Exit criteria:** ≥1 product with MRR > $500; NeelGhuri doing repeat orders.

---

## Phase 2 — Traction (2027 H2 → 2028)

**Goal: product-market fit on two products; first hire.**

- [ ] Double down on whichever global product has the best retention;
      slow the others to maintenance if needed. Owner: Aman
- [ ] First full-time hire (support/ops for NeelGhuri or an engineer for the
      winning SaaS). Owner: Aman
- [ ] Shared Amanix account: one login across GoalZen/NestMarks/SiteChek
      (own auth or Clerk/WorkOS). Owner: Claude
- [ ] NeelGhuri: nationwide delivery, own warehouse or 3PL in Dhaka,
      private-label first product line. Owner: Aman
- [ ] SiteChek: team plans, API, agency partners. Owner: Claude
- [ ] GoalZen: paid tier, coaching/community experiments. Owner: both
- [ ] Publish a yearly "Amanix Labs letter" on the website. Owner: Aman

**Exit criteria:** studio MRR ≥ $5k; NeelGhuri monthly gross ≥ BDT 10 lakh.

---

## Phase 3 — Scale & systems (2029)

**Goal: the studio runs without the founder in every loop.**

- [ ] Team of 5–8 across engineering, support, ops. Owner: Aman
- [ ] Documented playbooks: launch, support, incident, pricing changes.
      Owner: both
- [ ] Amanix Labs internal platform: shared billing, auth, analytics, status,
      email — the "studio OS" every product sits on. Owner: Claude
- [ ] Explore a fifth product only if it reuses the studio OS. Owner: Aman
- [ ] NeelGhuri: physical pop-up or flagship store in Dhaka; wholesale to
      schools. Owner: Aman
- [ ] Consider international entity (US LLC or UK Ltd) for the SaaS line if
      payment, hiring or fundraising needs it. Owner: Aman

**Exit criteria:** studio profitable with payroll; founder time < 50% on ops.

---

## Phase 4 — Compounding (2030 → 2031)

**Goal: durable, optional, valuable.**

- [ ] One product at $50k+ MRR or a clear path to it.
- [ ] Decide deliberately per product: keep, sell, spin out, or sunset with
      grace (data export, 12-month notice).
- [ ] NeelGhuri as a brand: own product line, regional expansion (Chattogram,
      Sylhet), possibly South Asia.
- [ ] Amanix Labs Foundation or giving pledge (fixed % of profit) — decide
      in 2030.
- [ ] Rewrite this roadmap for 2031 → 2036.

---

## Standing rules (every year)

- Every product: status page, changelog, privacy policy, export-your-data.
- Every quarter: review this file, kill or pause one thing.
- Every year: public letter, pricing review, security review.
- Never: dark patterns, selling user data, fake urgency, fake reviews.
