import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import Section from '../Section';
import { List, ListItem, HeaderImage, Body, Dates, Title as ListTitle } from '../List';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
              blogPath
            }
            excerpt
          }
        }
      }
    }
  `);
  return (
    <Section bg="backgroundAlt">
      <Title slug="blog-posts">Blog Posts</Title>
      <List>
        {data.allMdx.edges.map(({ node: { frontmatter: { title, date, thumbnail }, fields: { blogPath } } }) => (
          <ListItem key={blogPath}>
            {!!thumbnail && <HeaderImage to={blogPath} fluid={thumbnail.childImageSharp.fluid} />}
            <Body>
              <Dates>{date}</Dates>
              <ListTitle to={blogPath} fontSize={3}>
                {title}
              </ListTitle>
            </Body>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
