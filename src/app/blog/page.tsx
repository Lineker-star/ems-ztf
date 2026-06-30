import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { BlogList } from "@/components/BlogList";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Actualités, activités et articles pédagogiques d'EMS-ZTF.",
  path: "/blog/",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Actualités de EMS-ZTF"
        description="Suivez la vie de l'école : activités, événements et ressources pédagogiques."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <BlogList posts={posts} />
        </Container>
      </section>
    </>
  );
}
