"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function StatCounter({
  value,
  suffix = "",
  label,
  light = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1.6, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className={`font-display text-4xl font-bold sm:text-5xl ${
          light ? "text-white" : "text-primary-700"
        }`}
      >
        {display}
        {suffix}
      </span>
      <p className={`mt-2 text-sm font-medium ${light ? "text-white/80" : "text-ink-600"}`}>
        {label}
      </p>
    </div>
  );
}
