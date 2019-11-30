import React from 'react';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            firstName
            lastName
          }
        }
      }
    }
  `);
  const { author } = data.site.siteMetadata;

  return (
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
        © Copyright 2019 {author.firstName} {author.lastName}. All Rights are Reserved.
      </p>
    </div>
  );
};
