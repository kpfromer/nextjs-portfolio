import React from 'react';
import About from '../components/layout/About';
import Landing from '../components/layout/Landing';
import Skills from '../components/layout/Skills';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import Contact from '../components/layout/Contact';
import Projects from '../components/layout/Projects';
import BlogPosts from '../components/layout/BlogPosts';
import { Box } from 'rebass';

export default () => (
  <div>
    <SEO title="Main" />
    <Box>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <BlogPosts />
      <Contact />
    </Box>
    <Footer />
  </div>
);
