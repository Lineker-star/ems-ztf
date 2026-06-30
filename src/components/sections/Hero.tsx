"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, partners } from "@/content/site";
import { getDictionary } from "@/lib/i18n";

const t = getDictionary();

// Duplicate partners for seamless loop
const loopedPartners = [...partners, ...partners];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/group-students.jpeg"
        alt="Étudiants de EMS-ZTF lors de la cérémonie d'ouverture de l'année académique"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-primary-900/40" />

      <Container className="relative flex min-h-[90vh] flex-col justify-center py-20">
        <div className="max-w-2xl">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="mb-6 inline-flex animate-bounce-in items-center gap-2 rounded-full border border-gold-500/40 bg-white/10 px-5 py-2 backdrop-blur-sm"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 font-display text-xs font-bold text-ink-950">
              {siteConfig.yearsOfExperience}
            </span>
            <span className="text-sm font-semibold text-gold-200">
              ans d&apos;expérience dans la formation en santé
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            {siteConfig.subTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/a-propos/" variant="gold" size="lg">
              {t.cta.learnMore}
            </Button>
            <Button href="/inscriptions/" variant="ghost" size="lg">
              {t.cta.joinNow}
            </Button>
          </motion.div>
        </div>
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
                className="text-sm font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white/90"
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
