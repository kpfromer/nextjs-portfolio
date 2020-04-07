import React from 'react';
import Link from './Link';
import { Heading, Box, Flex, Text } from 'rebass';

export default ({ location, title = "Kyle Pfromer's Blog", children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  if (location.pathname === rootPath) {
    header = (
      <Heading as="h1" textAlign={['center', 'left']} mb={4}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to="/blog"
        >
          {title}
        </Link>
      </Heading>
    );
  } else {
    header = (
      <Text
        as="h3"
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to="/blog"
        >
          {title}
        </Link>
      </Text>
    );
  }
  return (
    <Box mx="auto" maxWidth={1000} py={2} px={4}>
      <Flex as="header" flexDirection={['column', 'row']} mb={[3, 0]}>
        {header}
        {/* Spacing element */}
        <Box mx="auto" />

        <Flex as="ul">
          <Box as="li" sx={{ listStyle: 'none' }}>
            <Link to="/">Main Site</Link>
          </Box>
        </Flex>
      </Flex>
      <main>{children}</main>
      <Box as="hr" mb={3} />
    </Box>
  );
};
