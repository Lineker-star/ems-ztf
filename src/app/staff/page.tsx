import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { staff, rector } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Notre Staff",
  description:
    "Découvrez l'équipe pédagogique et médicale d'EMS-ZTF : médecins, pédiatre et responsables de filières.",
  path: "/staff/",
});

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre équipe"
        title="Notre Staff"
        description="Une équipe pédagogique composée de médecins et professionnels de santé en exercice, engagés dans la formation des étudiants."
      />

      <section className="py-16 sm:py-24">
        <Container>
          {/* Rector feature block */}
          <div className="mb-14 overflow-hidden rounded-3xl bg-primary-950">
            <div className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
              <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border-4 border-gold-500/60">
                <Image
                  src={rector.photo}
                  alt={`Portrait de ${rector.name}`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-white">{rector.name}</p>
                <p className="text-sm text-gold-300">{rector.title}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                  &ldquo;{rector.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Staff grid */}
          <h2 className="mb-8 font-display text-2xl font-bold text-ink-900 dark:text-white">Corps enseignant</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 text-center shadow-sm transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden rounded-xl bg-ink-100 dark:bg-ink-800">
                  <Image
                    src={member.photo}
                    alt={`Portrait de ${member.name}, ${member.role}`}
                    fill
                    sizes="160px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary-700">{member.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-ink-500 dark:text-ink-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
