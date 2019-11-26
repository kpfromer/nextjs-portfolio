import React from 'react';
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default ({ css: userCss, to, outside = false, children, ...rest }) => {
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
  const options = {
    ...rest,
    css: css`
    ${userCss}
    color: ${data.site.siteMetadata.theme.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: inital;
    }
  `
  };
  if (outside) {
    return (
      <a {...options} target="_blank" href={to}>
        {children}
      </a>
    );
  }
  return (
    <Link {...options} to={to}>
      {children}
    </Link>
  );
};
