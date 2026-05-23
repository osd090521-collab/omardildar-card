"use client";
import { QRCodeSVG } from "qrcode.react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { config } from "@/lib/config";
import { SectionLabel } from "./SectionLabel";

export function QRSection() {
  const svgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGlowing(true);
          // Fade the glow out after 1200ms
          setTimeout(() => setGlowing(false), 1200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const downloadSVG = () => {
    const svg = svgRef.current?.querySelector("svg");
    if (!svg) return;
    const data = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([data], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "omar-dildar-qr.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      ref={sectionRef}
      className="px-4 py-12 max-w-md mx-auto w-full text-center"
      aria-label="QR code"
    >
      <SectionLabel label="Scan & Share" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        <div
          ref={svgRef}
          className="inline-block rounded-2xl border p-5"
          style={{
            borderColor: "var(--border)",
            background: "#ffffff",
            transition: "box-shadow 1200ms ease-out",
            boxShadow: glowing
              ? "0 0 60px 10px rgba(200, 16, 46, 0.4)"
              : "none",
          }}
        >
          <QRCodeSVG
            value={config.siteUrl}
            size={180}
            level="H"
            bgColor="#ffffff"
            fgColor="#0a0a0b"
          />
        </div>
      </motion.div>

      <div className="mt-4">
        <button
          onClick={downloadSVG}
          className="inline-flex items-center gap-2 font-mono text-xs transition-colors duration-200"
          style={{ color: "var(--muted)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent-metallic)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--muted)")
          }
          aria-label="Download QR code as SVG"
        >
          <Download size={12} />
          Download QR
        </button>
      </div>
    </section>
  );
}
