import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ctaBanner } from "@/content/site";

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-16">
      <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          {ctaBanner.heading}
        </h2>
        <Button href="/inscriptions/" variant="gold" size="lg" className="flex-shrink-0">
          {ctaBanner.button}
        </Button>
      </Container>
    </section>
  );
}
