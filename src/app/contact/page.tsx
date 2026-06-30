import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { contactContent, siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: contactContent.body,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={contactContent.heading} />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              {contactContent.secondaryHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700">{contactContent.body}</p>

            <dl className="mt-8 space-y-5">
              <div className="flex gap-3">
                <dt className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </dt>
                <dd className="text-sm text-ink-700">
                  <span className="block font-semibold text-ink-900">Localisation</span>
                  {siteConfig.address.line}
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </dt>
                <dd className="text-sm text-ink-700">
                  <span className="block font-semibold text-ink-900">E-mail</span>
                  <a href={`mailto:${siteConfig.emails.contactForm}`} className="hover:text-primary-700">
                    {siteConfig.emails.contactForm}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </dt>
                <dd className="text-sm text-ink-700">
                  <span className="block font-semibold text-ink-900">Téléphone</span>
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block hover:text-primary-700"
                    >
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-8 overflow-hidden rounded-2xl border border-ink-100">
              <iframe
                title="Localisation de EMS-ZTF à Koumé, Bertoua"
                src="https://www.google.com/maps?q=Koum%C3%A9%2C+Bertoua%2C+Cameroun&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
