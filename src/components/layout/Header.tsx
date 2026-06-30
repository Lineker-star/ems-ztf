"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navigation, siteConfig } from "@/content/site";
import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const t = getDictionary();

export function Header() {
  const pathname = usePathname();
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

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/96 shadow-sm backdrop-blur-md"
            : "bg-white"
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
            <span className="hidden font-display text-base font-bold leading-tight text-primary-800 sm:block">
              {siteConfig.shortName}
              <span className="block text-xs font-normal text-ink-500">
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
                    "flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary-700",
                    isActive(item.href)
                      ? "text-primary-700"
                      : "text-ink-700"
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
                  <div className="invisible absolute left-0 top-full mt-1 w-52 rounded-xl border border-ink-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-ink-700 hover:bg-primary-50 hover:text-primary-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="/inscriptions/"
              size="md"
              className="hidden animate-pulse-slow lg:inline-flex"
            >
              {t.cta.enroll}
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
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

      {/* Mobile drawer — outside header so it overlays the page */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 flex h-full w-4/5 max-w-sm flex-col overflow-y-auto bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-ink-100 px-6 py-5">
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
                  <span className="font-display text-base font-bold text-primary-800">
                    {siteConfig.shortName}
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fermer le menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-100"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4" aria-label="Menu mobile">
                {navigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
                        isActive(item.href)
                          ? "bg-primary-50 text-primary-700"
                          : "text-ink-800 hover:bg-ink-50"
                      )}
                    >
                      {item.label}
                    </Link>
                    {"children" in item && item.children && (
                      <div className="ml-4 flex flex-col border-l-2 border-primary-100 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-primary-50 hover:text-primary-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto border-t border-ink-100 p-4">
                <Button href="/inscriptions/" size="lg" className="w-full justify-center">
                  {t.cta.enroll}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
