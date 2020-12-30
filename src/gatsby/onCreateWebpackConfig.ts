import type { GatsbyNode } from 'gatsby';
import path from 'path';

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  // https://www.gatsbyjs.com/docs/node-apis/#onCreateWebpackConfig
  const alias = {
    // to avoid relative imports (must match `paths` in `tsconfig.json`):
    '@components': path.resolve(__dirname, '../components'),
    '@utils': path.resolve(__dirname, '../utils'),
  };
  actions.setWebpackConfig({
    resolve: {
      alias,
    },
  });
};

export default onCreateWebpackConfig;
