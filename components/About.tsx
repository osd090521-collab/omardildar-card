import { config } from "@/lib/config";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section
      className="px-4 py-12 max-w-md mx-auto w-full"
      aria-label="About Omar"
    >
      <SectionLabel label="About" />
      <p
        className="text-sm leading-relaxed"
        style={{ color: "color-mix(in srgb, var(--text) 85%, transparent)" }}
      >
        {config.about}
      </p>
    </section>
  );
}
