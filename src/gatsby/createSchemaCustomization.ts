import type { GatsbyNode } from 'gatsby';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
  schema,
}) => {
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
          },
        },
        hidden: {
          type: 'Boolean!',
          resolve(source) {
            return !!source.hidden;
          },
        },
      },
    }),
  ];
  createTypes(typeDefs);
};

export default createSchemaCustomization;
