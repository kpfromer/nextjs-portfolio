import React from 'react';
import { graphql } from 'gatsby';
import About from '../components/About';
import Landing from '../components/Landing';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default ({ data }) => (
  <div>
    <SEO />
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
