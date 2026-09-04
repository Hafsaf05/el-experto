import { Icon, SectionHead } from "./Section";

const REASONS = [
  { no: "01", title: "Strategic Approach", copy: "We start with your business model, not visuals — then build around revenue goals." },
  { no: "02", title: "Premium Design", copy: "Editorial art direction, calibrated spacing, and deliberate micro-interactions." },
  { no: "03", title: "Mobile-First Build", copy: "Most decisions happen on phones, so we engineer for thumbs first." },
  { no: "04", title: "Performance Tuning", copy: "No bloat, modern image formats, and sub-second first-byte times." },
  { no: "05", title: "Security & Reliability", copy: "TLS end to end, DDoS hardening, audits, and daily off-site backups." },
  { no: "06", title: "UX Excellence", copy: "Research-backed flows that remove friction and guide people to act." },
  { no: "07", title: "Direct Communication", copy: "You talk to the architects building your site — no account-manager relay." },
  { no: "08", title: "Long-Term Partnership", copy: "We monitor, update, and keep improving after launch as you scale." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="shell py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHead
              eyebrow="03 / Why El Experto"
              title="Engineering trust through measured discipline"
              subtitle="Strict technical standards, a modern design vocabulary, and uncompromising business alignment."
            />
            <div className="panel mt-8 flex items-start gap-4 p-5">
              <Icon name="verified" className="shrink-0 text-2xl text-primary-tint" />
              <div className="min-w-0">
                <div className="font-display text-sm font-semibold text-foreground">
                  Guaranteed standard
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  Every line reviewed, tested, and benchmarked before release.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="divide-y divide-border border-y border-border lg:col-span-7">
          {REASONS.map((r) => (
            <li key={r.no} className="group flex gap-5 py-5 transition-colors hover:bg-surface-lowest/60">
              <span className="shrink-0 font-mono text-xs text-primary-tint">{r.no}</span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
