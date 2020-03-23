import React from 'react';
import { graphql } from 'gatsby';
import Link from '../components/Link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import Section from '../components/Section';

import 'katex/dist/katex.min.css';

const Container = styled.div`
  padding-top: 50px;
  margin-bottom: 100px;
`;

const Details = styled.div`
  p {
    text-transform: uppercase;
    font-size: 13px;
  }
`;

const Title = styled.h1`
  margin-bottom: 22px;
  font-weight: 700;

  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
`;

const Body = styled.div`
  p {
    margin-bottom: 20px;
    text-align: justify;
  }

  blockquote {
    color: #000;
    font-style: italic;
    position: relative;
    padding-left: 25px;
    margin-bottom: 20px;

    &:before {
      position: absolute;
      content: '';
      width: 2px;
      height: 100%;
      left: 0px;
      top: 0px;
    }
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: inital;
    }
  }

  // Following is github like markdown theme

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
  }

  h1,
  h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.875em;
  }

  h6 {
    font-size: 0.85em;
    color: #6a737d;
  }
`;

const Tags = styled.div`
  margin-bottom: 45px;
  display: flex;
  align-items: center;
  padding-top: 19px;

  span {
    display: inline-block;
    color: #000;
    padding-right: 30px;
    font-family: 'Montserrat';
    font-weight: 500;
  }

  ul {
    margin: 0px;
    list-style-type: none;
    display: inline;
  }
`;

const Tag = styled.li`
  margin: 0px 1px 5px 0px;
  display: inline-block;

  &::last-child {
    margin-bottom: 0px;
  }
`;

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        image={`${data.site.siteMetadata.siteUrl}${post.frontmatter.thumbnail.childImageSharp.fluid.src}`}
      />
      <Section>
        <Container>
          <Link
            to="/#blog-posts"
            rel="back"
            css={css`
              display: block;
              margin-bottom: 20px;
            `}
          >
            ← Go Back
          </Link>

          <Img
            //todo: ratio maintain
            css={css`
              object-fit: cover;
              max-height: 50vh;
              margin-bottom: 42px; // todo: rythm
              min-width: 100%;
            `}
            fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
          />
          <div>
            <Details>
              <p>
                {/* TODO: add category page */}
                {post.frontmatter.date} • {post.fields.readingTime.text} • IN {post.frontmatter.category}
              </p>
            </Details>
            <Title>{post.frontmatter.title}</Title>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
          <Body
            css={css`
              a {
                color: ${data.site.siteMetadata.theme.primary};
              }
            `}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          {/* TODO: add tag page */}
          {/* {!!post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <Tags>
            <span>Tags:</span>
            <ul>
              {post.frontmatter.tags.map(tag => (
                <Tag>
                  <Link
                    css={css`
                      text-decoration: none;
                      color: #000;
                      display: inline-block;
                      padding: 5px 20px;
                      font-size: 13px;
                      border: 1px solid rgba(0, 0, 0, 0.2);
                      transition: all 0.3s ease;

                      &:hover {
                        color: #fff;
                        background-color: #000;
                        text-decoration: none;
                      }
                    `}
                    to={`/blog/tag/${tag}`}
                  >
                    {tag}
                  </Link>
                </Tag>
              ))}
            </ul>
          </Tags>
        )} */}
        </Container>
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
      </Section>
    </>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
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
        tags
        category
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
