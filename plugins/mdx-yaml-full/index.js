// plugins/mdx-yaml-full/index.js
// from: https://github.com/gatsbyjs/gatsby/issues/21789

const mdx = require('@mdx-js/mdx');
const babel = require('@babel/core');
const BabelPluginPluckImports = require('gatsby-plugin-mdx/utils/babel-plugin-pluck-imports');
const htmlAttrToJSXAttr = require('gatsby-plugin-mdx/utils/babel-plugin-html-attr-to-jsx-attr');
const removeExportKeywords = require('gatsby-plugin-mdx/utils/babel-plugin-remove-export-keywords');

module.exports = ({ node }, pluginOptions) => ({
  tag: '!mdx',
  options: {
    kind: 'scalar',
    construct: async (data) => {
      const code = await mdx(data);

      // lifted straight from this section:
      // https://github.com/gatsbyjs/gatsby/blob/cd150b5e5264a5a75f2abc27e3430c55bfcd4e41/packages/gatsby-plugin-mdx/utils/gen-mdx.js#L138
      const transformed = babel
        .transformSync(code, {
          plugins: [new BabelPluginPluckImports().plugin, htmlAttrToJSXAttr, removeExportKeywords],
          presets: [
            require(`@babel/preset-react`),
            [
              require(`@babel/preset-env`),
              {
                useBuiltIns: `entry`,
                corejs: 2,
                modules: false
              }
            ]
          ]
        })
        // ... ew :(
        .code.replace(/export\s*default\s*function\s*MDXContent\s*/, `return function MDXContent`)
        .replace(/export\s*{\s*MDXContent\s+as\s+default\s*};?/, `return MDXContent;`);

      console.log(transformed);

      return transformed;
    }
  }
});
