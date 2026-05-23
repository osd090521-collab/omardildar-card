import { config } from "@/lib/config";
import { SectionLabel } from "./SectionLabel";

export function IdentityCards() {
  return (
    <section
      className="px-4 py-8 max-w-md mx-auto w-full"
      aria-label="Areas of focus"
    >
      <SectionLabel label="Focus" />
      <div className="flex flex-wrap gap-2">
        {config.identityCards.map((card) => (
          <span
            key={card}
            className="rounded-full border px-3 py-1.5 font-mono text-xs"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              color: "var(--muted)",
            }}
          >
            {card}
          </span>
        ))}
      </div>
    </section>
  );
}
