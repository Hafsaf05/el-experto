import { Icon, SectionHead } from "./Section";

const PILLARS = [
  { icon: "palette", title: "Creativity", copy: "Bespoke art direction" },
  { icon: "code", title: "Technology", copy: "Resilient edge stacks" },
  { icon: "insights", title: "Strategy", copy: "Goal-driven conversion" },
  { icon: "speed", title: "Performance", copy: "Sub-second execution" },
  { icon: "verified_user", title: "Security", copy: "Hardened architecture" },
  { icon: "handshake", title: "Support", copy: "Ongoing SLA care" },
];

const SCORES = [
  { value: "100", label: "Performance" },
  { value: "100", label: "SEO" },
  { value: "100", label: "Accessibility" },
];

export function About() {
  return (
    <section id="about" className="shell py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHead
            eyebrow="01 / Who We Are"
            title={
              <>
                We don&rsquo;t just build websites.
                <br />
                <span className="text-primary-tint">We build digital growth.</span>
              </>
            }
            subtitle="A website development company built for businesses that need more than a template. We learn your brand, your audience, and your goals first — then engineer around them."
          />

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="panel flex h-[104px] flex-col justify-between p-4 transition-colors hover:border-primary/40"
              >
                <Icon name={p.icon} className="text-xl text-primary-tint" />
                <div className="min-w-0">
                  <div className="truncate font-display text-sm font-semibold text-foreground">
                    {p.title}
                  </div>
                  <div className="truncate font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    {p.copy}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 lg:col-span-6">
          <div className="panel p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="font-display text-sm font-semibold text-foreground">
                  Standard Audit Index
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Verified on Lighthouse 11.x
                </div>
              </div>
              <Icon name="verified" className="shrink-0 text-2xl text-primary-tint" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {SCORES.map((s) => (
                <div key={s.label} className="rounded-lg bg-surface-low p-4 text-center">
                  <div className="font-display text-2xl font-bold text-primary-tint">
                    {s.value}
                  </div>
                  <div className="mt-1 truncate font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel bg-surface-low p-6">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Average client lead growth
            </div>
            <div className="mt-2 font-display text-5xl font-bold tracking-tight text-foreground">
              +240<span className="text-primary-tint">%</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Measured over 12 months post-launch across clean information architecture, semantic
              SEO, and instant load speeds.
            </p>
          </div>

          <div className="panel divide-y divide-border">
            {[
              ["Global header / micro-routing", "0.02ms"],
              ["Semantic hero & conversion triggers", "Cached edge"],
              ["Commerce sync & payment node", "ISO-ready"],
            ].map(([label, tag]) => (
              <div key={label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                <span className="min-w-0 truncate text-sm text-foreground/85">{label}</span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-primary-tint">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
