import React from 'react';
import { graphql } from 'gatsby';
import About from '../components/layout/About';
import Landing from '../components/layout/Landing';
import Skills from '../components/layout/Skills';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Contact from '../components/layout/Contact';

export default ({ data }) => (
  <div>
    <SEO />
    <div>
      <Landing />
      <About />
      <Skills />
      <Contact />
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
