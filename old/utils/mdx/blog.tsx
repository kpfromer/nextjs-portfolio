import CodeBlock from '@components/Code/Block';
import Img from 'next/image';
import type { MDXProviderComponentsProp } from '@mdx-js/react';
import Sparkles from '@components/Sparkles';
import baseMdxComponents from './base';

const mdxComponents: MDXProviderComponentsProp = {
  ...baseMdxComponents,
  img: (props) => (
    <div className="rounded my-3 overflow-hidden flex">
      <Img {...props} className="bg-white" />
    </div>
  ),
  Sparkles,
  pre: ({ children }) => children,
  code: CodeBlock,
};

export default mdxComponents;
