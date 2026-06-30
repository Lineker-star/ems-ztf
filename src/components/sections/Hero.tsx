"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, partners } from "@/content/site";
import { getDictionary } from "@/lib/i18n";

const t = getDictionary();

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
            {siteConfig.yearsOfExperience} Years Of Experience
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {siteConfig.subTagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/a-propos/" variant="gold" size="lg">
              {t.cta.learnMore}
            </Button>
            <Button href="/inscriptions/" variant="ghost" size="lg">
              {t.cta.joinNow}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <Image
            src="/images/hero/students-campus.svg"
            alt="Étudiants de EMS-ZTF en blouse lors d'une session pratique"
            fill
            priority
            sizes="(min-width: 1024px) 32rem, 90vw"
            className="object-cover"
          />
        </motion.div>
      </Container>

      <div className="relative border-t border-white/10 bg-primary-950/40 py-8 backdrop-blur-sm">
        <Container>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Nos partenaires &amp; affiliations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {partners.map((partner) => (
              <span
                key={partner.name}
                className="text-sm font-semibold uppercase tracking-wide text-white/60 grayscale transition-all duration-200 hover:text-white hover:grayscale-0"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
