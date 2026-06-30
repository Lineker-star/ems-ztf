import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { rector } from "@/content/site";

export function RectorQuote() {
  return (
    <section className="bg-primary-950 py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[280px_1fr]">
        <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border-4 border-gold-500/50 lg:w-full">
          <Image
            src={rector.photo}
            alt={`Portrait de ${rector.name}, ${rector.title}`}
            fill
            sizes="280px"
            className="object-cover"
          />
        </div>
        <div>
          <svg viewBox="0 0 32 24" className="h-10 w-10 text-gold-500" fill="currentColor" aria-hidden="true">
            <path d="M0 24V14.4C0 6.4 4.8 1.2 13.6 0l1.6 3.6c-5.2 1.6-8 4.8-8 9.6h7.2V24H0zm17.6 0V14.4c0-8 4.8-13.2 13.6-14.4L32.8 3.6c-5.2 1.6-8 4.8-8 9.6h7.2V24H17.6z" />
          </svg>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            {rector.quote}
          </p>
          <p className="mt-6 text-base font-semibold text-gold-300">{rector.name}</p>
          <p className="text-sm text-white/60">{rector.title}</p>
        </div>
      </Container>
    </section>
  );
}
