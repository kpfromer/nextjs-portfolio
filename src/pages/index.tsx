import { Footer } from '@components/common/layout/Footer';
import { Home } from '@components/Home';
import { GatsbyPage } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';

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
