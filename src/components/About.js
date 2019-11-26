import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Title from './Title';
import { rhythm } from '../utils/typography';
import breakpoints from '../utils/breakpoints';
import Button from './Button';
import Section from './Section';
import Img from 'gatsby-image';

const item = css`
  ${breakpoints.regular} {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

const left = css`
  ${item}
  display: flex;
  ${breakpoints.regular} {
    padding-right: ${rhythm(0.5)};
  }
`;

const right = css`
  ${item}
  padding-top: ${rhythm(1)};
  ${breakpoints.regular} {
    padding-top: 0;
    padding-left: ${rhythm(0.5)};
  }
`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            theme {
              primary
            }
          }
        }

        fileName: file(relativePath: { eq: "kyle-pfromer.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const details = {
    birthday: '11.29.2000',
    city: 'Boulder, CO, USA',
    study: 'University of Colorado, Boulder',
    mail: 'kyle@kylepfromer.com',
    age: '18',
    interests: 'Hiking, Biking, Snowboarding',
    degree: 'Bachelor',
    website: 'kylepfromer.com'
  };

  return (
    <Section>
      <Title title="About" subtitle="Main Info About Me" />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          ${breakpoints.regular} {
            flex-direction: row;
          }
        `}
      >
        <div css={left}>
          <Img
            css={css`
              width: 100%;
              vertical-align: middle;
              max-width: 500px;
              margin: auto;
            `}
            fluid={data.fileName.childImageSharp.fluid}
          />
        </div>
        <div css={right}>
          <h3>I'm Kyle Pfromer and I'm a Creative Thinker</h3>
          <p>
            Hi! My name is{' '}
            <span
              css={css`
                color: ${data.site.siteMetadata.theme.primary};
              `}
            >
              Kyle Pfromer
            </span>
            . I am a Web Developer, and I'm very passionate and dedicated to my work. I started programming in middle
            school and have been trying to learn as much as about software development as I can. I have gained loads of
            knowledge and have the skills to make your project a success. I enjoy breaking down projects that seem to be
            difficult into bit sized chunks. I find I feel the most accomplished when I finish a product that does
            everything is was created to do.
          </p>

          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              list-style-type: none;
            `}
          >
            {Object.entries(details).map(([key, value]) => (
              <li
                css={css`
                  width: 50%;
                `}
              >
                <span css={css``}>
                  <label css={css``}>{capitalizeFirstLetter(key)}:</label> {value}
                </span>
              </li>
            ))}

            <Button to="https://drive.google.com/file/d/1KUxBSQwj87LBoHmsuRAyPgfN6F6oo5kR/view?usp=sharing">
              Download Resume
            </Button>
          </ul>
        </div>
      </div>
    </Section>
  );
};
