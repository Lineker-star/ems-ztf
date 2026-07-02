import type { TocItem } from "@/lib/blog";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table des matières" className="rounded-2xl border border-ink-100 bg-ink-50 p-5 dark:border-ink-800 dark:bg-ink-900">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-500 dark:text-ink-400">
        Sommaire
      </p>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${item.id}`}
              className="block min-h-[32px] text-ink-600 transition-colors hover:text-primary-700 dark:text-ink-300 dark:hover:text-primary-400"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
