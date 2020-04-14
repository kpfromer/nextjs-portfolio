import React from 'react';
import { Box, Heading } from 'rebass';

export default ({ children, slug }) => {
  const hook = !!slug ? { id: slug } : {};
  return (
    <Box pt={[0, 4]} pb={[3, 4]}>
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            position: 'absolute',
            content: "''",
            width: '120px',
            height: '6px',
            left: '0px',
            bottom: '-20px',
            backgroundColor: 'primary'
          }
        }}
        mb={3}
      >
        <Heading
          as="h3"
          fontSize={6}
          fontWeight={600}
          sx={{ textTransform: 'uppercase', letterSpacing: '-.5px' }}
          {...hook}
        >
          {children}
        </Heading>
      </Box>
    </Box>
  );
};
