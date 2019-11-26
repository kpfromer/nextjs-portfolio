import React from 'react';
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default ({ css: userCss, to, children, ...rest }) => {
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
      }
    `
  );
  return (
    <Link
      {...rest}
      css={css`
        ${userCss}
        color: ${data.site.siteMetadata.theme.primary};
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        &:visited {
          color: inital;
        }
      `}
      to={to}
    >
      {children}
    </Link>
  );
};
