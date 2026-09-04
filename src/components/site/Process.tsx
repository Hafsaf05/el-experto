import { Icon, SectionHead } from "./Section";

const STEPS = [
  { no: "01", icon: "search", title: "Discovery", copy: "Sessions to map your model, audience, and KPIs.", out: "Project charter" },
  { no: "02", icon: "schema", title: "Planning", copy: "Site structure, wireframes, and stack selection.", out: "System blueprint" },
  { no: "03", icon: "draw", title: "Design", copy: "High-fidelity prototypes and component tokens.", out: "Design system" },
  { no: "04", icon: "terminal", title: "Development", copy: "Typed, tested full-stack build with integrations.", out: "Staging instance" },
  { no: "05", icon: "fact_check", title: "Testing & QA", copy: "Cross-device, accessibility, and SEO audits.", out: "100/100 audit" },
  { no: "06", icon: "rocket_launch", title: "Launch & Support", copy: "Zero-downtime deploy, training, and ongoing SLA.", out: "Live node" },
];

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-surface-lowest/50 py-20 lg:py-28">
      <div className="shell">
        <SectionHead
          eyebrow="04 / The Methodology"
          title="A rigorous 6-stage engineering protocol"
          subtitle="An explicit framework that prevents scope creep and keeps output quality high."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <article
              key={s.no}
              className="panel flex h-full min-h-[228px] flex-col p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-tint">
                  Phase {s.no}
                </span>
                <Icon name={s.icon} className="text-xl text-muted-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              <div className="mt-auto border-t border-border pt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Output: <span className="text-foreground/80">{s.out}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MissionVision() {
  const panels = [
    {
      eyebrow: "Our Mission",
      title: "Empower with purpose & results",
      copy: "To give businesses innovative, high-quality website solutions that strengthen their presence and drive long-term growth.",
      tag: "Focus: sustainable client ROI",
      icon: "flag",
    },
    {
      eyebrow: "Our Vision",
      title: "Global recognition through excellence",
      copy: "To be a trusted global web partner known for engineering excellence, reliability, and consistent customer success.",
      tag: "Aspiration: global leadership",
      icon: "public",
    },
  ];

  return (
    <section className="shell py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {panels.map((p) => (
          <div key={p.eyebrow} className="panel relative overflow-hidden p-7 sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
            />
            <div className="flex items-center gap-3">
              <Icon name={p.icon} className="text-xl text-primary-tint" />
              <span className="eyebrow">{p.eyebrow}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              {p.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p.copy}</p>
            <div className="mt-6 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-wider text-primary-tint">
              {p.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
