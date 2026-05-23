"use client";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Link,
  Mail,
  Phone,
  Download,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { config } from "@/lib/config";
import { downloadVCard } from "@/lib/vcard";

type ButtonProps = {
  icon: React.ElementType;
  label: string;
  href?: string;
  onClick?: () => void;
};

function ActionButton({ icon: Icon, label, href, onClick }: ButtonProps) {
  const inner = (
    <>
      <Icon
        size={18}
        className="shrink-0"
        style={{ color: "var(--accent)" }}
      />
      <span className="flex-1 text-sm font-medium" style={{ color: "var(--text)" }}>
        {label}
      </span>
      <span
        className="text-sm transition-transform duration-200 group-hover:translate-x-1"
        style={{ color: "var(--muted)" }}
      >
        →
      </span>
    </>
  );

  const cls =
    "group flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200 hover:border-[var(--accent-metallic)]";
  const style = {
    borderColor: "var(--border)",
    background: "var(--surface)",
  };

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={cls}
        style={style}
        aria-label={label}
      >
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls} style={style} aria-label={label}>
      {inner}
    </button>
  );
}

export function ActionButtons() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(config.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const actions: ButtonProps[] = [
    { icon: ExternalLink, label: "View Portfolio", href: config.portfolio },
    ...(config.linkedin
      ? [{ icon: Link, label: "Connect on LinkedIn", href: config.linkedin }]
      : []),
    { icon: Mail, label: "Email Me", href: `mailto:${config.email}` },
    ...(config.phone
      ? [{ icon: Phone, label: "Call Me", href: `tel:${config.phone}` }]
      : []),
    { icon: Download, label: "Save Contact", onClick: downloadVCard },
    {
      icon: copied ? Check : Copy,
      label: copied ? "Copied ✓" : "Copy Email",
      onClick: copyEmail,
    },
  ];

  return (
    <section className="px-4 py-8 max-w-md mx-auto w-full" aria-label="Contact actions">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.6 } },
        }}
        className="flex flex-col gap-3"
      >
        {actions.map((action, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <ActionButton {...action} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
