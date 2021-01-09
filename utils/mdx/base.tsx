import type { MDXProviderComponentsProp } from '@mdx-js/react';
import React from 'react';
import NextLink from 'next/link';

const Header = ({ children, as: Type, ...props }) => {
  let fontSize = 'text-xl';

  switch (Type) {
    case 'h1':
      fontSize = 'text-5xl';
      break;
    case 'h2':
      fontSize = 'text-4xl';
      break;
    case 'h3':
      fontSize = 'text-3xl';
      break;
    case 'h4':
      fontSize = 'text-2xl';
      break;
  }

  return (
    <Type {...props} className={`font-bold my-5 ${fontSize}`}>
      {children}
    </Type>
  );
};

const mdxComponents: MDXProviderComponentsProp = {
  h1: (props) => <Header as="h1" {...props} />,
  h2: (props) => <Header as="h2" {...props} />,
  h3: (props) => <Header as="h3" {...props} />,
  h4: (props) => <Header as="h4" {...props} />,
  h5: (props) => <Header as="h5" {...props} />,
  h6: (props) => <Header as="h6" {...props} />,
  a: ({ href, children }) => {
    const external = !href.startsWith('/');
    if (external) {
      return (
        <a href={href} className="text-primary-500">
          {children}
        </a>
      );
    }

    return (
      <NextLink href={href}>
        <a className="text-primary-500">{children}</a>
      </NextLink>
    );
  },
  ul: (props) => <ul {...props} className="list-inside list-disc" />,
  ol: (props) => <ol {...props} className="list-inside list-decimal" />,
  li: (props) => <li {...props} className="nested-list" />,
  p: (props) => <p {...props} className="my-3 leading-relaxed" />,
};

export default mdxComponents;
