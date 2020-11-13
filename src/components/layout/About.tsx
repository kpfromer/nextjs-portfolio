import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Title } from '../Title';
import { Section } from '../Section';
import { Box, Text, Flex, Button, BoxProps } from 'rebass';
import { Link } from '../Link';

const About: React.FC<Omit<BoxProps, 'css'>> = (props) => {
  const data = useStaticQuery(
    graphql`
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
    `
  );

  const { author } = data.site.siteMetadata;

  return (
    <Section {...props}>
      <Title>About</Title>
      <Box>
        <Text mb={3}>
          Hi! My name is{' '}
          <Text as="span" color="primary">
            {author.firstName} {author.lastName}
          </Text>
          . I am a full stack developer that works a lot with TypeScript and JavaScript (though I
          have experience in C++ and Java). I am currently a computer science student at{' '}
          <Link outside to="https://www.colorado.edu/">
            CU Boulder
          </Link>
          . When not programming I am snowboarding, hiking and biking.
        </Text>
      </Box>
    </Section>
  );
};
export default About;
