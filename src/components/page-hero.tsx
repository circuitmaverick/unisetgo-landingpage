import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-14 sm:px-8">
        <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
          {title}
          {accent ? (
            <>
              {" "}
              <em className="not-italic text-accent">{accent}</em>.
            </>
          ) : null}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-white/80">{description}</p>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}

export function WhatsAppCTA({
  href,
  label = "Enquire on WhatsApp",
  variant = "accent",
}: {
  href: string;
  label?: string;
  variant?: "accent" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold shadow-[var(--shadow-card)] transition hover:opacity-95";
  const cls =
    variant === "accent"
      ? `${base} gradient-accent text-accent-foreground`
      : `${base} border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20`;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {label}
    </a>
  );
}
