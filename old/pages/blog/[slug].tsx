import 'katex/dist/katex.min.css';

import { BlogPostData, getAllBlogPostsFrontmatter, getBlogPost, getBlogPostSlugs } from '@lib/blog';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ImgPlaceholder, generatePlaceholder } from '@lib/placeholder';

import Header from '@components/Header';
import Icon from '@components/Icon';
import { MDXRemote } from 'next-mdx-remote';
import NextLink from 'next/link';
import Page from '@components/Page';
import Post from '@components/Blog/Post';
import SocialLinks from '@components/SocialLinks';
import { blogMdxComponents } from '@utils/mdx';
import info from '@configs/info';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getBlogPostSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = (await getBlogPost(params.slug as string)) as BlogPostProps;
  const allPosts = await getAllBlogPostsFrontmatter('asc');

  const index = allPosts.findIndex((post) => post.slug === (params.slug as string));

  if (index !== 0) {
    post.previous = allPosts[index - 1];
  }
  if (index !== allPosts.length - 1) {
    post.next = allPosts[index + 1];
  }

  return {
    props: {
      ...post,
      coverImagePlaceholder: await generatePlaceholder(post.frontmatter.coverImage.src),
    },
  };
};

interface BlogContext {
  slug: string;
  title: string;
}

export interface BlogPostProps extends BlogPostData {
  coverImagePlaceholder: ImgPlaceholder;

  previous?: BlogContext;
  next?: BlogContext;
}

const BlogPost: React.FC<BlogPostProps> = ({
  body,
  slug,
  frontmatter: { title, coverImage, coverImageAlt, created },
  coverImagePlaceholder,
  previous,
  next,
}) => {
  return (
    <Page
      title={title}
      openGraph={{
        title,
        // description
        url: `${info.baseUrl}/blog/${slug}`,
        type: 'article',
        article: {
          publishedTime: created,
          // tags:
        },
        images: [{ ...coverImage, url: `${info.baseUrl}${coverImage.src}`, alt: coverImageAlt }],
      }}
      containerProps={{ className: 'min-h-screen' }}
      header={<Header />}
    >
      <Post
        className="pt-4 katex-custom"
        title={title}
        coverImage={coverImage}
        coverImagePlaceholder={coverImagePlaceholder}
        coverImageAlt={coverImageAlt}
        created={created}
      >
        <MDXRemote {...body} components={blogMdxComponents} />
      </Post>

      <div className="flex flex-col justify-center items-center space-y-8 my-6">
        {(previous || next) && (
          <div className="w-full flex justify-center items-center">
            {previous && (
              <NextLink href={`/blog/${previous.slug}`}>
                <a className="font-bold text-primary-500" rel="noopener noreferrer">
                  <Icon as={FiArrowLeft} aria-hidden /> {previous.title}
                </a>
              </NextLink>
            )}

            <div className="flex-grow" />

            {next && (
              <NextLink href={`/blog/${next.slug}`}>
                <a className="font-bold text-primary-500" rel="noopener noreferrer">
                  {next.title} <Icon as={FiArrowRight} aria-hidden />
                </a>
              </NextLink>
            )}
          </div>
        )}

        <SocialLinks />
      </div>
    </Page>
  );
};

export default BlogPost;
