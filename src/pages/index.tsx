import { GatsbyPage } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import { Home } from 'src/components/Home';
import { Footer } from '../components/common/layout/Footer';

const HomePage: GatsbyPage = () => {
  return (
    <>
      <GatsbySeo title="Home" />
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;
