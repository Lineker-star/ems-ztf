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
          <div className="mb-14 flex flex-col items-center gap-6 rounded-3xl bg-primary-950 p-8 text-center sm:flex-row sm:text-left">
            <div className="relative aspect-square w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-gold-500/50">
              <Image
                src={rector.photo}
                alt={`Portrait de ${rector.name}`}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-white">{rector.name}</p>
              <p className="text-sm text-gold-300">{rector.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{rector.quote}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {staff.map((member) => (
              <div key={member.name} className="text-center">
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
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
