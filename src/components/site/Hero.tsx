import { Icon } from "./Section";

const STATS = [
  { value: "100", unit: "/100", label: "Core Web Vitals" },
  { value: "<0.4", unit: "s", label: "Global TTFB" },
  { value: "99.99", unit: "%", label: "Uptime" },
];

const CODE: Array<[string, string]> = [
  ["01", "export async function buildGrowth(client) {"],
  ["02", "  const stack = await hydrate({"],
  ["03", "    rendering: 'Edge-SSR',"],
  ["04", "    speedIndex: 0.42,"],
  ["05", "    seo: 'Dynamic Graph',"],
  ["06", "    security: 'TLSv1.3'"],
  ["07", "  });"],
  ["08", "  return stack.scale({ lift: '+240%' });"],
  ["09", "}"],
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="shell grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-tint">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            High-Performance Web Architecture
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Digital experiences that drive{" "}
            <span className="text-primary-tint">business growth</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            We build premium websites that strengthen brands, generate quality leads, and help
            businesses grow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#inquiry"
              className="glow-ring group inline-flex h-12 items-center justify-center rounded-lg border border-primary-tint/30 bg-primary px-6 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Free Quote
              <Icon
                name="arrow_forward"
                className="ml-2 text-lg transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-surface-low px-6 font-display text-sm font-medium text-foreground transition-colors hover:border-input"
            >
              Explore Services
              <Icon name="south" className="ml-2 text-lg text-muted-foreground" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {STATS.map((s) => (
              <div key={s.label} className="min-w-0">
                <dd className="font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                  {s.value}
                  <span className="text-sm font-normal text-primary-tint">{s.unit}</span>
                </dd>
                <dt className="mt-1 truncate font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="panel overflow-hidden shadow-[var(--shadow-panel)]">
            <div className="flex h-11 items-center justify-between gap-3 border-b border-border bg-surface-low px-4">
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              </div>
              <span className="min-w-0 truncate rounded border border-border bg-surface px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
                elexperto.io/architecture
              </span>
              <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] text-primary-tint">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                LIVE
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className="text-primary-tint">Viewport 1440 × 900</span>
              <span className="hidden sm:inline">Desk · Tab · Mob</span>
            </div>

            <div className="space-y-1.5 bg-surface-lowest p-5 font-mono text-[12px] leading-relaxed text-secondary-foreground/80">
              {CODE.map(([n, line]) => (
                <div key={n} className="flex gap-3">
                  <span className="select-none text-muted-foreground/60">{n}</span>
                  <span className="whitespace-pre text-foreground/75">{line}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-border bg-surface-low p-4">
              {[
                { label: "Edge TTFB", value: "14ms", pct: "90%" },
                { label: "Lighthouse", value: "100", pct: "100%" },
              ].map((m) => (
                <div key={m.label} className="min-w-0 space-y-1.5">
                  <div className="truncate font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-high">
                      <div className="h-full bg-primary" style={{ width: m.pct }} />
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-foreground">
                      {m.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-surface-lowest/80">
        <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
          {[
            "Premium Design",
            "Mobile-First",
            "High Performance",
            "Secure Architecture",
            "Long-Term Support",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
