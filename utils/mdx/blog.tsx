import type { MDXProviderComponentsProp } from '@mdx-js/react';
import NextImage from 'next/image';
import Sparkles from '@components/Sparkles';
import CodeBlock from '@components/Code/Block';
import CodeInline from '@components/Code/Inline';
import baseMdxComponents from './base';

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
      className="border-solid border-black"
      {...props}
    />
  ),
  th: ({ align, children }) => (
    <th
      style={{ textAlign: align }}
      // border="1px solid #c6cbd1"
      className="font-bold p-2 border border-solid border-black"
    >
      {children}
    </th>
  ),
  td: ({ align, children }) => (
    <td
      style={{ textAlign: align }}
      // border="1px solid #c6cbd1"
      className="p-2 border border-solid border-black"
    >
      {children}
    </td>
  ),
  img: (props) => (
    <div className="bg-white rounded my-2">
      <NextImage {...props} layout="responsive" />
    </div>
  ),
  Sparkles,
  code: (props) => <CodeBlock {...props} customClass="my-2" />,
  inlineCode: CodeInline,
};

export default mdxComponents;
