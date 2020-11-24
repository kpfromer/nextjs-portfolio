import type { GatsbyNode } from 'gatsby';
import path from 'path';

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  // https://www.gatsbyjs.org/docs/node-apis/#createPages

  const { createPage } = actions;

  const blogPost = path.resolve(`./src/components/templates/BlogPost.tsx`);
  const result = await graphql<{
    allMdx: {
      edges: {
        node: {
          id: string;
          fields: { blogPath: string; slug: string };
          frontmatter: {
            title: string;
            hidden: boolean;
          };
        };
      }[];
    };
  }>(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { hidden: { eq: false }, type: { ne: "home" } } }
        ) {
          edges {
            node {
              id
              fields {
                blogPath
                slug
              }
              frontmatter {
                title
                hidden
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    const { slug, blogPath } = post.node.fields;

    createPage({
      path: blogPath,
      component: blogPost,
      context: {
        id: post.node.id,
        slug,
        blogPath,
        previous,
        next,
      },
    });
  });
};

export default createPages;
