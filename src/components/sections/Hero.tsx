"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, partners } from "@/content/site";
import { useLocale } from "@/lib/locale-context";

// Duplicate partners for seamless loop
const loopedPartners = [...partners, ...partners];

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const word = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Hero() {
  const { t } = useLocale();
  const headlineWords = siteConfig.tagline.split(" ");

  return (
    <section className="relative min-h-[100svh] overflow-hidden md:min-h-[90vh]">
      {/* Background photo at ~90% opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/medical-students-hero.png"
          alt="Étudiants EMS-ZTF en blouses de laboratoire"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Gradient overlay — left readable, right photo visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/40 to-slate-900/10" />
      </div>

      <Container className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center py-24 text-center md:min-h-[90vh] lg:items-start lg:text-left">
        <div className="max-w-[90%] sm:max-w-xl">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-white/10 px-5 py-2 backdrop-blur-sm lg:mx-0"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 font-display text-xs font-bold text-ink-950">
              {siteConfig.yearsOfExperience}
            </span>
            <span className="text-sm font-semibold text-gold-200">
              ans d&apos;expérience dans la formation en santé
            </span>
          </motion.div>

          {/* Headline — words appear one by one */}
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            className="text-[clamp(2rem,5vw,4rem)] font-display font-extrabold leading-tight text-white"
          >
            {headlineWords.map((w, i) => (
              <motion.span key={i} variants={word} className="mr-3 inline-block">
                {w}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 lg:mx-0"
          >
            {siteConfig.subTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Button href="/a-propos/" variant="gold" size="lg">
              {t.cta.learnMore}
            </Button>
            <Button href="/inscriptions/" variant="ghost" size="lg">
              {t.cta.joinNow}
            </Button>
          </motion.div>
        </div>

        {/* Floating stat cards — desktop only, they'd crowd small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="pointer-events-none absolute inset-0 hidden md:block"
        >
          <div className="glass animate-float pointer-events-auto absolute bottom-28 left-4 flex items-center gap-2 rounded-2xl px-4 py-3 text-white lg:left-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-none">156</p>
              <p className="text-xs text-white/70">Étudiants</p>
            </div>
          </div>

          <div className="glass animate-float-delayed pointer-events-auto absolute right-4 top-28 rounded-2xl px-4 py-3 text-white lg:right-8">
            <p className="font-display text-lg font-bold leading-none">4</p>
            <p className="text-xs text-white/70">Filières</p>
          </div>

          <div className="glass animate-float pointer-events-auto absolute bottom-28 right-4 rounded-2xl px-4 py-3 text-white lg:right-24">
            <p className="font-display text-lg font-bold leading-none">{siteConfig.yearsOfExperience}</p>
            <p className="text-xs text-white/70">Ans</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/70 sm:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Défiler</span>
          <motion.svg
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </Container>

      {/* Partner marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary-950/70 py-5 backdrop-blur-sm">
        <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
          Partenaires &amp; affiliations
        </p>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap px-8">
            {loopedPartners.map((partner, i) => (
              <span
                key={`${partner.name}-${i}`}
                className="partner-logo text-sm font-bold uppercase tracking-widest text-white"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
