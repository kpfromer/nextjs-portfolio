import React from 'react';
import Link from './Link';
import { css } from '@emotion/core';
import { rhythm, scale } from '../utils/typography';
import breakpoints from '../utils/breakpoints';
import { useStaticQuery, graphql } from 'gatsby';

const menuPadding = css`
  text-align: center;
  ${breakpoints.regular} {
    padding-left: ${rhythm(0.25)};
    padding-right: ${rhythm(0.25)};
  }
`;

const menuItem = css`
  ${menuPadding}
  list-style: none;
  margin: 0;
`;

const titleStyle = css`
  text-align: center;
  ${breakpoints.regular} {
    text-align: left;
  }
`;

const socialLink = css`
  padding-left: ${rhythm(0.25)};
  padding-right: ${rhythm(0.25)};
  ${breakpoints.regular} {
    padding-left: ${rhythm(0.5)};
    padding-right: ${rhythm(0.5)};
  }
`;

export default ({ location, title = "Kyle Pfromer's Blog", children }) => {
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
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  if (location.pathname === rootPath) {
    header = (
      <h1
        css={titleStyle}
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to="/blog"
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        css={titleStyle}
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to="/blog"
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
      css={css`
        a {
          color: ${data.site.siteMetadata.theme.primary};
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
          &:visited {
            color: inital;
          }
        }
      `}
    >
      <header
        css={css`
          display: flex;
          flex-direction: column;
          margin-bottom: ${rhythm(1)};
          ${breakpoints.regular} {
            flex-direction: row;
            margin-bottom: 0;
          }
        `}
      >
        {header}
        {/* Spacing element */}
        <div
          css={css`
            flex: 1;
          `}
        />

        <ul
          css={css`
            display: flex;
            flex-direction: column;
            margin: 0;
            ${breakpoints.regular} {
              flex-direction: row;
            }
          `}
        >
          <li css={menuItem}>
            <Link to="/">Main Site</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <hr
        style={{
          marginBottom: rhythm(1)
        }}
      />
      <footer>
        {/* TODO: extract social */}
        <Link css={socialLink} outside to="http://github.com/kpfromer">
          github
        </Link>
        •
        <Link css={socialLink} outside to="https://www.linkedin.com/in/kyle-pfromer/">
          linkedin
        </Link>
        •
        <Link css={socialLink} outside to="https://stackoverflow.com/users/3448490/kyle-pfromer">
          stack overflow
        </Link>
      </footer>
    </div>
  );
};
