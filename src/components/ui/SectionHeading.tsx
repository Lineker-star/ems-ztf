"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.2em]",
            light ? "text-gold-300" : "text-gold-700 dark:text-gold-400"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-[clamp(1.5rem,3vw,2.5rem)] font-display font-bold",
          light ? "text-white" : "text-ink-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-white/80" : "text-ink-600 dark:text-ink-300"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
