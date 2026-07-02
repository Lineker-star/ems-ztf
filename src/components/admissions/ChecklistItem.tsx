"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "ems-ztf-dossier-checklist";

export function AdmissionsChecklist({ items }: { items: readonly string[] }) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(JSON.parse(stored));
    } catch {
      // ignore malformed storage
    }
  }, []);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-200 bg-white overflow-hidden dark:divide-ink-700 dark:border-ink-700 dark:bg-ink-900">
      {items.map((item, i) => (
        <button
          key={item}
          type="button"
          onClick={() => toggle(i)}
          aria-pressed={!!checked[i]}
          className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-ink-50 dark:hover:bg-ink-800"
        >
          {/* Checkbox */}
          <div
            className={cn(
              "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors",
              checked[i] ? "border-primary-600 bg-primary-600" : "border-ink-300 bg-white dark:border-ink-600 dark:bg-transparent"
            )}
          >
            {checked[i] && (
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-white" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.09l6.79-6.8a1 1 0 011.42 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 font-display text-sm font-bold text-primary-600 dark:text-primary-400">{i + 1}.</span>
            <p
              className={cn(
                "text-sm leading-relaxed transition-colors",
                checked[i] ? "text-ink-400 line-through dark:text-ink-500" : "text-ink-700 dark:text-ink-200"
              )}
            >
              {item}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
