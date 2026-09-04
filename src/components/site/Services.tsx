import { Icon, SectionHead } from "./Section";

const FEATURED = [
  {
    no: "01",
    tag: "Bespoke System",
    icon: "domain",
    title: "Business Websites",
    copy: "Modern, secure sites that establish authority and turn visitors into customers.",
    points: ["Brand-aligned visual narrative", "Lead capture + CRM hooks", "Sub-second rendering"],
    stack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    no: "02",
    tag: "Revenue Driven",
    icon: "shopping_cart",
    title: "E-Commerce Builds",
    copy: "High-converting stores with frictionless checkout and live inventory sync.",
    points: ["One-click checkout flows", "Stripe, PayPal & multi-currency", "Automated stock alerts"],
    stack: ["Shopify Plus", "WooCommerce", "GraphQL"],
  },
];

const SERVICES = [
  { no: "03", icon: "corporate_fare", title: "Corporate Portals", copy: "Scalable multi-department sites built for enterprise credibility.", tag: "Enterprise" },
  { no: "04", icon: "photo_library", title: "Portfolio Sites", copy: "Visual-first editorial layouts for studios and consultancies.", tag: "Storytelling" },
  { no: "05", icon: "campaign", title: "Landing Pages", copy: "Focused campaign pages built to maximise paid ad returns.", tag: "Conversion" },
  { no: "06", icon: "devices", title: "Responsive Design", copy: "Flawless from 320px phones to 4K widescreen displays.", tag: "Adaptive" },
  { no: "07", icon: "auto_fix_high", title: "Redesign & Upgrade", copy: "Modernise legacy sites without losing your SEO equity.", tag: "Modernisation" },
  { no: "08", icon: "support_agent", title: "Support & Care", copy: "Uptime monitoring, security patches, and guaranteed SLA response.", tag: "Dedicated SLA" },
  { no: "09", icon: "dns", title: "Domain & Hosting", copy: "Edge hosting with enterprise firewalls, SSL, and fast DNS.", tag: "Cloud" },
  { no: "10", icon: "trending_up", title: "SEO Engineering", copy: "Structured schemas, zero-CLS layouts, and sitemap automation.", tag: "Search" },
];

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-surface-lowest/50 py-20 lg:py-28">
      <div className="shell">
        <SectionHead
          eyebrow="02 / Services"
          title="Engineered web solutions for every business scale"
          subtitle="From commercial portals to headless storefronts — infrastructure that performs effortlessly."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {FEATURED.map((s) => (
            <article
              key={s.no}
              className="panel flex flex-col p-6 transition-colors hover:border-primary/40 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-tint">
                  {s.no} / Core Service
                </span>
                <span className="shrink-0 rounded-full border border-border bg-surface-low px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {s.tag}
                </span>
              </div>

              <div className="mt-6 grid h-12 w-12 place-items-center rounded-lg border border-primary/25 bg-primary/10">
                <Icon name={s.icon} className="text-2xl text-primary-tint" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>

              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Icon name="check_circle" className="mt-0.5 shrink-0 text-base text-primary-tint" />
                    <span className="min-w-0">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                {s.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface-low px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.no}
              className="panel flex h-full min-h-[220px] flex-col p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-3">
                <Icon name={s.icon} className="text-xl text-primary-tint" />
                <span className="font-mono text-[10px] text-muted-foreground/70">{s.no}</span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.copy}</p>
              <span className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-wider text-primary-tint">
                {s.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
