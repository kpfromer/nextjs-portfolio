import React from 'react';
import { css } from '@emotion/core';
import Title from '../Title';
import Section from '../Section';
import { rhythm } from '../../utils/typography';
import breakpoints from '../../utils/breakpoints';
import { useStaticQuery, graphql } from 'gatsby';

const labelStyle = css`
  font-weight: 700;
`;

const inputStyle = css`
  background-color: #f6f7fd;
  color: rgba(17, 51, 56, 0.73);
  border: 1px solid rgba(3, 54, 61, 0.25);
  border-radius: 3px;
  font-size: ${rhythm(0.5)};
  margin-bottom: ${rhythm(1)};
  display: block;
  width: 100%;
  ${breakpoints.regular} {
    max-width: 700px;
  }
`;

export default () => {
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
    <Section>
      <Title title="Contact" />
      <form action="https://formspree.io/mdokobow" method="POST">
        <label css={labelStyle}>Your email:</label>
        <input css={inputStyle} type="email" name="_replyto" required />

        <label css={labelStyle}>Your message:</label>
        <textarea
          css={css`
            ${inputStyle}
            height: 150px;
          `}
          name="message"
          required
        />

        <input css={inputStyle} type="text" name="_gotcha" style={{ display: 'none' }} />

        <button
          type="submit"
          css={css`
            background-color: ${data.site.siteMetadata.theme.primary};
            border: none;
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
          Send
        </button>
      </form>
    </Section>
  );
};
