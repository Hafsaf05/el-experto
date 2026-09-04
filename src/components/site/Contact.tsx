import { useState } from "react";
import { Icon, SectionHead } from "./Section";

const NODES = [
  {
    label: "India Office",
    meta: "IST (UTC+5:30)",
    icon: "call",
    value: "+91 96181 27913",
    href: "tel:+919618127913",
    note: "Mon – Sat · 09:00 – 19:00",
  },
  {
    label: "Saudi Arabia",
    meta: "AST (UTC+3:00)",
    icon: "call",
    value: "+966 51 183 7472",
    href: "tel:+966511837472",
    note: "Sun – Thu · 09:00 – 18:00",
  },
  {
    label: "Direct Email",
    meta: "<4hr reply",
    icon: "mail",
    value: "elexperttto@gmail.com",
    href: "mailto:elexperttto@gmail.com",
    note: "Encrypted TLS channel",
  },
];

const DISCIPLINES = [
  "Business Website",
  "E-Commerce Build",
  "Corporate Portal",
  "Redesign & Upgrade",
  "Landing Page",
  "Maintenance & Care",
  "Other / Custom",
];

export function FinalCta() {
  return (
    <section className="shell pb-4">
      <div className="panel relative overflow-hidden bg-surface-low px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        />
        <span className="eyebrow">Ready to advance</span>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          Let&rsquo;s build something extraordinary together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Your website is an investment in your future. See what a properly engineered platform can
          do for your brand.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#inquiry"
            className="glow-ring inline-flex h-12 items-center rounded-lg border border-primary-tint/30 bg-primary px-6 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Your Project
          </a>
          <a
            href="tel:+919618127913"
            className="inline-flex h-12 items-center rounded-lg border border-border bg-surface px-6 font-display text-sm font-medium text-foreground transition-colors hover:border-input"
          >
            Talk to Us Direct
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const field =
    "h-11 w-full rounded-lg border border-border bg-surface-low px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60";
  const label = "mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground";

  return (
    <section id="inquiry" className="shell py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="05 / Direct Channels"
            title="Consult with our principal architects"
            subtitle="New project, a rebuild, or technical advice — reach our offices directly."
          />

          <div className="mt-8 space-y-3">
            {NODES.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="panel flex items-center gap-4 p-5 transition-colors hover:border-primary/40"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10">
                  <Icon name={n.icon} className="text-xl text-primary-tint" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {n.label}
                    </span>
                    <span className="shrink-0 font-mono text-[10px] text-primary-tint">
                      {n.meta}
                    </span>
                  </div>
                  <div className="mt-1 truncate font-display text-[15px] font-semibold text-foreground">
                    {n.value}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">{n.note}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2.5 rounded-lg border border-primary/25 bg-primary/10 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-primary-tint">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Accepting new commissions this quarter
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="panel p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Start your project
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Send your brief and get scope back within 24 hours.
            </p>

            {sent ? (
              <div className="mt-8 flex flex-col items-center rounded-lg border border-primary/30 bg-primary/10 px-6 py-12 text-center">
                <Icon name="check_circle" className="text-3xl text-primary-tint" />
                <div className="mt-3 font-display text-lg font-semibold text-foreground">
                  Inquiry received
                </div>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Our team will review your brief and reply within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className={label} htmlFor="name">Your name *</label>
                  <input id="name" required className={field} placeholder="Jane Doe" />
                </div>
                <div>
                  <label className={label} htmlFor="email">Work email *</label>
                  <input id="email" type="email" required className={field} placeholder="jane@company.com" />
                </div>
                <div>
                  <label className={label} htmlFor="phone">Phone</label>
                  <input id="phone" className={field} placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className={label} htmlFor="company">Company</label>
                  <input id="company" className={field} placeholder="Company name" />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="need">Primary requirement *</label>
                  <select id="need" required defaultValue="" className={field}>
                    <option value="" disabled>Select a service</option>
                    {DISCIPLINES.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="brief">Project brief *</label>
                  <textarea
                    id="brief"
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border bg-surface-low p-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60"
                    placeholder="Goals, timeline, and anything we should know."
                  />
                </div>
                <label className="flex items-center gap-2.5 text-xs text-muted-foreground sm:col-span-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-border bg-surface-low accent-[oklch(0.552_0.238_267)]" />
                  Request a mutual NDA first
                </label>
                <button
                  type="submit"
                  className="glow-ring inline-flex h-12 items-center justify-center rounded-lg border border-primary-tint/30 bg-primary px-6 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-2"
                >
                  Send Inquiry
                  <Icon name="send" className="ml-2 text-lg" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
