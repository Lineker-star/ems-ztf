"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { BlogPostMeta } from "@/lib/blog";

function readTime(words: number) {
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min de lecture`;
}

const CATEGORIES = ["Tous", "Education", "Activity"] as const;

export function BlogList({ posts }: { posts: (BlogPostMeta & { wordCount: number })[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchCat = activeCategory === "Tous" || post.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [posts, activeCategory, search]);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-primary-600 text-white"
                  : "bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:bg-ink-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-shrink-0 sm:w-64">
          <svg
            viewBox="0 0 24 24"
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 py-2 pl-9 pr-4 text-sm text-ink-800 dark:text-ink-200 placeholder:text-ink-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="mt-14 text-center text-base text-ink-500 dark:text-ink-400">
          Aucun article ne correspond à votre recherche.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`}>
              <Card className="group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-ink-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{readTime(post.wordCount)}</span>
                  </div>
                  <h2 className="mt-2 font-display text-lg font-semibold text-ink-900 dark:text-white group-hover:text-primary-700">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{post.excerpt}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
