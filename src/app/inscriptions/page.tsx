import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { StepIndicator } from "@/components/admissions/StepIndicator";
import { AdmissionsChecklist } from "@/components/admissions/ChecklistItem";
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

      <section className="py-10 sm:py-14">
        <Container>
          <StepIndicator />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* School requirements */}
            <div id="conditions" className="scroll-mt-24">
              <h2 className="inline-flex items-center gap-2 font-display text-2xl font-bold text-ink-900 dark:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-300">A</span>
                Exigences spécifiques à l&apos;école
              </h2>
              <ul className="mt-5 space-y-2">
                {admissions.schoolRequirements.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm text-ink-800 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200">
                    <span className="h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Uniform */}
            <div>
              <h2 className="inline-flex items-center gap-2 font-display text-2xl font-bold text-ink-900 dark:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-300">B</span>
                Tenue scolaire
              </h2>
              <div className="mt-5 space-y-3">
                {admissions.uniform.map((u) => (
                  <div key={u.label} className="rounded-xl border border-primary-100 bg-primary-50 p-4 dark:border-primary-900 dark:bg-primary-950/40">
                    <span className="text-xs font-bold uppercase tracking-wide text-primary-600 dark:text-primary-400">{u.label}</span>
                    <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">{u.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dossier — official checklist */}
            <div id="dossier" className="scroll-mt-24">
              <h2 className="inline-flex items-center gap-2 font-display text-2xl font-bold text-ink-900 dark:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-300">C</span>
                Composition du dossier d&apos;inscription
              </h2>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                Cochez chaque pièce au fur et à mesure — votre progression est enregistrée automatiquement.
              </p>
              <div className="mt-5">
                <AdmissionsChecklist items={admissions.dossier} />
              </div>
              <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">
                * Déposez l&apos;ensemble de ces pièces dans une chemise cartonnée à votre nom.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside id="depot" className="scroll-mt-24 space-y-6">
            {/* PDF Downloads */}
            <div className="rounded-2xl border-2 border-primary-200 bg-white p-6 shadow-sm dark:border-primary-900 dark:bg-ink-900">
              <div className="mb-5 flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-700 dark:text-primary-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" />
                </svg>
                <h2 className="font-display text-lg font-bold text-ink-900 dark:text-white">Documents à télécharger</h2>
              </div>

              <div className="space-y-4">
                {admissions.documents.map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-3 rounded-xl border-2 border-ink-100 p-4 transition-all hover:border-primary-400 hover:bg-primary-50 dark:border-ink-700 dark:hover:border-primary-700 dark:hover:bg-primary-950/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 transition-transform duration-300 group-hover:-translate-y-1 dark:bg-red-950 dark:text-red-400">
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-sm font-bold text-ink-900 group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-400">
                          {doc.label}
                        </p>
                        {"description" in doc && doc.description && (
                          <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{doc.description}</p>
                        )}
                        {"size" in doc && doc.size && (
                          <p className="mt-0.5 text-xs font-medium text-ink-400 dark:text-ink-500">PDF · {doc.size}</p>
                        )}
                      </div>
                    </div>
                    <span className="flex items-center justify-center gap-2 rounded-lg bg-primary-600 py-2.5 text-xs font-bold text-white transition-colors group-hover:bg-primary-700">
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Télécharger le PDF
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="rounded-2xl bg-primary-900 p-6 text-white">
              <h3 className="font-display text-base font-bold">Une question ?</h3>
              <p className="mt-2 text-sm text-white/80">
                Notre équipe admissions est disponible pour vous accompagner dans la constitution de votre dossier.
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
