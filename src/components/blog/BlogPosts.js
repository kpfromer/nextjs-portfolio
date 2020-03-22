import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Title from '../Title';
import Section from '../Section';
import BlogSummary from './BlogSummary';
import breakpoints from '../../utils/breakpoints';
import { rhythm } from '../../utils/typography';

const Posts = styled.ul`
  margin: 0;
  list-style-type: none;

  display: flex;
  flex-direction: column;
  ${breakpoints.regular} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Post = styled.li`
  margin: 0px 0px 50px 0px;
  margin-bottom: 10px;
  flex-basis: 100%;

  ${breakpoints.regular} {
    margin-bottom: 0;
    margin: ${rhythm(0.75)};
    width: 33.3333%;
    flex-grow: 1;
    max-width: 333px;
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);
  return (
    <Section
      css={css`
        background-color: #f6f7fd;
      `}
    >
      <Title slug="blog-posts">Blog Posts</Title>
      <Posts>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post>
            <BlogSummary
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              to={node.fields.slug}
              image={node.frontmatter.thumbnail}
            />
          </Post>
        ))}
      </Posts>
    </Section>
  );
};
