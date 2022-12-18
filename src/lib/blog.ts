import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import imageMetadata from '@plugins/image-metadata';
import { promisify } from 'util';
import { getMdxImage, MdxImage, sanitize } from './common';
import relativeToFolder from '@plugins/relative-to-folder';
import { DateTime } from 'luxon';
import remarkMath from 'remark-math';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeKatex from 'rehype-katex';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface BlogPostFrontmatter {
  slug: string;

  title: string;

  coverImage: MdxImage;
  coverImageAlt?: string;
  ogImage?: MdxImage;

  created: string;
  updated?: string;

  category?: string;
  tags?: string[];
}

export interface BlogPostData {
  slug: string;
  body: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontmatter: BlogPostFrontmatter;
}

const root = process.cwd();

export function getFiles() {
  return fs.readdirSync(path.join(root, 'content', 'blog'));
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

export async function getBlogPostFrontmatter(slug: string): Promise<BlogPostFrontmatter> {
  const allFiles = getFiles();

  const file = allFiles
    .filter((file) => /\.mdx$/.test(file))
    .find((fileName) => fileName.replace(/\.mdx$/, '') === slug);

  if (!file) return undefined;

  const filepath = path.join(root, 'content', 'blog', `${slug}.mdx`);

  const data = (await promisify(fs.readFile)(filepath)).toString();

  return (await parseFrontmatter(slug, {
    ...matter(data).data,
    slug,
  })) as BlogPostFrontmatter;
}

export async function getBlogPost(slug: string): Promise<BlogPostData | undefined> {
  const allFiles = getFiles();
  const file = allFiles
    .filter((file) => /\.mdx$/.test(file))
    .find((fileName) => fileName.replace(/\.mdx$/, '') === slug);

  if (!file) return undefined;

  const filepath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);

  const data = (await promisify(fs.readFile)(filepath)).toString();

  const { content, data: metadata } = matter(data);

  return {
    slug,
    frontmatter: { ...(await parseFrontmatter(slug, metadata)), slug },
    body: await serialize(content, {
      scope: metadata,
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkUnwrapImages],
        rehypePlugins: [
          rehypeKatex,
          relativeToFolder({ pathToAdd: `/blog/${slug}` }),
          imageMetadata,
        ],
      },
    }),
  };
}

export async function getBlogPostSlugs(): Promise<string[]> {
  const allFiles = fs
    .readdirSync(path.join(process.cwd(), 'content', 'blog'))
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

export async function getAllBlogPostsFrontmatter(
  sortByDate?: 'asc' | 'des',
): Promise<BlogPostFrontmatter[]> {
  const slugs = await getBlogPostSlugs();

  const blogPosts: BlogPostFrontmatter[] = [];

  for (const slug of slugs) {
    blogPosts.push(await getBlogPostFrontmatter(slug));
  }

  if (!sortByDate) return blogPosts;

  return blogPosts.sort(
    (a, b) =>
      (sortByDate === 'asc' ? 1 : -1) *
      DateTime.fromISO(a.created).diff(DateTime.fromISO(b.created)).milliseconds,
  );
}
