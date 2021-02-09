import type { MDXProviderComponentsProp } from '@mdx-js/react';
import Sparkles from '@components/Sparkles';
import CodeBlock from '@components/Code/Block';
import baseMdxComponents from './base';
import Img from '@components/Img';

const mdxComponents: MDXProviderComponentsProp = {
  ...baseMdxComponents,
  img: (props) => (
    <div className="rounded my-3 overflow-hidden flex">
      <Img
        {...props}
        containerProps={{ className: 'mx-auto' }}
        className="bg-white"
        placeholderProps={{ className: 'bg-white' }}
      />
    </div>
  ),
  Sparkles,
  pre: ({ children }) => children,
  code: CodeBlock,
};

export default mdxComponents;
