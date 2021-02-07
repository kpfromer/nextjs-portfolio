import type { MDXProviderComponentsProp } from '@mdx-js/react';
import Sparkles from '@components/Sparkles';
import CodeBlock from '@components/Code/Block';
import CodeInline from '@components/Code/Inline';
import baseMdxComponents from './base';
import Img from '@components/Img';

const mdxComponents: MDXProviderComponentsProp = {
  ...baseMdxComponents,
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="border-primary-500 border-l-2 border-solid pl-3 lg:pl-4 my-4 italic"
    >
      {children}
    </blockquote>
  ),
  table: ({ children }) => <table className="border-collapse">{children}</table>,
  tr: (props) => (
    <tr
      // border="1px solid #c6cbd1"
      className="border-solid border-gray-700 dark:border-gray-400"
      {...props}
    />
  ),
  th: ({ align, children }) => (
    <th
      style={{ textAlign: align }}
      className="font-bold p-2 border border-solid border-gray-700 dark:border-gray-400"
    >
      {children}
    </th>
  ),
  td: ({ align, children }) => (
    <td
      style={{ textAlign: align }}
      className="p-2 border border-solid border-gray-700 dark:border-gray-400"
    >
      {children}
    </td>
  ),
  img: (props) => (
    <div className="rounded my-2 overflow-hidden flex">
      <Img
        {...props}
        containerProps={{ className: 'mx-auto' }}
        className="bg-white"
        placeholderProps={{ className: 'bg-white' }}
      />
    </div>
  ),
  Sparkles,
  // code: CodeBlock,
  // inlineCode: CodeInline,
};

export default mdxComponents;
