import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlogPostingJsonLd } from "@/components/JsonLd";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

const t = getDictionary();

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    image: post.image,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const postUrl = `https://${siteConfig.domain}/blog/${post.slug}/`;

  return (
    <article>
      <ReadingProgressBar />
      <BlogPostingJsonLd post={post} />
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16">
        <Container className="relative max-w-3xl">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
            {post.category}
          </span>
          <h1 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-display font-extrabold text-white">
            {post.title}
          </h1>
          <time dateTime={post.date} className="mt-3 block text-sm text-white/70">
            {new Date(post.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </Container>
      </section>

      <Container className="max-w-3xl py-12 lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]">
          <div className="min-w-0">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" priority />
            </div>

            <div className="mb-8 lg:hidden">
              <TableOfContents items={post.toc} />
            </div>

            <div
              className="prose prose-ink max-w-none prose-headings:font-display prose-headings:text-ink-900 prose-headings:scroll-mt-24 prose-a:text-primary-700 dark:prose-invert dark:prose-headings:text-white"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <div className="mt-12 flex flex-col gap-6 border-t border-ink-100 pt-8 dark:border-ink-800 sm:flex-row sm:items-center sm:justify-between">
              <Button href="/blog/" variant="secondary">
                ← {t.common.backToBlog}
              </Button>
              <ShareButtons url={postUrl} title={post.title} />
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents items={post.toc} />
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
