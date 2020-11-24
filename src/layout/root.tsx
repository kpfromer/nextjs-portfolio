import type { GatsbyBrowser } from 'gatsby';

import '../fonts.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Root: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  // This wrapper is mounted once and does not re-render on page change
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
  return element;
};

export default Root;
