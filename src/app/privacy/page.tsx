import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${siteConfig.name}.`,
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Légal" title="Politique de confidentialité" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="prose prose-ink max-w-none">
            <p className="text-sm text-ink-500">Dernière mise à jour : janvier 2026</p>

            <h2>1. Collecte des données</h2>
            <p>
              {siteConfig.name} collecte uniquement les données personnelles que vous nous fournissez
              volontairement via notre formulaire de contact (nom, adresse e-mail, message). Ces données
              sont utilisées exclusivement pour répondre à vos demandes.
            </p>

            <h2>2. Utilisation des données</h2>
            <p>
              Les données collectées servent à vous répondre et à améliorer nos services. Elles ne sont
              pas cédées, vendues ou partagées avec des tiers à des fins commerciales.
            </p>

            <h2>3. Conservation des données</h2>
            <p>
              Les données de contact sont conservées le temps nécessaire au traitement de votre demande
              et supprimées dans un délai de 12 mois.
            </p>

            <h2>4. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable, vous disposez d&apos;un droit d&apos;accès,
              de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à{" "}
              <a href={`mailto:${siteConfig.emails.general}`}>{siteConfig.emails.general}</a>.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Ce site est un site statique. Aucun cookie de traçage ou de publicité n&apos;est utilisé.
              Le formulaire de contact utilise Web3Forms, un service tiers soumis à ses propres conditions.
            </p>

            <h2>6. Contact</h2>
            <p>
              Pour toute question relative à cette politique, écrivez-nous à{" "}
              <a href={`mailto:${siteConfig.emails.general}`}>{siteConfig.emails.general}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
