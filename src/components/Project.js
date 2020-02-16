import React from 'react';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import breakpoints from '../utils/breakpoints';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import Link from './Link';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

// TODO: tech used tags
export default ({ title, description, src, github, reference = false }) => {
  const {
    site: {
      siteMetadata: { theme }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          theme {
            primary
            secondary
          }
        }
      }
    }
  `);
  return (
    <div
      css={css`
        border-radius: 10px;
        box-shadow: 0.1rem 0.1rem 0.4rem 0.05rem rgba(22, 47, 63, 0.3);
        overflow: hidden;
        margin-bottom: 10px;

        ${breakpoints.regular} {
          margin-bottom: 0;
          margin: ${rhythm(0.75)};
          min-width: 200px;
          max-width: 350px;
          flex-grow: 1;
        }
      `}
    >
      {reference ? (
        <img
          src={src}
          css={css`
            z-index: -1;
            flex: 1;
            width: 100%;
            margin-bottom: 0;
          `}
        />
      ) : (
        <Image
          fluid={src}
          css={css`
            z-index: -1;
            flex: 1;
            width: 100%;
            margin-bottom: 0;
          `}
        />
      )}
      <div
        css={css`
          padding: ${rhythm(0.5)};
        `}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <div
          css={css`
            text-align: right;
          `}
        >
          <IconContext.Provider value={{ size: rhythm(1) }}>
            <Link outside to={github}>
              <div
                css={css`
                  color: black;
                  transition: color 0.2s ease-in;
                  &: hover {
                    color: ${theme.primary};
                  }
                `}
              >
                <FaGithub />
              </div>
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
