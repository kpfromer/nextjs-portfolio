import React from 'react';
import { Title } from '../Title';
import { Section } from '../Section';
import { useStaticQuery, graphql } from 'gatsby';
import { List } from '../List';
import { Project } from '../Project';

interface Project {
  title: string;
  dates: string;
  image: any;
  description: string;
  github: string;
}

export default () => {
  const {
    allProjectsJson: { nodes: projects }
  } = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          description
          github
          title
          dates
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Section>
      <Title>Projects</Title>
      <List>
        {projects.map((project: Project) => (
          <Project key={project.title} {...project} />
        ))}
      </List>
    </Section>
  );
};
