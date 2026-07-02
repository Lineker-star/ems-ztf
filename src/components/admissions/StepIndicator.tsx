const steps = [
  { id: "conditions", label: "Vérifier les conditions" },
  { id: "dossier", label: "Préparer le dossier" },
  { id: "depot", label: "Déposer la candidature" },
];

export function StepIndicator() {
  return (
    <nav aria-label="Étapes d'inscription" className="mb-4">
      <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
        {steps.map((step, i) => (
          <li key={step.id} className="flex flex-1 items-center">
            <a
              href={`#${step.id}`}
              className="group flex min-h-[44px] flex-1 items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-primary-50 dark:hover:bg-ink-800 sm:flex-col sm:text-center"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary-500 font-display text-sm font-bold text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white dark:text-primary-400">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-ink-700 dark:text-ink-200">{step.label}</span>
            </a>
            {i < steps.length - 1 && (
              <span className="mx-2 hidden h-0.5 flex-1 bg-primary-100 dark:bg-ink-700 sm:block" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
