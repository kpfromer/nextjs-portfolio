import { Link } from '@components/common/Link';
import { Sparkles } from '@components/Sparkles';
import { MDXProviderComponents } from '@mdx-js/react';
import React from 'react';
import { Box, Heading, Text } from 'rebass';

const Header = ({ children, as, ...props }) => {
  let fontSize = 2;
  if (as === 'h1') {
    fontSize = 6;
  } else if (as === 'h2') {
    fontSize = 5;
  } else if (as === 'h3') {
    fontSize = 4;
  } else if (as === 'h4') {
    fontSize = 3;
  }

  return (
    <Heading {...props} as={as} fontSize={fontSize} my={3}>
      {children}
    </Heading>
  );
};

const components: MDXProviderComponents = {
  h1: (props) => <Header as="h1" {...props} />,
  h2: (props) => <Header as="h2" {...props} />,
  h3: (props) => <Header as="h3" {...props} />,
  h4: (props) => <Header as="h4" {...props} />,
  h5: (props) => <Header as="h5" {...props} />,
  h6: (props) => <Header as="h6" {...props} />,
  a: ({ href, children }) => (
    <Link outside={true} to={href}>
      {children}
    </Link>
  ),
  blockquote: ({ children, ...props }) => (
    <Box
      {...props}
      as="blockquote"
      sx={{ borderLeftColor: 'primary', borderLeftWidth: '3px', borderLeftStyle: 'solid' }}
      pl={[3, 3, 4]}
      py={1}
    >
      {children}
    </Box>
  ),
  table: ({ children }) => (
    <Box as="table" sx={{ borderCollapse: 'collapse' }}>
      {children}
    </Box>
  ),
  tr: (props) => (
    <Box as="tr" sx={{ border: '1px solid #c6cbd1' }}>
      {props.children}
    </Box>
  ),
  th: ({ align, children }) => (
    <Box as="th" p={2} sx={{ fontWeight: 'bold', textAlign: align, border: '1px solid #c6cbd1' }}>
      {children}
    </Box>
  ),
  td: ({ align, children }) => (
    <Box as="td" p={2} sx={{ textAlign: align, border: '1px solid #c6cbd1' }}>
      {children}
    </Box>
  ),
  strong: ({ children }) => (
    <Text as="span" fontWeight="bold" color="primary">
      {children}
    </Text>
  ),
  hr: () => <Box sx={{ borderBottom: '1px solid #b8bdc2' }} />,
  Sparkles,
};

export default components;
