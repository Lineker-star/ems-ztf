import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, footerContent } from "@/content/site";
import { getDictionary } from "@/lib/i18n";

const t = getDictionary();

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-200">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-base">
              ZTF
            </span>
            {siteConfig.shortName}
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">{footerContent.about}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            {footerContent.support.heading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerContent.support.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-ink-400 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            {footerContent.resources.heading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerContent.resources.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-ink-400 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-400">
            <li>{siteConfig.address.line}</li>
            <li>
              <a href={`mailto:${siteConfig.emails.general}`} className="hover:text-white">
                {siteConfig.emails.general}
              </a>
            </li>
            {siteConfig.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <Link href="/contact/" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/contact/" className="hover:text-white">
              Politique de confidentialité
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
