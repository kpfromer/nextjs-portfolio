import React from 'react';
import { Heading, Text, Flex, Button, Box } from 'rebass';
import { GatsbyPage, Link as ReactLink } from 'gatsby';

const NotFoundPage: GatsbyPage = () => {
  return (
    <Flex height="100vh">
      <Box m="auto" sx={{ textAlign: 'center' }}>
        <Heading mb={3}>404 - Page Not Found</Heading>
        <Text mb={2}>It seems that the page you are looking for does not exist!</Text>
        {/*
          // @ts-ignore */}
        <Button as={ReactLink} to="/">
          Head Back
        </Button>
      </Box>
    </Flex>
  );
};

export default NotFoundPage;
