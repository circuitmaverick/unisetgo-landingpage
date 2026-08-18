import { Link } from "@tanstack/react-router";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-card)]">
        <span className="font-black text-lg leading-none tracking-tighter">
          u
        </span>
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="font-black text-lg text-primary tracking-tight">
            UniSetGo
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent">
            Explore Beyond Boundaries
          </span>
        </span>
      )}
    </Link>
  );
}
