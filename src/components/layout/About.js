import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import Section from '../Section';
import { Box, Text, Flex, Button } from 'rebass';
import { Link } from '../Link';

export default () => {
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
    <Section>
      <Title>About</Title>
      <Box>
        <Text mb={3}>
          Hi! My name is{' '}
          <Text as="span" color="primary">
            {author.firstName} {author.lastName}
          </Text>
          . I am a Full-Stack Web Developer. I started programming in middle school and have been
          writing code since then.
        </Text>

        <Flex as="ul" flexWrap="wrap" sx={{ listStyleType: 'none' }}>
          <Box width={1 / 2} py={1}>
            <Text as="span" fontWeight={700}>
              Study:
            </Text>{' '}
            University of Colorado, Boulder
          </Box>

          <Box width={1 / 2} py={1}>
            <Text as="span" fontWeight={700}>
              Email:
            </Text>{' '}
            <Link outside to="mailto:kpfromer2@gmail.com">
              kpfromer2@gmail.com
            </Link>
          </Box>

          <Box width={1 / 2} py={1}>
            <Text as="span" fontWeight={700}>
              Degree:
            </Text>{' '}
            Bachelor of Science
          </Box>

          <Box width={1 / 2} py={1}>
            <Text as="span" fontWeight={700}>
              Interests:
            </Text>{' '}
            Hiking, Biking, Snowboarding
          </Box>

          <Button
            mt={3}
            fontSize={3}
            as="a"
            href="https://drive.google.com/file/d/1KUxBSQwj87LBoHmsuRAyPgfN6F6oo5kR/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </Button>
        </Flex>
      </Box>
    </Section>
  );
};
