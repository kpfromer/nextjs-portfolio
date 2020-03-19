import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import SEO from '../components/SEO';
import Layout from '../components/BlogLayout';
import Link from '../components/Link';
import { scale, rhythm } from '../utils/typography';

import 'katex/dist/katex.min.css';

export default ({ data, location, pageContext }) => {
  const post = data.markdownRemark;
  console.log(pageContext);
  const { previous, next } = pageContext;
  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1)
            }}
          >
            {post.frontmatter.date} • {post.fields.readingTime.text}
          </p>
        </header>
        <section
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
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        theme {
          primary
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        # description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
