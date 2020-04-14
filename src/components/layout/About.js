import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import Section from '../Section';
import { Box, Text, Flex, Button } from 'rebass';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

  const details = {
    birthday: '11.29.2000',
    city: 'Boulder, CO, USA',
    study: 'University of Colorado, Boulder',
    mail: 'kpfromer2@gmail.com', // TODO: malito
    age: '19',
    interests: 'Hiking, Biking, Snowboarding',
    degree: 'Bachelor',
    website: 'kylepfromer.com'
  };

  return (
    <Section>
      <Title>About</Title>
      <Box>
        <Text mb={3}>
          Hi! My name is{' '}
          <Text as="span" color="primary">
            {author.firstName} {author.lastName}
          </Text>
          . I am a Web Developer, and I'm very passionate and dedicated to my work. I started
          programming in middle school and have been trying to learn as much as about software
          development as I can. I have gained loads of knowledge and have the skills to make your
          project a success. I enjoy breaking down projects that seem to be difficult into bit sized
          chunks. I find I feel the most accomplished when I finish a product that does everything
          is was created to do.
        </Text>

        <Flex as="ul" flexWrap="wrap" sx={{ listStyleType: 'none' }}>
          {Object.entries(details).map(([key, value]) => (
            <Box key={key} width={1 / 2} py={1}>
              <Text as="span" fontWeight={700}>
                {capitalizeFirstLetter(key)}:
              </Text>{' '}
              {value}
            </Box>
          ))}

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
