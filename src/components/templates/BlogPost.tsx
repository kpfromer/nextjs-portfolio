import React from 'react';
import { GatsbyPage, graphql } from 'gatsby';
import { Link } from '../common/Link';
import Img from 'gatsby-image';
import { SEO } from '../common/SEO';
import { Section } from '../common/Section';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Flex, Heading, Text } from 'rebass';

import 'katex/dist/katex.min.css';

interface PageContext {
  previous: {
    frontmatter: { title: string };
    fields: { blogPath: string };
  };
  next: {
    frontmatter: { title: string };
    fields: { blogPath: string };
  };
}

const BlogPost: GatsbyPage<GatsbyTypes.BlogPostByIdQuery, PageContext> = ({
  data,
  pageContext,
}) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    mdx: {
      body,
      frontmatter: { title, thumbnail, date, category },
      fields: {
        readingTime: { text: readingTime },
      },
    },
  } = data;
  const { previous, next } = pageContext;
  return (
    <>
      <SEO title={title} image={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`} />
      <Section>
        <Box mt={3}>
          <Link to="/#blog-posts" rel="back" sx={{ display: 'block' }} mb={3}>
            ← Go Back
          </Link>

          <Box mb={3}>
            <Img
              style={{
                objectFit: 'cover',
                maxHeight: '50vh',
                minWidth: '100%',
              }}
              fluid={thumbnail.childImageSharp.fluid}
            />
          </Box>

          <Box>
            <Text as="small" sx={{ textTransform: 'uppercase' }}>
              {/* TODO: add category page */}
              {date} • {readingTime} • IN {category}
            </Text>
            <Heading
              fontSize={6}
              sx={{
                borderBottom: '1px solid #eaecef',
              }}
              mt={2}
              mb={3}
            >
              {title}
            </Heading>
          </Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>

        <Box as="nav">
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box>
              {previous && (
                <Link to={previous.fields.blogPath} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </Box>
            <Box>
              {next && (
                <Link to={next.fields.blogPath} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </Box>
          </Flex>
        </Box>
      </Section>
    </>
  );
};

export const query = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }, frontmatter: { hidden: { eq: false } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        # tags
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

export default BlogPost;