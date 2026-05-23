"use client";
import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { ProfileAvatar } from "./ProfileAvatar";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col items-center justify-center px-4 pt-16 pb-12 text-center">
      <FadeUp delay={0}>
        <ProfileAvatar />
      </FadeUp>

      <FadeUp delay={0.08}>
        <p
          className="mt-6 font-mono text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--muted)" }}
        >
          {config.handle}
        </p>
      </FadeUp>

      <FadeUp delay={0.16}>
        <h1
          className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl"
          style={{ color: "var(--text)" }}
        >
          {config.name}
        </h1>
      </FadeUp>

      <FadeUp delay={0.24}>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span
            className="h-px w-10"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--accent-metallic))",
            }}
          />
          <span
            className="font-mono text-sm uppercase tracking-[0.25em]"
            style={{ color: "var(--accent)" }}
          >
            {config.brand}
          </span>
          <span
            className="h-px w-10"
            style={{
              background:
                "linear-gradient(to left, transparent, var(--accent-metallic))",
            }}
          />
        </div>
      </FadeUp>

      <FadeUp delay={0.32}>
        <p
          className="mt-5 max-w-sm text-sm"
          style={{ color: "var(--muted)" }}
        >
          {config.title}
        </p>
      </FadeUp>

      <FadeUp delay={0.4}>
        <p className="mt-1 font-mono text-xs" style={{ color: "var(--muted)" }}>
          {config.location}
        </p>
      </FadeUp>

      <FadeUp delay={0.48}>
        <p
          className="mt-8 max-w-sm text-base italic"
          style={{ color: "color-mix(in srgb, var(--text) 80%, transparent)" }}
        >
          &ldquo;{config.tagline}&rdquo;
        </p>
      </FadeUp>
    </header>
  );
}
