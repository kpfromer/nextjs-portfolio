import React from 'react';
import { css } from '@emotion/core';
import breakpoints from '../../utils/breakpoints';
import Title from '../Title';
import Section from '../Section';
import { useStaticQuery, graphql } from 'gatsby';
import Project from '../Project';

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

      <div
        css={css`
          display: flex;
          flex-direction: column;
          ${breakpoints.regular} {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}
      >
        <Project
          title="nestjs-typegoose"
          description="An open-source library that connects nestjs (a backend TypeScript framework) with typegoose (TypeScript wrapper for mongoose)."
          // TODO: tags
          src={data.nestjsTypegoose.childImageSharp.fluid}
          github="https://github.com/kpfromer/nestjs-typegoose"
        />
        <Project
          title="csvtasks"
          description="A tool that syncs spreedsheet data with google tasks."
          src={data.csvTasks.childImageSharp.fluid}
          github="https://github.com/kpfromer/csvtasks"
        />
        <Project
          title="Silent Auction"
          description="Responsive web application written National Honor Society used
          by parents and students to bid on charity items."
          src={data.silentAuction.childImageSharp.fluid}
          github="https://github.com/fairviewhs/silent-auction-react"
        />
        <Project
          title="Movie Chooser"
          description="A web app that allows for people to add movies that they want to watch on movie night."
          src={data.movieChooser.childImageSharp.fluid}
          github="https://github.com/kpfromer/movie-chooser-backend"
        />
      </div>
    </Section>
  );
};
