import React from 'react';
import { Title } from '../Title';
import { Section } from '../Section';
import { useStaticQuery, graphql } from 'gatsby';
import { List } from '../List';
import { Project } from '../Project';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      silentAuction: file(relativePath: { eq: "projects/silent-auction.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      movieChooser: file(relativePath: { eq: "projects/movie-chooser.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      csvTasks: file(relativePath: { eq: "projects/csv-tasks.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nestjsTypegoose: file(relativePath: { eq: "projects/nestjs-typegoose.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Section>
      <Title>Projects</Title>

      <List>
        <Project
          title="nestjs-typegoose"
          dates="April 2018 - Present"
          description="An open-source library that connects nestjs (a backend TypeScript framework) with typegoose (TypeScript wrapper for mongoose)."
          // TODO: tags
          image={data.nestjsTypegoose}
          github="https://github.com/kpfromer/nestjs-typegoose"
        />
        <Project
          title="csvtasks"
          dates="February 2020 - Present"
          description="A tool that syncs spreedsheet data with google tasks."
          image={data.csvTasks}
          github="https://github.com/kpfromer/csvtasks"
        />
        <Project
          title="Silent Auction"
          dates="February 2019"
          description="Responsive web application written National Honor Society used
          by parents and students to bid on charity items."
          image={data.silentAuction}
          github="https://github.com/fairviewhs/silent-auction-react"
        />
        <Project
          title="Movie Chooser"
          dates="September 2019 - November 2019"
          description="A web app that allows for people to add movies that they want to watch on movie night."
          image={data.movieChooser}
          github="https://github.com/kpfromer/movie-chooser-backend"
        />
      </List>
    </Section>
  );
};
