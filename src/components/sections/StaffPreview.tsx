"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { staff } from "@/content/site";

const featuredStaff = staff.slice(0, 4);

export function StaffPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Notre équipe"
          title="Enseignants Expérimentés"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {featuredStaff.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl bg-ink-100">
                <Image
                  src={member.photo}
                  alt={`Portrait de ${member.name}, ${member.role}`}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
                {member.name}
              </h3>
              <p className="text-sm text-ink-500">{member.role}</p>
              <div className="mt-2 flex justify-center gap-3 text-ink-400">
                <span aria-hidden="true" className="h-4 w-4 rounded-full border border-current" />
                <span aria-hidden="true" className="h-4 w-4 rounded-full border border-current" />
                <span aria-hidden="true" className="h-4 w-4 rounded-full border border-current" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/staff/" variant="secondary">
            Voir toute l&apos;équipe
          </Button>
        </div>
      </Container>
    </section>
  );
}
