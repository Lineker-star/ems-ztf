import { siteConfig, type Program } from "@/content/site";
import type { BlogPostMeta } from "@/lib/blog";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: `https://${siteConfig.domain}/`,
    description: siteConfig.mission,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bertoua",
      addressRegion: "Est",
      addressCountry: "CM",
      streetAddress: siteConfig.address.line,
    },
    telephone: siteConfig.phones[0],
    email: siteConfig.emails.general,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function CourseJsonLd({ program }: { program: Program }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.name,
    description: program.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: `https://${siteConfig.domain}/`,
    },
    url: `https://${siteConfig.domain}/programmes/${program.slug}/`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostingJsonLd({ post }: { post: BlogPostMeta }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `https://${siteConfig.domain}${post.image}`,
    url: `https://${siteConfig.domain}/blog/${post.slug}/`,
    publisher: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
