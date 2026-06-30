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
        <Container className="max-w-3xl">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="mb-6 text-base leading-relaxed text-ink-700 last:mb-0">
              {p}
            </p>
          ))}
        </Container>
      </section>

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

      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Explorez nos infrastructures
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {aboutContent.infrastructure.map((item) => (
              <div key={item.number} className="border-t-4 border-gold-500 pt-6">
                <span className="font-display text-4xl font-bold text-primary-300">
                  {item.number}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
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
