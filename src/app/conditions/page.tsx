import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Conditions d'utilisation",
  description: `Conditions d'utilisation du site ${siteConfig.name}.`,
  path: "/conditions/",
});

export default function ConditionsPage() {
  return (
    <>
      <PageHero eyebrow="Légal" title="Conditions d'utilisation" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="prose prose-ink max-w-none">
            <p className="text-sm text-ink-500">Dernière mise à jour : janvier 2026</p>

            <h2>1. Acceptation des conditions</h2>
            <p>
              En accédant au site de {siteConfig.name}, vous acceptez les présentes conditions
              d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>

            <h2>2. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété
              exclusive de {siteConfig.name} ou de ses partenaires. Toute reproduction, même partielle,
              est interdite sans autorisation écrite préalable.
            </p>

            <h2>3. Exactitude des informations</h2>
            <p>
              Nous nous efforçons d&apos;assurer l&apos;exactitude des informations publiées sur ce site.
              Cependant, {siteConfig.name} ne peut être tenu responsable des erreurs ou omissions.
              Les informations relatives aux programmes et inscriptions sont données à titre indicatif
              et peuvent évoluer.
            </p>

            <h2>4. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. {siteConfig.name} n&apos;est pas
              responsable du contenu de ces sites.
            </p>

            <h2>5. Limitation de responsabilité</h2>
            <p>
              {siteConfig.name} ne saurait être tenu responsable des dommages directs ou indirects
              résultant de l&apos;utilisation de ce site.
            </p>

            <h2>6. Droit applicable</h2>
            <p>
              Les présentes conditions sont régies par le droit camerounais. Tout litige sera soumis
              à la juridiction compétente de Bertoua, Cameroun.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question, contactez-nous à{" "}
              <a href={`mailto:${siteConfig.emails.general}`}>{siteConfig.emails.general}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
