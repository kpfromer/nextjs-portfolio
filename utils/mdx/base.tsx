import type { MDXProviderComponentsProp } from '@mdx-js/react';
import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Header = ({ children, as: type, ...props }) => {
  let fontSize = 'xl';

  switch (type) {
    case 'h1':
      fontSize = '5xl';
      break;
    case 'h2':
      fontSize = '4xl';
      break;
    case 'h3':
      fontSize = '3xl';
      break;
    case 'h4':
      fontSize = '2xl';
      break;
  }

  return (
    <Heading {...props} as={type} my={5} sx={{ fontSize }}>
      {children}
    </Heading>
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
        <Link isExternal href={href} color="primary.500">
          {children}
        </Link>
      );
    }

    return (
      <NextLink href={href} passHref>
        <Link color="primary.500">{children}</Link>
      </NextLink>
    );
  },
  ul: (props) => (
    <Box
      as="ul"
      sx={{
        'li > ul': {
          pl: 4,
        },
      }}
      listStylePosition="inside"
      {...props}
    />
  ),
  li: (props) => <Box as="li" display="list-item" {...props} />,
  p: (props) => <Text {...props} my={3} lineHeight="tall" />,
};

export default mdxComponents;
