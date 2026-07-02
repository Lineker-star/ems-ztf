"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultLocale, dictionary, type Locale } from "@/lib/i18n";

const LocaleContext = createContext<{
  locale: Locale;
  t: (typeof dictionary)[Locale];
  toggleLocale: () => void;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem("locale") as Locale | null;
    if (stored === "fr" || stored === "en") setLocale(stored);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next: Locale = prev === "fr" ? "en" : "fr";
      window.localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, t: dictionary[locale], toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
