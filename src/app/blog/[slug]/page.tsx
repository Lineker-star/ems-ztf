import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlogPostingJsonLd } from "@/components/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

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

  return (
    <article>
      <BlogPostingJsonLd post={post} />
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16">
        <Container className="relative max-w-3xl">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
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

      <Container className="max-w-3xl py-12">
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" priority />
        </div>

        <div
          className="prose prose-ink max-w-none prose-headings:font-display prose-headings:text-ink-900 prose-a:text-primary-700"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-12 border-t border-ink-100 pt-8">
          <Button href="/blog/" variant="secondary">
            ← {t.common.backToBlog}
          </Button>
        </div>
      </Container>
    </article>
  );
}
