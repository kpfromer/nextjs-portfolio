import React from 'react';
import { css } from '@emotion/core';
import Sidenav from '../components/Sidenav';
import About from '../components/About';
import Landing from '../components/Landing';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default ({ data }) => (
  <div>
    {/* <Sidenav /> */}
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
