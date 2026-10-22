"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Spot = "blue" | "pink" | "green" | "yellow";

// Static class names so Tailwind can see them.
const rule: Record<Spot, string> = {
  blue: "bg-spot-blue",
  pink: "bg-spot-pink",
  green: "bg-spot-green",
  yellow: "bg-spot-yellow",
};

/**
 * The one section header: h2, a short rule in the section's spot color,
 * and an optional lead paragraph. Left-aligned by default.
 */
export function SectionHeader({
  title,
  spot,
  children,
  align = "left",
  isInView,
}: {
  title: string;
  spot: Spot;
  children?: ReactNode;
  align?: "left" | "center";
  isInView: boolean;
}) {
  const center = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div
        className={`h-0.5 w-12 rounded-full ${rule[spot]} ${center ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {children && (
        <p className={`mt-4 text-foreground-muted max-w-2xl ${center ? "mx-auto" : ""}`}>
          {children}
        </p>
      )}
    </motion.div>
  );
}
