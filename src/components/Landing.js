import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { rhythm } from '../utils/typography';

const noSpacing = css`
  margin: 0;
  padding: 0;
`;

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            firstName
            lastName
            theme {
              primary
            }
          }
        }

        fileName: file(relativePath: { eq: "images/main.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        background: file(relativePath: { eq: "images/2019-07-27-Collegiate-West.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

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
      <div
        css={css`
          margin: auto;
          text-align: center;
        `}
      >
        <Img
          css={css`
            border-radius: 100%;
            border: 8px solid hsla(0, 0%, 100%, 0.5);
            vertical-align: middle;
            max-width: 100%;
            height: 200px;
            width: 200px;
            margin-bottom: 38px;

            font-weight: 500;
          `}
          fixed={data.fileName.childImageSharp.fixed}
        />
        <h3
          css={css`
            ${noSpacing}
            font-size: ${rhythm(2)};
            text-transform: uppercase;
            font-weight: 300;
            color: #fff;
          `}
        >
          {data.site.siteMetadata.firstName}{' '}
          <span
            css={css`
              font-weight: 500;
              color: ${data.site.siteMetadata.theme.primary};
            `}
          >
            {data.site.siteMetadata.lastName}
          </span>
        </h3>
        <p
          css={css`
            ${noSpacing}
            color: #fff;
            font-size: ${rhythm(1)};
          `}
        >
          I'm a{' '}
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Software Engineer
          </span>
        </p>
      </div>
      {/* TODO: extract line */}
    </BackgroundImage>
  );
};
