import type { MDXProviderComponentsProp } from '@mdx-js/react';
import NextImage from 'next/image';
import { Box } from '@chakra-ui/react';
import Sparkles from '@components/Sparkles';
import CodeBlock from '@components/Code/Block';
import CodeInline from '@components/Code/Inline';
import baseMdxComponents from './base';

const mdxComponents: MDXProviderComponentsProp = {
  ...baseMdxComponents,
  blockquote: ({ children, ...props }) => (
    <Box
      {...props}
      as="blockquote"
      borderLeftColor="primary"
      borderLeftWidth="3px"
      borderLeftStyle="solid"
      pl={[3, 3, 4]}
      my={4}
      fontStyle="italic"
    >
      {children}
    </Box>
  ),
  table: ({ children }) => (
    <Box as="table" sx={{ borderCollapse: 'collapse' }}>
      {children}
    </Box>
  ),
  tr: (props) => <Box as="tr" border="1px solid #c6cbd1" {...props} />,
  th: ({ align, children }) => (
    <Box as="th" p={2} fontWeight="bold" textAlign={align} border="1px solid #c6cbd1">
      {children}
    </Box>
  ),
  td: ({ align, children }) => (
    <Box as="td" p={2} textAlign={align} border="1px solid #c6cbd1">
      {children}
    </Box>
  ),
  img: (props) => (
    <Box bg="white">
      <NextImage {...props} layout="responsive" />
    </Box>
  ),
  Sparkles,
  code: (props) => <CodeBlock {...props} my={2} />,
  inlineCode: CodeInline,
};

export default mdxComponents;
