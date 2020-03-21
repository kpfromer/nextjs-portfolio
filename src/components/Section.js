import React from 'react';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import breakpoints from '../utils/breakpoints';

export default ({ children, css: userCss, ...rest }) => (
  <div
    css={css`
      ${userCss}
      padding: ${rhythm(0.5)};
    `}
    {...rest}
  >
    <div
      css={css`
        margin: auto;
        ${breakpoints.large} {
          width: 80%;
        }
        ${breakpoints.reallylarge} {
          max-width: 1000px;
        }
      `}
    >
      {children}
    </div>
  </div>
);
