import React from 'react';
import css from '@emotion/css';
import Link from './Link';
import breakpoints from '../utils/breakpoints';
import { rhythm } from '../utils/typography';

const menuPadding = css`
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

export default () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      ${breakpoints.regular} {
        flex-direction: row;
        padding-top: ${rhythm(0.5)};
        padding-bottom: ${rhythm(0.5)};
      }
    `}
  >
    <Link
      to="/"
      css={css`
        flex: 1;
        color: #000;
        &:hover {
          text-decoration: none;
        }
      `}
    >
      <h2>Kyle Pfromer's Blog</h2>
    </Link>
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
        <Link to="/">Home</Link>
      </li>
      <li css={menuItem}>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
);
