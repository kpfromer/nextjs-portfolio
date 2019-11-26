import React from 'react';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

export default () => (
  <div
    css={css`
      display: flex;
      background-color: #041230;
      padding: 50px 0;
    `}
  >
    <p
      css={css`
        margin: auto 0;
        color: #fff;
        padding-left: ${rhythm(1)};
      `}
    >
      © Copyright 2019 Kyle Pfromer. All Rights are Reserved.
    </p>
  </div>
);
