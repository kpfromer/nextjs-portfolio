import type { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  // https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    createNodeField({
      name: `blogPath`,
      node,
      value: `/blog${value}`,
    });
  }
};

export default onCreateNode;
