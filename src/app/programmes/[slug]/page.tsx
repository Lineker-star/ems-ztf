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
    image: program.image,
  });
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      <CourseJsonLd program={program} />
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20">
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
              {program.duration}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {program.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-gold-200">{program.shortTagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-white/80">
              <span>
                {t.common.instructor}: <strong className="text-white">{program.instructor}</strong>
              </span>
              <span>
                {program.students} {t.common.students}
              </span>
              <RatingStars rating={program.rating} />
            </div>
            <Button href="/inscriptions/" variant="gold" size="lg" className="mt-8">
              S&apos;inscrire
            </Button>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src={program.image}
              alt={program.name}
              fill
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-ink-900">Vue d&apos;ensemble</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700">{program.overview}</p>
          </div>

          <aside>
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h3 className="font-display text-lg font-bold text-ink-900">Débouchés professionnels</h3>
              <ul className="mt-4 space-y-3">
                {program.careerOutcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2 text-sm text-ink-700">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L8 11.6l6.3-6.3a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-ink-50 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              {t.common.relatedPrograms}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={`/programmes/${p.slug}/`}
                  className="group rounded-2xl border border-ink-100 bg-white p-5 transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-display text-base font-semibold text-ink-900 group-hover:text-primary-700">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">{p.shortTagline}</p>
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
