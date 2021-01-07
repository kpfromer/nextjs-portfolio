import { Box } from '@chakra-ui/react';
import okaidiaPrismTheme from '../okaidia-prism-theme';

export interface InlineProps {}

const Inline: React.FC<InlineProps> = ({ children }) => {
  return (
    <Box
      as="span"
      py="0.15em"
      px="0.4em"
      borderRadius="5px"
      fontFamily="mono"
      whiteSpace="nowrap"
      wordBreak="normal"
      style={okaidiaPrismTheme.plain as unknown}
    >
      {children}
    </Box>
  );
};

export default Inline;
