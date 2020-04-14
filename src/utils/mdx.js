import { Link } from '../components/Link';
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

export default {
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
  )
};
