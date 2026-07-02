import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
          {eyebrow}
        </p>
        <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-display font-extrabold text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
