import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { admissions } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Inscriptions",
  description:
    "Conditions d'admission, composition du dossier d'inscription et documents à télécharger pour intégrer EMS-ZTF.",
  path: "/inscriptions/",
});

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Inscriptions"
        description="Tout ce qu'il faut savoir pour constituer votre dossier d'inscription à EMS-ZTF."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900">
                Exigences spécifiques à l&apos;école
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-700">
                {admissions.schoolRequirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900">Tenue scolaire</h2>
              <ul className="mt-4 space-y-3">
                {admissions.uniform.map((u) => (
                  <li
                    key={u.label}
                    className="rounded-xl border border-ink-100 bg-ink-50 p-4 text-sm text-ink-700"
                  >
                    <span className="font-semibold text-ink-900">{u.label} :</span> {u.items}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900">
                Composition du dossier d&apos;inscription
              </h2>
              <ol className="mt-4 space-y-3">
                {admissions.dossier.map((item, i) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-bold text-ink-900">
                Documents à télécharger
              </h2>
              <div className="mt-4 space-y-4">
                {admissions.documents.map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.file}
                    download
                    className="flex items-start gap-3 rounded-xl border border-ink-100 p-4 transition-colors hover:border-primary-300 hover:bg-primary-50"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink-900">{doc.label}</span>
                      {"description" in doc && doc.description && (
                        <span className="mt-0.5 block text-xs text-ink-500">{doc.description}</span>
                      )}
                      <span className="mt-1 block text-xs font-medium text-primary-600">PDF</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-primary-900 p-6 text-white">
              <h3 className="font-display text-lg font-bold">Une question ?</h3>
              <p className="mt-2 text-sm text-white/80">
                Notre équipe admissions est disponible pour vous accompagner dans la constitution
                de votre dossier.
              </p>
              <Button href="/contact/" variant="gold" className="mt-4 w-full justify-center">
                Nous contacter
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
