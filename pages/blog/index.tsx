import Preview from '@components/Blog/Preview';
import Container from '@components/Container';
import Header from '@components/Header';
import Page from '@components/Page';
import { BlogPostFrontmatter, getAllBlogPostsFrontmatter } from '@lib/blog';
import type { GetStaticProps } from 'next';
import NextLink from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllBlogPostsFrontmatter('des');

  return { props: { posts } as BlogHomeProps };
};

export interface BlogHomeProps {
  posts: BlogPostFrontmatter[];
}

const BlogHome: React.FC<BlogHomeProps> = ({ posts }) => {
  // TODO: og image
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Page
        title="Blog"
        description="See all my blog posts."
        containerProps={{ className: 'mt-5' }}
      >
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {posts.map((post) => (
              <NextLink href={`/blog/${post.slug}`} key={post.slug}>
                <a>
                  <Preview {...post} className="h-full" />
                </a>
              </NextLink>
            ))}
          </div>
        </Container>
      </Page>
    </div>
  );
};

export default BlogHome;
