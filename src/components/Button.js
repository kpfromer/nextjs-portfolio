import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default ({ to, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          theme {
            primary
          }
        }
      }
    }
  `);
  return (
    <a
      href={to}
      target="_blank"
      css={css`
        background-color: ${data.site.siteMetadata.theme.primary};
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        padding: 12px 35px;
        border-radius: 3px;
        display: inline-block;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        text-decoration: none;
        &:visited {
          color: #fff;
        }
      `}
    >
      {children}
    </a>
  );
};
