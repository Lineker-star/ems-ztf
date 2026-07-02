import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RatingStars } from "@/components/ui/RatingStars";
import { CourseJsonLd } from "@/components/JsonLd";
import { programs } from "@/content/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

const t = getDictionary();

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug);
  if (!program) return {};
  return pageMetadata({
    title: program.name,
    description: program.overview,
    path: `/programmes/${program.slug}/`,
    image: program.heroImage,
  });
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <CourseJsonLd program={program} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950 py-20">
        <Image
          src={program.heroImage}
          alt={program.name}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 to-primary-900/60" />
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
              {program.shortName} — {program.duration}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {program.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-gold-200">{program.shortTagline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-gold-400" fill="currentColor" aria-hidden="true">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                <strong className="text-white">{program.instructor}</strong>
              </span>
              <span>{program.students} {t.common.students}</span>
              <RatingStars rating={program.rating} />
            </div>
            <Button href="/inscriptions/" variant="gold" size="lg" className="mt-8">
              S&apos;inscrire maintenant
            </Button>
          </div>

          {/* Sidebar card overlaying hero on desktop */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm">
              <h3 className="mb-4 font-display text-base font-bold">Conditions d&apos;admission</h3>
              <ul className="space-y-2.5">
                {program.admissionConditions.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-white/90">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" fill="currentColor">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-white/20 pt-4 text-sm text-white/80">
                <span className="font-semibold text-white">{t.common.duration} :</span>{" "}
                {program.durationDetail}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile conditions block */}
      <div className="bg-primary-900 px-4 py-6 lg:hidden">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/10 p-5 text-white">
          <h3 className="mb-3 font-display text-sm font-bold">Conditions d&apos;admission</h3>
          <ul className="space-y-2">
            {program.admissionConditions.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-white/90">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" fill="currentColor">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-white/70">
            <span className="font-semibold text-white">{t.common.duration} :</span> {program.durationDetail}
          </p>
        </div>
      </div>

      {/* Body */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white">Vue d&apos;ensemble</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-700 dark:text-ink-200">{program.overview}</p>
              </div>

              {/* Modules */}
              <div>
                <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white">Modules de formation</h2>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {program.modules.map((mod, i) => (
                    <div
                      key={mod}
                      className="flex items-center gap-3 rounded-xl border border-ink-100 dark:border-ink-800 bg-ink-50 dark:bg-ink-900 px-4 py-3"
                    >
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-ink-800 dark:text-ink-200">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Career outcomes */}
              <div className="rounded-2xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">Débouchés professionnels</h3>
                <ul className="mt-4 space-y-3">
                  {program.careerOutcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600" fill="currentColor">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enroll CTA */}
              <div className="rounded-2xl bg-primary-900 p-6 text-center text-white">
                <h3 className="font-display text-lg font-bold">Prêt à vous inscrire ?</h3>
                <p className="mt-2 text-sm text-white/75">Rejoignez nos {program.students}+ étudiants en {program.name}.</p>
                <Button href="/inscriptions/" variant="gold" className="mt-4 w-full justify-center">
                  S&apos;inscrire
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related programs */}
      <section className="bg-ink-50 dark:bg-ink-900 py-14">
        <Container>
          <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">{t.common.relatedPrograms}</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <a
                key={p.slug}
                href={`/programmes/${p.slug}/`}
                className="group flex items-center gap-4 rounded-xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 transition-shadow hover:shadow-md"
              >
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src={p.image} alt={p.name} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink-900 dark:text-white group-hover:text-primary-700">{p.name}</h3>
                  <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{p.shortTagline}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
