import { config } from "@/lib/config";
import { SectionLabel } from "./SectionLabel";

export function Footer() {
  return (
    <footer
      className="px-4 py-12 max-w-md mx-auto w-full mt-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <SectionLabel label="Contact" />
      <div className="flex flex-col gap-2 font-mono text-xs" style={{ color: "var(--muted)" }}>
        <a
          href={`mailto:${config.email}`}
          className="transition-colors duration-200 hover:text-[var(--text)]"
          style={{ color: "inherit" }}
        >
          {config.email}
        </a>
        {config.linkedin && (
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[var(--text)]"
            style={{ color: "inherit" }}
          >
            LinkedIn
          </a>
        )}
        <a
          href={config.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-[var(--text)]"
          style={{ color: "inherit" }}
        >
          Portfolio
        </a>
        <span>{config.location}</span>
        <span className="mt-6 opacity-50">
          © {new Date().getFullYear()} {config.name}
        </span>
      </div>
    </footer>
  );
}
