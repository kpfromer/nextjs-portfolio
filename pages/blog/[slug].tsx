import Container from '@components/Container';
import Page from '@components/Page';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { BlogPostData, getAllBlogPostsFrontmatter, getBlogPost, getBlogPostSlugs } from '@lib/blog';
import hydrate from 'next-mdx-remote/hydrate';
import { blogMdxComponents } from '@utils/mdx';
import Post from '@components/Blog/Post';
import Header from '@components/Header';
import SocialLinks from '@components/SocialLinks';
import { Flex, Link, Spacer, Stack, VStack } from '@chakra-ui/react';
import 'katex/dist/katex.min.css';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

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
  frontmatter: { title, coverImage, created },
  previous,
  next,
}) => {
  const content = hydrate(body, { components: blogMdxComponents });

  return (
    <>
      <Header />
      <Page title={title} openGraph={{ images: [{ ...coverImage, url: coverImage.src }] }}>
        <Container>
          <Post
            pt={4}
            title={title}
            coverImage={coverImage}
            created={created}
            sx={{
              // Fixes weird katex fraction line being gray
              '.frac-line': {
                borderColor: 'var(--text-color)',
              },
            }}
          >
            {content}
          </Post>

          <VStack spacing="30px" my={6}>
            {(previous || next) && (
              <Flex w="100%" justifyContent="center" alignItems="center">
                {previous && (
                  <NextLink href={`/blog/${previous.slug}`} passHref>
                    <Link fontWeight="bold" color="primary.500" rel="noopener noreferrer">
                      <ArrowBackIcon /> {previous.title}
                    </Link>
                  </NextLink>
                )}

                <Spacer />

                {next && (
                  <NextLink href={`/blog/${next.slug}`} passHref>
                    <Link fontWeight="bold" color="primary.500" rel="noopener noreferrer">
                      {next.title} <ArrowForwardIcon />
                    </Link>
                  </NextLink>
                )}
              </Flex>
            )}

            <SocialLinks />
          </VStack>
        </Container>
      </Page>
    </>
  );
};

export default BlogPost;
