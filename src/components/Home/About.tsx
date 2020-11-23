import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Title } from '../common/Title';
import { Section } from '../Section';
import { BoxProps } from 'rebass';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const About: React.FC<Omit<BoxProps, 'css'>> = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        content: file(relativePath: { eq: "about.mdx" }) {
          childMdx {
            children {
              id
            }
            rawBody
            body
          }
        }
      }
    `,
  );

  const { content } = data;

  return (
    <Section {...props}>
      <Title>About</Title>
      <MDXRenderer>{content.childMdx.body}</MDXRenderer>
    </Section>
  );
};
export default About;
