import React from 'react';
import { Heading, Text, Flex, Button, Box } from 'rebass';
import { Link as ReactLink } from 'gatsby';

export default () => {
  return (
    <Flex height="100vh">
      <Box m="auto" textAlign="center">
        <Heading mb={3}>404 - Page Not Found</Heading>
        <Text mb={2}>It seems that the page you are looking for does not exist!</Text>
        <Button as={ReactLink} to="/">
          Head Back
        </Button>
      </Box>
    </Flex>
  );
};
