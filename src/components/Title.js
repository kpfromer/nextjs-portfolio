import React from 'react';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import { useStaticQuery, graphql } from 'gatsby';
import breakpoints from '../utils/breakpoints';

export default ({ children, subtitle, slug }) => {
  const data = useStaticQuery(
    graphql`
      {
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
  const hook = !!slug ? { id: slug } : {};
  return (
    <div
      css={css`
        width: 100%;
        padding-bottom: ${rhythm(1)};

        ${breakpoints.regular} {
          padding-top: ${rhythm(2)};
          padding-bottom: ${rhythm(2)};
        }
      `}
    >
      {/* TODO: change fontsize to be dynamic */}
      <div
        css={css`
          position: relative;
          &:before {
            position: absolute;
            content: '';
            width: 120px;
            height: 6px;
            left: 0px;
            bottom: -20px;
            background-color: ${data.site.siteMetadata.theme.primary};
          }
        `}
      >
        <h3
          css={css`
            font-size: 50px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: -0.5px;
            line-height: 1;
            margin: 0;
          `}
          {...hook}
        >
          {children}
        </h3>
        {!!subtitle && (
          <span
            css={css`
              font-size: 16px;
            `}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
