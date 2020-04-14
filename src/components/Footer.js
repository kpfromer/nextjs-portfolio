import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Text } from 'rebass';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            firstName
            lastName
          }
        }
      }
    }
  `);
  const { author } = data.site.siteMetadata;

  return (
    <Box p={4} bg="secondary">
      <Text color="white">
        © Copyright {new Date().getFullYear()} {author.firstName} {author.lastName}. All Rights are
        Reserved.
      </Text>
    </Box>
  );
};
