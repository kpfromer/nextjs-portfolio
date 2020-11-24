import React from 'react';
import { Box, BoxProps } from 'rebass';

export const Section: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box {...props} p={2}>
    <Box mx="auto" pb={4} width={8 / 10} maxWidth={1000}>
      {children}
    </Box>
  </Box>
);
