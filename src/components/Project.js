import React from 'react';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import Link from './Link';
import { useStaticQuery, graphql } from 'gatsby';
import { ListItem, HeaderImage, Body, Dates, Title, Description } from './layout/list/List';

// TODO: tech used tags
export default ({ title, dates, description, image, github }) => {
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
    <ListItem>
      {!!image && <HeaderImage fluid={image.childImageSharp.fluid} />}
      <Body
        css={css`
          padding: 0.75rem;
        `}
      >
        <Dates>{dates}</Dates>
        <Title>{title}</Title>
        <Description>{description}</Description>
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
      </Body>
    </ListItem>
  );
};
