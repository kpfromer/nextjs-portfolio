import React from 'react';
import { Title } from '../common/Title';
import { Section } from '../Section';
import { useStaticQuery, graphql } from 'gatsby';
import { List } from '../List';
import { Project } from '../Project';
import { BoxProps } from 'rebass';

interface Project {
  title: string;
  dates: string;
  image: any;
  description: string;
  github: string;
}

const Projects: React.FC<Omit<BoxProps, 'css'>> = (props) => {
  const {
    allProjectsJson: { nodes: projects },
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
    <Section {...props}>
      <Title>Projects</Title>
      <List>
        {projects.map((project: Project) => (
          <Project key={project.title} {...project} />
        ))}
      </List>
    </Section>
  );
};

export default Projects;
