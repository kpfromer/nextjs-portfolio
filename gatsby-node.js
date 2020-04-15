const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
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
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts
    .filter((post) => !post.node.frontmatter.hidden)
    .forEach((post, index) => {
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
          next
        }
      });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
    createNodeField({
      name: `blogPath`,
      node,
      value: `/blog${value}`
    });
  }
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    'type Mdx implements Node { frontmatter: MdxFrontmatter }',
    schema.buildObjectType({
      name: 'MdxFrontmatter',
      fields: {
        tags: {
          type: '[String!]',
          resolve(source, args, context, info) {
            const { tags } = source;
            if (source.tags == null || (Array.isArray(tags) && !tags.length)) {
              return ['uncategorized'];
            }
            return tags;
          }
        },
        hidden: {
          type: 'Boolean!',
          resolve(source) {
            return !!source.hidden;
          }
        }
      }
    })
  ];
  createTypes(typeDefs);
};
