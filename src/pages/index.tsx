import React from 'react';
import { Footer } from '../components/Footer';
import { SEO } from '../components/common/SEO';
import { Home } from 'src/components/Home';
import { GatsbyPage } from 'gatsby';

const HomePage: GatsbyPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;
