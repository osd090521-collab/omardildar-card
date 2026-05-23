export function AnimatedGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-30 animate-grid-pan"
      style={{
        backgroundImage:
          "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage:
          "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }}
    />
  );
}
