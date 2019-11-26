import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import About from '../components/About';
import Landing from '../components/Landing';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default ({ data }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Kyle Pfromer</title>
    </Helmet>
    <div>
      <Landing />
      <About />
      <Skills />
    </div>
    <Footer />
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        firstName
        lastName
      }
    }
  }
`;
