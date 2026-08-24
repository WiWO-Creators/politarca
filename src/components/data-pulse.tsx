import { Link } from "@tanstack/react-router";
import { PULSE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function DataPulse() {
  return (
    <section className="border-y border-border bg-elevated">
      <div className="mx-auto max-w-[1280px] px-4 py-14 md:px-8">
        <div className="mb-8 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-2xl text-fg">Pulso de datos</h2>
          <Link
            to="/datos"
            className="font-ui text-sm text-subtle transition-colors hover:text-accent"
          >
            Ver Data Hub →
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PULSE.map((item) => (
            <div key={item.label}>
              <p className="mb-2 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-subtle">
                {item.label}
              </p>
              <p className="font-display text-3xl font-bold leading-none text-fg tabular md:text-4xl">
                {item.value}
              </p>
              <p
                className={cn(
                  "mt-1 font-ui text-sm",
                  item.tone === "up" ? "text-burgundy" : "text-muted",
                )}
              >
                {item.delta}
              </p>
              <p className="mt-3 font-ui text-xs text-subtle">{item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
