import { Flex, SimpleGrid, Box } from '@chakra-ui/react';
import Preview from '@components/Blog/Preview';
import Container from '@components/Container';
import Header from '@components/Header';
import Page from '@components/Page';
import { BlogPostData, BlogPostFrontmatter, getAllBlogPosts } from '@lib/blog';
import type { GetStaticProps } from 'next';
import NextLink from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllBlogPosts('des');

  return { props: { posts } as BlogHomeProps };
};

export interface BlogHomeProps {
  posts: BlogPostFrontmatter[];
}

const BlogHome: React.FC<BlogHomeProps> = ({ posts }) => {
  // TODO: og image
  return (
    <>
      <Header />
      <Page title="Blog" description="See all my blog posts." containerProps={{ mt: 5 }}>
        <Container>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {posts.map(({ slug, title, created, coverImage }) => (
              <NextLink href={`/blog/${slug}`} passHref key={slug}>
                <Box as="a">
                  <Preview title={title} created={created} coverImage={coverImage} h="100%" />
                </Box>
              </NextLink>
            ))}
          </SimpleGrid>
        </Container>
      </Page>
    </>
  );

  // return (
  //   <Flex justifyContent="center" flexWrap="wrap" flexDirection={['column', 'row']}>
  //     {posts.map(({ slug, frontmatter: { title, created, coverImage } }) => (
  //       <Box mt={[0, 3, 4]} mx={[0, 3, 4]} mb={[3, 0]} width={['100%', '32%']}>
  //         <Preview key={slug} title={title} created={created} coverImage={coverImage} />
  //       </Box>
  //     ))}
  //   </Flex>
  // );
};

export default BlogHome;
