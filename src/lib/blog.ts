import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const blogDir = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function readSlugs(): string[] {
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  return readSlugs()
    .map((slug) => {
      const fileContents = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf8");
      const { data } = matter(fileContents);
      return data as BlogPostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = marked.parse(content, { async: false }) as string;

  return { ...(data as BlogPostMeta), contentHtml };
}
