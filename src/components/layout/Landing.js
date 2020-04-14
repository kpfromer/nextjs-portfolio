import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { Box, Heading, Text, Flex } from 'rebass';
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
            socialLinks {
              linkedin
              stackOverflow
              github
            }
          }
        }

        me: file(relativePath: { eq: "kyle-pfromer.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        background: file(
          relativePath: { eq: "2019-07-27-Collegiate-West.jpeg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const { author, socialLinks } = data.site.siteMetadata;

  return (
    <BackgroundImage
      css={css`
        height: 100vh;
        display: flex;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        background-position: 80% 0%;
      `}
      fluid={data.background.childImageSharp.fluid}
    >
      <div
        css={css`
          background-color: rgba(7, 23, 55, 0.8);
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -20;
        `}
      />
      <Box m="auto" sx={{ textAlign: 'center' }}>
        <Img
          css={css`
            border-radius: 100%;
            border: 8px solid hsla(0, 0%, 100%, 0.5);
            vertical-align: middle;
            max-width: 100%;
            height: 300px;
            width: 300px;
            margin-bottom: 38px;
            font-weight: 500;
          `}
          fixed={data.me.childImageSharp.fixed}
        />
        <Heading
          as="h1"
          fontSize={7}
          sx={{ textTransform: 'uppercase' }}
          color="white"
          fontWeight={300}
        >
          {author.firstName}{' '}
          <Text as="span" color="primary" fontWeight={500}>
            {author.lastName}
          </Text>
        </Heading>
        <Text fontSize={5} color="white">
          I'm a{' '}
          <Text as="span" fontWeight={600}>
            Software Engineer
          </Text>
          <IconContext.Provider value={{ color: '#fff', size: '48px' }}>
            <Flex>
              <Box mx="auto">
                <Link outside to={socialLinks.github} target="_blank" mr={3}>
                  <FaGithub />
                </Link>
                <Link outside to={socialLinks.linkedin} target="_blank">
                  <FaLinkedin />
                </Link>
                <Link
                  outside
                  to={socialLinks.stackOverflow}
                  target="_blank"
                  ml={3}
                >
                  <FaStackOverflow />
                </Link>
              </Box>
            </Flex>
          </IconContext.Provider>
        </Text>
      </Box>
    </BackgroundImage>
  );
};
