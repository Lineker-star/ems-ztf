"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RatingStars } from "@/components/ui/RatingStars";
import { programs } from "@/content/site";
import { getDictionary } from "@/lib/i18n";

const t = getDictionary();

export function ProgramsGrid() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nos filières"
          title="Programmes les plus recommandés"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/programmes/${program.slug}/`}>
                <Card className="group h-full overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700">
                      6 Semestres
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-ink-900 group-hover:text-primary-700">
                      {program.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gold-700">
                      {program.shortTagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">
                      {program.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-4">
                      <div>
                        <p className="text-xs font-semibold text-ink-800">{program.instructor}</p>
                        <p className="text-xs text-ink-500">
                          {program.students} {t.common.students}
                        </p>
                      </div>
                      <RatingStars rating={program.rating} />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
