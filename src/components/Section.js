import React from 'react';
import { Box } from 'rebass';

export default ({ children, ...props }) => (
  <Box {...props} p={2}>
    <Box mx="auto" pb={4} w={8 / 10} maxWidth={1000}>
      {children}
    </Box>
  </Box>
);
