import { products, statusLabel, type Product } from "@/lib/products";

const principles = [
  {
    title: "Finish things",
    body: "A product is only real when someone outside the studio depends on it. We ship small, then keep shipping.",
  },
  {
    title: "Own the stack",
    body: "We design, build, host and support our own products. No agency work, no feature factories.",
  },
  {
    title: "Earn trust slowly",
    body: "Clear pricing, no dark patterns, honest status pages. Boring on purpose where it matters.",
  },
  {
    title: "Think in decades",
    body: "Products get to grow for years rather than chase a quarter. We would rather be durable than loud.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Principles />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <Mark />
          <span className="text-[15px] font-semibold tracking-tight">
            Amanix Labs
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
          <a href="#products" className="hover:text-foreground">
            Products
          </a>
          <a href="#principles" className="hover:text-foreground">
            Principles
          </a>
          <a href="#founder" className="hover:text-foreground">
            Founder
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-4 py-1.5 text-foreground hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden>
      <rect
        x="1"
        y="1"
        width="24"
        height="24"
        rx="7"
        className="fill-accent"
      />
      <path
        d="M7 18.5 13 7l6 11.5M9.4 14h7.2"
        stroke="var(--accent-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-24 sm:pt-32">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          Independent product studio · est. 2026
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
          Small studio.
          <br />
          <span className="text-muted">Long horizon.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Amanix Labs builds focused software for people everywhere, and a
          children&apos;s store for families in Bangladesh. Few products, kept
          for years, made properly.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#products"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
          >
            See what we&apos;re building
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-muted"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Products"
          title="Four products, one studio."
          body="Three of them are for anyone in the world. One is for the kids next door."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Wrapper = product.url ? "a" : "div";
  const wrapperProps = product.url
    ? { href: product.url, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition hover:border-muted/60"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-20 blur-3xl transition group-hover:opacity-35"
        style={{ background: product.accent }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{product.tagline}</p>
        </div>
        <span
          className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px]"
          style={{ borderColor: product.accent, color: product.accent }}
        >
          {statusLabel[product.status]}
        </span>
      </div>
      <p className="relative mt-5 flex-1 text-[15px] leading-relaxed text-muted">
        {product.description}
      </p>
      <div className="relative mt-6 flex items-center justify-between font-mono text-xs text-muted">
        <span>{product.market}</span>
        {product.url ? (
          <span className="group-hover:text-foreground">
            {product.url.replace("https://", "")} →
          </span>
        ) : (
          <span>Coming soon</span>
        )}
      </div>
    </Wrapper>
  );
}

function Principles() {
  return (
    <section id="principles" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Principles"
          title="How we work."
          body="Written down so we can be held to it."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.title} className="bg-background p-7">
              <span className="font-mono text-xs text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Founder
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built by Aman Ullah.
          </h2>
        </div>
        <div className="space-y-5 text-[17px] leading-relaxed text-muted">
          <p>
            Amanix Labs is founded and run by Aman Ullah, a software engineer
            based in Bangladesh. The studio exists to build the products he
            kept wishing someone else would make, and to keep them alive long
            enough to matter.
          </p>
          <p>
            Today it is a founder-led studio with a small circle of
            collaborators. It will grow when the products demand it, not
            before.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="rounded-3xl border border-border bg-background p-10 sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Say hello.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Partnerships, press, a bug you found, or you just want to talk
            about one of the products. One inbox, read by a human.
          </p>
          <a
            href="mailto:hello@amanixlabs.com"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
          >
            hello@amanixlabs.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Mark />
          <span>© {new Date().getFullYear()} Amanix Labs</span>
        </div>
        <div className="flex flex-wrap gap-6">
          {products.map((p) => (
            <span key={p.slug}>{p.name}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionHead({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-muted">{body}</p>
    </div>
  );
}
