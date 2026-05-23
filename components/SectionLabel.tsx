// Renders as: ─── LABEL ───
interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--accent-metallic))",
        }}
      />
      <span
        className="font-mono text-xs uppercase tracking-[0.3em]"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </span>
      <span
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to left, transparent, var(--accent-metallic))",
        }}
      />
    </div>
  );
}
