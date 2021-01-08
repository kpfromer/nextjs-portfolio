import Container from '@components/Container';
import Page from '@components/Page';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { BlogPostData, getAllBlogPostsFrontmatter, getBlogPost, getBlogPostSlugs } from '@lib/blog';
import hydrate from 'next-mdx-remote/hydrate';
import { blogMdxComponents } from '@utils/mdx';
import Post from '@components/Blog/Post';
import Header from '@components/Header';
import SocialLinks from '@components/SocialLinks';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import NextLink from 'next/link';
import info from '@configs/info';
import 'katex/dist/katex.min.css';

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
    props: post,
  };
};

interface BlogContext {
  slug: string;
  title: string;
}

export interface BlogPostProps extends BlogPostData {
  previous?: BlogContext;
  next?: BlogContext;
}

const BlogPost: React.FC<BlogPostProps> = ({
  body,
  slug,
  frontmatter: { title, coverImage, coverImageAlt, created },
  previous,
  next,
}) => {
  const content = hydrate(body, { components: blogMdxComponents });

  return (
    <>
      <Header />
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
      >
        <Container>
          <Post
            className="pt-4 katex-custom"
            title={title}
            coverImage={coverImage}
            coverImageAlt={coverImageAlt}
            created={created}
          >
            {content}
          </Post>

          <div className="flex flex-col justify-center items-center space-y-8 my-6">
            {(previous || next) && (
              <div className="w-full flex justify-center items-center">
                {previous && (
                  <NextLink href={`/blog/${previous.slug}`}>
                    <a className="font-bold text-primary-500" rel="noopener noreferrer">
                      <FiArrowLeft /> {previous.title}
                    </a>
                  </NextLink>
                )}

                <div className="flex-grow" />

                {next && (
                  <NextLink href={`/blog/${next.slug}`}>
                    <a className="font-bold text-primary-500" rel="noopener noreferrer">
                      {next.title} <FiArrowRight />
                    </a>
                  </NextLink>
                )}
              </div>
            )}

            <SocialLinks />
          </div>
        </Container>
      </Page>
    </>
  );
};

export default BlogPost;
