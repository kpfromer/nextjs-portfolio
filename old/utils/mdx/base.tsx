import type { MDXProviderComponentsProp } from '@mdx-js/react';
import React from 'react';
import NextLink from 'next/link';

const mdxComponents: MDXProviderComponentsProp = {
  a: ({ href, children }) => {
    const external = !href.startsWith('/');
    if (external) {
      return (
        <a href={href} className="text-primary-500" target="_blank">
          {children}
        </a>
      );
    }
    return (
      <NextLink href={href}>
        <a className="text-primary-500" rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      </NextLink>
    );
  },
};

export default mdxComponents;
