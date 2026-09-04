import { Icon } from "./Section";

const LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAdYdIedBHE7QU8DFVKamO7864dfHmZaJugxFCUK_qxFyV8GB168akR919YGdD74qDy4fCQ-rqqlnvS8Rva3QceSEwXoxemN72lEIbYoprjjpZfIkY3Rl-7cYtO-PyjaLzCNCPO7KeYx7MPF5DF7e5ypEfluuJGwxAEIXVJF94Eqzrsbi1P8qzyVU4e9KGN3ZG-RJ7hDFC_NHsr6loqLca1_0yWIE94hlOPjdlgpeFLTBKpGEU7F5BGhdWy5QvHsC9Rb3s";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#inquiry" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 pb-2 pt-3 backdrop-blur-md">
      <div className="shell">
        <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-xl border border-border bg-surface-lowest/90 px-4 shadow-[0_4px_24px_oklch(0_0_0/0.5)] backdrop-blur-md sm:px-5 lg:flex lg:justify-between">
          <a href="#top" className="group flex min-w-0 items-center gap-3">
            <img
              src={LOGO}
              alt="El Experto Web Solutions logo"
              className="h-9 w-9 shrink-0 rounded-lg border border-border bg-black object-contain p-0.5 transition-colors group-hover:border-primary"
            />
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-display text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary-tint">
                EL EXPERTO
              </span>
              <span className="truncate font-mono text-[9px] uppercase leading-none tracking-[0.2em] text-muted-foreground">
                Web Solutions
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#inquiry"
              className="glow-ring inline-flex h-10 items-center justify-center rounded-lg border border-primary-tint/30 bg-primary px-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              aria-label="Jump to services"
              className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground lg:hidden"
            >
              <Icon name="menu" className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
