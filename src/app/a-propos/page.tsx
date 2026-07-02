import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { StatCounter } from "@/components/ui/StatCounter";
import { aboutContent, aboutStats } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "À Propos",
  description: aboutContent.heading,
  path: "/a-propos/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="À Propos" title={aboutContent.heading} />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="max-w-xl">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-ink-700 dark:text-ink-200 last:mb-0">
                {p}
              </p>
            ))}
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={aboutContent.image}
              alt="Étudiants EMS-ZTF en travaux pratiques de soins infirmiers"
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-primary-700 py-16">
        <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {aboutStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              light
            />
          ))}
        </Container>
      </section>

      {/* Real photo gallery row */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-700">Nos étudiants</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-white">La vie à EMS-ZTF</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: "/images/ceremony-students.jpeg", alt: "Cérémonie de rentrée IU-ZTF" },
              { src: "/images/graduation-group.jpeg", alt: "Étudiants EMS-ZTF en uniforme officiel" },
              { src: "/images/student-uniform.jpeg", alt: "Étudiant EMS-ZTF avec stéthoscope" },
              { src: "/images/clinical-practice.jpeg", alt: "Travaux pratiques de soins infirmiers" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Infrastructure */}
      <section className="bg-ink-50 dark:bg-ink-900 py-16 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
            Explorez nos infrastructures
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {aboutContent.infrastructure.map((item) => (
              <div key={item.number} className="border-t-4 border-gold-500 pt-6">
                <span className="font-display text-4xl font-bold text-primary-300">
                  {item.number}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
