import { BlogPostFrontmatter, getAllBlogPostsFrontmatter } from '@lib/blog';
import { ImgPlaceholder, generatePlaceholder } from '@lib/placeholder';

import { GetStaticProps } from 'next';
import Header from '@components/Header';
import { Heading } from '@components/Heading';
import { HomeProps } from '..';
import NextLink from 'next/link';
import Page from '@components/Page';
import Preview from '@components/Blog/Preview';
import React from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await Promise.all(
    (
      await getAllBlogPostsFrontmatter('des')
    ).map(async (post) => ({
      ...post,
      coverImagePlaceholder: await generatePlaceholder(post.coverImage.src),
    })),
  );

  return {
    props: {
      posts,
    } as HomeProps,
  };
};

export interface BlogPage {
  posts: (BlogPostFrontmatter & { coverImagePlaceholder: ImgPlaceholder })[];
}

const BlogPage: React.FC<BlogPage> = ({ posts }) => {
  return (
    <Page title="Projects" description="My personal projects." header={<Header />}>
      <Heading id="blog">Blog Posts</Heading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <NextLink href={`/blog/${post.slug}`} key={post.slug}>
            <a>
              <Preview {...post} className="h-full" />
            </a>
          </NextLink>
        ))}
      </div>
    </Page>
  );
};

export default BlogPage;
