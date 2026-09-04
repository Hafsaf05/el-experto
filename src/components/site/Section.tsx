import type { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span aria-hidden className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}
