import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { RatingStars } from "@/components/ui/RatingStars";
import { programs } from "@/content/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

const t = getDictionary();

export const metadata = pageMetadata({
  title: "Nos filières",
  description:
    "Découvrez les 4 filières de formation proposées par EMS-ZTF : Infirmiers Principaux, Kinésithérapie, Sages-femmes et Techniciens Médico-Sanitaires.",
  path: "/programmes/",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Nos filières"
        description="Quatre filières de santé, chacune sur 6 semestres, conçues pour former des professionnels immédiatement opérationnels."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {programs.map((program) => (
              <Link key={program.slug} href={`/programmes/${program.slug}/`}>
                <Card className="group flex h-full flex-col overflow-hidden sm:flex-row">
                  <div className="relative aspect-[4/3] flex-shrink-0 overflow-hidden sm:w-2/5">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      sizes="(min-width: 640px) 40vw, 90vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-2 inline-flex w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                      {program.duration}
                    </span>
                    <h2 className="font-display text-xl font-semibold text-ink-900 group-hover:text-primary-700">
                      {program.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-gold-700">{program.shortTagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
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
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
