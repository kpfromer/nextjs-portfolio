import React from 'react';
import { Link } from '../Link';
import { Title } from '../Title';
import { Section } from '../Section';
import { Box, BoxProps, Button, Text } from 'rebass';
import { Separator, WorkExperience } from '../WorkExperience';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Experience: React.FC<Omit<BoxProps, 'css'>> = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        work: allExperienceYaml(filter: { type: { eq: "work" } }) {
          nodes {
            companyName
            title
            location
            content
          }
        }

        startup: allExperienceYaml(filter: { type: { eq: "startup" } }) {
          nodes {
            companyName
            title
            location
            content
          }
        }

        club: allExperienceYaml(filter: { type: { eq: "club" } }) {
          nodes {
            companyName
            title
            location
            content
          }
        }
      }
    `
  );
  return (
    <Section {...props}>
      <Title>Experience</Title>

      <Button
        mt={3}
        fontSize={3}
        as="a"
        href="https://drive.google.com/file/d/1KUxBSQwj87LBoHmsuRAyPgfN6F6oo5kR/view?usp=sharing"
        target="_blank"
      >
        Download Resume
      </Button>

      <Separator my={4}>Work Experience</Separator>
      {data.work.nodes.map((node: any, index: number) => (
        <WorkExperience
          key={index}
          companyName={node.companyName}
          title={node.title}
          location={node.location}
        >
          {node.content !== null && <MDXRenderer>{node.content}</MDXRenderer>}
        </WorkExperience>
      ))}
      {/* TODO: add once ready */}
      {/* <Separator my={4}>Startup Experience</Separator>
      {data.startup.nodes.map((node: any, index: number) => (
        <WorkExperience
          key={index}
          companyName={node.companyName}
          title={node.title}
          location={node.location}
        >
          {node.content !== null && <MDXRenderer>{node.content}</MDXRenderer>}
        </WorkExperience>
      ))} */}
      <Separator my={4}>Clubs</Separator>
      {data.club.nodes.map((node: any, index: number) => (
        <WorkExperience
          key={index}
          companyName={node.companyName}
          title={node.title}
          location={node.location}
        >
          {node.content !== null && <MDXRenderer>{node.content}</MDXRenderer>}
        </WorkExperience>
      ))}
    </Section>
  );
};

export default Experience;
