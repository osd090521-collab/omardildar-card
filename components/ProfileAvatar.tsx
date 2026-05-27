"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function ProfileAvatar() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center border overflow-hidden"
        style={{
          borderColor: "var(--accent-metallic)",
          background: "var(--surface)",
        }}
      >
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/profile.jpg"
            alt="Omar Dildar"
            width={80}
            height={80}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            aria-label="OD monogram"
            fill="none"
          >
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="16"
              fontWeight="600"
              fontFamily="var(--font-inter)"
              fill="var(--accent-metallic)"
            >
              OD
            </text>
          </svg>
        )}
      </div>

      {/* Pulsing green online indicator */}
      <motion.div
        className="absolute top-0 left-0 w-3 h-3 rounded-full bg-emerald-500"
        style={{
          boxShadow: "0 0 0 2px var(--bg)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />
    </div>
  );
}
