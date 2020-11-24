import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Title } from '../common/Title';
import { Section } from '../common/Section';
import { BoxProps } from 'rebass';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const About: React.FC<Omit<BoxProps, 'css'>> = (props) => {
  const data = useStaticQuery<GatsbyTypes.AboutContentQuery>(
    graphql`
      query AboutContent {
        content: file(relativePath: { eq: "about.mdx" }) {
          childMdx {
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
