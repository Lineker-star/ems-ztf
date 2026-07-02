"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navigation, siteConfig } from "@/content/site";
import { useLocale } from "@/lib/locale-context";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const drawerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const drawerItem = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export function Header() {
  const pathname = usePathname();
  const { t, locale, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  const textColor = scrolled
    ? "text-ink-700 dark:text-ink-100"
    : "text-white";
  const textColorMuted = scrolled
    ? "text-ink-500 dark:text-ink-400"
    : "text-white/70";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl dark:bg-slate-900/80"
            : "bg-transparent"
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
            <Image
              src="/images/Logo.png"
              alt={`Logo ${siteConfig.shortName}`}
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              priority
            />
            <span className={cn("hidden font-display text-base font-bold leading-tight sm:block", textColor)}>
              {siteConfig.shortName}
              <span className={cn("block text-xs font-normal", textColorMuted)}>
                École des Métiers de Santé
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Navigation principale"
          >
            {navigation.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "nav-underline flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors",
                    isActive(item.href) ? "text-primary-500" : textColor
                  )}
                >
                  {item.label}
                  {"children" in item && item.children && (
                    <svg
                      className="h-3 w-3 transition-transform group-hover:rotate-180"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  )}
                </Link>
                {"children" in item && item.children && (
                  <div className="invisible absolute left-0 top-full mt-1 w-52 rounded-xl border border-ink-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:border-ink-800 dark:bg-ink-900">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-ink-700 hover:bg-primary-50 hover:text-primary-700 dark:text-ink-200 dark:hover:bg-ink-800"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Toggles + CTA + hamburger */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLocale}
              aria-label="Changer de langue"
              className={cn(
                "flex h-11 min-w-[44px] items-center justify-center rounded-full border px-3 text-xs font-bold tracking-wide transition-colors",
                scrolled
                  ? "border-ink-200 text-ink-600 hover:bg-ink-100 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800"
                  : "border-white/30 text-white hover:bg-white/10"
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={locale}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {locale === "fr" ? "FR | EN" : "EN | FR"}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
                scrolled
                  ? "border-ink-200 text-ink-600 hover:bg-ink-100 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800"
                  : "border-white/30 text-white hover:bg-white/10"
              )}
            >
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364 6.364l-1.06-1.06M6.696 6.696L5.636 5.636m12.728 0l-1.06 1.06M6.696 17.304l-1.06 1.06M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <Button
              href="/inscriptions/"
              size="md"
              className="relative hidden overflow-visible lg:inline-flex"
            >
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-gold-300 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gold-400" />
              </span>
              {t.cta.enroll}
            </Button>

            <button
              type="button"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-lg transition-colors lg:hidden",
                scrolled
                  ? "text-ink-700 hover:bg-ink-100 dark:text-ink-100 dark:hover:bg-ink-800"
                  : "text-white hover:bg-white/10"
              )}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer — full-screen overlay, outside header so it overlays the page */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden dark:bg-ink-950"
          >
            <div className="flex items-center justify-between border-b border-ink-100 px-6 py-5 dark:border-ink-800">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/images/Logo.png"
                  alt={siteConfig.shortName}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <span className="font-display text-base font-bold text-primary-800 dark:text-white">
                  {siteConfig.shortName}
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <motion.nav
              variants={drawerList}
              initial="hidden"
              animate="visible"
              className="flex flex-1 flex-col gap-1 overflow-y-auto p-4"
              aria-label="Menu mobile"
            >
              {navigation.map((item) => (
                <motion.div key={item.href} variants={drawerItem}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
                      isActive(item.href)
                        ? "bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300"
                        : "text-ink-800 hover:bg-ink-50 dark:text-ink-100 dark:hover:bg-ink-800"
                    )}
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children && (
                    <div className="ml-4 flex flex-col border-l-2 border-primary-100 pl-4 dark:border-primary-900">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-primary-50 hover:text-primary-700 dark:text-ink-300 dark:hover:bg-ink-800"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              variants={drawerItem}
              initial="hidden"
              animate="visible"
              className="mt-auto border-t border-ink-100 p-4 dark:border-ink-800"
            >
              <Button href="/inscriptions/" size="lg" className="w-full justify-center">
                {t.cta.enroll}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
