import { blogMdxComponents } from '@utils/mdx';
import fs from 'fs';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import path from 'path';
import imageMetadata from '@plugins/image-metadata';
import { promisify } from 'util';
import { getMdxImage, MdxImage, sanitize } from './common';
import relativeToFolder from '@plugins/relative-to-folder';
import { DateTime } from 'luxon';

export interface BlogPostFrontmatter {
  title: string;

  coverImage: MdxImage;
  ogImage?: MdxImage;

  created: string;
  updated?: string;

  category?: string;
  tags?: string[];
}

export interface BlogPostData {
  slug: string;
  body: string;
  frontmatter: BlogPostFrontmatter;
}

async function parseFrontmatter(
  slug: string,
  metadata: Record<string, unknown>,
): Promise<BlogPostFrontmatter> {
  const frontmatter: Partial<BlogPostFrontmatter> = { ...metadata };

  frontmatter.coverImage = await getMdxImage(
    path.join('/blog', slug, metadata.coverImage as string),
  );

  return sanitize(frontmatter) as BlogPostFrontmatter;
}

export async function getBlogPost(slug: string): Promise<BlogPostData | undefined> {
  const allFiles = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  const file = allFiles
    .filter((file) => /\.mdx$/.test(file))
    .find((fileName) => fileName.replace(/\.mdx$/, '') === slug);

  if (!file) return undefined;

  const filepath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);

  const data = (await promisify(fs.readFile)(filepath)).toString();

  const { content, data: metadata } = matter(data);

  return {
    slug,
    frontmatter: await parseFrontmatter(slug, metadata),
    body: await renderToString(content, {
      components: blogMdxComponents,
      scope: metadata,
      mdxOptions: {
        rehypePlugins: [relativeToFolder({ pathToAdd: `/blog/${slug}` }), imageMetadata],
        filepath,
      },
    }),
  };
}

export async function getBlogPostSlugs(): Promise<string[]> {
  const allFiles = fs
    .readdirSync(path.join(process.cwd(), 'content/blog'))
    .filter((file) => {
      const isMdx = /\.mdx$/.test(file);

      // Load only files with test- prefix for testing
      if (process.env.NEXT_PUBLIC_NODE_ENV === 'test') {
        return isMdx && file.startsWith('test-');
      }

      // Load everything but test files
      return isMdx && !file.startsWith('test-');
    })
    .map((file) => file.replace(/\.mdx$/, ''));

  return allFiles;
}

export async function getAllBlogPosts(sortByDate?: 'asc' | 'des'): Promise<BlogPostData[]> {
  const slugs = await getBlogPostSlugs();

  const blogPosts: BlogPostData[] = [];

  for (const slug of slugs) {
    blogPosts.push(await getBlogPost(slug));
  }

  if (!sortByDate) return blogPosts;

  return blogPosts.sort(
    (a, b) =>
      (sortByDate === 'asc' ? 1 : -1) *
      DateTime.fromISO(a.frontmatter.created).diff(DateTime.fromISO(b.frontmatter.created))
        .milliseconds,
  );
}
