const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    // TypeScript
    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '../components')],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel', require.resolve('babel-preset-react-app')],
            plugins: ['react-docgen'],
          },
        },
      ],
    });
    newConfig.resolve.extensions.push('.ts', '.tsx');

    // Allows for @component and @util from tsconfig.json paths value
    newConfig.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    );

    // Fixes chakra provider in storybook not working properly (https://github.com/chakra-ui/chakra-ui/issues/2527)
    // newConfig.resolve.alias = {
    //   ...newConfig.resolve.alias,
    //   '@emotion/core': toPath('node_modules/@emotion/react'),
    //   'emotion-theming': toPath('node_modules/@emotion/react'),
    // };

    return newConfig;
  },
};
